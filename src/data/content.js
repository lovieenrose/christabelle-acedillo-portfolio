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
    image: '/images/projects/prism-guard.svg', // Preview screenshot in public/images/projects/
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
      { label: 'Live Demo (Client Portal)', url: 'https://prism-guard.vercel.app/login' },
      { label: 'Live Demo (Promo Site)', url: 'https://psiai.vercel.app/' },
      { label: 'GitHub (Web)', url: 'https://github.com/PhonsekalLaure/prism-guard-web' },
      { label: 'GitHub (Mobile)', url: 'https://github.com/PhonsekalLaure/prism-guard-mobile' },
      { label: 'GitHub (API)', url: 'https://github.com/PhonsekalLaure/prism-guard-api' },
      { label: 'GitHub (Promo)', url: 'https://github.com/PhonsekalLaure/prism-guard-promo' },
    ],
  },
  {
    title: 'The Catalog Library',
    subtitle: 'Library Management System',
    period: '2-person team project · June – July 2025',
    image: '/images/projects/the-catalog-library.svg', // Preview screenshot in public/images/projects/
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
    subtitle: 'E-commerce platform for thrifted clothes',
    period: '[Date / team size]',
    image: '/images/projects/thrifster.svg', // Preview screenshot in public/images/projects/
    description: 'A web-based e-commerce platform for thrifted clothes.',
    role: 'Co-Developer. Built the add-to-cart feature.',
    tech: ['PHP', '[other technologies]'],
    links: [{ label: 'GitHub', url: '[GitHub link]' }],
  },
  {
    title: 'Dear Dango',
    subtitle: 'Mobile diary app for Android',
    period: '[Date / team size]',
    image: '/images/projects/dear-dango.svg', // Preview screenshot in public/images/projects/
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
    period: 'August 2023 – Expected [Month Year]',
  },
  {
    school: 'St. Patrick School of Quezon City',
    program: 'High School (STEM Strand)',
    period: '2017 – 2023',
    note: 'Graduated with High Honors',
  },
]
