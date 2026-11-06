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
  "I'm a BS Information Technology student at FEU Institute of Technology, specializing in Web and Mobile Applications. I'm passionate about building web and mobile apps that people can actually use, and I enjoy turning ideas into working systems. I'm always learning new tools and technologies, and I'm looking for opportunities to grow as a developer and contribute to a team."

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

// links: use a real https:// URL, or a [placeholder] string. Placeholders show as plain text.
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
      { label: 'GitHub (API)', url: 'https://github.com/PhonsekalLaure/prism-guard-api' },
    ],
  },
  {
    title: 'The Catalog Library',
    subtitle: 'Library Management System',
    period: '2-person team project · June – July 2025',
    images: [
      {
        src: '/images/projects/the-catalog-library.png',
        label: 'Library Catalog System',
        caption: 'Book cataloging, user management & borrowing tracker',
      },
    ],
    description:
      'A web-based library catalog and borrowing system with separate admin and student interfaces. Features: book cataloging, user management, and borrowing and return tracking.',
    role: 'Co-Developer',
    tech: ['PHP', 'MySQL (phpMyAdmin)', 'HTML', 'CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/lovieenrose/The-Catalog-Library-local-host-version' },
      { label: 'Live demo', url: '[Live demo: not hosted yet]' },
    ],
  },
  {
    title: 'Thrifster',
    subtitle: 'E-commerce Platform for Thrifted Clothing',
    period: 'March 2026 · 5-person team project',
    images: [
      {
        src: '/images/projects/thrifster-catalog.png',
        label: 'Product Catalog',
        caption: 'Product Catalog — Search, filter & browse thrifted items',
      },
      {
        src: '/images/projects/thrifster-details.png',
        label: 'Product Details',
        caption: 'Product Details — Item specifications, pricing & add-to-cart',
      },
    ],
    description:
      'A web-based platform for buying thrifted clothing, featuring product search and filtering, a session-based shopping cart, checkout, order history, and an admin dashboard for product and order management.',
    role: 'Co-Developer — Developed the Product Catalog and Product Details pages and collaborated on backend logic, CSS styling, and database design.',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'phpMyAdmin', 'JavaScript', 'CSS', 'Bootstrap'],
    links: [{ label: 'GitHub', url: '[GitHub link]' }],
  },
  {
    title: 'Dear Dango',
    subtitle: 'Mobile diary app for Android',
    period: '[Date / team size]',
    images: [
      {
        src: '/images/projects/dear-dango.png',
        label: 'Mobile Diary UI',
        caption: 'Android Mobile Diary & mood journaling interface',
      },
    ],
    description: 'A mobile diary app for Android. Features: [features]',
    role: '[role]',
    tech: ['Kotlin', 'Android Studio'],
    links: [{ label: 'GitHub', url: '[GitHub link]' }],
  },
]

export const certifications = [
  { name: 'Information Technology Specialist in Python', issuer: 'Certiport', date: 'Feb 2025' },
  { name: 'Cisco Certified Support Technician Networking (CCST Networking)', issuer: 'Cisco', date: 'Feb 2025' },
  { name: 'DevNet Associate (Course Completion)', issuer: 'Cisco Networking Academy', date: 'Apr 2026' },
  { name: 'PMI Project Management Ready', issuer: 'Project Management Institute', date: 'Mar 2026', note: 'Expires Mar 2031' },
  { name: 'Foundations of Project Management', issuer: 'Google', date: 'Jul 2026' },
  { name: 'Frontend: Git, HTML, CSS, and Bootstrap 5 (Course Completion)', issuer: 'Zuitt Coding Bootcamp', date: 'Jun 2023' },
  { name: 'CCNA: Introduction to Networks (Course Completion)', issuer: 'Cisco Networking Academy', date: 'Feb 2025' },
  { name: 'CCNA: Switching, Routing, and Wireless Essentials (Course Completion)', issuer: 'Cisco Networking Academy', date: 'Mar 2025' },
  { name: 'Linux Essentials (Course Completion)', issuer: 'Cisco Networking Academy', date: 'Dec 2025' },
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
