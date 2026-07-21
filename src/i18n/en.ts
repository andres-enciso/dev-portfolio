import type { Translations } from "./types";

export const en: Translations = {
  layout: {
    title: "Andrés Enciso - Portfolio - Senior Full Stack Developer",
    description:
      "Senior developer with 6+ years of experience building and operating end-to-end software systems: backend, frontend, databases, and cloud infrastructure.",
  },
  hero: {
    name: "Andrés Enciso",
    label: "Senior Full Stack Developer",
    availableBadge: "Available for work",
    image: "/me_avatar.jpg",
    city: "Guadalajara",
    region: "Jalisco",
    email: "andresenciso20@gmail.com",
    phone: "+52 3323214058",
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/andres-enciso7u",
      },
      { network: "GitHub", url: "https://github.com/andres-enciso" },
    ],
    copiedText: "Copied!",
  },
  about: {
    title: "About",
    summary:
      "Senior developer with 6+ years of experience building and operating end-to-end software systems: backend, frontend, databases, and cloud infrastructure. Currently leading the development and operation of Java/Micronaut microservices on AWS for a regulated financial institution (SOFOM E.N.R.), supporting credit products, card issuance, and SPEI disbursements. My expertise combines backend architecture (Java, Micronaut, Python, Node.js, PHP), modern frontend (React, Vite), AWS administration (ECS, RDS, Cognito, Secrets Manager, SSM, Route 53), and relational database management at scale (MySQL, SQL Server).",
  },
  experience: {
    title: "Experience",
    labels: {
      summary: "Summary:",
      responsibilities: "Responsibilities:",
      achievements: "Achievements:",
      showMore: "Show more",
      showLess: "Show less",
      present: "Present",
    },
    items: [
      {
        name: "Percapita",
        position: "Full Stack Developer",
        location_type: "On site",
        location: "Guadalajara, Jalisco, Mexico",
        url: "https://percapita.mx/",
        startDate: "2025-11-01",
        endDate: null,
        summary:
          "Technical lead for the end-to-end credit card project at a SOFOM E.N.R., responsible for architecture, infrastructure, and core product service development.",
        responsibilities: [
          "Design and development of Java/Micronaut microservices for card issuance, billing cycles, installment management, and credit agreement acceptance.",
          "Architecture and administration of AWS infrastructure: ECS Fargate, RDS MySQL (multi-environment), Cognito, Secrets Manager, SSM, Route 53, and ECR.",
          "Integration with multiple external financial platforms for card issuance, payment processing, and SPEI disbursements, including OAuth flows, webhooks, and HMAC-SHA256 signature validation.",
          "Maintenance of the national-scale credit origination system, with schemas for encrypted data, KYC/PEP, and biometric verification.",
          "Operation and incident resolution for the SPEI disbursement system, including bulk reprocessing and rejection diagnostics.",
          "Frontend development with React/Vite and Python/FastAPI component development.",
          "Implementation of SQL queries for fraud detection using geographic proximity analysis (ST_Distance_Sphere) and credit application reporting with complex joins.",
        ],
        achievements: [
          "Technical leadership of the end-to-end credit card project.",
        ],
        skills: ["Java", "Micronaut", "AWS", "React", "Python"],
      },
      {
        name: "Tecnología y Diseño Industrial",
        position: "Database Administrator",
        location_type: "On site",
        location: "Zapopan, Jalisco, Mexico",
        url: "https://www.tdi-sa.com/",
        startDate: "2024-06-01",
        endDate: "2025-10-01",
        summary:
          "SQL Server database administration for multiple corporate entities. Data extraction from SAP Business One through advanced queries for management reports.",
        responsibilities: [
          "SQL Server database administration for multiple corporate entities.",
          "Data extraction from SAP Business One through advanced queries for management reports.",
          "Development of interactive dashboards and reports in Power BI for business intelligence.",
          "Support for internal and external audits, with accurate report generation and regulatory compliance.",
          "Collaboration with key departments to automate processes and improve medical product traceability.",
        ],
        achievements: [
          "Process automation and improved medical product traceability.",
        ],
        skills: ["SQL Server", "Power BI"],
      },
      {
        name: "SOCIALFLOW",
        position: "Full Stack Developer",
        location_type: "On site",
        location: "Guadalajara, Jalisco, Mexico",
        url: "https://www.socialflowapp.com/",
        startDate: "2024-04-01",
        endDate: "2024-05-01",
        summary:
          "Maintenance of a production mobile application with Vue.js, PHP, and MySQL database. Implementation of payment gateway improvements and new feature integration.",
        responsibilities: [
          "Maintenance of a production mobile application with Vue.js, PHP, and MySQL database.",
          "Implementation of payment gateway improvements and new feature integration.",
          "Participation in the first phase of app reconstruction using cross-platform technologies, optimizing stability, performance, and scalability.",
        ],
        achievements: [
          "Payment gateway improvements and app reconstruction.",
        ],
        skills: ["Vue.js", "PHP", "MySQL"],
      },
      {
        name: "Municipality of Zapopan",
        position: "Full Stack Developer",
        location_type: "On site",
        location: "Zapopan, Jalisco, Mexico",
        url: "https://www.zapopan.gob.mx/v3/inicio",
        startDate: "2021-11-01",
        endDate: "2024-04-01",
        summary:
          "Web application development with PHP, JavaScript, jQuery, C#, and .NET. SQL database and Linux/Windows Server administration.",
        responsibilities: [
          "Web application development with PHP, JavaScript, jQuery, C#, and .NET.",
          "SQL database and Linux/Windows Server administration.",
          "Ensuring operational continuity of key systems for digital public services.",
          "Security and availability management of municipal technology infrastructure.",
        ],
        achievements: [
          "Operational continuity of digital public services.",
        ],
        skills: ["PHP", "JavaScript", "C#", ".NET", "SQL"],
      },
      {
        name: "Voblakye",
        position: "Requirements Analyst | Developer | Software Architect",
        location_type: "Remote",
        location: "Guadalajara, Jalisco, Mexico",
        url: "https://www.voblakye.com/",
        startDate: "2021-09-01",
        endDate: "2022-04-01",
        summary:
          "Technical leadership in software projects from requirements gathering to production deployment.",
        responsibilities: [
          "Technical leadership in software projects from requirements gathering to production deployment.",
          "Development of a real-time system with Java and WebSocket for currency listening on a betting platform.",
          "Full application development (frontend and backend) with Laravel and modern web technologies.",
          "Requirements gathering, activity tracking, and meetings with teams, clients, and direct reports.",
          "Design of scalable and secure architectures focused on performance and maintainability.",
        ],
        achievements: [
          "End-to-end leadership of software projects.",
        ],
        skills: ["Laravel", "Java", "Jira", "Trello"],
      },
      {
        name: "Government of Ocotlán",
        position: "Full Stack Developer",
        location_type: "On site",
        location: "Ocotlán, Jalisco, Mexico",
        url: "https://gobiernodeocotlan.gob.mx/",
        startDate: "2019-03-01",
        endDate: "2021-10-01",
        summary:
          "Development of custom solutions for internal processes using databases and web applications.",
        responsibilities: [
          "Development of custom solutions for internal processes using databases and web applications.",
          "Server administration and critical service monitoring.",
          "Application of Scrum methodology for agile project management.",
          "Design and implementation of relational database structures.",
        ],
        achievements: [
          "Implementation of Scrum methodology for internal projects.",
        ],
        skills: ["SQL"],
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Languages",
        items: [
          { name: "Java" },
          { name: "Python" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "PHP" },
          { name: "C#" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "SQL" },
        ],
      },
      {
        name: "Frameworks",
        items: [
          { name: "React" },
          { name: "React Native" },
          { name: "Node.js" },
          { name: "Vue.js" },
          { name: "Micronaut" },
          { name: ".NET" },
          { name: "Laravel" },
          { name: "FastAPI" },
          { name: "Tailwind CSS" },
          { name: "Bootstrap" },
          { name: "Astro" },
          { name: "Alpine.js" },
          { name: "Vite" },
          { name: "Express" },
          { name: "jQuery" },
        ],
      },
      {
        name: "Cloud & Databases",
        items: [
          { name: "AWS" },
          { name: "Google Cloud" },
          { name: "MySQL" },
          { name: "SQL Server" },
          { name: "PostgreSQL" },
          { name: "MongoDB" },
          { name: "Linux" },
          { name: "Windows Server" },
          { name: "Nginx" },
        ],
      },
      {
        name: "Tools",
        items: [
          { name: "Docker" },
          { name: "Git" },
          { name: "GitHub" },
          { name: "Power BI" },
          { name: "SAP B1" },
          { name: "Postman" },
          { name: "Jira" },
          { name: "Trello" },
          { name: "Figma" },
          { name: "Notion" },
          { name: "Scrum" },
        ],
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "B1-B2" },
    ],
  },
  education: {
    title: "Education",
    certificatesTitle: "Certificates",
    labels: {
      showMore: "Show more",
      showLess: "Show less",
    },
    education: [
      {
        institution: "Universidad de Guadalajara",
        url: "https://www.udg.mx",
        area: "Computer Science Engineering",
        studyType: "Bachelor's Degree",
        startDate: "2015-08-01",
        endDate: "2019-07-01",
      },
    ],
    mainCertificates: [
      {
        name: "Google Cloud Fundamentals: Core Infrastructure",
        date: "2025-10-01",
        issuer: "Google Cloud Skills Boost",
        url: "",
      },
      {
        name: "Introduction to Cybersecurity",
        date: "2025-06-01",
        issuer: "Cisco",
        url: "",
      },
      {
        name: "Introduction to Generative AI",
        date: "2025-07-01",
        issuer: "Google Cloud Security",
        url: "",
      },
      {
        name: "Project Initiation and Planning",
        date: "2025-10-01",
        issuer: "University of California, Irvine",
        url: "",
      },
      {
        name: "Business Implications of AI: A Nano-course",
        date: "2025-10-01",
        issuer: "EIT Digital Master School",
        url: "",
      },
    ],
    otherCertificates: [
      {
        name: "Rapid Development of Innovative Products for Emerging Markets",
        date: "2025-10-01",
        issuer: "Tecnológico de Monterrey",
        url: "",
      },
      {
        name: "Marketing Analytics and Metrics",
        date: "2025-10-01",
        issuer: "Tecnológico de Monterrey",
        url: "",
      },
      {
        name: "Instructional Leadership: Global Perspective and Local Practices",
        date: "2025-10-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Path to Excellence in Project Management",
        date: "2025-08-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Successful Business Management for SMEs",
        date: "2025-07-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Data Curator",
        date: "2019-04-01",
        issuer: "Capacítate para el empleo",
        url: "",
      },
    ],
  },
  projects: {
    title: "Projects",
    labels: {
      visit: "Visit project",
      repo: "View repository",
      close: "Close",
      showMore: "Show more",
      showLess: "Show less",
    },
    items: [
      {
        name: "Personal Portfolio",
        isActive: true,
        description:
          "Bilingual (ES/EN) portfolio website with theme support, command palette, scroll animations, and SEO optimization. Built with Astro, Tailwind CSS v4, and Alpine.js.",
        highlights: [
          "i18n system with dynamic routes",
          "5 themes with light/dark mode",
          "Exportable to PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Personal Portfolio 2",
        isActive: true,
        description:
          "Bilingual (ES/EN) portfolio website with theme support, command palette, scroll animations, and SEO optimization. Built with Astro, Tailwind CSS v4, and Alpine.js.",
        highlights: [
          "i18n system with dynamic routes",
          "5 themes with light/dark mode",
          "Exportable to PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Personal Portfolio 3",
        isActive: true,
        description:
          "Bilingual (ES/EN) portfolio website with theme support, command palette, scroll animations, and SEO optimization. Built with Astro, Tailwind CSS v4, and Alpine.js.",
        highlights: [
          "i18n system with dynamic routes",
          "5 themes with light/dark mode",
          "Exportable to PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Personal Portfolio 4",
        isActive: false,
        description:
          "Example without image or GitHub, just description and highlights to see the folder icon card style.",
        highlights: [
          "Feature one",
          "Feature two",
        ],
        url: "",
        skills: ["React", "Node.js", "Docker"],
      },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    subtitle: "Let's make it happen",
    emailButton: "Send email",
    linkedinButton: "Visit LinkedIn",
  },
  footer: {
    cmdK: "Press Cmd + K to open the command palette.",
    printResume: "Print Resume",
    visitProfile: "Visit",
  },
};
