/* ==========================================================
   SERVICES PAGE JS
   Only what the Services page actually needs: header scroll state,
   mobile menu open/close, scroll-reveal animation, and the FAQ
   preview accordion.
   ========================================================== */

/* ---------- HEADER SCROLL ---------- */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ---------- MOBILE MENU ---------- */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
}

if (burgerBtn && mobileMenu && overlay && mobileClose) {
  burgerBtn.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ---------- SCROLL REVEAL ---------- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ---------- FAQ PREVIEW ACCORDION ---------- */
const faqPreview = document.getElementById('faqPreview');

if (faqPreview) {
  faqPreview.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-q');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqPreview.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}
