/* =====================================================================
   MEG WORLD TECHNOLOGIES — PACKAGES PAGE
   Package data is the source of truth (transcribed from the official
   Malaysia pricing reference). Prices, features and delivery times are
   preserved exactly — do not edit values here without updating against
   the official reference first.
===================================================================== */

const PHONE_TEL = "+919962689777";      // from footer contact info
const PHONE_DISPLAY = "+60 11-2345 6789";

const PACKAGE_DATA = [
  {
    id: "svc-website",
    name: "Website Development",
    icon: "fa-globe",
    tagline: "Responsive • SEO-Friendly • Modern Design",
    monthly: false,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 799",
        features:["Up to 5 Pages","Mobile Responsive","Contact Form","Basic SEO","1 Round Revision","7 Days Delivery"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 1,499",
        features:["Up to 10 Pages","CMS (WordPress)","Mobile Responsive","Basic SEO","WhatsApp Integration","2 Round Revisions","10 Days Delivery"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 2,999", popular:true,
        features:["Up to 20 Pages","CMS + Blog","Advanced SEO","Speed Optimization","WhatsApp Live Chat","Social Media Integration","3 Round Revisions","15 Days Delivery"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 6,999",
        features:["Unlimited Pages","Custom Design","Advanced Features","API Integration","Multi-language","Priority Support","5 Round Revisions","20 Days Delivery"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  },
  {
    id: "svc-mobileapp",
    name: "Mobile App Development",
    icon: "fa-mobile-screen-button",
    tagline: "Android • iOS • Flutter • High Performance",
    monthly: false,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 2,999",
        features:["Basic App (Android or iOS)","Up to 5 Screens","Basic UI/UX","API Integration","1 Round Revision","15 Days Delivery"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 5,999",
        features:["Up to 15 Screens","Android + iOS","User Login & Register","Push Notifications","API Integration","2 Round Revisions","25 Days Delivery"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 7,999", popular:true,
        features:["Up to 30 Screens","Android + iOS","Admin Panel","Payment Gateway","Push Notifications","Analytics Integration","3 Round Revisions","35 Days Delivery"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 12,999",
        features:["Unlimited Screens","Advanced Features","Admin Dashboard","Third Party Integration","Secure & Scalable","Priority Support","5 Round Revisions","45 Days Delivery"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  },
  {
    id: "svc-software",
    name: "Software Development",
    icon: "fa-code",
    tagline: "Web Based Systems • Powerful • Scalable",
    monthly: false,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 3,999",
        features:["Basic Software","Single Module","User Management","Report (Basic)","15 Days Delivery"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 7,999",
        features:["Multi Module","Role Management","Advanced Reports","Data Export (Excel/PDF)","30 Days Delivery"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 14,999", popular:true,
        features:["Multi Module System","Workflow Management","Advanced Reports","API Integration","45 Days Delivery"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 19,999",
        features:["Enterprise Level System","Custom Features","Third Party Integrations","High Security","60 Days Delivery"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  },
  {
    id: "svc-marketing",
    name: "Digital Marketing",
    icon: "fa-bullhorn",
    tagline: "Grow Your Brand Online",
    monthly: true,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 499",
        features:["8 Social Media Posts","Basic SEO","1 Platform Management","Monthly Report"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 899",
        features:["12 Social Media Posts","SEO (On Page)","2 Platform Management","Basic Ads (FB/IG)","Monthly Report"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 1,199", popular:true,
        features:["16 Social Media Posts","SEO (On Page + Off Page)","3 Platform Management","Ads Management","Monthly Report"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 2,499",
        features:["20+ Social Media Posts","Advanced SEO","Ads (Google + Meta)","4+ Platform Management","Detailed Monthly Report"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  },
  {
    id: "svc-design",
    name: "Graphic Design",
    icon: "fa-palette",
    tagline: "Creative • Unique • Impactful",
    monthly: true,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 99",
        features:["5 Graphics","Social Media Designs","2 Revisions","2 Days Delivery"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 899",
        features:["15 Graphics","Social Media + Banners","3 Revisions","2 Days Delivery"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 499", popular:true,
        features:["30 Graphics","Social Media + Banners","Branding Support","4 Revisions","2 Days Delivery"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 1,199",
        features:["60+ Graphics","Social Media + Branding","Priority Support","Unlimited Revisions","1–2 Days Delivery"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  },
  {
    id: "svc-video",
    name: "Video Editing",
    icon: "fa-video",
    tagline: "Engaging • Creative • Professional",
    monthly: true,
    tiers: [
      { tier:"Starter", tagline:"Perfect for Startups", price:"RM 499",
        features:["4 Short Videos (Up to 1 Min)","Basic Transitions","Background Music","2 Days Delivery"] },
      { tier:"Professional", tagline:"Best for Growing Businesses", price:"RM 999",
        features:["8 Videos (Up to 2 Min)","Transitions & Effects","Text & Titles","3 Days Delivery"] },
      { tier:"Business", tagline:"Advanced for Business Growth", price:"RM 1,599", popular:true,
        features:["12 Videos (Up to 3 Min)","Premium Effects","Motion Graphics","3 Days Delivery"] },
      { tier:"Enterprise", tagline:"For Large Scale Business", price:"RM 2,499",
        features:["20 Videos (Up to 5 Min)","Premium Effects & Color","Motion Graphics + SFX","2–3 Days Delivery"] },
      { tier:"Custom", tagline:"Tailor Made Solution",
        features:["Tailor Made Solution","Built according to the business requirements"] }
    ]
  }
];

const FAQ_DATA = [
  { q:"Which package is best for my business?", a:"It depends on your scope and goals — Starter suits small projects, Professional and Business fit growing companies needing more features, and Enterprise fits larger, complex requirements. Talk to our team for tailored guidance." },
  { q:"Can I request a custom package?", a:"Yes. If a standard package doesn't fit, we can scope a custom solution based on your specific requirements, features and timeline. Use the \u201cGet a Custom Quote\u201d option to start." },
  { q:"Can I upgrade my package later?", a:"Yes, you can upgrade to a higher tier as your business needs grow. Our team will guide you through the additional scope and pricing involved." },
  { q:"What is included in the delivery timeline?", a:"Each package lists its delivery timeframe based on the defined scope. Timelines may vary slightly depending on content readiness and revision rounds." },
  { q:"How do I get started?", a:"Choose a package and click \u201cGet Started\u201d, or contact our team directly for a free consultation to discuss your requirements." }
];

/* ---------- helpers ---------- */
function tierClass(t){
  return "tier-" + t.toLowerCase();
}

function contactUrl(service, tier){
  return `contact.html?service=${encodeURIComponent(service)}&package=${encodeURIComponent(tier)}`;
}

/* ---------- render pricing matrix ---------- */
function packageCard(service, t){
  const isCustom = t.tier === "Custom";
  const cls = ["pkg-card", tierClass(t.tier)];
  if (t.popular) cls.push("popular");

  const priceHtml = isCustom
    ? `<div class="pkg-price pkg-price-custom">Get a Quote</div>`
    : `<div class="pkg-price">${t.price}${service.monthly ? '<span>/month</span>' : ''}</div>`;

  const featuresHtml = t.features.map(f => `<li><i class="fa-solid fa-check"></i>${f}</li>`).join("");

  const ctaLabel = isCustom ? "Get a Custom Quote" : "Get Started";
  const ctaHref = contactUrl(service.name, t.tier);
  const ctaBtnClass = isCustom ? "btn btn-primary pkg-cta" : "btn btn-outline pkg-cta";
  const callLabel = isCustom ? "Call Us" : "Call Now";

  return `<div class="${cls.join(' ')}">
    ${t.popular ? '<span class="pkg-badge">Popular Choice</span>' : ''}
    <div class="pkg-card-top">
      <span class="pkg-tier">${t.tier}</span>
      <span class="pkg-tagline">${t.tagline}</span>
    </div>
    ${priceHtml}
    <ul class="pkg-features">${featuresHtml}</ul>
    <a href="${ctaHref}" class="${ctaBtnClass}"><span>${ctaLabel}</span><i class="fa-solid fa-arrow-right"></i></a>
    <a href="tel:${PHONE_TEL}" class="pkg-call"><i class="fa-solid fa-phone"></i> ${callLabel}</a>
  </div>`;
}

function serviceSection(service){
  const cardsHtml = service.tiers.map(t => packageCard(service, t)).join("");
  return `<section class="pkg-service" id="${service.id}" data-service="${service.name}">
    <div class="container">
      <div class="pkg-service-head reveal">
        <div class="pkg-service-icon"><i class="fa-solid ${service.icon}"></i></div>
        <div>
          <h3>${service.name}</h3>
          <p>${service.tagline}</p>
          ${service.monthly ? '<span class="pkg-monthly-note"><i class="fa-solid fa-rotate"></i> Billed Monthly</span>' : ''}
        </div>
      </div>
      <div class="pkg-grid">${cardsHtml}</div>
    </div>
  </section>`;
}

function renderMatrix(){
  const el = document.getElementById("pkgMatrix");
  if (!el) return;
  el.innerHTML = PACKAGE_DATA.map(serviceSection).join("");
}

/* ---------- render FAQ preview ---------- */
function renderFaq(){
  const el = document.getElementById("pkgFaqList");
  if (!el) return;
  el.innerHTML = FAQ_DATA.map((f, i) => `
    <div class="pkg-faq-item${i === 0 ? " open" : ""}">
      <button class="pkg-faq-q">${f.q}<i class="fa-solid fa-plus"></i></button>
      <div class="pkg-faq-a" style="${i === 0 ? "max-height:240px" : ""}">
        <p>${f.a}</p>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".pkg-faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".pkg-faq-item");
      const answer = item.querySelector(".pkg-faq-a");
      const isOpen = item.classList.contains("open");

      el.querySelectorAll(".pkg-faq-item.open").forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".pkg-faq-a").style.maxHeight = "";
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = "";
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ---------- service tabs: click + scroll-spy ---------- */
function initTabs(){
  const tabs = Array.from(document.querySelectorAll(".pkg-tab"));
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      const targetId = tab.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const navWrap = document.querySelector(".pkg-nav-wrap");
        const offset = (navWrap ? navWrap.offsetHeight : 0) + 84;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  const sections = PACKAGE_DATA.map(s => document.getElementById(s.id)).filter(Boolean);
  if (!sections.length) return;

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tabs.forEach(t => t.classList.toggle("active", t.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: "-140px 0px -60% 0px", threshold: 0.1 });

  sections.forEach(sec => spy.observe(sec));
}

/* ---------- header scroll state ---------- */
function initNavbarScroll(){
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40));
}

/* ---------- mobile menu ---------- */
function initMobileMenu(){
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const mobileClose = document.getElementById("mobileClose");
  if (!burgerBtn || !mobileMenu || !overlay || !mobileClose) return;

  function openMenu(){ mobileMenu.classList.add("open"); overlay.classList.add("open"); }
  function closeMenu(){ mobileMenu.classList.remove("open"); overlay.classList.remove("open"); }

  burgerBtn.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
}

/* ---------- scroll reveal ---------- */
function initReveal(){
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderMatrix();
  renderFaq();
  initTabs();
  initNavbarScroll();
  initMobileMenu();
  initReveal();
});
