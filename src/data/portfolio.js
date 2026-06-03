export const portfolioData = {
  name: "Asad Ijaz",
  title: "Full Stack Developer",
  location: "Islamabad, Pakistan",
  email: "asadsulehery402@gmail.com",
  phone: "+92 304 1547284",
  github: "https://github.com/asadijaz402",
  linkedin: "https://www.linkedin.com/in/asadijaz402/",
  avatar: "https://avatars.githubusercontent.com/u/69760960?v=4",
  summary:
    "4+ years building scalable web applications & RESTful APIs. Specialising in NestJS, ReactJS & NodeJS — from real-time features to complex payment integrations.",
  stats: [
    { num: "4+", label: "Years Experience" },
    { num: "100K+", label: "Users Served" },
    { num: "50%", label: "Dev Time Saved" },
    { num: "30%", label: "Faster APIs" },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Idea Mappers",
      period: "APR 2025 – Present",
      bullets: [
        "Scaled features for a product serving 100K+ users.",
        "Processed large datasets using queue-based architectures for campaign applications.",
        "Built contract management workflows supporting 100+ concurrent contract generations.",
        "Implemented workflow orchestration with Temporal; state management with Redux.",
        "Improved monitoring and error tracking through Sentry integration.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Logic Powered Solutions",
      period: "Feb 2024 – APR 2025",
      bullets: [
        "Optimised API performance with async operations — cut response times by 50%.",
        "Designed NestJS Guards to protect routes and improve authorisation logic.",
        "Implemented WebSocket real-time notifications for live user updates.",
        "Integrated Zoom API via React & Node.js; Google API for email automation (−20% manual effort).",
        "Developed Stripe subscription system: recurring, quantity-based & usage-based billing.",
        "Applied OCR (Tesseract + GPT API) to automate data extraction and manual entry.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Hayan Systems",
      period: "Jul 2022 – Mar 2024",
      bullets: [
        "Built secure Node.js auth APIs with OAuth — reduced login time by 25%.",
        "Integrated Stripe payment gateway; reduced cart abandonment by 15%.",
        "Optimised API payloads and DB queries — 15% system performance boost.",
        "Designed scalable database schemas for small and medium-scale projects.",
      ],
    },
    {
      role: "ReactJS Developer",
      company: "Ford Solution",
      period: "Feb 2022 – Apr 2022",
      bullets: [
        "Integrated REST APIs into ReactJS/NextJS front-ends; improved data sync by 10%.",
        "Implemented SSR in NextJS — drove 20% organic traffic increase.",
        "Pixel-perfect Figma → MUI/SCSS implementation across devices.",
        "Migrated Next.js v10 → v13 (Webpack → SWC): 300% faster builds, 50% shorter CI/CD.",
      ],
    },
  ],
  skills: [
    { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++"] },
    {
      group: "Front-End",
      items: ["ReactJS", "NextJS", "Tailwind CSS", "Material UI", "SASS", "Bootstrap"],
    },
    {
      group: "Back-End",
      items: ["NestJS", "NodeJS", "ExpressJS", "WebSockets", "REST APIs"],
    },
    { group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    {
      group: "Integrations",
      items: [
        "Stripe",
        "Zoom API",
        "Google API",
        "OAuth",
        "Tesseract OCR",
        "Temporal",
        "Sentry",
        "Redux",
      ],
    },
  ],
  projects: [
    {
      num: "01",
      title: "Breshna — Sandbox Game Platform",
      desc: "Collaborative sandbox game platform where users create and play custom games. Built with state-management-first architecture and responsive interactive UI.",
      tech: ["NextJS", "NodeJS", "Redux", "MUI", "SCSS"],
    },
    {
      num: "02",
      title: "Jamooriat — Social Platform",
      desc: "Real-time social platform with live chat via WebSockets, dynamic API-driven content, and an interactive comment module for fast data retrieval.",
      tech: ["NextJS", "WebSockets", "REST APIs", "Material UI"],
    },
    {
      num: "03",
      title: "Enterprise Contract Management",
      desc: "High-throughput contract generation supporting 100+ concurrent workflows. Orchestrated with Temporal, monitored via Sentry, serving a 100K+ user base.",
      tech: ["NestJS", "Temporal", "Redux", "Sentry"],
    },
  ],
  education: {
    degree: "B.S. Software Engineering",
    school: "COMSATS University Islamabad, Wah Campus",
    year: "2022",
    courses:
      "Scripting Languages · Software Design & Analysis · Object-Oriented Software Engineering\nProject Management · Computer Networking · Database Systems",
  },
};

export const NAV_LINKS = ["Experience", "Skills", "Projects", "Contact"];
