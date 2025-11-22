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
    status: "Available for Global Contracts"
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
      slug: "transformer-architecture",
      title: "Visualizing the Transformer Architecture",
      date: "Nov 22, 2025",
      readTime: "Watch: 12 min",
      tag: "Video Lesson",
      
      // 🌟 YOUTUBE VIDEO ID
      videoId: "qUmWOVTTfPI", 
      
      excerpt: "I break down the Encoder-Decoder mechanism using 3D diagrams. No math, just intuition.",
      content: `
        ## Why text isn't enough
        Reading about 'Self-Attention' is confusing. Seeing it visualize how tokens pay attention to each other makes it click instantly.
        
        In this video breakdown, I walk through:
        1. Input Embeddings
        2. Positional Encoding
        3. The Multi-Head Attention mechanism
        
        (Watch the video above for the full breakdown).
      `
    },
    {
      slug: "mlops-pipeline-diagram",
      title: "The Ultimate MLOps Pipeline Diagram",
      date: "Oct 15, 2025",
      readTime: "3 min read",
      tag: "Architecture",
      
      // 🌟 IMAGE PATH (Make sure this file exists in public/assets)
      image: "/assets/mlops-diagram.png", 
      
      excerpt: "A high-resolution reference architecture for deploying models on AWS using Kubernetes.",
      content: `
        ## The Architecture
        This diagram represents the standard stack I use for Fintech clients.
        
        ### Key Components:
        - **Feature Store:** Redis for low latency retrieval.
        - **Training:** SageMaker pipelines triggered by Airflow.
        - **Serving:** KServe on EKS (Elastic Kubernetes Service).
        
        Download this diagram and use it for your own system design interviews.
      `
    }
  ]
};