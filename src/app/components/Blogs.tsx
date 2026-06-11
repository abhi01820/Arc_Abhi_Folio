"use client";

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <section className='py-20 container max-w-7xl mx-auto px-4 relative z-10'>
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white font-mono uppercase tracking-widest text-glow-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
            System.Logs
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                blogs.map((blog, index)=>(
                    <motion.article 
                      key={blog.slug} 
                      className='cyber-chip p-6 flex flex-col'
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                        <Link href={`/`}>
                            <h3 className="text-xl font-bold mb-3 text-white hover:text-[#00f2fe] transition-colors font-mono">
                                &gt; {blog.title}_
                            </h3>
                        </Link>
                        <p className="text-gray-400 mb-6 flex-grow font-mono text-sm border-l border-[#00f2fe]/30 pl-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center text-xs font-mono text-[#00ff41] space-x-4 border-t border-[#00ff41]/30 pt-4">
                            <span className="flex items-center">
                                <FaCalendarAlt className='mr-2' />
                                {new Date(blog.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                                <FaClock className='mr-2' />
                                {blog.readTime} min read 
                            </span>
                        </div>
                    </motion.article>
                ))
            }
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
            <Link href="/blogs" className='inline-block text-[#00ff41] px-8 py-3 bg-black border border-[#00ff41] hover:bg-[#00ff41]/20 transition-all font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,65,0.2)]'>
              Access_All_Logs
            </Link>
        </motion.div>
    </section>
  )
}

export default Blogs;