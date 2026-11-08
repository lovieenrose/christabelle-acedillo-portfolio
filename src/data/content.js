// ============================================================
// ALL portfolio content lives here. Edit this file only.
// Anything in [square brackets] is a placeholder: it is shown
// in italics on the page until you replace it.
// ============================================================

export const profile = {
  name: 'Christabelle Jaynee S.C. Acedillo',
  shortName: 'Christabelle Acedillo',
  avatar: '/images/profile.PNG', // your profile photo at public/images/profile.PNG
  headline: 'BS Information Technology student specializing in Web and Mobile Applications',
  intro:
    'I build web and mobile apps that people can actually use. I am looking for internships in software development, web development, mobile development, and UI/UX design.',
  focus: ['Software development', 'Web development', 'Mobile development', 'UI/UX design'],
  location: 'Quezon City, Philippines',
  email: 'belleacedillo@gmail.com',
  linkedin: 'https://linkedin.com/in/itschristabelle',
  github: 'https://github.com/lovieenrose',
  resume: '/resume.pdf', // put your PDF at public/resume.pdf
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about =
  "I'm a BS Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Applications. I enjoy turning ideas into thoughtful, user-friendly applications, with an interest in development, design, and testing. I'm eager to keep learning, strengthen my skills through hands-on experience, and contribute to meaningful projects with a collaborative team."

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { group: 'Backend', items: ['PHP', 'Python', 'Node.js', 'Express.js', 'REST APIs'] },
  { group: 'Web Frameworks', items: ['Laravel', 'CodeIgniter'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Kotlin (Android)', 'Swift (iOS)'] },
  { group: 'Databases', items: ['SQL', 'MySQL', 'PostgreSQL (Supabase)'] },
  { group: 'Design', items: ['UI/UX Design', 'Figma', 'Adobe Photoshop', 'Canva'] },
  { group: 'Tools', items: ['Git', 'Notion'] },
  {
    group: 'Soft skills',
    items: [
      'Oral and written communication',
      'Teamwork and collaboration',
      'Creativity',
      'Time management',
      'Adaptability',
      'Willingness to learn',
    ],
  },
]

// ------------------------------------------------------------
// PROJECTS. To add a project, copy an object below and edit it.
//   period      optional; hidden when empty
//   images      [] shows a "Preview Coming Soon" placeholder; otherwise
//               [{ src: '/images/projects/x.png', label, caption }]
//   highlights  optional bullet list of contributions
//   links       { label, url }  -> clickable link (https:// only)
//               { label, soon: true } -> disabled "Coming soon" badge
//   featured    true = full-width card (use for one project)
// ------------------------------------------------------------
export const projects = [
  {
    featured: true,
    title: 'PRISM-GUARD',
    subtitle: 'HRIS and Client Management System',
    period: 'Capstone · Sept 2025 – Nov 2026',
    images: [
      {
        src: '/images/projects/prism-guard-promo.png',
        label: 'Promotional Website',
        caption: 'Promotional Website — Landing page for Praise Security & Investigation Agency Inc.',
      },
      {
        src: '/images/projects/prism-guard-client.png',
        label: 'Client Portal',
        caption: 'Client Portal — Incident reporting & personnel monitoring',
      },
      {
        src: '/images/projects/prism-guard-admin.png',
        label: 'Admin Portal',
        caption: 'Admin Portal — Employee management & deployment tracking',
      },
      {
        src: '/images/projects/prism-guard-mobile.png',
        label: 'Mobile View',
        caption: 'Mobile App — Guard reporting & dispatch interface',
      },
    ],
    description:
      'A web and mobile HRIS and Client Management System with NLP-enhanced incident reporting for Praise Security & Investigation Agency Inc., a private security agency in Parañaque City. Built by a 4-member team and deemed ready for client turnover at thesis defense.',
    role: 'Client Portal Developer',
    highlights: [
      'Developed all Client Portal modules: client dashboard, incident reporting, and announcements.',
      'Handled sprint tracking in Notion and resolved Git merge conflicts.',
      'Took part in QA testing and wrote parts of the capstone manuscript.',
    ],
    tech: [
      'React.js', 'Tailwind CSS', 'JavaScript', 'React Native', 'Expo', 'Node.js', 'Express.js',
      'REST APIs', 'Supabase (PostgreSQL, Auth)', 'Groq API (Llama 3.1 8B Instant)',
      'Firebase Cloud Messaging', 'Cloudinary', 'Google Maps and Places', 'Vercel', 'Render', 'Git',
    ],
    links: [
      { label: 'Live Demo (Promo Site)', url: 'https://psiai.vercel.app/' },
      { label: 'Live Demo (Admin & Client Portal)', url: 'https://prism-guard.vercel.app/login' },
      { label: 'GitHub (Promo)', url: 'https://github.com/PhonsekalLaure/prism-guard-promo' },
      { label: 'GitHub (Web)', url: 'https://github.com/PhonsekalLaure/prism-guard-web' },
      { label: 'GitHub (Mobile)', url: 'https://github.com/PhonsekalLaure/prism-guard-mobile' },
    ],
  },
  {
    title: 'The Catalog Library',
    subtitle: 'Library Management System',
    period: '2-person team project · June – July 2025',
    images: [
      {
        src: '/images/projects/the-catalog-library-home.png',
        label: 'Home',
        caption: 'Homepage — System overview and landing',
      },
      {
        src: '/images/projects/the-catalog-library-student.png',
        label: 'Student Section',
        caption: 'Student Section — Browse books, borrowing tracking & student account',
      },
      {
        src: '/images/projects/the-catalog-library-admin.png',
        label: 'Admin Section',
        caption: 'Admin Section — Book cataloging and inventory oversight',
      },
    ],
    description:
      'The Cat-alog Library is a library management system that lets students browse books and track borrowing records, and librarians manage collections, loans, and returns. Developed by a two-member team, its name and cat-themed interface reflect the developers’ shared love for cats.',
    role: 'Co-Developer — Student-Facing System Development.',
    highlights: [
      'Contributed to the interface design and layout using Canva.',
      'Developed the student account registration and login features, enabling students to create accounts and access the system.',
      'Developed the Browse Books section, allowing students to explore the library collection and view book information.',
      'Developed the My Borrowed Books section, allowing students to view and track their borrowed books and related borrowing information.',
      'Implemented the supporting functions and navigation across these sections to provide a cohesive student experience.',
      'Collaborated with my development partner to prepare and refine project documentation and conduct system testing to verify functionality and identify issues.'
    ],
    tech: ['PHP', 'HTML', 'CSS', 'MySQL', 'Canva'],
    links: [
      { label: 'GitHub', url: 'https://github.com/lovieenrose/The-Catalog-Library' },
      { label: 'Live demo', url: 'https://the-catalog-library.vercel.app/' },
    ],
  },
  {
    title: 'Thrifster',
    subtitle: 'E-commerce Platform for Thrifted Clothing',
    period: 'March 2026 · 5-person team project',
    // Add screenshots here when ready (Product Catalog and Product Details first), e.g.
    // { src: '/images/projects/thrifster-catalog.png', label: 'Product Catalog', caption: '...' }
    images: [],
    description:
      'A web-based platform for buying thrifted clothing, featuring product search and filtering, a session-based shopping cart, checkout, order history, and an admin dashboard for product and order management.',
    role: 'Co-Developer — Product Catalog & Details Page Development',
    highlights: [
      'Developed the Product Catalog page with search, filtering, and responsive item browsing.',
      'Developed the Product Details page with item specifications, pricing, and add-to-cart functionality.',
      'Collaborated on backend application logic and session management.',
      'Contributed to database design and CSS styling across the platform.'
    ],
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'phpMyAdmin', 'JavaScript', 'CSS', 'Bootstrap'],
    links: [
      { label: 'GitHub', url: 'https://github.com/arixien/thriftster' },
      { label: 'Live demo', soon: true },
    ],
  },
  {
    title: 'Dear Dango',
    subtitle: 'Mobile Diary App for Android',
    // period omitted until date / team size are confirmed (hidden when empty)
    images: [],
    description:
      'A mobile diary app for Android with username and password sign-in, designed around a friendly, mobile-first interface.',
    role: 'UI/Visual Design Lead — conceptualized the app design, with support in implementation and testing.',
    highlights: [
      'Main contribution: conceptualized the application’s interface and visual design using Canva.',
      'Fixed and tested button functionality.',
      'Adjusted layout constraints so the interface adapts to mobile screens and landscape orientation.',
      'Helped set up username and password functionality.',
    ],
    tech: ['Kotlin', 'Android Studio', 'Canva'],
    links: [
      { label: 'GitHub', url: 'https://github.com/arixien/Dear_Dango' },
      { label: 'Live demo', soon: true },
    ],
  },
]

export const certifications = [
  {
    name: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Jul 2026',
    credentialId: 'FOH3GQ4HB52O',
    url: 'https://www.coursera.org/account/accomplishments/verify/FOH3GQ4HB52O',
  },
  {
    name: 'DevNet Associate',
    issuer: 'Cisco',
    date: 'Apr 2026',
    url: 'https://www.credly.com/badges/0478338d-3f89-47f9-8e7e-94ce8692764b/linked_in_profile',
  },
  {
    name: 'PMI Project Management Ready',
    issuer: 'Project Management Institute',
    date: 'Mar 2026',
    note: 'Expires Mar 2031',
    credentialId: 'PN2M-uScn',
    url: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
  },
  {
    name: 'Linux Essentials - Course Completion',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    url: 'https://www.credly.com/badges/e4d2c5e6-a8a8-4eda-bc3d-e4faf610b8ba',
  },
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials - Course Completion',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2025',
    url: 'https://www.credly.com/badges/78c9f2ed-608d-49bc-ba84-144962abab12',
  },
  {
    name: 'Cisco Certified Support Technician Networking (CCST Networking)',
    issuer: 'Cisco',
    date: 'Feb 2025',
    credentialId: 'mYQN-DkxX',
    url: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
  },
  {
    name: 'Information Technology Specialist in Python',
    issuer: 'Certiport - A Pearson VUE Business',
    date: 'Feb 2025',
    credentialId: 'wCWRV-48J9',
    url: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
  },
  {
    name: 'CCNA: Introduction to Networks - Course Completion',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2025',
    url: 'https://www.credly.com/badges/c100f651-6fe6-4f1c-9393-e95a34394fbd',
  },
  {
    name: 'Frontend (Git, HTML, CSS, and Bootstrap 5) - Course Completion',
    issuer: 'Zuitt - Coding Bootcamp',
    date: 'Jun 2023',
    url: '/certificates/zuitt-frontend.pdf', // Drop certificate PDF at public/certificates/zuitt-frontend.pdf
  },
]

export const awards = [
  { name: 'Best Research Abstract', issuer: '1st International Research Conference 2023, Guild of Educators in TESOL International Institute', date: 'Apr 2023' },
  { name: 'Student Speaker', issuer: 'Global Summit on Education, Research & SDG (GSERSDG 2023), International Internship University (IIU)', date: 'Jun 2023' },
]

export const publication = {
  citation:
    'Acedillo, C. J. S. C. (2023). The Lived Experience of Students under the Collaborative Online International Learning (COIL) Program: Looking at SDG 12. International Research Conference 2023 Proceedings, 1(2).',
  url: 'https://doi.org/10.5281/zenodo.8031024',
}

export const education = [
  {
    school: 'FEU Institute of Technology',
    program: 'BS Information Technology, Specialization in Web and Mobile Applications',
    period: 'August 2023 – Expected September 2027',
  },
  {
    school: 'St. Patrick School of Quezon City',
    program: 'High School (STEM Strand)',
    period: '2017 – 2023',
    note: 'Graduated with High Honors',
  },
]
