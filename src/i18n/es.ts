import type { Translations } from "./types";

export const es: Translations = {
  layout: {
    title: "Andrés Enciso - Portafolio - Desarrollador Senior Full Stack",
    description:
      "Desarrollador senior con más de 6 años de experiencia construyendo y operando sistemas de software de extremo a extremo: backend, frontend, bases de datos e infraestructura cloud.",
  },
  hero: {
    name: "Andrés Enciso",
    label: "Desarrollador Senior Full Stack",
    availableBadge: "Disponible para trabajar",
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
    copiedText: "¡Copiado!",
  },
  about: {
    title: "Sobre mí",
    summary:
      "Desarrollador senior con más de 6 años de experiencia construyendo y operando sistemas de software de extremo a extremo: backend, frontend, bases de datos e infraestructura cloud. Actualmente lidero el desarrollo y la operación de microservicios en Java/Micronaut sobre AWS para una SOFOM E.N.R., sustentando productos de crédito, tarjetas y dispersiones SPEI en un entorno financiero regulado. Mi experiencia combina arquitectura backend (Java, Micronaut, Python, Node.js, PHP), frontend moderno (React, Vite), administración de AWS (ECS, RDS, Cognito, Secrets Manager, SSM, Route 53) y administración de bases de datos relacionales a escala (MySQL, SQL Server).",
  },
  experience: {
    title: "Experiencia",
    labels: {
      summary: "Resumen:",
      responsibilities: "Responsabilidades:",
      achievements: "Logros:",
      showMore: "Ver más",
      showLess: "Ver menos",
      present: "Actual",
    },
    items: [
      {
        name: "Percapita",
        position: "Desarrollador Full Stack",
        location_type: "Presencial",
        location: "Guadalajara, Jalisco, México",
        url: "https://percapita.mx/",
        startDate: "2025-11-01",
        endDate: null,
        summary:
          "Líder técnico del proyecto end-to-end de tarjeta de crédito en una SOFOM E.N.R., responsable de arquitectura, infraestructura y desarrollo de los servicios core del producto.",
        responsibilities: [
          "Diseño y desarrollo de microservicios en Java/Micronaut para emisión de tarjetas, ciclos de facturación, manejo de cuotas y aceptación de contratos de crédito.",
          "Arquitectura y administración de infraestructura en AWS: ECS Fargate, RDS MySQL (multi-ambiente), Cognito, Secrets Manager, SSM, Route 53 y ECR.",
          "Integración con múltiples plataformas financieras externas para emisión de tarjetas, procesamiento de pagos y dispersiones SPEI, incluyendo flujos OAuth, webhooks y validación de firmas HMAC-SHA256.",
          "Mantenimiento del sistema de originación de crédito a escala nacional, con esquemas para datos encriptados, KYC/PEP y verificación biométrica.",
          "Operación y resolución de incidentes del sistema de dispersiones SPEI, incluyendo reprocesos masivos y diagnóstico de rechazos.",
          "Desarrollo de frontend en React/Vite y componentes en Python/FastAPI.",
          "Implementación de consultas SQL para detección de fraude con análisis de proximidad geográfica (ST_Distance_Sphere) y reportería de solicitudes de crédito con joins complejos.",
        ],
        achievements: [
          "Liderazgo técnico del proyecto end-to-end de tarjeta de crédito.",
        ],
        skills: ["Java", "Micronaut", "AWS", "React", "Python"],
      },
      {
        name: "Tecnología y Diseño Industrial",
        position: "Administrador de Bases de Datos",
        location_type: "Presencial",
        location: "Zapopan, Jalisco, México",
        url: "https://www.tdi-sa.com/",
        startDate: "2024-06-01",
        endDate: "2025-10-01",
        summary:
          "Administración de bases de datos SQL Server para múltiples empresas del corporativo. Extracción de datos desde SAP Business One mediante consultas avanzadas para reportes gerenciales.",
        responsibilities: [
          "Administración de bases de datos SQL Server para múltiples empresas del corporativo.",
          "Extracción de datos desde SAP Business One mediante consultas avanzadas para reportes gerenciales.",
          "Desarrollo de dashboards e informes interactivos en Power BI orientados a inteligencia comercial.",
          "Soporte en auditorías internas y externas, con generación de reportes precisos y cumplimiento normativo.",
          "Colaboración con áreas clave para automatizar procesos y mejorar la trazabilidad de productos médicos.",
        ],
        achievements: [
          "Automatización de procesos y mejora de trazabilidad de productos médicos.",
        ],
        skills: ["SQL Server", "Power BI"],
      },
      {
        name: "SOCIALFLOW",
        position: "Desarrollador Full Stack",
        location_type: "Presencial",
        location: "Guadalajara, Jalisco, México",
        url: "https://www.socialflowapp.com/",
        startDate: "2024-04-01",
        endDate: "2024-05-01",
        summary:
          "Mantenimiento de aplicación móvil en producción con Vue.js, PHP y base de datos MySQL. Implementación de mejoras en la pasarela de pago e integración de nuevas funcionalidades.",
        responsibilities: [
          "Mantenimiento de aplicación móvil en producción con Vue.js, PHP y base de datos MySQL.",
          "Implementación de mejoras en la pasarela de pago e integración de nuevas funcionalidades.",
          "Participación en la primera fase de reconstrucción de la app usando tecnologías multiplataforma, optimizando estabilidad, rendimiento y escalabilidad.",
        ],
        achievements: [
          "Mejoras en pasarela de pago y reconstrucción de la app.",
        ],
        skills: ["Vue.js", "PHP", "MySQL"],
      },
      {
        name: "Ayuntamiento de Zapopan",
        position: "Desarrollador Full Stack",
        location_type: "Presencial",
        location: "Zapopan, Jalisco, México",
        url: "https://www.zapopan.gob.mx/v3/inicio",
        startDate: "2021-11-01",
        endDate: "2024-04-01",
        summary:
          "Desarrollo de aplicaciones web con PHP, JavaScript, jQuery, C# y .NET. Administración de bases de datos SQL y servidores Linux/Windows Server.",
        responsibilities: [
          "Desarrollo de aplicaciones web con PHP, JavaScript, jQuery, C# y .NET.",
          "Administración de bases de datos SQL y servidores Linux/Windows Server.",
          "Garantía de continuidad operativa de sistemas clave para servicios públicos digitales.",
          "Gestión de seguridad y disponibilidad de la infraestructura tecnológica municipal.",
        ],
        achievements: [
          "Continuidad operativa de servicios públicos digitales.",
        ],
        skills: ["PHP", "JavaScript", "C#", ".NET", "SQL"],
      },
      {
        name: "Voblakye",
        position: "Analista de Requerimientos | Desarrollador | Arquitecto de Software",
        location_type: "Remoto",
        location: "Guadalajara, Jalisco, México",
        url: "https://www.voblakye.com/",
        startDate: "2021-09-01",
        endDate: "2022-04-01",
        summary:
          "Liderazgo técnico en proyectos de software desde el levantamiento de requerimientos hasta la puesta en producción.",
        responsibilities: [
          "Liderazgo técnico en proyectos de software desde el levantamiento de requerimientos hasta la puesta en producción.",
          "Desarrollo de un sistema en tiempo real con Java y WebSocket para escucha de divisas en una plataforma de apuestas.",
          "Desarrollo de aplicaciones completas (frontend y backend) con Laravel y tecnologías web modernas.",
          "Levantamiento de requerimientos, seguimiento de actividades y reuniones con equipos, clientes y personal a cargo.",
          "Diseño de arquitecturas escalables y seguras, con enfoque en rendimiento y mantenibilidad.",
        ],
        achievements: [
          "Liderazgo end-to-end de proyectos de software.",
        ],
        skills: ["Laravel", "Java", "Jira", "Trello"],
      },
      {
        name: "Gobierno de Ocotlán",
        position: "Desarrollador Full Stack",
        location_type: "Presencial",
        location: "Ocotlán, Jalisco, México",
        url: "https://gobiernodeocotlan.gob.mx/",
        startDate: "2019-03-01",
        endDate: "2021-10-01",
        summary:
          "Desarrollo de soluciones a medida para procesos internos utilizando bases de datos y aplicaciones web.",
        responsibilities: [
          "Desarrollo de soluciones a medida para procesos internos utilizando bases de datos y aplicaciones web.",
          "Administración de servidores y monitoreo de servicios críticos.",
          "Aplicación de metodología Scrum para la gestión ágil de proyectos.",
          "Diseño e implementación de estructuras de base de datos relacionales.",
        ],
        achievements: [
          "Implementación de metodología Scrum en proyectos internos.",
        ],
        skills: ["SQL"],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: [
      {
        name: "Lenguajes",
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
        name: "Cloud y Bases de datos",
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
        name: "Herramientas",
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
    title: "Idiomas",
    items: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "B1-B2" },
    ],
  },
  education: {
    title: "Educación",
    certificatesTitle: "Certificados",
    labels: {
      showMore: "Ver más",
      showLess: "Ver menos",
    },
    education: [
      {
        institution: "Universidad de Guadalajara",
        url: "https://www.udg.mx",
        area: "Ingeniería en Informática",
        studyType: "Licenciatura",
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
        name: "Introducción a la IA Generativa",
        date: "2025-07-01",
        issuer: "Google Cloud Security",
        url: "",
      },
      {
        name: "Inicio y planificación de proyectos",
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
        name: "Desarrollo rápido de productos innovadores para mercados emergentes",
        date: "2025-10-01",
        issuer: "Tecnológico de Monterrey",
        url: "",
      },
      {
        name: "Analíticas y Métricas de Marketing",
        date: "2025-10-01",
        issuer: "Tecnológico de Monterrey",
        url: "",
      },
      {
        name: "Liderazgo Instruccional: Perspectiva Global y Prácticas Locales",
        date: "2025-10-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Camino a la Excelencia en Gestión de Proyectos",
        date: "2025-08-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Gestión Empresarial Exitosa para Pymes",
        date: "2025-07-01",
        issuer: "Pontificia Universidad Católica de Chile",
        url: "",
      },
      {
        name: "Curador de datos",
        date: "2019-04-01",
        issuer: "Capacítate para el empleo",
        url: "",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    labels: {
      visit: "Visitar proyecto",
      repo: "Ver repositorio",
      close: "Cerrar",
      showMore: "Ver más",
      showLess: "Ver menos",
    },
    items: [
      {
        name: "Portafolio Personal",
        isActive: true,
        description:
          "Portafolio web bilingüe (ES/EN) con soporte de temas, paleta de comandos, animaciones de scroll y optimización SEO. Construido con Astro, Tailwind CSS v4 y Alpine.js.",
        highlights: [
          "Sistema i18n con rutas dinámicas",
          "5 temas con modo claro/oscuro",
          "Exportable a PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Portafolio Personal 2",
        isActive: true,
        description:
          "Portafolio web bilingüe (ES/EN) con soporte de temas, paleta de comandos, animaciones de scroll y optimización SEO. Construido con Astro, Tailwind CSS v4 y Alpine.js.",
        highlights: [
          "Sistema i18n con rutas dinámicas",
          "5 temas con modo claro/oscuro",
          "Exportable a PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Portafolio Personal 3",
        isActive: true,
        description:
          "Portafolio web bilingüe (ES/EN) con soporte de temas, paleta de comandos, animaciones de scroll y optimización SEO. Construido con Astro, Tailwind CSS v4 y Alpine.js.",
        highlights: [
          "Sistema i18n con rutas dinámicas",
          "5 temas con modo claro/oscuro",
          "Exportable a PDF",
        ],
        url: "https://andresenciso.dev",
        github: "https://github.com/andres-enciso/dev-portfolio",
        image: "/projects/portfolio.png",
        skills: ["Astro", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Portafolio Personal 4",
        isActive: false,
        description:
          "Ejemplo sin imagen ni GitHub, solo con descripción y highlights para ver cómo se ve la card con el ícono de folder.",
        highlights: [
          "Feature uno",
          "Feature dos",
        ],
        url: "",
        skills: ["React", "Node.js", "Docker"],
      },
    ],
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    subtitle: "Contáctame y hagámoslo realidad",
    emailButton: "Enviar correo",
    linkedinButton: "Visitar LinkedIn",
  },
  footer: {
    cmdK: "Presiona Cmd + K para abrir la paleta de comandos.",
    printResume: "Imprimir CV",
    visitProfile: "Visitar",
  },
};
