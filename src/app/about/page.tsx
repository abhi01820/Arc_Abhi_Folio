"use client";

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

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m a passionate Full Stack Developer with experience in building
          real-time, modern web applications. I specialize in both frontend and
          backend development to deliver seamless, efficient, and user-focused
          digital products.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.2 as const }}
      >
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Languages */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="text-secondary space-y-2">
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaPaintBrush className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS / Vite</li>
              <li>HTML5 / CSS3</li>
              <li>Bootstrap</li>
              <li>Shadcn UI</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaServer className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Authentication</li>
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <ul className="text-secondary space-y-2">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Neon DB (PostgreSQL basics)</li>
              <li>Firebase Auth</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaToolbox className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>VS Code</li>
              <li>Git, GitHub</li>
              <li>Postman</li>
              <li>Clerk</li>
              <li>Render, Vercel (Deployment)</li>
              <li>Vapi AI</li>
              <li>Stream SDK</li>
            </ul>
          </motion.div>

          {/* Concepts */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaBrain className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Core Concepts</h3>
            <ul className="text-secondary space-y-2">
              <li>OOP</li>
              <li>DBMS</li>
              <li>DSA (C++)</li>
              <li>System Design</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Journey */}
      <motion.section
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.4 as const }}
      >
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          What I’ve Been Doing
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
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHover}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-secondary leading-relaxed">
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




      {/* Experience */}
<motion.section 
  className="mb-20" 
  {...fadeIn} 
  transition={{ delay: 0.5 as const }} 
>
  <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
    Experience
  </motion.h2>
  <motion.div 
    className="max-w-3xl mx-auto space-y-6" 
    variants={staggerContainer} 
    initial="initial" 
    animate="animate" 
  >
    {/* Internship */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" 
      variants={fadeInUp} 
      {...cardHoverSmall} 
    >
      <h3 className="text-xl font-semibold mb-2"> 
        Full Stack Developer Intern 
      </h3>
      <p className="text-primary mb-2"> 
        AetherPro Healthcare Pvt. Ltd. • Remote • Jul 2025 – Aug 2025 
      </p>
      <ul className="list-disc list-inside text-secondary space-y-1">
        <li>Developed and deployed a healthcare web platform with Next.js, React.js, Node.js, and Express.</li>
        <li>Built REST APIs, authentication, and ICD/CPT code management modules.</li>
        <li>Worked with GitHub, Vercel, and Postman for collaboration and deployment.</li>
        <li>Collaborated with the project lead to deliver production-ready features.</li>
      </ul>
      <a 
        href="https://drive.google.com/file/d/1RmAhngXdSS6Dr6hpAc6cWwfOcFAQ85lI/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline mt-3 inline-block"
      >
        View Certificate
      </a>
    </motion.div>
  </motion.div>
</motion.section>


      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 as const }}>
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-primary mb-2">
              Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad •
              2023 - Present
            </p>
            <p className="text-secondary">
              Pursuing B.Tech with focus on full-stack development, software
              engineering, and real-time applications. Preparing for high-growth
              career roles.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
