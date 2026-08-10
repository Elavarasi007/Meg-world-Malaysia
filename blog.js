/* ==========================================================
   BLOG.JS — Meg World Technologies Malaysia
   Blog-specific functionality only:
   - Article data
   - Featured article + grid rendering
   - Category filtering
   - Live search
   - Article reading view (hash-based routing)
   - Related articles
   - Scroll reveal for blog-created elements
   ========================================================== */

/* ---------- CATEGORY BUCKETS (used for filter pills) ---------- */
const BLOG_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'software-erp', label: 'Software & ERP' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'cloud-solutions', label: 'Cloud Solutions' },
  { id: 'digital-marketing-seo', label: 'Digital Marketing & SEO' },
  { id: 'business-technology', label: 'Business Technology' },
  { id: 'industry-solutions', label: 'Industry Solutions' },
];

/* ---------- ARTICLE DATA ----------
   theme  -> maps to a CSS gradient class (img-*) for the card media
   icon   -> Font Awesome icon shown on the media block
   bucket -> which BLOG_CATEGORIES id this article filters under
   link   -> relevant internal page referenced from within the article
------------------------------------------------------------- */
const articles = [

  /* FEATURED */
{
    slug: 'digital-transformation-malaysian-businesses',

    featured: true,

    displayCategory: 'Business Technology',

    bucket: 'business-technology',

    theme: 'biztech',

    image: 'assets/blog/digital.webp',

    title: 'How Digital Transformation Helps Malaysian Businesses Work Smarter',

    excerpt: 'Discover how websites, software, automation, cloud technology and connected business systems can help Malaysian businesses simplify operations, improve productivity and create better digital experiences.',

    date: '2026-08-08',

    readTime: 7,

    intro: 'Digital transformation is not a single project you finish and forget — it is an ongoing shift in how a business operates, sells and serves customers. For businesses across Malaysia, that shift usually starts small: a website, an online booking form, a shared spreadsheet replaced by proper software. Over time, these small changes add up to a business that runs more smoothly and scales more easily.',

    body: `
        <h2>What digital transformation actually means for an SME</h2>

        <p>For a growing business, digital transformation rarely means a dramatic overhaul. It usually means replacing manual, disconnected processes — paper forms, WhatsApp-only ordering, spreadsheets for customer records — with connected digital tools that talk to each other.</p>

        <ul>
            <li>A website that represents the business professionally and generates enquiries</li>
            <li>Software that removes repetitive manual data entry</li>
            <li>Cloud systems that let staff access information from anywhere</li>
            <li>Automation that handles routine, repetitive tasks</li>
        </ul>

        <h2>Where most businesses start</h2>

        <p>A professional, mobile-friendly website is usually the first step, since it is the first place a potential customer looks. From there, businesses often add a CRM or ERP system to organise customer and operational data, followed by automation to reduce manual admin work.</p>

        <h2>Why connected systems matter more than isolated tools</h2>

        <p>The real value of digital transformation comes from connection, not just digitisation. A website that feeds leads into a CRM, a CRM that connects to invoicing, and cloud access that lets your team work from anywhere — together, these remove the gaps where information gets lost or duplicated.</p>

        <h2>A practical way to approach it</h2>

        <ul>
            <li>Start with the process causing the most friction today</li>
            <li>Choose tools that can grow with the business rather than be replaced in a year</li>
            <li>Prioritise systems that reduce manual work for your team</li>
            <li>Treat cloud access and security as standard, not optional</li>
        </ul>

        <p>Digital transformation works best as a series of deliberate, well-planned steps rather than one large overwhelming project. Businesses that treat it this way tend to see steadier, more sustainable results.</p>
    `,

    link: {
        href: 'services.html',
        label: 'our services'
    },

},

  /* 01 */
  {
    slug: 'choosing-right-website-development-company-malaysia',
    displayCategory: 'Web Development',
    bucket: 'web-development',
    theme: 'web',
    icon: 'fa-solid fa-globe',
    image: 'assets/blog/Web.webp',
    title: 'How to Choose the Right Website Development Company in Malaysia',
    excerpt: 'A practical guide for Malaysian businesses looking for a professional, responsive and SEO-friendly website that supports business growth.',
    date: '2026-07-14',
    readTime: 6,
    intro: 'A business website is often the first impression a potential customer forms of your brand. Choosing the right development partner shapes how that website performs — not just how it looks — for years to come.',
    body: `
      <h2>Start with your business goals, not just design</h2>
      <p>Before comparing companies, be clear on what the website needs to do: generate enquiries, showcase a portfolio, sell products, or support an existing sales team. A development partner should ask about these goals before talking about templates or colours.</p>
      <h2>Mobile responsiveness is non-negotiable</h2>
      <p>The majority of website visits in Malaysia now happen on mobile devices. A site that looks great on desktop but breaks on a phone will lose visitors before they even read your content.</p>
      <h2>SEO foundations should be built in, not added later</h2>
      <ul>
        <li>Clean, semantic HTML structure</li>
        <li>Fast-loading pages and optimised images</li>
        <li>Proper heading hierarchy and metadata</li>
        <li>A sitemap and mobile-friendly design</li>
      </ul>
      <p>Retrofitting SEO onto a poorly structured website is far harder than building it in from day one.</p>
      <h2>User experience, performance and scalability</h2>
      <p>A good website balances visual design with usability — clear navigation, readable typography, and fast load times. It should also be built in a way that allows new pages, features or an online store to be added later without a full rebuild.</p>
      <h2>Don't forget ongoing maintenance</h2>
      <p>Websites need updates, security patches and occasional content changes. Ask any prospective partner how they handle support after launch, not just how they handle the build itself.</p>
    `,
    link: { href: 'services.html', label: 'our website development services' },
  },

  /* 02 */
  {
    slug: 'mobile-app-development-customer-engagement',
    displayCategory: 'Mobile Apps',
    bucket: 'mobile-apps',
    theme: 'mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    image: 'assets/blog/Mobile.webp',
    title: 'Why Mobile App Development Can Improve Customer Engagement',
    excerpt: 'Explore how well-designed Android and iOS applications can create more convenient customer experiences and support business operations.',
    date: '2026-07-02',
    readTime: 5,
    intro: 'A mobile app puts your business directly on a customer\u2019s home screen. For many businesses, that convenience translates into more repeat visits, easier bookings and a stronger relationship with customers over time.',
    body: `
      <h2>Convenience drives engagement</h2>
      <p>An app removes friction — customers can browse, book or order in a few taps instead of searching for a website or calling in. That convenience often leads to more frequent interaction with your business.</p>
      <h2>Apps can support internal workflows too</h2>
      <ul>
        <li>Field staff logging jobs or deliveries on the go</li>
        <li>Real-time updates between teams and customers</li>
        <li>Push notifications for bookings, offers or order status</li>
        <li>Offline access to key information where connectivity is limited</li>
      </ul>
      <h2>Android, iOS, or both?</h2>
      <p>The right approach depends on your audience. Native apps offer the smoothest experience for a single platform, while cross-platform development can reach both Android and iOS users from a shared codebase, which is often more practical for growing businesses.</p>
      <h2>Design for real usage, not just launch day</h2>
      <p>An app that is easy to use in the first five minutes but frustrating afterwards will be uninstalled quickly. Long-term scalability — the ability to add features as the business grows — matters as much as the initial launch.</p>
    `,
    link: { href: 'services.html', label: 'our mobile app development services' },
  },

  /* 03 */
  {
    slug: 'custom-software-vs-ready-made-software',
    displayCategory: 'Software & ERP',
    bucket: 'software-erp',
    theme: 'software',
    icon: 'fa-solid fa-code',
    image: 'assets/blog/Software.webp',
    title: 'Custom Software vs Ready-Made Software: Which Is Right for Your Business?',
    excerpt: 'Understand the difference between off-the-shelf software and custom-built systems and how to choose an approach based on your business workflow.',
    date: '2026-06-20',
    readTime: 6,
    intro: 'Both ready-made and custom software have a place in business technology. The right choice depends less on cost alone and more on how closely your business processes match what an off-the-shelf tool was designed to do.',
    body: `
      <h2>When ready-made software makes sense</h2>
      <p>Off-the-shelf tools are usually faster to set up and lower-cost upfront. They work well when your business processes are fairly standard and don't need deep customisation.</p>
      <h2>When custom software is worth the investment</h2>
      <ul>
        <li>Your workflow doesn't fit neatly into existing tools</li>
        <li>You need systems to integrate closely with each other</li>
        <li>You are scaling and need software that grows with you</li>
        <li>You want full ownership and control over the system</li>
      </ul>
      <h2>Integration matters as much as features</h2>
      <p>A tool that doesn't talk to your other systems can create as much manual work as it saves. Whether you choose ready-made or custom software, check how well it integrates with what you already use.</p>
      <h2>Weighing cost against long-term fit</h2>
      <p>Ready-made software often has a lower starting cost but can involve ongoing subscription fees and workaround costs if it doesn't fully fit your process. Custom software has a higher upfront investment but is built specifically around how your business actually operates.</p>
    `,
    link: { href: 'services.html', label: 'our custom software development services' },
  },

  /* 04 */
  {
    slug: 'crm-software-leads-and-customers',
    displayCategory: 'CRM',
    bucket: 'software-erp',
    theme: 'crm',
    icon: 'fa-solid fa-users',
    image: 'assets/blog/CRM.webp',
    title: 'How CRM Software Helps Businesses Manage Leads and Customers',
    excerpt: 'Learn how CRM systems can organize customer information, sales pipelines, follow-ups and business communication in one place.',
    date: '2026-06-08',
    readTime: 5,
    intro: 'When customer information lives across notebooks, spreadsheets and WhatsApp chats, leads get lost and follow-ups get missed. CRM software brings all of that into one organised system.',
    body: `
      <h2>One place for every customer record</h2>
      <p>A CRM keeps contact details, communication history and notes together, so any team member can pick up a conversation with full context, instead of starting from scratch.</p>
      <h2>Sales pipelines you can actually see</h2>
      <ul>
        <li>Track where each lead is in the sales journey</li>
        <li>Spot deals that are stalling before it's too late</li>
        <li>Forecast revenue with more confidence</li>
        <li>Give managers visibility without needing manual reports</li>
      </ul>
      <h2>Follow-ups that don't fall through the cracks</h2>
      <p>Automated reminders and task tracking mean leads are followed up consistently, rather than depending on someone remembering to check a notebook.</p>
      <h2>Better visibility across the business</h2>
      <p>Beyond sales, a CRM gives leadership a clear view of customer relationships and business performance, which supports better decisions as the business grows.</p>
    `,
    link: { href: 'services.html', label: 'our CRM software' },
  },

  /* 05 */
  {
    slug: 'hrm-software-employee-payroll-management',
    displayCategory: 'HRM',
    bucket: 'software-erp',
    theme: 'hrm',
    icon: 'fa-solid fa-users-gear',
    image: 'assets/blog/HRM.webp',
    title: 'How HRM Software Simplifies Employee and Payroll Management',
    excerpt: 'Explore how HRM software can bring attendance, payroll, leave management and workforce information into one organized system.',
    date: '2026-05-27',
    readTime: 5,
    intro: 'HR admin work — attendance tracking, payroll calculations, leave approvals — takes up hours that could go toward supporting employees directly. HRM software brings these processes into one connected system.',
    body: `
      <h2>Attendance and payroll working together</h2>
      <p>When attendance data flows directly into payroll, there's far less manual calculation and fewer errors at month-end.</p>
      <h2>Leave management without the back-and-forth</h2>
      <ul>
        <li>Employees submit leave requests digitally</li>
        <li>Managers approve or reject with full visibility of team availability</li>
        <li>Leave balances update automatically</li>
      </ul>
      <h2>Recruitment and performance in one system</h2>
      <p>Many HRM platforms also support recruitment tracking and performance reviews, giving HR teams a single source of truth for the full employee lifecycle rather than juggling separate spreadsheets.</p>
      <h2>Why this matters as a business grows</h2>
      <p>Manual HR processes that work for ten employees often break down at fifty. Bringing these processes into structured software early makes it far easier to scale the team without scaling admin overhead at the same rate.</p>
    `,
    link: { href: 'services.html', label: 'our HRM software' },
  },

  /* 06 */
  {
    slug: 'pos-software-retail-operations',
    displayCategory: 'Retail',
    bucket: 'industry-solutions',
    theme: 'retail',
    icon: 'fa-solid fa-cash-register',
    image: 'assets/blog/Retail.webp',
    title: 'How POS Software Can Improve Retail Operations',
    excerpt: 'Discover how modern POS software can connect billing, inventory, customer records and sales reporting for retail businesses.',
    date: '2026-05-15',
    readTime: 5,
    intro: 'For retail businesses, the point of sale is where operations, inventory and customer experience all meet. Modern POS software connects these pieces so they work together instead of separately.',
    body: `
      <h2>Faster, more accurate billing</h2>
      <p>A good POS system speeds up checkout while reducing manual pricing and calculation errors, which matters most during busy periods.</p>
      <h2>Inventory that updates in real time</h2>
      <ul>
        <li>Stock levels update automatically with every sale</li>
        <li>Low-stock alerts help prevent running out of popular items</li>
        <li>Reduces manual stock counts and reconciliation work</li>
      </ul>
      <h2>Customer records and sales analytics</h2>
      <p>Connecting sales data to customer records allows retailers to understand buying patterns and identify their most valuable customers, which supports smarter promotions and stocking decisions.</p>
      <h2>Supporting multiple outlets</h2>
      <p>For retailers with more than one store, POS software that centralises reporting across outlets makes it far easier to compare performance and manage inventory consistently.</p>
    `,
    link: { href: 'industries.html', label: 'our retail industry solutions' },
  },

  /* 07 */
  {
    slug: 'restaurant-management-software-modern-restaurants',
    displayCategory: 'Restaurants',
    bucket: 'industry-solutions',
    theme: 'restaurant',
    icon: 'fa-solid fa-utensils',
    image: 'assets/blog/Restaurants.webp',
    title: 'Why Restaurant Management Software Matters for Modern Restaurants',
    excerpt: 'Learn how restaurant technology can connect orders, tables, billing, inventory and kitchen operations.',
    date: '2026-05-03',
    readTime: 5,
    intro: 'Running a restaurant means coordinating tables, orders, kitchen timing and billing all at once. Restaurant management software connects these moving parts so service stays smooth even during peak hours.',
    body: `
      <h2>Table and order management in sync</h2>
      <p>Digital table and order management reduces miscommunication between front-of-house staff and the kitchen, which directly affects how quickly food reaches the table.</p>
      <h2>Kitchen workflow that keeps pace with orders</h2>
      <ul>
        <li>Orders route directly to the kitchen display</li>
        <li>Kitchen staff can prioritise based on order timing</li>
        <li>Reduces paper tickets and miscommunication</li>
      </ul>
      <h2>Billing and inventory working together</h2>
      <p>When billing connects to inventory, ingredient usage is tracked automatically with every order, giving a clearer picture of food cost and helping prevent stock shortages.</p>
      <h2>Better customer service, start to finish</h2>
      <p>Faster order accuracy and smoother table turnover directly improve the customer experience — often the difference between a returning customer and a one-time visit.</p>
    `,
    link: { href: 'industries.html', label: 'our restaurant industry solutions' },
  },

  /* 08 */
  {
    slug: 'cloud-room-management-hotel-operations',
    displayCategory: 'Hospitality',
    bucket: 'industry-solutions',
    theme: 'hotel',
    icon: 'fa-solid fa-bed',
    image: 'assets/blog/Hospitality.webp',
    title: 'How Cloud Room Management Can Simplify Hotel Operations',
    excerpt: 'Explore how cloud-based room management can help hotels and accommodation businesses manage bookings, guest information, billing and reporting.',
    date: '2026-04-21',
    readTime: 5,
    intro: 'Hotels and accommodation businesses juggle reservations, guest information, housekeeping and billing simultaneously. Cloud-based room management brings these functions into one accessible system.',
    body: `
      <h2>Reservations without double-bookings</h2>
      <p>A centralised booking system reduces the risk of double-booking rooms and gives front-desk staff an accurate, real-time view of availability.</p>
      <h2>Guest information in one place</h2>
      <ul>
        <li>Guest preferences and history available at check-in</li>
        <li>Faster, smoother check-in and check-out</li>
        <li>Consistent record-keeping across all bookings</li>
      </ul>
      <h2>Billing and reporting, simplified</h2>
      <p>Cloud systems that combine billing with reporting make it easier to track occupancy, revenue and performance without manually compiling data from separate spreadsheets.</p>
      <h2>Access from anywhere</h2>
      <p>Because the system runs in the cloud, managers can check occupancy and performance remotely, which is especially useful for businesses running more than one property.</p>
    `,
    link: { href: 'industries.html', label: 'our hospitality industry solutions' },
  },

  /* 09 */
  {
    slug: 'real-estate-erp-crm-property-operations',
    displayCategory: 'Real Estate',
    bucket: 'industry-solutions',
    theme: 'realestate',
    icon: 'fa-solid fa-building',
    image: 'assets/blog/RealEstate.webp',
    title: 'How Real Estate ERP and CRM Software Can Improve Property Operations',
    excerpt: 'Learn how integrated real estate software can help manage properties, enquiries, leads, sales activities and business information.',
    date: '2026-04-09',
    readTime: 6,
    intro: 'Real estate businesses deal with property listings, buyer enquiries, site visits and documentation across many stages at once. Integrated ERP and CRM software brings structure to that complexity.',
    body: `
      <h2>Property management in one platform</h2>
      <p>Keeping listings, availability and property details in a single system prevents outdated information from reaching prospective buyers or tenants.</p>
      <h2>Lead tracking and customer enquiries</h2>
      <ul>
        <li>Enquiries logged automatically from multiple channels</li>
        <li>Sales teams can follow up without leads slipping through</li>
        <li>Clear visibility into which listings generate the most interest</li>
      </ul>
      <h2>Sales activity and documentation</h2>
      <p>From site visits to offers and paperwork, tracking each stage digitally reduces the back-and-forth that often slows real estate transactions down.</p>
      <h2>Business operations, all connected</h2>
      <p>When property data, customer data and sales activity live in one integrated system, management gets a far clearer picture of overall business performance.</p>
    `,
    link: { href: 'industries.html', label: 'our real estate industry solutions' },
  },

  /* 10 */
  {
    slug: 'practical-seo-guide-malaysian-businesses',
    displayCategory: 'Digital Marketing & SEO',
    bucket: 'digital-marketing-seo',
    theme: 'seo',
    icon: 'fa-solid fa-magnifying-glass',
    image: 'assets/blog/DigitalMarketing.webp',
    title: 'A Practical SEO Guide for Malaysian Businesses',
    excerpt: 'Understand the fundamentals of technical SEO, useful content, search visibility and a strong digital presence for businesses targeting Malaysian customers.',
    date: '2026-03-28',
    readTime: 7,
    intro: 'SEO doesn\u2019t need to be complicated to be effective. For most Malaysian businesses, a solid foundation of technical health, useful content and consistent effort delivers better results than chasing every new trend.',
    body: `
      <h2>Technical SEO is the foundation</h2>
      <p>A fast-loading, mobile-friendly, properly structured website is the base everything else builds on. Without this foundation, content and keyword strategy have far less impact.</p>
      <h2>Keyword research grounded in real intent</h2>
      <ul>
        <li>Focus on what your customers actually search for</li>
        <li>Prioritise terms with clear buying or enquiry intent</li>
        <li>Don't ignore local, Malaysia-specific search terms</li>
      </ul>
      <h2>Content that actually helps people</h2>
      <p>Search engines increasingly reward content that genuinely answers a reader's question. Writing for real people first, and search engines second, tends to perform better over time.</p>
      <h2>Local search matters for Malaysian businesses</h2>
      <p>For businesses serving specific towns or regions, local search visibility — accurate business listings, location-specific content, and consistent contact information — can matter as much as national rankings.</p>
      <h2>Website performance ties it all together</h2>
      <p>Slow pages hurt both rankings and conversions. Regularly checking site speed and fixing performance issues should be treated as an ongoing part of SEO, not a one-time task.</p>
    `,
    link: { href: 'services.html', label: 'our SEO services' },
  },

  /* 11 */
  {
    slug: 'ai-automation-reduce-repetitive-work',
    displayCategory: 'AI & Automation',
    bucket: 'ai-automation',
    theme: 'ai',
    icon: 'fa-solid fa-microchip',
    image: 'assets/blog/AI.webp',
    title: 'How AI and Business Automation Can Reduce Repetitive Work',
    excerpt: 'Explore practical ways businesses can use AI and workflow automation to reduce manual tasks and improve productivity.',
    date: '2026-03-16',
    readTime: 6,
    intro: 'Not every business needs advanced AI to benefit from automation. Often, the biggest gains come from automating the small, repetitive tasks that quietly consume hours every week.',
    body: `
      <h2>Start with the repetitive tasks, not the technology</h2>
      <p>Rather than starting with "how can we use AI," it's more productive to start with "what repetitive task is wasting our team's time" — then look at whether automation or AI-assisted tools can solve it.</p>
      <h2>Common areas ripe for automation</h2>
      <ul>
        <li>Data entry between disconnected systems</li>
        <li>Routine customer replies and follow-ups</li>
        <li>Report generation and data summarising</li>
        <li>Scheduling and reminder notifications</li>
      </ul>
      <h2>Workflow automation vs AI-assisted processes</h2>
      <p>Workflow automation handles rule-based, repetitive steps reliably. AI-assisted processes go further, helping with tasks that involve some judgement, like drafting responses or summarising information — but both start from the same principle: reduce manual repetition.</p>
      <h2>Implementing it practically</h2>
      <p>The businesses that get the most value from automation usually start small — automating one clear, well-defined process — before expanding further, rather than attempting a large-scale rollout all at once.</p>
    `,
    link: { href: 'services.html', label: 'our AI & automation services' },
  },

  /* 12 */
  {
    slug: 'why-cloud-solutions-matter-growing-businesses',
    displayCategory: 'Cloud Solutions',
    bucket: 'cloud-solutions',
    theme: 'cloud',
    icon: 'fa-solid fa-cloud',
    image: 'assets/blog/Cloud.webp',
    title: 'Why Cloud Solutions Matter for Growing Businesses',
    excerpt: 'Understand how cloud infrastructure can support scalability, accessibility, security practices and more flexible business technology.',
    date: '2026-03-04',
    readTime: 5,
    intro: 'Cloud infrastructure has moved from being a nice-to-have to a practical necessity for growing businesses. It changes how teams access systems, how businesses scale, and how technology is maintained.',
    body: `
      <h2>Scalability without a hardware overhaul</h2>
      <p>Cloud infrastructure can scale with demand, meaning businesses don't need to invest heavily in physical servers upfront just to plan for future growth.</p>
      <h2>Accessibility for distributed teams</h2>
      <ul>
        <li>Staff can access systems from any location</li>
        <li>Supports remote and hybrid working arrangements</li>
        <li>Reduces dependency on a single physical office setup</li>
      </ul>
      <h2>Security is a shared responsibility</h2>
      <p>Cloud providers invest heavily in infrastructure security, but businesses still need proper access controls, backups and monitoring on their end. Cloud adoption should come with a clear security practice, not just convenience.</p>
      <h2>Business continuity and growth</h2>
      <p>Cloud-based systems generally offer better backup and recovery options than on-premise setups, which supports business continuity while also giving the business room to grow without re-architecting everything later.</p>
    `,
    link: { href: 'services.html', label: 'our cloud solutions' },
  },

  /* 13 */
  {
    slug: 'technology-solutions-retail-restaurants-hotels-real-estate',
    displayCategory: 'Industry Solutions',
    bucket: 'industry-solutions',
    theme: 'industry',
    icon: 'fa-solid fa-layer-group',
    image: 'assets/blog/Industry.webp',
    title: 'Technology Solutions for Retail, Restaurants, Hotels and Real Estate Businesses',
    excerpt: 'Different industries have different workflows. Explore how industry-focused technology can address operational needs across retail, restaurants, hospitality and real estate.',
    date: '2026-02-20',
    readTime: 6,
    intro: 'A single generic software package rarely fits every industry well. Retail, restaurants, hotels and real estate businesses each have distinct workflows — and technology built around those workflows tends to perform far better than a one-size-fits-all approach.',
    body: `
      <h2>Retail: billing, inventory and customer records</h2>
      <p>Retail businesses need fast, reliable point-of-sale systems tightly connected to inventory and customer data, especially across multiple outlets.</p>
      <h2>Restaurants: orders, tables and kitchen coordination</h2>
      <p>Restaurant technology has to keep pace with real-time service — connecting table management, kitchen display systems and billing so nothing falls out of sync during busy hours.</p>
      <h2>Hotels: bookings and guest experience</h2>
      <ul>
        <li>Centralised reservations to avoid double-bookings</li>
        <li>Guest information available across every touchpoint</li>
        <li>Cloud access for managing multiple properties</li>
      </ul>
      <h2>Real estate: listings, leads and transactions</h2>
      <p>Real estate businesses benefit from software that connects property listings, buyer enquiries and transaction documentation, reducing the manual coordination that often slows deals down.</p>
      <h2>The common thread</h2>
      <p>Across all four industries, the same principle applies: software designed around the actual workflow — not a generic template — reduces manual work and improves the customer experience.</p>
    `,
    link: { href: 'industries.html', label: 'our industry-focused solutions' },
  },

  /* 14 */
  {
    slug: 'malaysian-smes-digital-transformation-journey',
    displayCategory: 'Business Technology',
    bucket: 'business-technology',
    theme: 'biztech',
    icon: 'fa-solid fa-route',
    image: 'assets/blog/Business.webp',
    title: 'How Malaysian SMEs Can Start Their Digital Transformation Journey',
    excerpt: 'A practical roadmap for Malaysian SMEs looking to move from manual processes to websites, software, cloud solutions and business automation.',
    date: '2026-02-08',
    readTime: 6,
    intro: 'For many Malaysian SMEs, moving away from manual processes feels overwhelming — where do you even begin? A practical, staged approach makes the journey far more manageable than trying to change everything at once.',
    body: `
      <h2>Step 1: Establish a professional online presence</h2>
      <p>A business website is usually the most impactful first step. It builds credibility, generates enquiries, and gives the business a foundation for everything digital that follows.</p>
      <h2>Step 2: Digitise your core operational processes</h2>
      <ul>
        <li>Move customer records into a proper CRM</li>
        <li>Replace manual spreadsheets with structured software</li>
        <li>Standardise processes like invoicing and inventory tracking</li>
      </ul>
      <h2>Step 3: Move to the cloud</h2>
      <p>Cloud-based systems give SMEs access to their business data from anywhere, without the upfront cost of maintaining physical servers — a practical advantage for smaller teams.</p>
      <h2>Step 4: Automate where it makes sense</h2>
      <p>Once core systems are in place, automation can take over repetitive, rule-based tasks, freeing up staff time for higher-value work.</p>
      <h2>Long-term planning matters</h2>
      <p>Digital transformation works best as a planned, staged journey rather than a rushed, reactive process. SMEs that plan each step tend to see more sustainable, lasting improvements in how they operate.</p>
    `,
    link: { href: 'about.html', label: 'more about our approach' },
  },
];

/* ---------- HELPERS ---------- */
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function categoryLabel(bucketId) {
  const c = BLOG_CATEGORIES.find(c => c.id === bucketId);
  return c ? c.label : bucketId;
}

function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug);
}

/* ---------- CARD TEMPLATES ---------- */
function blogCardTemplate(a) {
  const searchable = (a.title + ' ' + a.excerpt + ' ' + a.displayCategory).toLowerCase();
  return `
  <article class="blog-card reveal" data-category="${a.bucket}" data-search="${searchable}">
    <a href="#article=${a.slug}" class="blog-card-media img-${a.theme}" aria-hidden="true">
      <img src="${a.image}" alt="${a.title}" class="poster-img" loading="lazy">
    </a>
    <div class="blog-card-body">
      <div class="blog-card-meta">
        <span class="blog-card-cat">${a.displayCategory}</span>
        <span class="blog-card-date">${formatDate(a.date)} &middot; ${a.readTime} min read</span>
      </div>
      <h3 class="blog-card-title"><a href="#article=${a.slug}">${a.title}</a></h3>
      <p class="blog-card-excerpt">${a.excerpt}</p>
      <a href="#article=${a.slug}" class="blog-card-btn">Read Article <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </article>`;
}

function featuredTemplate(a) {
  return `
  <div class="featured-card reveal">
    <a href="#article=${a.slug}" class="featured-media img-${a.theme}" aria-hidden="true">
      <img src="${a.image}" alt="${a.title}" class="poster-img" loading="lazy">
    </a>
    <div class="featured-body">
      <span class="blog-card-cat">${a.displayCategory}</span>
      <h2><a href="#article=${a.slug}">${a.title}</a></h2>
      <p>${a.excerpt}</p>
      <div class="blog-card-meta featured-meta">
        <span class="blog-card-date">${formatDate(a.date)} &middot; ${a.readTime} min read</span>
      </div>
      <a href="#article=${a.slug}" class="btn btn-primary">
        <span>Read Article</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>`;
}

/* ---------- RENDER LISTING ---------- */
function renderCategoryFilters() {
  const wrap = document.getElementById('catFilters');
  if (!wrap) return;
  wrap.innerHTML = BLOG_CATEGORIES.map((c, i) =>
    `<button type="button" class="cat-btn${i === 0 ? ' active' : ''}" data-filter="${c.id}">${c.label}</button>`
  ).join('');
}

function renderFeatured() {
  const wrap = document.getElementById('featuredArticle');
  if (!wrap) return;
  const featured = articles.find(a => a.featured);
  if (featured) wrap.innerHTML = featuredTemplate(featured);
}

function renderGrid() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const list = articles.filter(a => !a.featured);
  grid.innerHTML = list.map(blogCardTemplate).join('');
}

/* ---------- FILTER + SEARCH ---------- */
function applyFilters() {
  const activeBtn = document.querySelector('.cat-btn.active');
  const filter = activeBtn ? activeBtn.dataset.filter : 'all';
  const searchInput = document.getElementById('blogSearch');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const cards = document.querySelectorAll('.blog-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesCategory = filter === 'all' || card.dataset.category === filter;
    const matchesSearch = !query || card.dataset.search.includes(query);
    const show = matchesCategory && matchesSearch;
    card.classList.toggle('hide', !show);
    if (show) visibleCount++;
  });

  const noResults = document.getElementById('noResults');
  const grid = document.getElementById('blogGrid');
  if (noResults && grid) {
    noResults.hidden = visibleCount !== 0;
    grid.hidden = visibleCount === 0;
  }
}

function initFiltersAndSearch() {
  const filterWrap = document.getElementById('catFilters');
  if (filterWrap) {
    filterWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-btn');
      if (!btn) return;
      filterWrap.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  }
  const searchInput = document.getElementById('blogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
}

/* ---------- RELATED ARTICLES ---------- */
function renderRelated(current) {
  const wrap = document.getElementById('relatedGrid');
  if (!wrap) return;
  let related = articles.filter(a => a.slug !== current.slug && a.bucket === current.bucket);
  if (related.length < 3) {
    const extra = articles.filter(a => a.slug !== current.slug && !related.includes(a));
    related = related.concat(extra).slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }
  wrap.innerHTML = related.map(blogCardTemplate).join('');
}

/* ---------- ARTICLE VIEW ---------- */
function injectArticleSchema(a) {
  let tag = document.getElementById('articleSchema');
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'articleSchema';
    document.head.appendChild(tag);
  }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    dateModified: a.date,
    author: { '@type': 'Organization', name: 'Meg World Technologies' },
    publisher: { '@type': 'Organization', name: 'Meg World Technologies' },
  };
  tag.textContent = JSON.stringify(data);
}

function renderArticleView(slug) {
  const article = getArticleBySlug(slug);
  const listingView = document.getElementById('listingView');
  const articleView = document.getElementById('articleView');
  if (!article) {
    if (listingView) listingView.hidden = false;
    if (articleView) articleView.hidden = true;
    return;
  }

  document.getElementById('breadcrumbCurrent').textContent = article.title;
  document.getElementById('articleCategory').textContent = article.displayCategory;
  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleMetaDate').textContent = formatDate(article.date);
  document.getElementById('articleMetaRead').textContent = article.readTime + ' min read';
  document.getElementById('articleIntro').textContent = article.intro;

  const media = document.getElementById('articleHeroMedia');
  media.className = 'article-hero-media img-' + article.theme;
  media.innerHTML = `<img src="${article.image}" alt="${article.title}" class="poster-img">`;

  const bodyEl = document.getElementById('articleBody');
  bodyEl.innerHTML = article.body;

  const linkWrap = document.getElementById('articleInternalLink');
  if (article.link) {
    linkWrap.innerHTML = `Want to see how this could work for your business? Take a look at <a href="${article.link.href}">${article.link.label}</a>, or <a href="contact.html">get in touch</a> for a free consultation.`;
  } else {
    linkWrap.innerHTML = '';
  }

  renderRelated(article);
  injectArticleSchema(article);

  document.title = article.title + ' | Meg World Technologies Blog';

  if (listingView) listingView.hidden = true;
  if (articleView) articleView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function showListingView() {
  const listingView = document.getElementById('listingView');
  const articleView = document.getElementById('articleView');
  if (listingView) listingView.hidden = false;
  if (articleView) articleView.hidden = true;
  document.title = 'Technology Blog | Software, Web, AI & Digital Insights Malaysia | Meg World Technologies';
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------- ROUTER ---------- */
function handleRoute() {
  const hash = window.location.hash;
  const match = hash.match(/^#article=(.+)$/);
  if (match) {
    renderArticleView(decodeURIComponent(match[1]));
  } else {
    showListingView();
  }
}

/* ---------- SCROLL REVEAL (blog-scoped) ---------- */
function initBlogReveal() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('#listingView .reveal, #articleView .reveal').forEach(el => obs.observe(el));
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryFilters();
  renderFeatured();
  renderGrid();
  initFiltersAndSearch();
  handleRoute();
  initBlogReveal();

  // Re-run reveal after any dynamic re-render triggered by routing
  const gridObserverTarget = document.getElementById('blogGrid');
  if (gridObserverTarget) {
    const mo = new MutationObserver(() => initBlogReveal());
    mo.observe(gridObserverTarget, { childList: true });
    mo.observe(document.getElementById('relatedGrid'), { childList: true });
  }
});

window.addEventListener('hashchange', () => {
  handleRoute();
  initBlogReveal();
});