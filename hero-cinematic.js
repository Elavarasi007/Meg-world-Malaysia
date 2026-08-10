/* ==========================================================
   HERO CINEMATIC ENGINE — rebuilt from scratch
   Meg World Technologies

   Scope: drives ONLY the existing Hero section's background
   video / particle depth / content parallax. It never touches
   the hero's HTML structure, typography, spacing, colors or
   button styles — only transforms, video.currentTime and a
   couple of class toggles.

   Why this version is smooth where the old one wasn't:
   the source video is now encoded with every frame as an
   independent keyframe (all-intra), so seeking to ANY frame
   — forward or backward — is a cheap, instant, artifact-free
   decode instead of a walk through a GOP. On top of that:

     1. Scroll progress is read with getBoundingClientRect()
        inside a single rAF loop — no scroll-event listeners,
        so there is nothing for the browser to throttle/queue.
     2. The eased progress value is smoothed every frame, but
        the video is only ever seeked to a REAL frame boundary,
        and only when that frame index actually changes — so
        we never ask the decoder to do redundant work.
     3. A slow idle drift ("floating in the clouds") runs at
        rest and fades out smoothly as the user starts flying
        forward, instead of the hero sitting dead-static pre-scroll.
     4. Everything lands in ONE transform per element per frame
        (translate3d + scale), so the compositor only ever needs
        a single GPU layer update — no competing animations.
========================================================== */

(() => {

  const stage    = document.getElementById("heroScrollStage");
  const hero     = document.querySelector(".hero.hero--cinematic");
  const video    = document.getElementById("heroVideo");
  const particleLayer = document.getElementById("heroParticles");
  const headline = document.querySelector(".hero--cinematic .hero-content h1");
  const eyebrow  = document.querySelector(".hero--cinematic .hero-content .eyebrow");
  const paragraph = document.querySelector(".hero--cinematic .hero-content p");
  const actions  = document.querySelector(".hero--cinematic .hero-actions");
  const header   = document.querySelector("header");

  // Bail out quietly on any page that doesn't have this hero.
  if (!stage || !hero || !video) return;

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isCoarsePointer =
    window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;

  /* ==========================================
     1. Header offset — keeps the pinned hero
        sitting just below the sticky header at
        every breakpoint.
  ========================================== */

  function syncHeaderOffset() {
    if (!header) return;
    document.documentElement.style.setProperty(
      "--header-offset",
      `${header.offsetHeight}px`
    );
  }

  syncHeaderOffset();
  window.addEventListener("resize", syncHeaderOffset, { passive: true });

  if (prefersReducedMotion) {
    // Reduced-motion users get the static CSS fallback: first
    // frame visible, content visible, no scrub / no drift.
    video.currentTime = 0;
    video.classList.add("is-ready");
    return;
  }

  /* ==========================================
     2. Floating mist particles (generated once)
  ========================================== */

  function buildParticles(count) {
    if (!particleLayer) return;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "hero-particle";

      const size = 2 + Math.random() * 3;      // 2–5px
      const left = Math.random() * 100;        // 0–100%
      const top = 20 + Math.random() * 70;      // 20–90%
      const duration = 7 + Math.random() * 9;   // 7–16s, slow + varied
      const delay = Math.random() * 10;         // 0–10s

      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${left}%`;
      p.style.top = `${top}%`;
      p.style.animationDuration = `${duration}s`;
      p.style.animationDelay = `${delay}s`;

      frag.appendChild(p);
    }

    particleLayer.appendChild(frag);
  }

  buildParticles(isCoarsePointer ? 12 : 22);

  /* ==========================================
     3. Video readiness
        We hold the video paused on frame 0 and
        drive currentTime by hand. We don't start
        the scrub loop's video-seeking until the
        browser confirms it can seek freely.
  ========================================== */

  let videoReady = false;
  let videoDuration = 8;   // fallback until metadata loads
  let totalFrames = 192;   // fallback; refined once metadata loads
  const FPS = 24;          // matches the source export

  function armVideo() {
    if (!video.paused) video.pause();
    video.currentTime = 0;
    videoReady = true;
    // Reveal the video only once a real frame is actually decoded
    // and on screen — avoids any flash of a black/empty frame.
    video.classList.add("is-ready");
  }

  video.addEventListener("loadedmetadata", () => {
    if (video.duration && isFinite(video.duration)) {
      videoDuration = video.duration;
      totalFrames = Math.max(1, Math.round(videoDuration * FPS));
    }
  });

  if (video.readyState >= 2) {
    armVideo();
  } else {
    video.addEventListener("loadeddata", armVideo, { once: true });
  }

  // If the video can't be decoded at all, fail gracefully: reveal
  // the static hero content instead of leaving it mid-fade.
  video.addEventListener("error", () => {
    videoReady = false;
    hero.classList.add("hero-video-error");
  });

  /* ==========================================
     4. Scroll progress (no scroll listeners —
        read once per animation frame instead)
  ========================================== */

  function computeScrollProgress() {
    const rect = stage.getBoundingClientRect();
    const scrollableDistance = stage.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return 0;

    const scrolled = -rect.top;
    return Math.min(1, Math.max(0, scrolled / scrollableDistance));
  }

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  /* ==========================================
     5. Mouse parallax (desktop only)
  ========================================== */

  let mouseTargetX = 0, mouseTargetY = 0;
  let mouseCurrentX = 0, mouseCurrentY = 0;

  if (!isCoarsePointer) {
    window.addEventListener("pointermove", (e) => {
      mouseTargetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseTargetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  // Every piece of hero copy uses the same handoff: its CSS
  // load-in keyframe owns `opacity`/`transform` until it finishes
  // (fill-mode: forwards keeps overriding inline styles otherwise),
  // then `.anim-done` sets animation:none so this loop can drive
  // scroll-linked fade/drift on it instead.
  [eyebrow, headline, paragraph, actions].forEach((el) => {
    if (!el) return;
    el.addEventListener("animationend", () => {
      el.classList.add("anim-done");
    }, { once: true });
  });

  /* ==========================================
     6. Only run the loop while the hero stage
        is actually on screen.
  ========================================== */

  let heroInView = true;
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { heroInView = e.isIntersecting; }),
    { threshold: 0 }
  );
  observer.observe(stage);

  /* ==========================================
     7. Main loop — one rAF driving scroll-scrub,
        idle drift and mouse parallax as a single
        composited transform per element.
  ========================================== */

  const lerp = (a, b, t) => a + (b - a) * t;

  let scrubTarget = 0;
  let scrubCurrent = 0;
  let lastFrameIndex = -1;
  let idleClock = 0;
  let lastTimestamp = performance.now();

  function tick(now) {
    requestAnimationFrame(tick);

    const dt = Math.min(0.05, (now - lastTimestamp) / 1000); // clamp big tab-switch gaps
    lastTimestamp = now;

    if (!heroInView) return;

    idleClock += dt;

    // ---- Scroll scrub, eased toward target ----
    scrubTarget = computeScrollProgress();
    scrubCurrent = lerp(scrubCurrent, scrubTarget, 0.1);
    if (Math.abs(scrubCurrent - scrubTarget) < 0.0005) scrubCurrent = scrubTarget;

    const eased = easeInOutCubic(scrubCurrent);

    // Map eased progress to a REAL frame of the (all-intra) video,
    // and only touch currentTime when the target frame changes —
    // every seek this fires is a clean single-frame decode.
    if (videoReady) {
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.round(eased * (totalFrames - 1))
      );
      if (frameIndex !== lastFrameIndex) {
        lastFrameIndex = frameIndex;
        video.currentTime = frameIndex / FPS;
      }
    }

    // ---- Idle "floating in the clouds" drift, fades out as the
    //      flight (scroll) engages, and returns near the top ----
    const idleStrength = 1 - eased;               // 1 at rest → 0 mid-flight
    const idleScale = 1 + Math.sin(idleClock * 0.35) * 0.012 * idleStrength;
    const idlePanX  = Math.sin(idleClock * 0.22) * 10 * idleStrength;
    const idlePanY  = Math.cos(idleClock * 0.17) * 7  * idleStrength;

    // ---- Scroll-driven cinematic push-in (gentle zoom toward
    //      the buildings as the drone flies forward) ----
    const scrollZoom = 1 + eased * 0.16;

    // ---- Mouse parallax (skipped on touch/coarse pointers) ----
    if (!isCoarsePointer) {
      mouseCurrentX = lerp(mouseCurrentX, mouseTargetX, 0.06);
      mouseCurrentY = lerp(mouseCurrentY, mouseTargetY, 0.06);
    }
    const parallaxX = isCoarsePointer ? 0 : mouseCurrentX * 14;
    const parallaxY = isCoarsePointer ? 0 : mouseCurrentY * 10;

    video.style.transform =
      `translate3d(${(idlePanX + parallaxX).toFixed(2)}px, ${(idlePanY + parallaxY).toFixed(2)}px, 0) scale(${(idleScale * scrollZoom).toFixed(4)})`;

    if (particleLayer) {
      const particleX = (idlePanX * 1.6) + (isCoarsePointer ? 0 : mouseCurrentX * 24);
      const particleY = (idlePanY * 1.6) + (isCoarsePointer ? 0 : mouseCurrentY * 16);
      particleLayer.style.transform = `translate3d(${particleX.toFixed(2)}px, ${particleY.toFixed(2)}px, 0)`;
    }

    // Content: subtle drift + a soft parallax fade/lift as the
    // camera moves forward, so the copy recedes gracefully rather
    // than just sitting flat on top of the flight.
    const contentLift = eased * 26;
    const contentFade = 1 - eased * 0.9;

    const mx = isCoarsePointer ? 0 : mouseCurrentX;
    const my = isCoarsePointer ? 0 : mouseCurrentY;

    if (headline && headline.classList.contains("anim-done")) {
      headline.style.transform =
        `translate3d(${(mx * 6).toFixed(2)}px, ${(my * 4 - contentLift).toFixed(2)}px, 0)`;
      headline.style.opacity = contentFade;
    }
    if (actions && actions.classList.contains("anim-done")) {
      actions.style.transform =
        `translate3d(${(mx * 10).toFixed(2)}px, ${(my * 6 - contentLift).toFixed(2)}px, 0)`;
      actions.style.opacity = contentFade;
    }
    if (eyebrow && eyebrow.classList.contains("anim-done")) {
      eyebrow.style.opacity = contentFade;
    }
    if (paragraph && paragraph.classList.contains("anim-done")) {
      paragraph.style.transform = `translate3d(0, ${(-contentLift * 0.6).toFixed(2)}px, 0)`;
      paragraph.style.opacity = contentFade;
    }
  }

  requestAnimationFrame(tick);

})();
