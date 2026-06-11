"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 relative z-10">
       <motion.div 
        className="cyber-chip p-8 md:p-12 border-2 border-[#00f2fe]/50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
       >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 font-mono text-white text-glow-cyan">> Subscribe_To_Network</h2>
              <p className="text-[#00ff41] font-mono text-sm">
                Get the latest protocol updates on my projects, system logs, and tech insights delivered directly to your port.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter_Email_Address..."
                className="flex-1 px-4 py-3 bg-black/50 border border-[#00f2fe]/50 focus:outline-none focus:border-[#00ff41] text-white font-mono text-sm rounded-none"
                required
              />
              <button
                type="submit"
                className="cursor-pointer bg-[#00f2fe]/20 hover:bg-[#00f2fe]/40 border border-[#00f2fe] text-[#00f2fe] font-mono uppercase tracking-widest px-8 py-3 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                Execute
              </button>
            </form>
          </div>
      </motion.div>
    </section>
  );
}