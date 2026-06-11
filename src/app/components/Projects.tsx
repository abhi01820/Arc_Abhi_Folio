'use client';

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaTerminal } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 relative z-10">
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#00f2fe]/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/projects/bot-animation.gif"
              alt="Bot Animation"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative z-10 mix-blend-screen"
            />
          </motion.div>

          <motion.div 
            className="lg:col-span-3 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono uppercase tracking-widest text-glow-cyan">
              System.Projects
            </h2>
            <p className="text-lg md:text-xl text-[#00ff41] font-mono">
              > Executing search protocol for latest builds...
            </p>
            <div className="w-24 h-1 bg-[#00f2fe] mx-auto lg:mx-0 rounded-full shadow-[0_0_10px_#00f2fe]" />
            <div className="hacker-border px-6 py-4 inline-block">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white font-mono text-sm">
                <FaTerminal className="text-[#00ff41]" />
                <span className="text-gray-300">Click any datapad for extended log details</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            key={project.title}
            className="cyber-chip p-4 flex flex-col h-full group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-black border border-[#00f2fe]/30 group-hover:border-[#00ff41] transition-colors">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-2 left-2 w-8 h-8 bg-black/80 backdrop-blur border border-[#00f2fe] rounded flex items-center justify-center text-[#00f2fe] font-mono font-bold text-xs">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50" />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="hacker-border text-[#00ff41] px-4 py-2 font-mono text-sm uppercase tracking-widest bg-black/80 backdrop-blur">Extract_Data</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white font-mono group-hover:text-[#00f2fe] transition-colors">
              {project.title}
            </h3>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto font-mono text-sm uppercase">
              {project.githubLink && (
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto flex-1">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-[#050505] border border-[#00f2fe]/30 hover:border-[#00f2fe] hover:shadow-[0_0_10px_rgba(0,242,254,0.3)] text-[#00f2fe] rounded transition-all w-full"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source
                  </Link>
                </div>
              )}
              {project.demoLink && (
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto flex-1">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-[#00ff41]/10 border border-[#00ff41] hover:bg-[#00ff41]/20 text-[#00ff41] hover:shadow-[0_0_10px_rgba(0,255,65,0.4)] rounded transition-all w-full"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Deploy
                  </Link>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="cyber-chip max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#00f2fe]"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black border border-[#00f2fe] rounded flex items-center justify-center text-[#00f2fe] hover:text-[#00ff41] hover:border-[#00ff41] transition-all z-20"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="relative aspect-video mb-6 rounded border border-[#00f2fe]/30 overflow-hidden bg-black">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width:768px) 100vw, 80vw"
                  />
                  {/* Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono uppercase tracking-wide flex items-center gap-3">
                  <FaTerminal className="text-[#00ff41]" /> {selectedProject.title}
                </h2>

                <div className="bg-[#00f2fe]/5 border-l-4 border-[#00f2fe] p-4 mb-8">
                  <p className="text-gray-300 text-lg leading-relaxed font-mono">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#00ff41] mb-4 font-mono">> Stack_Dependencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-black border border-[#00f2fe]/50 text-[#00f2fe] rounded-sm text-sm font-mono shadow-[0_0_5px_rgba(0,242,254,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap pt-6 border-t border-[#00f2fe]/30 font-mono uppercase tracking-widest text-sm">
                  {selectedProject.githubLink && (
                    <Link
                      href={selectedProject.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 bg-black border border-[#00f2fe] hover:bg-[#00f2fe]/10 text-[#00f2fe] rounded transition-all shadow-[0_0_10px_rgba(0,242,254,0.2)]"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source_Code</span>
                    </Link>
                  )}
                  {selectedProject.demoLink && (
                    <Link
                      href={selectedProject.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41] hover:bg-[#00ff41]/20 text-[#00ff41] rounded transition-all shadow-[0_0_10px_rgba(0,255,65,0.2)]"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Execute_Live</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
