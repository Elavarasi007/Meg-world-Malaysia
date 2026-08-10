/* ==========================================================
   FAQ PAGE JS — Meg World Technologies
   Accordion + live search + category filter (client-side only)
========================================================== */

const faqData = [
  /* GENERAL */
  {cat:'general', q:'What does Meg World Technologies do?', a:'Meg World Technologies is a software development company that builds websites, mobile applications, custom software, digital marketing campaigns, graphic design and video content for businesses.'},
  {cat:'general', q:'Who do you work with?', a:'We work with startups, SMEs and enterprises across various industries, helping them grow through practical, well-built digital solutions.'},
  {cat:'general', q:'Do you provide services in Malaysia?', a:'Yes. We serve businesses across Malaysia with website development, mobile apps, custom software, digital marketing and ongoing technical support.'},
  {cat:'general', q:'Can you build custom solutions?', a:'Yes. Alongside our ready software products, we build custom software solutions tailored to your specific business operations and workflows.'},

  /* WEBSITE DEVELOPMENT */
  {cat:'websites', q:'What types of websites do you develop?', a:'We develop business websites, corporate portals, eCommerce stores and custom web solutions designed for performance and conversions.'},
  {cat:'websites', q:'Are websites mobile responsive?', a:'Yes. Every website we build is fully responsive and optimized to work smoothly across desktop, tablet and mobile devices.'},
  {cat:'websites', q:'Can you provide SEO-friendly websites?', a:'Yes. Our websites are built to be SEO-friendly from the ground up, with clean structure and performance in mind, and we also offer dedicated SEO services.'},
  {cat:'websites', q:'Can you redesign an existing website?', a:'Yes. We can redesign and rebuild an existing website to improve its design, performance and user experience.'},

  /* MOBILE APP DEVELOPMENT */
  {cat:'apps', q:'Do you develop mobile applications?', a:'Yes. We develop native and cross-platform mobile applications built for Malaysian users and businesses.'},
  {cat:'apps', q:'Can you develop Android and iOS apps?', a:'Yes. We build applications for both Android and iOS, using native or cross-platform approaches depending on your requirements.'},
  {cat:'apps', q:'Can apps connect to existing systems?', a:'Yes. Our mobile applications can be built to integrate with your existing business systems and data.'},

  /* SOFTWARE */
  {cat:'software', q:'Do you develop custom business software?', a:'Yes. We develop tailored software that automates operations and scales as your business grows.'},
  {cat:'software', q:'What business software solutions do you provide?', a:'We provide ERP, CRM, HRM, POS, restaurant management, cloud room management, real estate ERP and inventory management solutions.'},
  {cat:'software', q:'Can software be customized?', a:'Yes. Our software products and custom builds can be tailored to match your business processes and requirements.'},
  {cat:'software', q:'Can business processes be automated?', a:'Yes. We provide practical AI and workflow automation solutions to cut manual work and boost output.'},

  /* DIGITAL MARKETING */
  {cat:'marketing', q:'What digital marketing services do you provide?', a:'We provide data-driven digital marketing campaigns across social and search platforms, built for Malaysian markets.'},
  {cat:'marketing', q:'Do you provide SEO?', a:'Yes. We offer technical and content SEO services that help Malaysian businesses rank where it counts.'},
  {cat:'marketing', q:'Do you manage social media campaigns?', a:'Yes, social media marketing is part of our digital marketing services aimed at growing your brand\u2019s visibility.'},

  /* DESIGN & VIDEO */
  {cat:'design', q:'Do you provide graphic design?', a:'Yes. We offer creative branding, logo design, social media creatives, brochures and marketing materials.'},
  {cat:'design', q:'Do you provide video editing?', a:'Yes. We produce promotional videos, social media reels and corporate presentation videos for your brand.'},

  /* PROCESS */
  {cat:'process', q:'How does a project start?', a:'Every project starts with a discovery conversation to understand your goals, followed by planning, design, development, testing, deployment and ongoing support.'},
  {cat:'process', q:'How long does a project take?', a:'Timelines depend on scope and complexity. A structured, sprint-based process keeps every project on schedule.'},
  {cat:'process', q:'Can changes be requested during development?', a:'Yes. Our agile build sprints allow feedback and adjustments to be incorporated as the project progresses.'},
  {cat:'process', q:'Do you test before launch?', a:'Yes. Every project goes through a dedicated QA and testing phase across devices before deployment to production.'},

  /* SUPPORT */
  {cat:'support', q:'Do you provide technical support?', a:'Yes. We provide 24/7 technical support and ongoing maintenance, updates and monitoring after your project goes live.'},
  {cat:'support', q:'Can you maintain an existing website?', a:'Yes. Our annual maintenance plans cover ongoing support, updates and monitoring for existing websites and software.'},
  {cat:'support', q:'Can you improve an existing digital solution?', a:'Yes. We can review, redesign or extend an existing website, app or software solution to improve performance and results.'},
];

const accordion   = document.getElementById('faqAccordion');
const emptyState  = document.getElementById('faqEmpty');
const searchInput = document.getElementById('faqSearch');
const filterWrap  = document.getElementById('faqFilters');

let activeCat = 'all';
let activeQuery = '';

/* ---------- RENDER ---------- */
function renderFaq(){
  if(!accordion) return;

  const query = activeQuery.trim().toLowerCase();

  const filtered = faqData.filter(item=>{
    const matchesCat = activeCat === 'all' || item.cat === activeCat;
    const matchesQuery = !query ||
      item.q.toLowerCase().includes(query) ||
      item.a.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if(filtered.length === 0){
    accordion.innerHTML = '';
    emptyState.classList.add('show');
    return;
  }

  emptyState.classList.remove('show');

  accordion.innerHTML = filtered.map((item, i)=>`
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-q" aria-expanded="false">
        <span class="faq-num">${String(i+1).padStart(2,'0')}</span>
        <span class="faq-q-text">${item.q}</span>
        <span class="faq-toggle"><i class="fa-solid fa-plus"></i></span>
      </button>
      <div class="faq-a">
        <div class="faq-a-inner"><p>${item.a}</p></div>
      </div>
    </div>
  `).join('');

  // Re-observe newly created reveal elements
  document.querySelectorAll('#faqAccordion .reveal').forEach(el=>{
    el.classList.add('in'); // already in view context — avoid re-hidden flash on filter
  });

  bindAccordionEvents();
}

/* ---------- ACCORDION (one open at a time) ---------- */
function bindAccordionEvents(){
  const items = accordion.querySelectorAll('.faq-item');

  items.forEach(item=>{
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');

    btn.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');

      // close all
      items.forEach(other=>{
        other.classList.remove('open');
        other.querySelector('.faq-q').setAttribute('aria-expanded','false');
        other.querySelector('.faq-a').style.maxHeight = null;
      });

      if(!isOpen){
        item.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Open the first item by default
  if(items.length){
    const first = items[0];
    first.classList.add('open');
    first.querySelector('.faq-q').setAttribute('aria-expanded','true');
    const firstAnswer = first.querySelector('.faq-a');
    firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
  }
}

/* ---------- SEARCH ---------- */
if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    activeQuery = e.target.value;
    renderFaq();
  });
}

/* ---------- FILTERS ---------- */
if(filterWrap){
  filterWrap.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterWrap.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat;
      renderFaq();
    });
  });
}

/* ---------- INIT ---------- */
renderFaq();
