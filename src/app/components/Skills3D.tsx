"use client";

import { motion } from "framer-motion";
import { 
  stagger3D, 
  glowPulse,
  fadeInUp 
} from "@/utils/animations";

// Simple card animations without rotation
const simpleCardHover = {
  initial: { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      type: "spring" as const,
      stiffness: 100
    }
  },
  whileHover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      type: "spring" as const,
      stiffness: 300
    }
  },
  whileTap: {
    scale: 0.95,
    y: 0
  }
};

const simpleIconFloat = {
  initial: { 
    scale: 1,
    y: 0
  },
  animate: {
    y: [-5, 5, -5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  },
  whileHover: {
    scale: 1.1,
    y: -5,
    transition: { duration: 0.3 }
  }
};
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: string;
  proficiency: number;
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend", proficiency: 90 },
  { name: "Next.js", icon: SiNextdotjs, color: "#E34F26", category: "Frontend", proficiency: 85 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language", proficiency: 30 },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Language", proficiency: 95 },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend", proficiency: 85 },
  { name: "Express", icon: SiExpress, color: "#764ABC", category: "Backend", proficiency: 80 },
  { name: "Python", icon: FaPython, color: "#3776AB", category: "Language", proficiency: 90 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database", proficiency: 85 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Styling", proficiency: 90 },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend", proficiency: 95 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Styling", proficiency: 90 },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Tools", proficiency: 85 },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "State Management", proficiency: 75 },
];

// Skill Card Component with 3D effects
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      className="relative group cursor-pointer"
      variants={simpleCardHover}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      whileTap="whileTap"
    >
      {/* Main Card */}
      <motion.div
        className="relative bg-white/90 dark:bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/30 dark:border-white/20 shadow-xl overflow-hidden"
        variants={glowPulse}
        style={{
          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}08)`,
        }}
      >
        {/* Simple floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-30"
              style={{ backgroundColor: skill.color }}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Icon with simple float animation */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center"
          variants={simpleIconFloat}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
        >
          <div 
            className="w-16 h-16 mb-4 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: `${skill.color}25`,
              border: `2px solid ${skill.color}50`
            }}
          >
            <IconComponent 
              size={32} 
              style={{ color: skill.color }}
              className="drop-shadow-lg"
            />
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-white">
            {skill.name}
          </h3>
          
          <p className="text-sm text-white mb-3">
            {skill.category}
          </p>
          
          {/* Proficiency Bar with 3D effect */}
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2">
            <motion.div
              className="h-2 rounded-full relative overflow-hidden"
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                style={{
                  animation: "shimmer 2s infinite",
                }}
              />
            </motion.div>
          </div>
          
          <span className="text-xs font-medium" style={{ color: skill.color }}>
            {skill.proficiency}%
          </span>
        </motion.div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with comet-like animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Comet trails */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`comet-trail-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-cyan-400/40 via-blue-500/20 to-transparent rounded-full"
              animate={{
                x: [0, 250],
                y: [0, Math.random() > 0.5 ? -80 : 80],
                opacity: [0, 1, 0.5, 0],
                scaleX: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
            />
          </motion.div>
        ))}
        
        {/* Floating particles with trails */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400/30 to-pink-600/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, (Math.random() - 0.5) * 100],
              scale: [0.3, 1, 0.3],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Interactive visualization of my technical expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={stagger3D}
          initial="initial"
          animate="animate"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}