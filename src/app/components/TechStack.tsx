"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { 
  SiPython, SiCplusplus, SiOpenjdk, SiJavascript,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi,
  SiMongodb, SiMysql, SiDocker, SiGithubactions, SiGit, SiPostman,
  SiVercel, SiJupyter
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { 
  FaBrain, FaRobot, FaLanguage, FaMagic, FaProjectDiagram, 
  FaNetworkWired, FaDatabase, FaCode, FaObjectGroup
} from "react-icons/fa";

const SkillIcon = ({ icon: Icon, name, color }: { icon: IconType, name: string, color: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05, boxShadow: `0 0 20px ${color}60`, borderColor: color }}
      className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-gray-800 bg-black/40 cursor-pointer group transition-all duration-300"
    >
      <Icon className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
      <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors text-center font-bold">
        {name}
      </span>
    </motion.div>
  );
};

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const techCategories = [
    {
      title: "💻 Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
      ]
    },
    {
      title: "🎨 Frontend Development",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      title: "⚙️ Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" }
      ]
    },
    {
      title: "🤖 AI / Machine Learning",
      skills: [
        { name: "ML", icon: FaBrain, color: "#FF6F00" },
        { name: "Deep Learning", icon: FaNetworkWired, color: "#E91E63" },
        { name: "NLP", icon: FaLanguage, color: "#4CAF50" },
        { name: "Gen AI", icon: FaMagic, color: "#673AB7" },
        { name: "LLMs", icon: FaRobot, color: "#3F51B5" },
        { name: "RAG", icon: FaProjectDiagram, color: "#009688" }
      ]
    },
    {
      title: "🧠 AI Frameworks",
      skills: [
        { name: "LangChain", icon: FaProjectDiagram, color: "#1C3C3C" },
        { name: "LangGraph", icon: FaNetworkWired, color: "#0F766E" }
      ]
    },
    {
      title: "🗄️ Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "FAISS", icon: FaDatabase, color: "#4285F4" }
      ]
    },
    {
      title: "🚀 MLOps & Deploy",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "MLflow", icon: FaProjectDiagram, color: "#0194E2" },
        { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" }
      ]
    },
    {
      title: "🔧 Tools & Core",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "DSA", icon: FaCode, color: "#00599C" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Jupyter", icon: SiJupyter, color: "#F37626" }
      ]
    }
  ];

  return (
    <motion.section 
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-2xl font-bold mb-12 text-center text-[#00f2fe] font-mono border-b border-[#00f2fe]/30 pb-4 inline-block mx-auto">
        Tech_Stack
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} className="cyber-chip p-6 flex flex-col">
            <h3 className="text-sm font-mono font-bold text-[#00ff41] mb-6 border-b border-gray-800 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => (
                <SkillIcon key={sIdx} icon={skill.icon} name={skill.name} color={skill.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
