/**
 * Static content for the portfolio.
 * Edit these arrays to update skills, experience, projects and education
 * without touching any HTML or rendering logic.
 */
export const skillsData = [
  {
    title: "Languages",
    desc: "Core programming languages I write daily.",
    items: [
      { name: "Python", color: "#4b8bbe" },
      { name: "JavaScript", color: "#f0db4f" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "C#", color: "#a179dc" },
    ]
  },
  {
    title: "Frontend",
    desc: "Building interfaces that feel fast and clean.",
    items: [
      { name: "React.js", color: "#61dafb" },
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#2965f1" },
      { name: "React Router", color: "#ca4245" },
      { name: "Redux", color: "#764abc" },
      { name: "Vite", color: "#ffca28" },
      { name: "Tailwind CSS", color: "#38bdf8" },
    ]
  },
  {
    title: "Backend",
    desc: "APIs, services, and the logic that ties it together.",
    items: [
      { name: "Node.js", color: "#68a063" },
      { name: "Express.js", color: "#8f8f8f" },
      { name: "ASP.NET Core", color: "#8a2be2" },
      { name: "REST APIs", color: "#f5b95c" },
      { name: "JWT Auth", color: "#e94e77" },
    ]
  },
  {
    title: "Databases",
    desc: "Relational when it should be, document when it shouldn't.",
    items: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47a248" },
      { name: "MySQL", color: "#00758f" },
      { name: "SQL Server", color: "#cc2927" },
    ]
  },
  {
    title: "Tools",
    desc: "Build it, test it, ship it.",
    items: [
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#8b92a8" },
      { name: "VS Code", color: "#007acc" },
      { name: "Postman", color: "#ff6c37" },
      { name: "Axios", color: "#5a29e4" },
    ]
  },
  {
    title: "Core CS",
    desc: "Fundamentals every solid engineer leans on.",
    items: [
      { name: "DSA", color: "#7c8cff" },
      { name: "OOP", color: "#5ecf9a" },
      { name: "DBMS", color: "#f5b95c" },
      { name: "Computer Networks", color: "#ef6f6f" },
      { name: "System Design Basics", color: "#82aaff" },
    ]
  }
];

export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    org: "Sofgen Infotech Private Limited",
    location: "Gurugram",
    period: "Feb 2026 — Jun 2026",
    bullets: [
      "Developed ERP modules end-to-end using React.js, C# and ASP.NET Core, backed by SQL Server.",
      "Built and integrated RESTful APIs to enable seamless communication between frontend and backend.",
      "Optimized SQL Server queries, improving overall database performance by ~20%.",
      "Collaborated with senior developers to debug production issues and improve application stability.",
      "Reduced manual data-entry errors by ~30% by automating key ERP workflows."
    ],
    tags: ["React.js", "C#", "ASP.NET Core", "SQL Server", "REST APIs"]
  },
  {
    role: "Web Development Intern",
    org: "UpToSkills",
    location: "New Delhi",
    period: "Jun 2025 — Sep 2025",
    bullets: [
      "Developed responsive Admin and Candidate dashboards using React.js and reusable UI components.",
      "Integrated REST APIs for real-time student management and progress tracking.",
      "Improved frontend performance by optimizing component rendering, cutting page load time by ~25%."
    ],
    tags: ["React.js", "REST APIs", "JavaScript", "CSS3"]
  }
];

export const projectsData = [
  {
    name: "Learnify",
    status: "live",
    desc: "A full-stack interview preparation platform with dedicated HR and Candidate dashboards, animated charts and secure REST APIs.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Framer Motion"],
    github: "https://github.com/Nandanisisodia/learnify-website",
    live: "https://learnify-website.vercel.app",
    image: "assets/images/Learnify.png"
  },
  {
    name: "ResumePro",
    status: "wip",
    desc: "A full-stack resume builder with JWT-based authentication, protected routes, and dynamic resume generation.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Nandanisisodia/resumepro",
    live: null,
    image: "assets/images/resumepro.png"
  }
];

export const educationData = [
  { title: "B.Tech, Computer Science Engineering", school: "NIMS University, Jaipur, Rajasthan", score: "CGPA 8.0", year: "2022 — 2026" },
  { title: "Class XII (PCMB), CBSE Board", school: "Rawal Public School, Faridabad, Haryana", score: "82.2%", year: "2022" },
  { title: "Class X, CBSE Board", school: "Rawal Public School, Faridabad, Haryana", score: "91.4%", year: "2020" }
];
