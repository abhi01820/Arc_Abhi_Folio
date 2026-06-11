'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTerminal } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 relative z-10">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-white font-mono uppercase tracking-widest text-glow-cyan flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FaTerminal className="text-[#00ff41]" /> Establish_Connection
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#00f2fe] font-mono">&gt; Ping_Me</h2>
            <p className="text-gray-300 font-mono text-sm border-l-2 border-[#00f2fe] pl-4 bg-[#00f2fe]/5 py-2">
              System is online and ready to accept new packets. I am open to discussing new systems, creative algorithms, or
              opportunities to be part of your network.
            </p>
          </div>
          
          <div className="space-y-6">
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cyber-chip p-4">
              <div className="p-3 bg-black border border-[#00f2fe] rounded">
                <FaEnvelope className="h-6 w-6 text-[#00f2fe]" />
              </div>
              <div>
                <h3 className="font-bold text-[#00ff41] font-mono">&gt; Email_</h3>
                <a href="mailto:mekalaabhilash01820@gmail.com" className="text-gray-300 hover:text-white transition-colors font-mono text-sm">
                  mekalaabhilash01820@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cyber-chip p-4">
              <div className="p-3 bg-black border border-[#00ff41] rounded">
                <FaPhone className="h-6 w-6 text-[#00ff41]" />
              </div>
              <div>
                <h3 className="font-bold text-[#00ff41] font-mono">&gt; Commlink_</h3>
                <a href="tel:+917989430063" className="text-gray-300 hover:text-white transition-colors font-mono text-sm">
                  +91 7989430063
                </a>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 cyber-chip p-4">
              <div className="p-3 bg-black border border-pink-500 rounded">
                <FaMapMarkerAlt className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#00ff41] font-mono">&gt; Coordinates_</h3>
                <p className="text-gray-300 font-mono text-sm">Kukatpally, Medchal</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="cyber-chip p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 font-mono">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#00f2fe]">
                &gt; Input.Name_
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#00f2fe]">
                &gt; Input.Email_
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#00f2fe]">
                &gt; Input.Payload_
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-[#00f2fe]/30 rounded-none focus:outline-none focus:border-[#00ff41] text-white transition-all resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-[#00ff41]/20 hover:bg-[#00ff41]/40 border border-[#00ff41] text-[#00ff41] font-bold transition-all disabled:opacity-50 flex items-center justify-center uppercase tracking-widest"
            >
              {status === 'loading' ? 'Transmitting...' : 'Send_Packet'}
            </button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-[#00ff41] text-center border border-[#00ff41] bg-[#00ff41]/10 py-2 mt-4 text-sm font-bold"
              >
                [ SUCCESS ] Payload delivered securely.
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-red-400 text-center border border-red-400 bg-red-400/10 py-2 mt-4 text-sm font-bold"
              >
                [ ERROR ] Transmission failed. Retry.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}