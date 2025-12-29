'use client';

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.9
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
      duration: 0.6,
    },
  },
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 relative">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebula-like gradients */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`nebula-${i}`}
            className="absolute w-32 h-32 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(168, 85, 247, 0.1)'
              }, transparent)`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Moving comet particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`project-comet-${i}`}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Two Column Layout - 25% Bot, 75% Text */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Bot Animation (25%) */}
          <motion.div
            className="lg:col-span-1 flex justify-center lg:justify-end"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            <motion.img
              src="/projects/bot-animation.gif"
              alt="Bot Animation"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Right Side - All Text Content (75%) */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Featured Projects Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Featured Projects
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-violet-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore my latest work and creative solutions
            </motion.p>
            
            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            {/* Click Instruction */}
            <motion.div
              className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-lg px-6 py-4 border border-purple-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
                <span className="text-xl">💡</span>
                <span className="font-medium text-yellow-300">Click any project card for detailed view</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional floating instruction that follows scroll */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20"
          animate={{
            y: [0, -5, 0],
            boxShadow: [
              "0 4px 20px rgba(168, 85, 247, 0.4)",
              "0 8px 30px rgba(59, 130, 246, 0.6)",
              "0 4px 20px rgba(168, 85, 247, 0.4)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🔍
            </motion.span>
            <span>Click cards to explore</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10 px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }
            }}
            className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-4 border border-gray-700/50 hover:border-purple-500/50 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 w-full"
            onClick={() => setSelectedProject(project)}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Click indicator overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    borderColor: ["#ffffff", "#8b5cf6", "#ffffff"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xl">👁️</span>
                </motion.div>
                <motion.p
                  className="text-sm font-medium text-center"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Click to view details
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Project Image */}
            <div className="relative aspect-video mb-3 sm:mb-4 rounded-xl overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              
              {/* Project number badge */}
              <motion.div
                className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs"
                whileHover={{ scale: 1.2 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* More Info badge */}
              <motion.div
                className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                More Info
              </motion.div>
            </div>

            {/* Project Title */}
            <motion.h3 
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight"
            >
              {project.title}
            </motion.h3>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 relative z-10">
              {project.githubLink && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 text-sm w-full sm:w-auto"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>
                </motion.div>
              )}
              {project.demoLink && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 text-sm w-full sm:w-auto"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Demo
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-700/50 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - Mobile Friendly */}
              <motion.button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-10 sm:h-10 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300 z-10 touch-manipulation"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes className="w-6 h-6 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, 20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Modal Astronaut */}
                <motion.div
                  className="absolute top-4 right-16 z-20"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    x: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="text-4xl filter drop-shadow-lg"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      👨‍🚀
                    </motion.div>
                    
                    {/* Speech bubble */}
                    <motion.div
                      className="absolute -left-20 -top-8 bg-white/90 text-gray-800 px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Exploring project! 🚀
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Project Image */}
                <motion.div
                  className="relative aspect-video mb-6 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 80vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-violet-300 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedProject.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, techIndex: number) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "rgba(59, 130, 246, 0.3)",
                          y: -2
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {selectedProject.githubLink && (
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="font-medium">View Code</span>
                      </Link>
                    </motion.div>
                  )}
                  {selectedProject.demoLink && (
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={selectedProject.demoLink}
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="font-medium">Live Demo</span>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;



