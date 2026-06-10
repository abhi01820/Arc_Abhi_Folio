'use client';

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
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
    <section className="py-20 container max-w-7xl mx-auto px-4 relative">
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <img
              src="/projects/bot-animation.gif"
              alt="Bot Animation"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
            />
          </div>

          <div className="lg:col-span-3 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Explore my latest work and creative solutions
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto lg:mx-0 rounded-full" />
            <div className="bg-gray-900 rounded-lg px-6 py-4 border border-gray-800 inline-block">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
                <span className="text-xl">💡</span>
                <span className="font-medium text-gray-300">Click any project card for detailed view</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group bg-gray-900 rounded-2xl p-4 border border-gray-800 hover:border-blue-500/50 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg w-full flex flex-col h-full"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-2 left-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm">View Details</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
              {project.title}
            </h3>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
              {project.githubLink && (
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto flex-1">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm w-full"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>
                </div>
              )}
              {project.demoLink && (
                <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto flex-1">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm w-full"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Demo
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-20"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 80vw"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap pt-6 border-t border-gray-800">
                {selectedProject.githubLink && (
                  <Link
                    href={selectedProject.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </Link>
                )}
                {selectedProject.demoLink && (
                  <Link
                    href={selectedProject.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
