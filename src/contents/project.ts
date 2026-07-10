import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "LangChain SQL Data Analyst",
    description: "LangChain SQL Data Analyst is an interactive web application that allows you to chat with your data. Simply upload a CSV file and ask natural language questions. Powered by Open Source LLMs via LangChain and HuggingFace, it automatically converts your questions into SQL queries, executes them, and provides intelligent insights along with data visualizations.",
    technologies: [
      "LangChain",
      "HuggingFace",
      "Streamlit",
      "SQLite",
      "SQLAlchemy",
      "Pandas",
      "Plotly"
    ],
    githubLink: "https://github.com/abhi01820/LangChain-SQL-Data-Analyst",
    demoLink: "",
    image: "/projects/LangChain-SQL-Data-Analyst.png",
  },
  {
    title: "Multi-Agent AI Research System",
    description: "Uses specialized AI agents (Search, Reader, Writer, Critic) to divide and conquer the research task. Integrates with the Tavily Search API for accurate web results and BeautifulSoup for extracting deep content from reliable sources. Synthesizes gathered data into a well-structured Markdown report.",
    technologies: [
      "LangChain",
      "Google Gemini",
      "Tavily API",
      "BeautifulSoup",
      "Streamlit"
    ],
    githubLink: "https://github.com/abhi01820/Multi-Agent-AI-Research-System",
    demoLink: "",
    image: "/projects/Multi-Agent AI Research System.png",
  },
  {
    title: "AI Research Paper Analysis & RAG Chatbot",
    description: "An AI-powered Research Paper Analysis application built using Langchain. It allows users to upload research papers (PDFs), automatically extracts and refines sections from the document, provides detailed summaries for specific topics, and includes an interactive chat feature powered by RAG to ask questions about the paper's contents.",
    technologies: [
      "LangChain",
      "Groq",
      "HuggingFace",
      "FAISS",
      "Flask",
      "RAG"
    ],
    githubLink: "https://github.com/abhi01820/AI-Research-Paper-Analysis-ChatBOT",
    demoLink: "",
    image: "/projects/AI Research Paper Analysis-Langchain.png",
  },
  {
    title: "AI Voice Medical Assistant",
    description:
      "Real-Time AI Medical Voice Agent is a full-stack AI SaaS project built with Next.js, React, TypeScript, AssemblyAI, Clerk, and Neon DB. It enables users to interact with a virtual doctor using real-time voice input, offering symptom understanding and AI-powered responses. The app features speech-to-text, secure authentication, and cloud-based storage, making it ideal for modern healthcare AI solutions. Perfect for learning how to build and deploy real-time AI voice apps in the medical domain.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Vapi AI",
      "Google Gemini",
      "Clerk",
      "Neon DB",
      "Tailwind CSS",
      'Vercel'
    ],
    githubLink: "https://github.com/abhi01820/AI_Voice_Medical_Agent",
    demoLink: "https://ai-voice-medical-agent-y2na.vercel.app",
    image: "/projects/project4.png",
  },
  {
    title: "AI Voice Mock Interview",
    description:
      "AI Voice Mock Interview is a smart interview simulation tool that uses voice AI and Google Gemini to conduct realistic mock interviews. It offers real-time feedback, personalized insights, and detailed transcripts, helping users improve communication, confidence, and job-readiness through an engaging and responsive modern interface.",
    technologies: [
      "Next.js",
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "TypeScript",
      "Vapi AI",
      "Shadcn UI ",
      "Google Gemini",
      "Zod",
      'Vercel'
    ],
    githubLink: "https://github.com/abhi01820/AI_Voice_Mock_Interview",
    demoLink: "https://ai-mock-interview-three-kappa.vercel.app",
    image: "/projects/project3.png",
  },
  {
    title: "✨BuddyChat | Fullstack Chat & Video Call",
    description:
      "A full-stack language exchange platform with real-time chat, video calls, emoji support,file support ,JWT authentication. Features include 32 UI themes, screen sharing, secure messaging, Friend Requests  . Built with Stream SDK, Zustand, and MongoDB, deployable on Vercel, Render, or Railway.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "TanStack (React Query)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream Video & Chat SDK",
      'Render'
    ],
    githubLink: "https://github.com/abhi01820/BuddyChat",
    demoLink: "https://buddychat-i9qy.onrender.com",
    image: "/projects/project2.png",
  },
  {
    title: "🤍 SoulSync: AI Relationship Companion",
    description: "An AI-powered voice companion designed to simulate a supportive and emotionally intelligent relationship.",
    technologies: [
      "AI Voice",
      "Next.js",
      "Vapi AI",
      "Tailwind CSS"
    ],
    githubLink: "https://github.com/abhi01820/AI-Voice-Relationship-Companion",
    demoLink: "",
    image: "/projects/ai_voice_relationship_companion.png"
  },
  {
    title: "📚 Online Book Store [Ecommerce] ",
    description:
      "A full-stack MERN application where users can browse books, view descriptions, add to cart or favorites, place orders (payment not included yet), and sign up or log out. Admins can manage the book inventory and order list from a dedicated dashboard.",
    technologies: [
      "Reactjs",
      "MongoDB",
      "Tailwind CSS[vite]",
      " Express",
      "Node.js",
      'Render'
    ],
    githubLink: "https://github.com/abhi01820/ONLINE-BOOKSTORE",
    demoLink: "https://online-bookstore-vblc.onrender.com/",
    image: "/projects/project1.png",
  },
  {
    title: "🚗 Vehicle Insurance MLOps",
    description: "An end-to-end Machine Learning pipeline for vehicle insurance, incorporating CI/CD and MLOps practices.",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "DVC",
      "MLflow",
      "GitHub Actions"
    ],
    githubLink: "https://github.com/abhi01820/vehicle-insurance-mlops",
    demoLink: "",
    image: "/projects/vehicle_insurance.png"
  },
  {
    title: "🏥 MediGuide AI",
    description: "An intelligent medical assistant system utilizing Optical Character Recognition and Natural Language Processing.",
    technologies: [
      "JavaScript",
      "OCR",
      "NLP"
    ],
    githubLink: "https://github.com/abhi01820/MediGuide_AI",
    demoLink: "",
    image: "/projects/mediguide.png"
  },
  {
    title: "🎓 Education Analytics MLOps",
    description: "Machine learning operations pipeline designed to analyze educational data and generate actionable insights.",
    technologies: [
      "Python",
      "Docker",
      "DVC",
      "MLflow"
    ],
    githubLink: "https://github.com/abhi01820/Education-Analytics-mlops",
    demoLink: "",
    image: "/projects/education_analytics_mlops.png"
  },
  {
    title: "SPREADSHEET MANAGEMENT UI",
    description:
      "A responsive, Google Sheets–inspired spreadsheet UI built with React, TypeScript, and Tailwind CSS. Features include editable tables, search/filtering, toolbar actions, and modular sidebar navigation. Demonstrates skills in scalable UI architecture, stateful interactions, and advanced table rendering with @tanstack/react-table.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "@tanstack/react-table",
      "React Icons",
      "Modular Component Architecture",
      "Responsive Design",
      "State Management"
    ],
    githubLink: "https://github.com/abhi01820/Spreadsheet-Management-UI",
    demoLink: "https://spreadsheet-management-ui.vercel.app/",
    image: "/projects/project6.png"
  }
];
