/* ---------- DATA ---------- */
const services = [
  {ic:'ic-globe',t:'Website Development',d:'Fast, SEO-friendly business websites built to convert visitors into customers.'},
  {ic:'ic-mobile',t:'Mobile App Development',d:'Native and cross-platform apps for Android and iOS built for Malaysian users.'},
  {ic:'ic-code',t:'Custom Software Development',d:'Tailored software that automates operations and scales with your business.'},
  {ic:'ic-cpu',t:'AI &amp; Automation',d:'Practical AI and workflow automation to cut manual work and boost output.'},
  {ic:'ic-cloud',t:'Cloud Solutions',d:'Secure, scalable cloud hosting and infrastructure management in Malaysia.'},
  {ic:'ic-megaphone',t:'Digital Marketing',d:'Data-driven campaigns across social and search built for Malaysian markets.'},
  {ic:'ic-search',t:'SEO Services',d:'Technical and content SEO that ranks Malaysian businesses where it counts.'},
  {ic:'ic-grid',t:'ERP Solutions',d:'Unified enterprise resource planning for finance, ops and inventory.'},
  {ic:'ic-users',t:'CRM Software',d:'Manage leads, pipelines and customer relationships in one place.'},
  {ic:'ic-usercheck',t:'HRM Software',d:'Payroll, attendance and workforce management built for Malaysian HR teams.'},
  {ic:'ic-terminal',t:'POS Software',d:'Reliable point-of-sale systems for retail and F&amp;B outlets.'},
  {ic:'ic-utensils',t:'Restaurant Management',d:'Order, table and kitchen management software for restaurants.'},
  {ic:'ic-bed',t:'Cloud Room Management',d:'Cloud-based room and booking management for hotels and hospitality.'},
  {ic:'ic-home',t:'Real Estate ERP',d:'Listings, leads and transactions managed in one property platform.'},
  {ic:'ic-box',t:'Inventory Management',d:'Real-time stock tracking across warehouses, branches and outlets.'},
  {ic:'ic-wrench',t:'Annual Maintenance',d:'Ongoing support, updates and monitoring after your project goes live.'},
];
const whyChoose = [
  {ic:'ic-team',t:'Experienced Team',d:'Skilled professionals with years of industry experience.'},
  {ic:'ic-tag',t:'Affordable Pricing',d:'Quality software at pricing built for Malaysian SMEs.'},
  {ic:'ic-rocket',t:'Fast Delivery',d:'Structured sprints that keep projects on schedule.'},
  {ic:'ic-layers',t:'Scalable Solutions',d:'Architecture that grows as your business grows.'},
  {ic:'ic-shield',t:'Secure Development',d:'Security best practices built in from day one.'},
  {ic:'ic-headset',t:'24/7 Technical Support',d:'Reliable support whenever your team needs it.'},
  {ic:'ic-heart',t:'Customer Satisfaction',d:'Long-term partnerships built on delivered results.'},
  {ic:'ic-clipboard',t:'Dedicated Project Management',d:'One point of contact from kickoff to launch.'},
];
const products = [
  {ic:'ic-usercheck',t:'HRM Software',d:'Attendance, payroll and workforce management in one dashboard.'},
  {ic:'ic-users',t:'CRM Software',d:'Track leads, deals and customer relationships end to end.'},
  {ic:'ic-bed',t:'Cloud Room Management',d:'Bookings and housekeeping for hotels, managed from the cloud.'},
  {ic:'ic-terminal',t:'POS Software',d:'Fast, reliable checkout built for retail and F&amp;B outlets.'},
  {ic:'ic-utensils',t:'Restaurant Management',d:'Orders, tables and kitchen displays working in sync.'},
  {ic:'ic-home',t:'Real Estate ERP',d:'Listings, site visits and transactions in a single platform.'},
];
const industries = [
  {ic:'ic-building',t:'Real Estate'},{ic:'ic-heart',t:'Healthcare'},{ic:'ic-book',t:'Education'},
  {ic:'ic-bag',t:'Retail'},{ic:'ic-utensils',t:'Restaurants'},{ic:'ic-bed',t:'Hotels'},
  {ic:'ic-factory',t:'Manufacturing'},{ic:'ic-hardhat',t:'Construction'},{ic:'ic-bank',t:'Finance'},
  {ic:'ic-truck',t:'Logistics'},{ic:'ic-briefcase',t:'Corporate'},{ic:'ic-store',t:'SMEs'},
];
const process = [
  {t:'Discovery',d:'Understand your goals'},{t:'Planning',d:'Scope and roadmap'},
  {t:'Design',d:'UI/UX and architecture'},{t:'Development',d:'Agile build sprints'},
  {t:'Testing',d:'QA across devices'},{t:'Deployment',d:'Launch to production'},
  {t:'Support',d:'Ongoing maintenance'},
];
const portfolio = [
  {t:'Corporate Website',c:'Business / Corporate',cat:'web'},
  {t:'E-commerce Platform',c:'Retail / E-commerce',cat:'ecom'},
  {t:'Mobile Banking App',c:'Mobile Application',cat:'app'},
  {t:'Property Management System',c:'Real Estate ERP',cat:'realestate'},
  {t:'School ERP System',c:'Education ERP',cat:'erp'},
  {t:'Clinic CRM Dashboard',c:'Healthcare CRM',cat:'crm'},
];
const testimonials = [
  {n:'Ahmad Faizal',r:'Director, AF Construction',q:'Meg World Technologies delivered our website beyond expectations. The team was professional, responsive and easy to work with throughout.'},
  {n:'Nurul Hidayah',r:'Founder, MyNurul Collection',q:'Great experience working with them on our mobile app. They understood our requirements clearly and delivered right on schedule.'},
  {n:'Daniel Lim',r:'CEO, Lim Logistics',q:'Their ERP and digital marketing work helped us streamline operations and increase leads significantly. Highly recommended for any Malaysian business.'},
  {n:'Siti Rahman',r:'Ops Manager, Rahman Retail Group',q:'The POS system they built runs across all our outlets without a hitch. Support has been fast whenever we needed it.'},
];
const faqs = [
  {q:'Do you provide software development services for businesses in Malaysia?',a:'Yes. Meg World Technologies is a software development company serving startups, SMEs and enterprises across Malaysia, from Kuala Lumpur to Penang and beyond, with websites, mobile apps, ERP, CRM and cloud solutions.'},
  {q:'How much does website development in Malaysia cost with Meg World?',a:'Pricing depends on scope — a business website, an e-commerce platform and a custom ERP system each need different effort. We provide a transparent, fixed quote after a free consultation call.'},
  {q:'Can you build custom ERP or CRM software for our industry?',a:'Yes, our custom software Malaysia team builds ERP, CRM, HRM and POS systems tailored to real estate, healthcare, retail, restaurants, hotels and manufacturing workflows specifically.'},
  {q:'Do you offer ongoing support after the project launches?',a:'Every project includes post-launch support, and we offer annual maintenance plans covering updates, monitoring and technical support for Malaysian clients long-term.'},
  {q:'How long does a typical mobile app or website project take?',a:'A standard business website typically takes 3–5 weeks, while mobile apps and enterprise ERP systems usually take 8–16 weeks depending on complexity and integrations.'},
  {q:'Is Meg World Technologies based in Malaysia or overseas?',a:'We are an India-based technology company with a dedicated team focused on the Malaysian market, working in Malaysian business hours to stay close to every client.'},
];



function portCard(p){
  return `<div class="port-card reveal" data-cat="${p.cat}">
    <div class="port-thumb"><svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#0a2a6b"/>
      <polyline points="0,150 60,120 120,140 180,90 240,100 300,60 360,70 400,40" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3"/>
      <circle cx="340" cy="45" r="26" fill="rgba(255,255,255,0.08)"/>
    </svg></div>
    <div class="port-body"><div><h3>${p.t}</h3><span>${p.c}</span></div><span class="port-tag">${p.cat.toUpperCase()}</span></div>
  </div>`;
}
const portfolioGrid=document.getElementById("portfolioGrid");

if(portfolioGrid){

portfolioGrid.innerHTML=portfolio.map(portCard).join("");

}

const testiTrack=document.getElementById("testiTrack");

if(testiTrack){

testiTrack.innerHTML=testimonials.map(t=>`
<div class="testi-card reveal">
<svg class="testi-quote"><use href="#ic-quote"/></svg>
<p>"${t.q}"</p>
<div class="testi-person">
<span class="testi-avatar">${t.n.split(" ").map(x=>x[0]).join("")}</span>
<div>
<strong>${t.n}</strong>
<span>${t.r}</span>
</div>
</div>
</div>
`).join("");

}

const faqList=document.getElementById("faqList");

if(faqList){

faqList.innerHTML=faqs.map((f,i)=>`
<div class="faq-item${i===0?" open":""}">
<button class="faq-q">${f.q}<svg><use href="#ic-plus"/></svg></button>
<div class="faq-a" style="${i===0?"max-height:200px":""}">
<p>${f.a}</p>
</div>
</div>
`).join("");

}
/* skyline svg into hero visuals */
const skylineSVG = `<svg viewBox="0 0 500 520" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="260" width="46" height="260" fill="rgba(255,255,255,0.14)"/>
  <rect x="80" y="220" width="34" height="300" fill="rgba(255,255,255,0.18)"/>
  <rect x="126" y="180" width="26" height="340" fill="rgba(255,255,255,0.22)"/>
  <rect x="330" y="180" width="26" height="340" fill="rgba(255,255,255,0.22)"/>
  <rect x="368" y="220" width="34" height="300" fill="rgba(255,255,255,0.18)"/>
  <rect x="416" y="260" width="46" height="260" fill="rgba(255,255,255,0.14)"/>
  <rect x="180" y="120" width="60" height="400" fill="rgba(255,255,255,0.32)"/>
  <rect x="260" y="120" width="60" height="400" fill="rgba(255,255,255,0.32)"/>
  <rect x="236" y="60" width="28" height="80" fill="rgba(255,255,255,0.32)"/>
  <line x1="250" y1="10" x2="250" y2="60" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
  <g fill="rgba(255,255,255,0.08)">
    <rect x="190" y="140" width="10" height="14"/><rect x="210" y="140" width="10" height="14"/>
    <rect x="270" y="140" width="10" height="14"/><rect x="290" y="140" width="10" height="14"/>
    <rect x="190" y="170" width="10" height="14"/><rect x="210" y="170" width="10" height="14"/>
    <rect x="270" y="170" width="10" height="14"/><rect x="290" y="170" width="10" height="14"/>
  </g>
  <circle cx="90" cy="90" r="46" fill="rgba(255,255,255,0.06)"/>
</svg>`;
document.querySelectorAll('.skyline-card').forEach(el=>el.innerHTML = skylineSVG + `
  <div class="float-card fc-1"><span class="fc-ic"><svg viewBox="0 0 24 24"><use href="#ic-check"/></svg></span><div><strong>30+ Projects</strong><span>Delivered on time</span></div></div>
  <div class="float-card fc-2"><span class="fc-ic"><svg viewBox="0 0 24 24"><use href="#ic-shield"/></svg></span><div><strong>Secure Builds</strong><span>Best-practice security</span></div></div>
  <div class="float-card fc-3"><span class="fc-ic"><svg viewBox="0 0 24 24"><use href="#ic-headset"/></svg></span><div><strong>24/7 Support</strong><span>Always reachable</span></div></div>
`);

/* ---------- HEADER SCROLL ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=> navbar.classList.toggle('scrolled', window.scrollY > 40));

/* ---------- MOBILE MENU ---------- */
const burgerBtn=document.getElementById('burgerBtn'), mobileMenu=document.getElementById('mobileMenu'), overlay=document.getElementById('overlay'), mobileClose=document.getElementById('mobileClose');
function openMenu(){mobileMenu.classList.add('open');overlay.classList.add('open');}
function closeMenu(){mobileMenu.classList.remove('open');overlay.classList.remove('open');}
burgerBtn.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));
/* ==========================================================
   Hero slider JS removed — the hero now uses a single cinematic
   scroll-scrubbed video background instead of rotating slides.
   See hero-cinematic.js for the new hero behaviour.
========================================================== */
/* ---------- COUNTERS ---------- */
/*==================================================
STATS COUNTER
==================================================*/

const counters = document.querySelectorAll(".count");

let hasAnimated = false;

function runCounters(){

    if(hasAnimated) return;

    hasAnimated = true;

    counters.forEach(counter=>{

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        function update(){

            current += increment;

            if(current >= target){

                counter.textContent = target;

                return;

            }

            counter.textContent = Math.floor(current);

            requestAnimationFrame(update);

        }

        update();

    });

}

window.addEventListener("scroll",function(){

    const stats = document.querySelector(".stats-bar");

    if(!stats) return;

    const rect = stats.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){

        runCounters();

    }

});

window.addEventListener("load",function(){

    const stats = document.querySelector(".stats-bar");

    if(!stats) return;

    const rect = stats.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){

        runCounters();

    }

});

/* ---------- SCROLL REVEAL ---------- */
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObs.unobserve(e.target);} });
},{threshold:0.15});
document.querySelectorAll('.reveal, .s-card').forEach(el=>revealObs.observe(el));

/* ---------- PORTFOLIO FILTER ---------- */
const filterBtns = document.querySelectorAll('#filterTabs button');
filterBtns.forEach(btn=>btn.addEventListener('click', ()=>{
  filterBtns.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f = btn.dataset.f;
  document.querySelectorAll('.port-card').forEach(card=>{
    card.classList.toggle('hide', f!=='all' && card.dataset.cat!==f);
  });
}));



/*============== WHY SECTION ==============*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".mw-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

cards.forEach(card=>observer.observe(card));

});

runCounters();

