"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaProjectDiagram,
  FaTimes,
  FaTerminal
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

// Animated Cyber Circuit Background
function CyberCircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00f2fe]/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#00ff41]/10 rounded-full blur-[80px]" />

      {/* SVG Circuits */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#00ff41" />
          </linearGradient>
          <filter id="glow-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        
        {/* Core Chip Area */}
        <rect x="350" y="350" width="300" height="300" fill="none" stroke="url(#circuit-glow)" strokeWidth="1" opacity="0.3" rx="10" />
        <rect x="400" y="400" width="200" height="200" fill="none" stroke="#00ff41" strokeWidth="2" rx="5" filter="url(#glow-blur)" />
        
        {/* Data Traces */}
        <g stroke="url(#circuit-glow)" strokeWidth="2" fill="none">
          <path d="M 450 400 L 450 250 L 200 250 L 0 250" />
          <path d="M 550 400 L 550 200 L 800 200 L 1000 200" />
          <path d="M 450 600 L 450 750 L 200 750 L 0 750" />
          <path d="M 550 600 L 550 800 L 800 800 L 1000 800" />
          
          <path d="M 400 450 L 250 450 L 250 100 L 0 100" />
          <path d="M 600 550 L 750 550 L 750 900 L 1000 900" />
        </g>
        
        {/* Nodes */}
        <g fill="#00ff41">
          <circle cx="200" cy="250" r="4" filter="url(#glow-blur)" />
          <circle cx="800" cy="200" r="4" filter="url(#glow-blur)" />
          <circle cx="200" cy="750" r="4" filter="url(#glow-blur)" />
          <circle cx="800" cy="800" r="4" filter="url(#glow-blur)" />
          <circle cx="250" cy="100" r="4" filter="url(#glow-blur)" />
          <circle cx="750" cy="900" r="4" filter="url(#glow-blur)" />
        </g>
      </svg>
      
      {/* Falling Matrix-like particles / Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f2fe] rounded-full shadow-[0_0_8px_#00f2fe]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
            animate={{
              y: ['0vh', '105vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
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
        alert('Access requested successfully.');
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
            className="cyber-chip p-6 w-full max-w-md relative"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#00f2fe] hover:text-[#00ff41] transition-colors"
            >
              <FaTimes />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-mono font-bold text-white mb-2 flex items-center gap-2">
                <FaTerminal className="text-[#00ff41]" /> System.Access
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                &gt; Enter credentials to request secure resume download...
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-sm text-[#00f2fe] mb-1">&gt; Name_</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00f2fe] mb-1">&gt; Email_</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00f2fe] mb-1">&gt; Organization_</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-[#00f2fe] mb-1">&gt; Intent_</label>
                <select
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white"
                >
                  <option value="" className="bg-gray-900">Select intent...</option>
                  <option value="job-opportunity" className="bg-gray-900">Recruitment</option>
                  <option value="collaboration" className="bg-gray-900">Collaboration</option>
                  <option value="freelance" className="bg-gray-900">Contracting</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-[#00ff41]/20 hover:bg-[#00ff41]/40 border border-[#00ff41] text-[#00ff41] font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <FaFileDownload /> Execute Request
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
  };

  return (
    <section className="relative py-24 container max-w-7xl mx-auto px-4 overflow-hidden min-h-[90vh] flex items-center">
      
      <CyberCircuitBackground />

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left: Cyber Profile Image */}
        <motion.div 
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-52 h-52 md:w-80 md:h-80 mx-auto md:mx-0 group">
            {/* Hacker Rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#00f2fe] border-dashed opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-4 rounded-full border border-[#00ff41]/50 border-dotted"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.3)] bg-black p-1 border-2 border-[#00f2fe]/50 group-hover:border-[#00ff41] transition-colors duration-500">
              <Image
                src="/profile.png"
                alt="Abhi Profile"
                width={320}
                height={320}
                className="object-cover w-full h-full rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-[#00f2fe]/10 group-hover:bg-transparent transition-colors duration-500 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Right: Info Content */}
        <motion.div 
          className="text-center md:text-left max-w-xl w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-mono uppercase tracking-tight">
            Hi, I'm <span className="text-glow-cyan text-[#00f2fe]">Abhilash</span>
          </h1>

          <div className="text-xl md:text-2xl text-[#00ff41] mb-6 font-mono min-h-[30px] md:h-[30px] h-auto font-bold flex flex-wrap">
            <Typewriter
              words={[
                "> Full Stack Developer_",
                "> AI Engineer_",
                "> Generative AI_",
                "> Agentic AI_"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>



          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {[
              { icon: FaGithub, href: "https://github.com/abhi01820" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/abhilash-mekala-b2a903355/" },
              { icon: FaTwitter, href: "https://x.com/abhilash_01820" },
              { icon: SiLeetcode, href: "https://leetcode.com/u/abhi_01820/" },
              { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/johnab04hg?tab=activity" }
            ].map((social, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={social.href}>
                  <div className="w-12 h-12 rounded-lg border border-[#00f2fe]/40 bg-[#050505] flex items-center justify-center transition-all hover:border-[#00f2fe] hover:shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                    <social.icon className="text-[#00f2fe] text-xl" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 font-mono text-sm tracking-wider uppercase">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <button
                onClick={() => setShowDownloadModal(true)}
                className="bg-[#00f2fe]/20 border border-[#00f2fe] hover:bg-[#00f2fe]/40 text-[#00f2fe] px-8 py-4 rounded-lg w-full text-center flex items-center justify-center gap-3 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <FaFileDownload className="text-lg" />
                Extract_Resume
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onSubmit={handleDownloadSubmit}
      />
    </section>
  );
};

export default Hero;