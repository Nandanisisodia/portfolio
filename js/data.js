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
      { name: "SQL", color: "#e38c00" },
      { name: "HTML5", color: "#e34f26" },
      { name: "CSS3", color: "#2965f1" },
    ]
  },
  {
    title: "Frontend",
    desc: "Building interfaces that feel fast and clean.",
    items: [
      { name: "React.js", color: "#61dafb" },
      { name: "Redux", color: "#764abc" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "React Router", color: "#ca4245" },
      { name: "Vite", color: "#ffca28" },
      { name: "Responsive Web Design", color: "#22c1c3" },
    ]
  },
  {
    title: "Backend",
    desc: "APIs, services, and the logic that ties it together.",
    items: [
      { name: "Node.js", color: "#68a063" },
      { name: "Express.js", color: "#8f8f8f" },
      { name: "ASP.NET Core", color: "#8a2be2" },
      { name: "FastAPI", color: "#009688" },
      { name: "RESTful API Design", color: "#f5b95c" },
      { name: "JWT / bcrypt Auth", color: "#e94e77" },
    ]
  },
  {
    title: "AI / ML",
    desc: "Building applications that reason over real data.",
    items: [
      { name: "RAG Pipelines", color: "#f55036" },
      { name: "LLM Integration (Groq)", color: "#7c8cff" },
      { name: "FAISS Vector Search", color: "#82aaff" },
      { name: "Sentence-Transformers", color: "#c792ea" },
      { name: "PyPDF", color: "#e34f26" },
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
    title: "Tools & Platforms",
    desc: "Build it, test it, ship it.",
    items: [
      { name: "Git", color: "#f05032" },
      { name: "GitHub", color: "#8b92a8" },
      { name: "Vercel", color: "#e9e9e9" },
      { name: "Render", color: "#6cc7a1" },
      { name: "Docker", color: "#2496ed" },
      { name: "VS Code", color: "#007acc" },
      { name: "Postman", color: "#ff6c37" },
    ]
  },
  {
    title: "AI & CLI Tooling",
    desc: "Shipping faster by pairing with AI-native dev tools.",
    items: [
      { name: "Claude Code CLI", color: "#d97757" },
      { name: "Gemini CLI", color: "#8ab4f8" },
      { name: "Groq Llama 3.3 API", color: "#f55036" },
      { name: "Antigravity", color: "#7c8cff" },
      { name: "Codex", color: "#5ecf9a" },
    ]
  },
  {
    title: "Core CS & Concepts",
    desc: "Fundamentals every solid engineer leans on.",
    items: [
      { name: "DSA", color: "#7c8cff" },
      { name: "OOP", color: "#5ecf9a" },
      { name: "DBMS", color: "#f5b95c" },
      { name: "MERN Stack", color: "#61dafb" },
      { name: "CRUD Architecture", color: "#82aaff" },
      { name: "Role-Based Access Control", color: "#ef6f6f" },
      { name: "Agile Collaboration", color: "#c792ea" },
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
      "Developed ERP modules using React.js, C#, ASP.NET Core and SQL Server for core business workflows.",
      "Built and integrated RESTful APIs enabling seamless communication between frontend and backend systems.",
      "Optimized SQL Server queries, improving database performance by 20%.",
      "Reduced manual data-entry errors by ~30% by implementing automated ERP workflows.",
      "Collaborated with senior developers to debug production issues and improve application stability."
    ],
    tags: ["React.js", "C#", "ASP.NET Core", "SQL Server", "RESTful APIs"]
  },
  {
    role: "Web Development Intern",
    org: "UpToSkills",
    location: "New Delhi",
    period: "Jun 2025 — Sep 2025",
    bullets: [
      "Developed responsive Admin and Candidate dashboards using React.js and reusable UI components.",
      "Integrated REST APIs for real-time student management and progress tracking.",
      "Improved frontend performance by optimizing component rendering, cutting page load time by 25%."
    ],
    tags: ["React.js", "REST APIs", "JavaScript", "CSS3"]
  }
];

export const projectsData = [
  {
    name: "Learnify",
    status: "live",
    desc: "A full-stack HR assessment & learning platform with role-based authentication, a rule-based HR-answer scoring engine (keyword matching, STAR-method detection), and a 12+ module Admin Panel backed by a 16-table PostgreSQL schema.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "bcrypt"],
    github: "https://github.com/Nandanisisodia/learnify-website",
    live: "https://learnify-website.vercel.app",
    image: "assets/images/Learnify.png"
  },
  {
    name: "DishGPT",
    status: "live",
    desc: "An AI-powered recipe recommendation platform built on Groq's Llama 3.3 API with structured JSON-mode prompting, a real-time ingredient-matching engine, and a 3-tier fallback system (AI-first, curated database, offline cache) for graceful degradation.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Groq Llama 3.3 API", "JWT"],
    github: "https://github.com/Nandanisisodia/dishGPT",
    live: "https://dish-gpt-tau.vercel.app/",
    image: "assets/images/DishGPT.png"
  },
  {
    name: "GenAI Knowledge Base API",
    status: "wip",
    desc: "A production-grade RAG (Retrieval-Augmented Generation) pipeline with a FastAPI backend and a React (Vite) frontend — upload multiple PDFs and ask natural-language questions answered with source citations, backed by a persistent FAISS vector index and local sentence-transformer embeddings.",
    tags: ["FastAPI", "React (Vite)", "FAISS", "Groq LLM", "Sentence-Transformers"],
    github: "https://github.com/Nandanisisodia/genAI-knowledge-base",
    live: null,
    image: "assets/images/GenAIKnowledgeBase.png"
  },
  {
    name: "ResumePro",
    status: "live",
    desc: "A full-stack resume builder supporting 3 templates (2 ATS-optimized) with a dynamic multi-section editor, real-time live preview, and dual PDF export pipelines — styled client-side rendering plus a jsPDF text-based ATS-compliant export.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Nandanisisodia/resumepro",
    live: "https://resumepro-nandani.vercel.app/",
    image: "assets/images/resumepro.png"
  }
];

export const educationData = [
  { title: "B.Tech, Computer Science Engineering", school: "NIMS University, Jaipur, Rajasthan", score: "CGPA 8.0", year: "2022 — 2026" },
  { title: "Class XII (PCMB), CBSE Board", school: "Rawal Public School, Faridabad, Haryana", score: "82.2%", year: "2022" },
  { title: "Class X, CBSE Board", school: "Rawal Public School, Faridabad, Haryana", score: "91.4%", year: "2020" }
];
