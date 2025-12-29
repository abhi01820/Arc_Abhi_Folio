export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 } as const,
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 } as const,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 } as const,
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring" as const, stiffness: 300 },
};

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring" as const, stiffness: 300 },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 } as const,
};

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 } as const,
};

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 } as const,
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 } as const,
};

// 3D Animation Variants
export const float3D = {
  initial: { y: 0, rotateX: 0, rotateY: 0 },
  animate: {
    y: [-10, 10, -10],
    rotateX: [-5, 5, -5],
    rotateY: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const skillCard3D = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15,
    z: -50 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: { 
      duration: 0.8, 
      type: "spring" as const,
      stiffness: 100
    }
  },
  whileHover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    z: 20,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      type: "spring" as const,
      stiffness: 300
    }
  },
  whileTap: {
    scale: 0.95,
    rotateY: -2,
    rotateX: -2
  }
};

export const icon3DFloat = {
  initial: { 
    rotateY: 0, 
    rotateX: 0, 
    scale: 1 
  },
  animate: {
    rotateY: [0, 360],
    rotateX: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear" as const,
    }
  },
  whileHover: {
    rotateY: 180,
    rotateX: 15,
    scale: 1.2,
    transition: { duration: 0.5 }
  }
};

export const particle3D = {
  initial: { 
    opacity: 0,
    scale: 0,
    x: 0,
    y: 0,
    rotateZ: 0
  },
  animate: (custom: number) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    x: [0, (Math.random() - 0.5) * 200],
    y: [0, (Math.random() - 0.5) * 200],
    rotateZ: [0, 360],
    transition: {
      duration: 3 + custom,
      repeat: Infinity,
      delay: custom * 0.2,
      ease: "easeInOut" as const
    }
  })
};

export const morphing3D = {
  initial: { 
    borderRadius: "20px",
    rotateX: 0,
    rotateY: 0
  },
  animate: {
    borderRadius: ["20px", "50%", "20px"],
    rotateX: [0, 5, 0],
    rotateY: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  },
  whileHover: {
    borderRadius: "50%",
    rotateX: 10,
    rotateY: 15,
    transition: { duration: 0.3 }
  }
};

export const glowPulse = {
  initial: { 
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)" 
  },
  animate: {
    boxShadow: [
      "0 0 0 rgba(59, 130, 246, 0)",
      "0 0 20px rgba(59, 130, 246, 0.5)",
      "0 0 40px rgba(59, 130, 246, 0.3)",
      "0 0 0 rgba(59, 130, 246, 0)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export const stagger3D = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
