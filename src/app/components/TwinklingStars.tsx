"use client";

import { motion } from "framer-motion";

interface TwinklingStarsProps {
  count?: number;
  className?: string;
}

export default function TwinklingStars({ count = 100, className = "" }: TwinklingStarsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      {/* Small twinkling stars */}
      {[...Array(Math.floor(count * 0.7))].map((_, i) => (
        <motion.div
          key={`small-star-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0.2, 1, 0],
            scale: [0.5, 1, 0.7, 1.2, 0.5],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2.5,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Medium twinkling stars */}
      {[...Array(Math.floor(count * 0.2))].map((_, i) => (
        <motion.div
          key={`medium-star-${i}`}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0.3, 1, 0],
            scale: [0.3, 1.5, 0.8, 1.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Large bright stars */}
      {[...Array(Math.floor(count * 0.1))].map((_, i) => (
        <motion.div
          key={`large-star-${i}`}
          className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            opacity: [0, 1, 0.4, 1, 0],
            scale: [0.2, 2, 1, 2.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
          }}
        >
          <motion.div
            className="w-2 h-0.5 bg-gradient-to-r from-white via-cyan-300 to-transparent rounded-full"
            animate={{
              x: [0, 300],
              y: [0, 150],
              opacity: [0, 1, 1, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 15 + Math.random() * 10,
              ease: "easeOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}