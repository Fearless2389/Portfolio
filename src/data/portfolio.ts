

export const PORTFOLIO_DATA = {
  profile: {
    name: "John Doe",
    role: "Computer Science Engineer | Full Stack Developer",
    status: "SYSTEM ONLINE",
    location: "Global",
    availability: "Open to Work",
    bio: [
      "Initializing profile data...",
      "I am a passionate software engineering student specializing in scalable systems and modern web architecture.",
      "Dedicated to writing clean, optimized code and building highly interactive user experiences.",
      "Seeking internship opportunities to deploy my skills in a high-impact environment."
    ],
  },
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Go", "C++", "Java"],
    frontend: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Three.js"],
    backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis"],
    devtools: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
  },
  projects: [
    {
      id: "01",
      title: "Neon Nexus E-Commerce",
      description: "A high-performance e-commerce platform with real-time inventory management and secure payment processing.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      // Optional category
      category: "Full Stack",
    },
    {
      id: "02",
      title: "DataStream Analytics",
      description: "A real-time analytics dashboard rendering complex datasets into interactive visual charts.",
      techStack: ["React", "D3.js", "Node.js", "WebSockets", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Frontend/Data",
    },
    {
      id: "03",
      title: "CyberSec Anomaly Detector",
      description: "Machine learning backend tool to detect unusual network traffic patterns and alert administrators.",
      techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Backend/ML",
    },
    {
      id: "04",
      title: "TaskMaster CLI",
      description: "A rust-based command-line interface tool for developers to manage workflow and CI/CD triggers locally.",
      techStack: ["Rust", "Clap", "Tokio"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Systems",
    },
  ],
  socials: [
    { name: "GitHub", url: "#", user: "john-doe" },
    { name: "LinkedIn", url: "#", user: "johndoe-engineer" },
    { name: "Twitter", url: "#", user: "@dev_john" },
    { name: "Email", url: "mailto:hello@example.com", user: "hello@example.com" },
  ],
};
