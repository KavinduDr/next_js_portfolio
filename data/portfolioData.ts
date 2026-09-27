export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  category: 'Security & Systems' | 'Full Stack Web' | 'AI & Cloud';
  features: string[];
  architecture: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Achievement {
  title: string;
  organizer: string;
  role: string;
  badge: 'trophy' | 'medal' | 'star';
  highlight?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const personalData = {
  name: "Kavindu Dhananjaya",
  title: "Computer Engineering Graduate & Software Engineer",
  location: "Anuradhapura, Sri Lanka",
  email: "rmkavindudhananjaya@gmail.com",
  phone: "+94 72 362 4661",
  github: "https://github.com/KavinduDr",
  linkedin: "https://linkedin.com/in/kavindu-dhananjaya-2b039b233/",
  summary: "Motivated BSc (Hons) Computer Engineering fresh graduate with a strong foundation in networking, systems programming, microservices, and cloud-native platforms. Former Software Engineering Intern at WSO2 Lanka with a focus on building security frameworks, scalable web applications, and developer experience tools.",
  education: {
    degree: "BSc (Hons) in Engineering – Computer Engineering",
    university: "University of Ruhuna",
    faculty: "Faculty of Engineering",
    period: "2022 – 2026",
    location: "Galle, Sri Lanka"
  },
  stats: [
    { label: "Degree Focus", value: "Computer Eng." },
    { label: "WSO2 Internship", value: "6 Months" },
    { label: "Major Projects", value: "5+" },
    { label: "Hackathon Podia", value: "2x Runner-Up" }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    company: "WSO2 Lanka (Pvt) Ltd",
    role: "Software Engineering Intern",
    period: "May 2025 – Nov 2025",
    location: "Colombo, Sri Lanka",
    description: "Contributed to OpenChoreo, an internal developer platform (IDP) designed to streamline cloud-native application deployment and developer workflow.",
    highlights: [
      "Engineered developer experience tools that hide complex infrastructure management.",
      "Integrated zero-trust security controls and automated ingress/egress API management.",
      "Implemented software catalog discoverability and built-in observability telemetry.",
      "Developed using Backstage framework within a modern Yarn mono-repo ecosystem."
    ],
    techStack: ["Backstage", "Yarn", "TypeScript", "React", "Cloud Native", "API Management", "Zero Trust"]
  }
];

export const projects: Project[] = [
  {
    id: "cas-framework",
    title: "CAS - Context-Aware Security Framework",
    year: "2026",
    summary: "Context-Aware Application Security Framework developed as the Final Year Project featuring built-in scanning engines for cloud-native applications.",
    category: "Security & Systems",
    features: [
      "User-friendly web dashboard with cloud-based account management",
      "High-performance Rust-based core analysis engine",
      "Integrated Static Application Security Testing (SAST)",
      "Software Composition Analysis (SCA) & Dynamic Testing (DAST) modules",
      "Microservices architecture for decoupled scanning workers"
    ],
    architecture: "Microservices using Rust, Go, & Node.js",
    techStack: ["Rust", "Go", "TypeScript", "Microservices", "Docker", "SAST/DAST", "Cloud Security"],
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://cas-framework.demo"
  },
  {
    id: "open-choreo",
    title: "OpenChoreo - Internal Developer Platform",
    year: "2025",
    summary: "Internal Developer Platform developed during software engineering internship at WSO2 Lanka to optimize developer experience.",
    category: "AI & Cloud",
    features: [
      "Design clarity for cloud-native application topologies",
      "Developer abstraction layer hiding raw cloud infrastructure complexity",
      "Built-in ingress/egress API management & discovery catalog",
      "Zero-trust security policies and out-of-the-box observability",
      "Separation of concerns between application developers & platform engineers"
    ],
    architecture: "Backstage-based plugin ecosystem with Yarn",
    techStack: ["Backstage", "TypeScript", "Yarn", "Kubernetes", "API Gateways", "Zero Trust"],
    featured: true,
    githubUrl: "https://github.com"
  },
  {
    id: "math-quest",
    title: "MathQuest - Real-Time Quiz Platform",
    year: "2025",
    summary: "Interactive live quiz platform created for the Rextro Exhibition at Faculty of Engineering, University of Ruhuna.",
    category: "Full Stack Web",
    features: [
      "Live question posting and real-time student answering system",
      "Cloud-based user accounts and interactive score leaderboards",
      "Responsive, low-latency user interface for high-concurrency event usage"
    ],
    architecture: "Next.js App Router with Server Actions & WebSockets",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://mathquest.demo"
  },
  {
    id: "gov-pulse",
    title: "GovPulse - AI Public Issue Prioritization",
    year: "2024",
    summary: "AI-driven civic platform enhancing Sri Lankan government efficiency through transparent issue tracking and intelligent prioritization.",
    category: "AI & Cloud",
    features: [
      "Transparent civic issue logging and geographical visibility",
      "Intelligent AI ranking system for multi-factor priority sorting",
      "Community upvoting and verification system to highlight urgent public concerns"
    ],
    architecture: "React SPA connected to Python AI microservice",
    techStack: ["React", "Python", "Node.js", "Tailwind CSS", "AI/ML Models"],
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://govpulse.demo"
  },
  {
    id: "games4u",
    title: "Games4U - E-Commerce Game Marketplace",
    year: "2024",
    summary: "Full-stack gaming store platform allowing gamers to browse, search, and purchase video games smoothly.",
    category: "Full Stack Web",
    features: [
      "RAWG API integration fetching thousands of live video game entries",
      "Seamless shopping cart and state management using Redux Toolkit",
      "Optimized search, filter, and responsive checkout UI"
    ],
    architecture: "MERN Stack (MongoDB, Express, React, Node)",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Redux", "RAWG API"],
    featured: false,
    githubUrl: "https://github.com"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Rust", "C++", "Go", "Java", "C#", "Dart", "C", "SQL", ".NET"]
  },
  {
    category: "Frameworks & Web",
    skills: ["React", "Next.js", "Node.js", "Express", "MERN Stack", "Backstage", "Tailwind CSS", "Redux", "Axios"]
  },
  {
    category: "Cloud, Security & Systems",
    skills: ["Microservices", "Rust Security Engines", "SAST / SCA / DAST", "Zero Trust Security", "API Management", "Cloud Native", "Linux", "Kali Linux"]
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase", "VS Code", "Visual Studio", "IntelliJ IDEA", "Android Studio", "Cisco Packet Tracer", "Photoshop", "Canva"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "First Runner Up - Tech-triathlon 2024",
    organizer: "Rootcode",
    role: "Lead Developer / Team Member",
    badge: "trophy",
    highlight: true
  },
  {
    title: "First Runner Up - AI-Sprint 2024",
    organizer: "Powered by Sysco Labs",
    role: "AI & Full-Stack Developer",
    badge: "trophy",
    highlight: true
  },
  {
    title: "Finalist - Dextron 1.0 Competition",
    organizer: "Institute of Technology, University of Moratuwa",
    role: "Hardware & Software Integration",
    badge: "medal",
    highlight: true
  },
  {
    title: "IEEE Xtreme 18.0 Region 10 Participant",
    organizer: "IEEE Xtreme 18.0",
    role: "Competitive Programmer",
    badge: "star"
  },
  {
    title: "RedCypher 1.0 Hackathon Participant",
    organizer: "IEEE Student Branch, University of Ruhuna",
    role: "Cybersecurity & Systems Participant",
    badge: "star"
  },
  {
    title: "MoraXtreme 9.0 Competition Participant",
    organizer: "IEEE Student Branch, University of Moratuwa",
    role: "Algorithmic Problem Solver",
    badge: "star"
  }
];

export const certifications: Certification[] = [
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2023"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023"
  },
  {
    title: "Python (Basic) Certification",
    issuer: "HackerRank",
    year: "2024"
  },
  {
    title: "Professional Certificate in Agile & Scrum",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Java Programming Bootcamp",
    issuer: "Udemy",
    year: "2025"
  }
];
