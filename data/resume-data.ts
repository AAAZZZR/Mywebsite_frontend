export const RESUME_DATA = {
  personal: {
    name: "Rudy Chen",
    title: "Data Scientist & Full Stack Engineer",
    location: "Brisbane, Australia",
    email: "rudy871211@gmail.com",
    phone: "+61 447495868",
    github: "https://github.com/AAAZZZR",
    linkedin: "https://www.linkedin.com/in/rudy1211/",
    website: "https://leverag.xyz/me",
    bio: "Fresh graduate in Data Science with experience across software engineering and data analytics. Skilled in SQL and Python for data analysis, with hands-on machine learning project experience. Experienced in cloud computing (AWS, GCP, Azure), bridging the gap between engineering and data to deliver practical solutions.",
  },
  
  skills: [
    "Python",
    "JavaScript / TypeScript",
    "SQL",
    "Next.js",
    "FastAPI",
    "AWS / Azure / GCP",
    "Databricks",
    "PowerBI",
    "n8n Automation",
    "LangChain / LLMs",
    "PyTorch",
    "Docker",
    "CAD"
  ],

  languages: [
    "Mandarin (Native)",
    "English (Professional)"
  ],

  experience: [
    {
      company: "Consultant",
      role: "AI Workflow Consultant",
      period: "Jan 2026 - Present",
      description: "Developed automated social media content generation workflows for enterprise clients. Built custom WhatsApp AI agents for automated customer service and sales. Integrated AI financial assistants with CRM systems to provide real-time tracking and automated reporting.",
      tags: ["n8n", "AI Agents", "CRM Integration", "Automation"],
    },
    {
      company: "Contract (Australia)",
      role: "Robotics Engineer",
      period: "Sep 2025 - Nov 2025",
      description: "Enhanced robot arm drilling precision from 3.0mm to 0.5mm by optimizing operational logic. Modified Python scripts to bridge ERP system data with physical hardware for dynamic coordinates generation. Implemented collision avoidance parameters for safe operation.",
      tags: ["Python", "Robotics", "ERP", "Automation"],
    },
    {
      company: "Private Crypto Fund",
      role: "Crypto Analyst (Operation)",
      period: "Oct 2021 - Apr 2023",
      description: "Monitored market trends to identify hotspots and authored analytical reports and marketing copy. Developed interactive data visualization dashboards utilizing SQL and Etherscan on-chain data.",
      tags: ["Data Analysis", "SQL", "Etherscan", "Crypto"],
    },
  ],

  projects: [
    {
      title: "Sport Betting Website (Offline)",
      description: "A full-stack web application with automated data ingestion. Designed an ETL pipeline that retrieves sports odds from APIs every hour and stores them in Azure SQL Database.",
      link: "https://sportodd.xyz/",
      tech: ["Next.js", "FastAPI", "Azure Functions", "Azure SQL", "ETL"],
    },
    {
      title: "LLM Automation Application",
      description: "Built prototype applications leveraging Ollama (Llama, DeepSeek) and OpenAI API. Integrated LLM workflows with n8n for text generation and automation tasks.",
      link: "https://github.com/AAAZZZR/RAG_assistance_v1/tree/main", 
      tech: ["Ollama", "OpenAI API", "n8n"],
    },
    {
      title: "Forecasting QLD Electricity Price (Capstone)",
      description: "Collected large-scale electricity market data (AEMO) and weather records. Designed an end-to-end ETL pipeline and implemented XGBoost, Transformer, and LSTM models to forecast prices.",
      link: "https://github.com/AAAZZZR/Capstone_UQ",
      tech: ["Python", "XGBoost", "Machine Learning"],
    },
    {
      title: "Human Anatomy Interaction Interface",
      description: "Developed an interactive human anatomy interface using SVG graphics. Collaborated with healthcare coaches to integrate FHIR-compliant APIs for connecting anatomy interfaces with standardized healthcare data.",
      link: "https://github.com/comp3820/2024-smart-health",
      tech: ["SVG", "FHIR API", "Healthcare Data"],
    },
  ],

  education: [
    {
      school: "University of Queensland",
      degree: "Master of Data Science",
      year: "2025",
    },
    {
      school: "National Taiwan University",
      degree: "Bachelor in Mechanical Engineering",
      year: "2021",
    },
  ],
};