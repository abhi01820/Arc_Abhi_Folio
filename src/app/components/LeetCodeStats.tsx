"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMedal, FaFire, FaTrophy, FaChartLine, FaTerminal } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200 } }
};

export default function LeetCodeStats() {
  const totalSolved = 620;
  const totalProblems = 3958;
  const percentage = (totalSolved / totalProblems) * 100;

  return (
    <section className="container max-w-7xl mx-auto py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-glow-cyan flex items-center justify-center gap-4">
          <FaCode className="text-[#00ff41] text-4xl" /> LeetCode_Metrics
        </h2>
        <p className="text-[#00f2fe] mt-4 font-mono">
          &gt; Global Rank: 147,353 | Top 17.15% | Rating: 1,657
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left Column: Circular Progress & Difficulties */}
        <motion.div variants={itemVariants} className="cyber-chip p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/5 to-[#00f2fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-xl font-bold font-mono text-white mb-8 z-10 flex items-center gap-2">
            <FaChartLine className="text-[#00f2fe]" /> Problems_Solved
          </h3>
          
          <div className="relative w-48 h-48 mb-8 z-10 flex items-center justify-center">
            {/* SVG Circle */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="96" cy="96" r="88"
                className="stroke-gray-800" strokeWidth="8" fill="none"
              />
              <motion.circle
                cx="96" cy="96" r="88"
                className="stroke-[#00ff41]" strokeWidth="8" fill="none" strokeLinecap="round"
                initial={{ strokeDasharray: "0 1000" }}
                whileInView={{ strokeDasharray: `${(percentage / 100) * (2 * Math.PI * 88)} 1000` }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </svg>
            <div className="text-center">
              <span className="text-4xl font-bold text-white block">{totalSolved}</span>
              <span className="text-xs text-gray-500 font-mono">/ {totalProblems}</span>
            </div>
          </div>

          <div className="w-full space-y-4 z-10 font-mono text-sm">
            <div className="flex justify-between items-center bg-black/40 p-3 rounded border-l-2 border-[#00ff41]">
              <span className="text-gray-300">Easy</span>
              <span className="text-[#00ff41] font-bold">198</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded border-l-2 border-yellow-400">
              <span className="text-gray-300">Medium</span>
              <span className="text-yellow-400 font-bold">362</span>
            </div>
            <div className="flex justify-between items-center bg-black/40 p-3 rounded border-l-2 border-red-500">
              <span className="text-gray-300">Hard</span>
              <span className="text-red-500 font-bold">60</span>
            </div>
          </div>
        </motion.div>

        {/* Middle Column: Consistency & Submissions */}
        <motion.div variants={itemVariants} className="cyber-chip p-8 flex flex-col justify-between group">
          <div>
            <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
              <FaFire className="text-orange-500" /> Consistency_Engine
            </h3>
            
            <div className="space-y-6">
              <div className="bg-black/40 p-5 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
                <div className="text-sm text-gray-400 font-mono mb-1">Max Streak</div>
                <div className="text-3xl font-bold text-orange-500 flex items-end gap-2">
                  182 <span className="text-sm font-normal text-gray-500 mb-1">Days</span>
                </div>
              </div>
              
              <div className="bg-black/40 p-5 rounded-lg border border-gray-800 hover:border-[#00f2fe]/50 transition-colors">
                <div className="text-sm text-gray-400 font-mono mb-1">Total Active Days</div>
                <div className="text-3xl font-bold text-[#00f2fe] flex items-end gap-2">
                  362 <span className="text-sm font-normal text-gray-500 mb-1">Days</span>
                </div>
              </div>

              <div className="bg-black/40 p-5 rounded-lg border border-gray-800 hover:border-[#00ff41]/50 transition-colors">
                <div className="text-sm text-gray-400 font-mono mb-1">Submissions (Past Year)</div>
                <div className="text-3xl font-bold text-[#00ff41]">1,479</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Achievements & Language */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          {/* Badges Box */}
          <div className="cyber-chip p-8 h-1/2 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaTrophy className="text-6xl text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold font-mono text-white mb-4 flex items-center gap-2 relative z-10">
              <FaMedal className="text-yellow-400" /> Honors & Badges
            </h3>
            <div className="relative z-10">
              <div className="text-4xl font-bold text-yellow-400 mb-2">11</div>
              <p className="text-gray-400 font-mono text-sm">Most Recent:</p>
              <p className="text-white font-mono font-bold mt-1 inline-block border-b border-yellow-400/50 pb-1">
                365 Days Badge
              </p>
            </div>
          </div>

          {/* Primary Language Box */}
          <div className="cyber-chip p-8 h-1/2 flex flex-col justify-center group">
            <h3 className="text-xl font-bold font-mono text-white mb-4 flex items-center gap-2">
              <FaTerminal className="text-[#00f2fe]" /> Primary_Weapon
            </h3>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#00599C]/20 flex items-center justify-center border border-[#00599C]">
                <span className="text-[#00f2fe] font-bold text-2xl">C++</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">593</div>
                <div className="text-sm text-gray-400 font-mono">Problems Solved</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Matrix Grid representing the activity graph */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 cyber-chip border-t-4 border-t-[#00ff41] bg-black/60 hidden md:block"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#00ff41] font-mono text-sm uppercase tracking-wider font-bold">Activity_Matrix_Simulation</h3>
          <span className="text-xs text-gray-500 font-mono">1,479 Submissions</span>
        </div>
        <div className="flex gap-1 overflow-hidden opacity-80">
          {[...Array(45)].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1">
              {[...Array(7)].map((_, rowIndex) => {
                // Randomly generate activity pattern matching the user's intense activity (362/365 days active)
                const intensity = Math.random();
                let bgColor = "bg-[#00ff41]"; // Default to most intense
                if (intensity > 0.99) bgColor = "bg-gray-900"; // Missed day (extremely rare)
                else if (intensity > 0.7) bgColor = "bg-[#00cc33]";
                else if (intensity > 0.4) bgColor = "bg-[#009922]";
                else if (intensity > 0.1) bgColor = "bg-[#006611]";

                return (
                  <motion.div 
                    key={rowIndex} 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIndex * 0.01 + rowIndex * 0.01 }}
                    className={`w-3 h-3 rounded-sm ${bgColor} hover:scale-150 transition-transform cursor-crosshair`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
