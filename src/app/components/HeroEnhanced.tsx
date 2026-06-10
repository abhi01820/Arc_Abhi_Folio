"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md relative shadow-2xl border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Request Resume Access
          </h3>
          <p className="text-gray-400">
            Please provide your information to request access to my resume. You'll receive an email notification once approved.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
              placeholder="Company name (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Purpose *
            </label>
            <select
              name="purpose"
              required
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
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
              className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
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
      </div>
    </div>
  );
};

const Hero = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownloadSubmit = (data: DownloadForm) => {
    console.log('Download request from:', data);
  };

  return (
    <section className="relative py-24 container max-w-7xl mx-auto px-4 overflow-hidden">
      
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto md:mx-0 group">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-800 shadow-2xl z-10 bg-gray-900">
              <Image
                src="/profile.png"
                alt="Abhi Profile"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Info Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-blue-500">Abhilash</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">
            Full Stack Developer & CSE Student
          </div>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            I specialize in building clean, robust, and scalable web applications. Passionate about software engineering, problem solving, and modern web technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8 text-2xl">
            {[
              { icon: FaGithub, href: "https://github.com/abhi01820?tab=repositories", hoverColor: "hover:text-white" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/abhilash-mekala-b2a903355/", hoverColor: "hover:text-blue-500" },
              { icon: FaTwitter, href: "https://twitter.com/abhilash_01820", hoverColor: "hover:text-blue-400" }
            ].map((social, index) => (
              <Link key={index} href={social.href}>
                <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-200 hover:bg-gray-700">
                  <social.icon className={`text-gray-400 transition-colors ${social.hoverColor}`} />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 transition-colors font-medium">
              <FaProjectDiagram className="text-lg" />
              View Projects
            </Link>

            <Link href="/contact" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 transition-colors font-medium">
              <MdContactMail className="text-lg" />
              Contact Me
            </Link>

            <button
              onClick={() => setShowDownloadModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl w-full sm:w-auto text-center flex items-center justify-center gap-3 transition-colors font-medium"
            >
              <FaFileDownload className="text-lg" />
              Request Resume
            </button>
          </div>
        </div>
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