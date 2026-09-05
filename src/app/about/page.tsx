"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200 } }
  };

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4 relative z-10">
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white font-mono uppercase tracking-widest text-glow-cyan"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[#00ff41]">&gt;</span> About_Me
      </motion.h1>

      {/* Bio */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="cyber-chip p-8 max-w-3xl mx-auto text-center border-l-4 border-l-[#00f2fe]">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#00f2fe] font-mono tracking-wider italic">
            "ARC — Adversity • Resilience • Character"
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-mono">
            Computer Science Engineering student at <b className="text-white">CBIT Hyderabad</b> with experience in building
            <b className="text-white"> AI-powered applications</b>, <b className="text-white">real-time systems</b>, and <b className="text-white">scalable full-stack solutions</b>.
            Passionate about building production-ready AI systems using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and scalable Full Stack architectures. I enjoy solving real-world problems through Generative AI and modern software engineering.
          </p>
        </div>
      </motion.section>

      <TechStack />


      {/* Journey */}
      <motion.section 
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-[#00f2fe] font-mono border-b border-[#00f2fe]/30 pb-4 inline-block mx-auto">
          Active_Processes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "AI & ML Systems",
              desc: "Building AI-Powered Applications, Intelligent Assistants, and exploring RAG Systems and Generative AI.",
            },
            {
              title: "Cloud & MLOps",
              desc: "Learning Cloud Technologies, MLOps, Scalable Deployments, and Production-Ready architectures.",
            },
            {
              title: "System Design",
              desc: "Strengthening System Design and Software Architecture Concepts to build robust backend services.",
            },
            {
              title: "Algorithmic Growth",
              desc: "Continuously Solving Data Structures & Algorithms Problems for optimal computational logic.",
            },
          ].map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="hacker-border p-6"
            >
              <h3 className="text-xl font-bold font-mono mb-2 text-[#00f2fe]">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line font-mono text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Professional Experience */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-[#00f2fe] font-mono border-b border-[#00f2fe]/30 pb-4 inline-block mx-auto">
          Professional_Log
        </h2>
        <div className="cyber-chip p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="flex-shrink-0 bg-white p-2 rounded-lg border-2 border-[#00f2fe]">
              <Image
                src="/logos/aetherpro_healthcare_private_limited_logo.jpeg"
                alt="AetherPro Healthcare Logo"
                width={80}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                Full Stack Developer Intern
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono font-medium">
                <span className="text-[#00f2fe]">
                  @ AetherPro Healthcare Pvt. Ltd.
                </span>
                <span className="text-gray-500">|</span>
                <span className="text-[#00ff41]">
                  Remote
                </span>
                <span className="text-gray-500">|</span>
                <span className="text-pink-400">
                  Jul 2025 – Aug 2025
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold font-mono mb-4 text-[#00f2fe]">&gt; Achievements_</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400 list-none font-mono text-sm">
              <li className="flex gap-2"><span className="text-[#00ff41]">[*]</span> Built full-stack platform with Next.js</li>
              <li className="flex gap-2"><span className="text-[#00ff41]">[*]</span> Developed robust Node.js REST APIs</li>
              <li className="flex gap-2"><span className="text-[#00ff41]">[*]</span> Implemented JWT secure auth</li>
              <li className="flex gap-2"><span className="text-[#00ff41]">[*]</span> Built ICD/CPT management modules</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold font-mono mb-3 text-[#00f2fe]">&gt; Tech_Stack_</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React.js", "Node.js", "Express", "GitHub", "Vercel", "Postman"].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-sm border border-[#00ff41]/30 text-xs font-mono bg-[#00ff41]/10 text-[#00ff41]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-800 font-mono text-sm uppercase tracking-wider">
            <a
              href="https://drive.google.com/file/d/1RmAhngXdSS6Dr6hpAc6cWwfOcFAQ85lI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f2fe] hover:text-white transition-colors flex items-center gap-2"
            >
              [View_Certificate]
            </a>
            <a
              href="/certs/Aetherpro_LOR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white transition-colors flex items-center gap-2"
            >
              [View_LOR]
            </a>
          </div>
        </div>
      </motion.section>

      {/* Certifications Log */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-[#00f2fe] font-mono border-b border-[#00f2fe]/30 pb-4 inline-block mx-auto">
          Certifications_Log
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
              icon: "🤖",
              link: "https://drive.google.com/file/d/1asYxo9cKT63H1sgJwMfFCvTvMhz9wjjF/view"
            },
            {
              title: "Oracle Cloud Infrastructure AI Foundations Associate (2025)",
              icon: "☁️",
              link: "https://drive.google.com/file/d/1Z02GNvqDZsDZ0dz8Em7b8ff0h5VzYtrl/view"
            },
            {
              title: "Data Science Foundation Certification – Infosys Springboard",
              icon: "📊",
              link: "https://drive.google.com/file/d/1Z4ODwv4FyXxBSATI61aqrALx8budJyzE/view"
            },
            {
              title: "Data Structures & Algorithms (C++) – GeeksforGeeks",
              icon: "💻",
              link: "https://drive.google.com/file/d/1d0LesuOYsFCV80cVZvy79uSTemD9j-N8/view"
            }
          ].map((cert, idx) => (
            <div key={idx} className="cyber-chip p-6 flex flex-col justify-between group hover:border-[#00ff41]/50 transition-colors">
              <div>
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold font-mono text-white mb-4 line-clamp-3">
                  {cert.title}
                </h3>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00f2fe] hover:text-[#00ff41] font-mono text-sm uppercase tracking-wider transition-colors"
              >
                [View_Certificate] <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-[#00f2fe] font-mono border-b border-[#00f2fe]/30 pb-4 inline-block mx-auto">
          Education_Log
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00f2fe] before:to-[#00ff41]">
          {/* Degree */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-[#00f2fe] text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              🎓
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] cyber-chip p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white p-1 rounded">
                  <Image src="/logos/CBIT.png" alt="CBIT Logo" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="font-bold text-white font-mono text-lg">CBIT</h3>
              </div>
              <p className="text-[#00ff41] font-mono text-sm mb-1">B.E. Computer Science</p>
              <p className="text-gray-500 font-mono text-xs">Jul 2023 - Jul 2027</p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-[#00ff41] text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              📚
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] cyber-chip p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white p-1 rounded">
                  <Image src="/logos/tswreis.png" alt="TSWREIS Logo" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="font-bold text-white font-mono text-lg">TSWREIS COE Gowlidoddi</h3>
              </div>
              <p className="text-[#00ff41] font-mono text-sm mb-1">Intermediate, MPC</p>
              <p className="text-gray-500 font-mono text-xs">Jul 2021 - Jul 2023 • 97.4%</p>
            </div>
          </div>

          {/* High School */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-pink-500 text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              🏫
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] cyber-chip p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white p-1 rounded">
                  <Image src="/logos/tswreis.png" alt="TSWREIS Logo" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="font-bold text-white font-mono text-lg">TSWREIS COE Chilkur</h3>
              </div>
              <p className="text-[#00ff41] font-mono text-sm mb-1">Secondary Education</p>
              <p className="text-gray-500 font-mono text-xs">Jul 2015 - Jul 2021 • 10 CGPA</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
