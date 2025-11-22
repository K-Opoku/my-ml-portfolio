export const SITE_DATA = {
  brand: {
    name: "Kofi Opoku",
    initials: "KO",
    role: "Machine Learning Engineer",
    tagline: "I turn data into deployed software.",
    bio: "Specializing in MLOps, Inference Optimization, and Scalable AI Infrastructure.",
    email: "kofi.opoku@example.com",
    github: "https://github.com/K-Opoku",
    linkedin: "https://www.linkedin.com/in/kofi-opoku/",
    resume: "/resume.pdf",
    status: "Available for Global Contracts",
    location: "Accra, Ghana"
  },

  hero: {
    h1: "Deploying Intelligence.",
    sub: "I bridge the gap between Jupyter Notebooks and Production Kubernetes clusters. Building high-performance, scalable ML systems that deliver real-world business impact."
  },

  stats: [
    { label: "Production Models", value: "12" },
    { label: "Uptime Maintained", value: "99.9%" },
    { label: "Avg Latency", value: "<45ms" }
  ],

  skills: [
    { name: "Python & PyTorch", icon: "🐍" },
    { name: "Docker & K8s", icon: "🐳" },
    { name: "FastAPI", icon: "⚡" },
    { name: "AWS SageMaker", icon: "☁️" },
    { name: "Whisper ASR", icon: "🎙️" },
    { name: "LLM Fine-Tuning", icon: "🧠" }
  ],

  projects: [
    {
      id: "fraud-guard",
      title: "FraudGuard: Real-time Inference Engine",
      desc: "An end-to-end fraud detection system processing 500 transactions/sec. Built with XGBoost and deployed on AWS Lambda via Docker.",
      tags: ["MLOps", "XGBoost", "AWS"],
      metrics: "Reduced False Positives by 15%",
      link: "#"
    },
    {
      id: "medical-scribe",
      title: "AutoScribe: Medical ASR",
      desc: "Fine-tuned Whisper model for Ghanaian accents in medical contexts. Integrated with GPT-4 for automated SOAP note generation.",
      tags: ["GenAI", "Whisper", "Fine-tuning"],
      metrics: "4.2% WER (Word Error Rate)",
      link: "#"
    },
    {
      id: "rec-engine",
      title: "E-Com Recommendation System",
      desc: "Collaborative filtering engine using Matrix Factorization. Containerized and orchestrated with Kubernetes.",
      tags: ["Recommender", "Kubernetes", "Docker"],
      metrics: "+12% Click-Through Rate",
      link: "#"
    }
  ],

  blog: [
    {
      slug: "deploying-ml-docker",
      title: "Deploying ML Models with Docker & FastAPI in 10 Minutes",
      date: "Nov 20, 2025",
      readTime: "8 min read",
      excerpt: "Stop sending .ipynb files. Here is the standard industry pattern for packaging models as microservices.",
      content: `
        ## The Problem
        Data Scientists love Notebooks. DevOps Engineers hate them. The gap between "it works on my machine" and "it runs in production" is huge.

        ## The Solution: Containerization
        Docker allows us to package the OS, the Python version, the libraries, and the model weights into a single artifact.
      `
    },
    {
      slug: "transformer-visualized",
      title: "Visualizing the Transformer Architecture",
      date: "Oct 15, 2025",
      readTime: "Watch: 12 min",
      tag: "Video Lesson",
      videoId: "qUmWOVTTfPI", 
      excerpt: "I break down the Encoder-Decoder mechanism using 3D diagrams. No math, just intuition.",
      content: `
        ## Why text isn't enough
        Reading about 'Self-Attention' is confusing. Seeing it visualize how tokens pay attention to each other makes it click instantly.
      `
    }
  ],

  // 👇 THIS WAS MISSING! 👇
  resume: {
    summary: "Results-driven Machine Learning Engineer with expertise in deploying scalable AI systems. Skilled in Python, MLOps, and Cloud Infrastructure.",
    skills: {
      "Core ML": ["Python", "PyTorch", "Scikit-Learn", "XGBoost", "Transformers"],
      "MLOps": ["Docker", "Kubernetes", "FastAPI", "MLflow", "AWS SageMaker", "GitHub Actions"],
      "Data": ["SQL", "Pandas", "PostgreSQL", "DVC", "Apache Airflow"]
    },
    experience: [
      {
        role: "ML Engineer (Contract)",
        company: "Global Tech",
        year: "2024 - Present",
        bullets: ["Deployed 3 LLM agents to production.", "Reduced cloud costs by 30% using quantized models."]
      },
      {
        role: "ML Trainee",
        company: "DataTalks.Club",
        year: "2023",
        bullets: ["Built end-to-end churn prediction system.", "Mastered Docker and Cloud deployment."]
      }
    ]
  }
};