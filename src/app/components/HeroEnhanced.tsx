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
  slideInRight
} from "@/utils/animations";

// 3D Background Component with Comet Effect
function Hero3DBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Comet-like moving shapes */}
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[0.3, 32, 32]} position={[-4, 1, -2]}>
            <MeshDistortMaterial
              color="#00ffff"
              attach="material"
              distort={0.5}
              speed={4}
              opacity={0.6}
              transparent
            />
          </Sphere>
        </Float>
        
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
          <Sphere args={[0.2, 32, 32]} position={[4, -0.5, -1]}>
            <MeshDistortMaterial
              color="#ff4500"
              attach="material"
              distort={0.6}
              speed={3}
              opacity={0.5}
              transparent
            />
          </Sphere>
        </Float>
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={0.8}>
          <Sphere args={[0.4, 32, 32]} position={[1, -2, -3]}>
            <MeshDistortMaterial
              color="#9400d3"
              attach="material"
              distort={0.3}
              speed={5}
              opacity={0.4}
              transparent
            />
          </Sphere>
        </Float>
      </Suspense>
    </Canvas>
  );
}

// Download Form Modal Component
type DownloadForm = {
  name: string;
  email: string;
  company: string;
  purpose: string;
};

const DownloadModal = ({ isOpen, onClose, onSubmit }: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DownloadForm) => void;
}) => {
  const [formData, setFormData] = useState<DownloadForm>({
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
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md relative shadow-2xl border border-gray-200 dark:border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <FaTimes />
            </button>

            {/* Modal content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Request Resume Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please provide your information to request access to my resume. You&apos;ll receive an email notification once approved.
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
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
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

  const handleDownloadSubmit = (data: DownloadForm) => {
    console.log('Download request from:', data);
    // You can add additional tracking here if needed
  };
  return (
    <section className="relative py-24 container max-w-7xl mx-auto px-4 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DBackground />
      </div>
      
      {/* Twinkling stars and comet particles background */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0.3, 1, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Comet-like particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`comet-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {/* Comet head */}
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
              animate={{
                x: [0, 200 + Math.random() * 200],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut"
              }}
            />
            {/* Comet tail */}
            <motion.div
              className="absolute top-1 left-1 w-8 h-0.5 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full"
              animate={{
                x: [0, 180 + Math.random() * 180],
                y: [0, (Math.random() - 0.5) * 90],
                opacity: [0, 0.8, 0.6, 0],
                scaleX: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.8 + 0.2,
                ease: "easeOut"
              }}
            />
          </motion.div>
        ))}
        
        {/* Additional floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 150],
              y: [0, (Math.random() - 0.5) * 150],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
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
                animate={{
                  y: [-10, 10, -10],
                  rotateX: [-5, 5, -5],
                  rotateY: [-3, 3, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bubble.delay
                }}
              />
            ))}
          </div>

          {/* Enhanced Profile Image with 3D Transform */}
          <motion.div 
            className="relative w-52 h-52 md:w-72 md:h-72 mx-auto md:mx-0 group"
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

        {/* Right: Info Content with 3D Animations */}
        <motion.div 
          className="text-center md:text-left max-w-xl"
          variants={slideInRight}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            variants={fadeInDown}
          >
            Hi, I&apos;m <motion.span 
              className="inline-block"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Abhilash
            </motion.span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl text-white mb-6 min-h-[50px]"
            variants={fadeInUp}
          >
            <Typewriter
              words={[
                "Full Stack Developer 🚀",
                "3D UI/UX Designer ✨",
                "Tech Innovation Explorer 🔮",
                "Creative Problem Solver 💡",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          {/* Enhanced Social Links with 3D hover effects */}
          <motion.div 
            className="flex justify-center md:justify-start space-x-6 mb-8 text-2xl"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/abhi01820?tab=repositories", color: "#333" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/abhilash-mekala-b2a903355/", color: "#0077B5" },
              { icon: FaTwitter, href: "https://twitter.com/abhilash_01820", color: "#1DA1F2" }
            ].map((social, index) => (
              <motion.div key={index}>
                <Link href={social.href}>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/80 dark:bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 flex items-center justify-center group cursor-pointer shadow-lg"
                    whileHover={{
                      scale: 1.2,
                      rotateY: 15,
                      rotateX: 10,
                      boxShadow: `0 20px 40px ${social.color}30`,
                      backgroundColor: `${social.color}20`
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <social.icon 
                      className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
                      style={{ color: social.color }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons with 3D effects */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-4"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <Link href="/projects">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-2xl backdrop-blur-sm border border-white/10"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaProjectDiagram className="text-lg" />
                View Projects
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-2xl backdrop-blur-sm border border-white/10"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(75, 85, 99, 0.4)",
                  background: "linear-gradient(45deg, #374151, #1f2937)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdContactMail className="text-lg" />
                Contact Me
              </motion.div>
            </Link>

            <motion.button
              onClick={() => setShowDownloadModal(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-2xl backdrop-blur-sm border border-white/10"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)",
                background: "linear-gradient(45deg, #059669, #10b981)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaFileDownload className="text-lg" />
              Request Resume
            </motion.button>
          </motion.div>
        </motion.div>
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