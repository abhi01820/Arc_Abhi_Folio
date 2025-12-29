"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { MdContactMail } from "react-icons/md";
import { 
  fadeInUp, 
  fadeInDown, 
  slideInLeft, 
  slideInRight,
  float3D,
  particle3D,
  morphing3D
} from "@/utils/animations";

// 3D Background Component
function Hero3DBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Floating geometric shapes */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
          <Sphere args={[0.5, 32, 32]} position={[-3, 2, -2]}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.3}
              speed={2}
              opacity={0.3}
              transparent
            />
          </Sphere>
        </Float>
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere args={[0.3, 32, 32]} position={[3, -1, -1]}>
            <MeshDistortMaterial
              color="#8b5cf6"
              attach="material"
              distort={0.4}
              speed={1.5}
              opacity={0.4}
              transparent
            />
          </Sphere>
        </Float>
        
        <Float speed={1} rotationIntensity={2} floatIntensity={0.3}>
          <Sphere args={[0.8, 32, 32]} position={[0, -2, -3]}>
            <MeshDistortMaterial
              color="#ec4899"
              attach="material"
              distort={0.2}
              speed={3}
              opacity={0.2}
              transparent
            />
          </Sphere>
        </Float>
      </Suspense>
    </Canvas>
  );
}

// Download Form Modal Component
const DownloadModal = ({ isOpen, onClose, onSubmit }: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit download request to approval system
      const response = await fetch('/api/download-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        onSubmit(formData);
        alert('Thank you! Your download request has been submitted. You will receive an email notification once your request is reviewed and approved.');
        onClose();
      } else {
        alert(result.error || 'Error submitting request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FaTimes />
            </button>

            {/* Modal content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Request Resume Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please provide your information to request access to my resume. You'll receive an email notification once approved.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Company name (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Purpose *
                </label>
                <select
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select purpose</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="networking">Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaFileDownload />
                      Request Access
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownloadSubmit = (data: any) => {
    console.log('Download request from:', data);
    // You can add additional tracking here if needed
  };
  return (
    <section className="relative py-24 container max-w-7xl mx-auto px-4 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DBackground />
      </div>
      
      {/* Animated particle background */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particle3D}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Profile Image with 3D Effects */}
        <motion.div 
          className="flex-shrink-0 relative"
          variants={slideInLeft}
          initial="initial"
          animate="animate"
        >
          {/* Enhanced 3D Floating Bubbles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[
              { color: "sky", size: "w-10 h-10", pos: "top-4 left-6", delay: 0 },
              { color: "pink", size: "w-8 h-8", pos: "bottom-10 right-8", delay: 0.5 },
              { color: "purple", size: "w-6 h-6", pos: "top-20 right-4", delay: 1 },
              { color: "yellow", size: "w-5 h-5", pos: "bottom-6 left-10", delay: 1.5 },
              { color: "emerald", size: "w-7 h-7", pos: "top-10 left-1/2", delay: 2 },
              { color: "red", size: "w-10 h-10", pos: "top-1/2 left-2", delay: 2.5 },
              { color: "rose", size: "w-8 h-8", pos: "bottom-16 left-1/3", delay: 3 },
              { color: "orange", size: "w-6 h-6", pos: "top-5 right-1/3", delay: 3.5 }
            ].map((bubble, i) => (
              <motion.div
                key={i}
                className={`absolute ${bubble.size} blur-xl rounded-full ${bubble.pos}`}
                style={{
                  background: `radial-gradient(circle, ${
                    bubble.color === 'sky' ? 'rgba(56,189,248,0.5)' :
                    bubble.color === 'pink' ? 'rgba(244,114,182,0.5)' :
                    bubble.color === 'purple' ? 'rgba(192,132,252,0.4)' :
                    bubble.color === 'yellow' ? 'rgba(253,224,71,0.4)' :
                    bubble.color === 'emerald' ? 'rgba(110,231,183,0.4)' :
                    bubble.color === 'red' ? 'rgba(239,68,68,0.6)' :
                    bubble.color === 'rose' ? 'rgba(244,63,94,0.5)' :
                    'rgba(249,115,22,0.5)'
                  }, transparent)`
                }}
                variants={float3D}
                initial="initial"
                animate="animate"
                transition={{ delay: bubble.delay }}
              />
            ))}
          </div>

          {/* Enhanced Profile Image with 3D Transform */}
          <motion.div 
            className="relative w-52 h-52 md:w-72 md:h-72 mx-auto md:mx-0 group"
            variants={morphing3D}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dynamic glowing halo */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-40 group-hover:opacity-70"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Profile Image Container */}
            <motion.div 
              className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/20 backdrop-blur-sm shadow-2xl z-10"
              style={{
                boxShadow: "0 0 60px 15px rgba(56,189,248,0.6), inset 0 0 20px rgba(255,255,255,0.1)"
              }}
            >
              <Image
                src="/profile.png"
                alt="Abhi Profile"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Info Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-primary">Abhilash</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 min-h-[50px]">
            <Typewriter
              words={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Tech Explorer",
                "Problem Solver 💡",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-6 text-2xl">
            <Link
              href="https://github.com/abhi01820?tab=repositories"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhilash-mekala-b2a903355/"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/abhilash_01820"
              className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/70 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <FaProjectDiagram className="text-lg" />
              View Projects
            </Link>

            <Link
              href="/contact"
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-primary transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <MdContactMail className="text-lg" />
              Contact Me
            </Link>

            <button
              onClick={() => setShowDownloadModal(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <FaFileDownload className="text-lg" />
              Request Resume
            </button>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onSubmit={handleDownloadSubmit}
      />
    </section>
  );
};

export default Hero;
