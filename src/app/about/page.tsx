"use client";

import Image from "next/image";
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaToolbox,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";
import Skills from "../components/Skills3D";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-white"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-white max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m a passionate Full Stack Developer with experience in building
          real-time, modern web applications. I specialize in both frontend and
          backend development to deliver seamless, efficient, and user-focused
          digital products.
        </p>
      </motion.section>

      {/* Interactive Skills Section */}
      <Skills />

      {/* Journey */}
      <motion.section
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.4 as const }}
      >
        <motion.h2 className="section-title mb-10 text-center text-white" {...fadeInUp}>
          What I've Been Doing
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: "Real-time Full Stack Projects",
              desc: `Built full-fledged applications like:
              • AI Voice Medical Assistant
              • AI Voice Interview Preparation
              • E-Commerce Bookstore
              • Real-time Chat App with Video Call`,
            },
            {
              title: "Self-Learning & Growth",
              desc: `Actively learning system design, DevOps, and scalable architecture. Continuously growing through projects and open-source.`,
            },
            {
              title: "UI/UX Practice",
              desc: `Focusing on clean, accessible interfaces with animations and responsiveness.`,
            },
            {
              title: "Career Building",
              desc: `Mastering DSA in C++, building real-world projects, and improving communication.`,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              variants={fadeInUp}
              {...cardHover}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-violet-600 leading-relaxed">
                {item.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>




      {/* Enhanced Experience Section */}
      <motion.section 
        className="mb-20" 
        {...fadeIn} 
        transition={{ delay: 0.5 as const }} 
      >
        <motion.h2 className="section-title mb-12 text-center text-white" {...fadeInUp}>
          Professional Experience
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto" 
          variants={staggerContainer} 
          initial="initial" 
          animate="animate" 
        >
          {/* Enhanced Internship Card */}
          <motion.div 
            className="relative group bg-gray-900/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-purple-500/30 overflow-hidden transition-all duration-300" 
            variants={fadeInUp} 
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Header with Logo */}
            <div className="relative z-10 flex items-start gap-6 mb-6">
              {/* Company Logo */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-white/30 dark:border-gray-600/30 bg-white dark:bg-gray-800 flex items-center justify-center p-2">
                  <Image
                    src="/logos/aetherpro-logo.png"
                    alt="AetherPro Healthcare Logo"
                    width={80}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Job Info */}
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl font-bold mb-2 text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  Full Stack Developer Intern
                </motion.h3>
                
                <motion.div 
                  className="flex flex-wrap items-center gap-4 mb-4"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-violet-700 font-medium text-sm">
                      AetherPro Healthcare Pvt. Ltd.
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-violet-700 font-medium text-sm">
                      Remote
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-violet-700 font-medium text-sm">
                      Jul 2025 – Aug 2025
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Key Achievements */}
            <motion.div 
              className="relative z-10 mb-6"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Key Achievements
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🚀",
                    title: "Healthcare Platform",
                    desc: "Built full-stack web platform with Next.js & React.js"
                  },
                  {
                    icon: "🔧", 
                    title: "REST APIs",
                    desc: "Developed robust APIs with Node.js & Express"
                  },
                  {
                    icon: "🔐",
                    title: "Authentication",
                    desc: "Implemented secure user authentication systems"
                  },
                  {
                    icon: "📊",
                    title: "Medical Codes",
                    desc: "Built ICD/CPT code management modules"
                  }
                ].map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/30"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(139, 92, 246, 0.1)" 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h5 className="font-semibold text-white text-sm">
                        {achievement.title}
                      </h5>
                      <p className="text-violet-600 text-xs">
                        {achievement.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack Used */}
            <motion.div 
              className="relative z-10 mb-6"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                Technologies Used
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Next.js", color: "bg-black text-white" },
                  { name: "React.js", color: "bg-blue-500 text-white" },
                  { name: "Node.js", color: "bg-green-600 text-white" },
                  { name: "Express", color: "bg-gray-700 text-white" },
                  { name: "GitHub", color: "bg-gray-800 text-white" },
                  { name: "Vercel", color: "bg-black text-white" },
                  { name: "Postman", color: "bg-orange-500 text-white" }
                ].map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} shadow-sm`}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div 
              className="relative z-10 flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <motion.a
                href="https://drive.google.com/file/d/1RmAhngXdSS6Dr6hpAc6cWwfOcFAQ85lI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">📜</span>
                <span>View Certificate</span>
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="/certs/Aetherpro_LOR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">📝</span>
                <span>Letter of Recommendation</span>
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Corner Decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Education Timeline */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 as const }}>
        <motion.h2 className="section-title mb-16 text-center text-white" {...fadeInUp}>
          Education Timeline
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto relative"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 transform md:-translate-x-1/2 rounded-full shadow-lg">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full blur-sm opacity-50"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-12">
            {/* Bachelor's Degree */}
            <motion.div
              className="relative flex items-center md:justify-center"
              variants={fadeInUp}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:w-5/12 md:mr-auto">
                <motion.div
                  className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/30 group transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* College Logo */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden mr-4 shadow-md border-2 border-white/20 bg-white/10 flex items-center justify-center">
                      <Image
                        src="/logos/CBIT.png"
                        alt="CBIT Logo"
                        width={64}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Chaitanya Bharathi Institute Of Technology
                      </h3>
                      <p className="text-violet-700 font-medium">
                        Bachelor of Engineering - BE, Computer Science
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <strong>Duration:</strong> Jul 2023 - Jul 2027
                    </p>
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <strong>Status:</strong> Currently Pursuing
                    </p>
                    <p className="text-violet-600 mt-3 italic">
                      "Focusing on full-stack development, software engineering, and preparing for high-growth career roles."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Intermediate */}
            <motion.div
              className="relative flex items-center md:justify-center"
              variants={fadeInUp}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-purple-500 dark:bg-purple-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content Card - Right side on desktop */}
              <div className="ml-20 md:ml-0 md:w-5/12 md:ml-auto">
                <motion.div
                  className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/30 group transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* College Logo */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden mr-4 shadow-md border-2 border-white/20 bg-white/10 flex items-center justify-center">
                      <Image
                        src="/logos/tswreis.png"
                        alt="TSWREIS Gowlidoddi Logo"
                        width={64}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        TSWREIS COE Gowlidoddi
                      </h3>
                      <p className="text-violet-700 font-medium">
                        Intermediate, MPC
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <strong>Duration:</strong> Jul 2021 - Jul 2023
                    </p>
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <strong>Grade:</strong> 97.4%
                    </p>
                    <p className="text-violet-600 mt-3 italic">
                      "Mathematics, Physics & Chemistry with outstanding academic performance."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* School */}
            <motion.div
              className="relative flex items-center md:justify-center"
              variants={fadeInUp}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-pink-500 dark:bg-pink-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-pink-500 dark:bg-pink-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:w-5/12 md:mr-auto">
                <motion.div
                  className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/30 group transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* College Logo */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden mr-4 shadow-md border-2 border-white/20 bg-white/10 flex items-center justify-center">
                      <Image
                        src="/logos/tswreis.png"
                        alt="TSWREIS Chilkur Logo"
                        width={64}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        TSWREIS COE Chilkur
                      </h3>
                      <p className="text-violet-700 font-medium">
                        Secondary Education
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <strong>Duration:</strong> Jul 2015 - Jul 2021
                    </p>
                    <p className="text-violet-600 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      <strong>Grade:</strong> 10 CGPA
                    </p>
                    <p className="text-violet-600 mt-3 italic">
                      "Foundation years with excellent academic performance and holistic development."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            className="relative flex justify-center mt-12"
            variants={fadeInUp}
          >
            <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
