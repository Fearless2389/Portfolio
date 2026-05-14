

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ruthvik Reddy Nagulapally",
    role: "Computer Science Student | AI/ML Enthusiast | Web Developer ",
    resumeUrl: "/resume.pdf",
    status: "SYSTEM ONLINE",
    location: "Hyderabad,Telangana,India",
    availability: "Open to Work",
    bio: [
      "Initializing profile data...",
      "I am a passionate computer science student specializing in ML systems and modern web architecture.",
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
      title: "ReLoopr",
      description: "Developed a full-stack sustainable marketplace with a real-time recommendation engine using Kafka, Redis, and FastAPI, enabling personalized suggestions for products and repair services based on user behavior.",
      techStack: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Apache Kafka", "REST APIs"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/Fearless2389/Circular-Economy-Marketplace",
      liveUrl: "#",
      // Optional category
      category: "Full Stack",
    },
    {
      id: "02",
      title: "F1 Race Outcome Prediction System",
      description: "Developed an end-to-end machine learning pipeline to predict Formula 1 race outcomes using 8+ years of historical data. Engineered features and trained models (Random Forest, SVM, Logistic Regression), achieving ~90% accuracy through hyperparameter tuning and k-fold cross-validation, and identifying key performance factors affecting race results.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib","Seaborn"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/Fearless2389/f1-ml",
      liveUrl: "https://github.com/Fearless2389/f1-ml",
      category: "ML",
    },
    {
      id: "03",
      title: "Scholr",
      description: "Built a full-stack student-teacher management system supporting assignment distribution, submission tracking, and deadline monitoring with role-based authentication. Designed to streamline academic workflows and enhance progress visibility.",
      techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/Fearless2389/Student-Assignment-Dashboard",
      liveUrl: "https://student-assignment-dashboard-mocha.vercel.app/",
      category: "Full Stack",
    },
    {
      id: "04",
      title: "Employee Attrition Analysis",
      description: `A machine learning project that combines classification and regression to help companies: Predict which employees are likely to leave, Estimate future salary of those who stay, Calculate the expected financial loss from attrition`,
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib","Seaborn"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/Fearless2389/Employee-Attrition-Analysis",
      liveUrl: "https://github.com/Fearless2389/Employee-Attrition-Analysis",
      category: "ML",
    },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Fearless2389", user: "Fearless2389" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nagulapally-ruthvik-reddy-713602266/", user: "Nagulapally Ruthvik Reddy" },
    { name: "Twitter", url: "#", user: "@dev_john" },
    { name: "Email", url: "mailto:ruthviknagulapally@gmail.com", user: "ruthviknagulapally@gmail.com" },
  ],
};
