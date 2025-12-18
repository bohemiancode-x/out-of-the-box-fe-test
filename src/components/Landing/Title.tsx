'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
}

export function Title() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center pointer-events-none select-none"
    >
      {/* THE */}
      <motion.div variants={wordVariants} className="text-lg md:text-xl tracking-[0.3em] mb-2 text-white/90">
        THE
      </motion.div>

      {/* HALL OF */}
      <motion.div variants={wordVariants} className="mb-1">
        <span className="text-7xl md:text-8xl lg:text-9xl font-black tracking-wide text-white">
          HALL
        </span>
        <span className="text-lg md:text-xl tracking-[0.2em] ml-4 text-white/90">
          OF
        </span>
      </motion.div>

      {/* ZERO LIMITS */}
      <motion.div variants={wordVariants} className="text-7xl md:text-8xl lg:text-9xl font-black tracking-wide text-white">
        ZERO LIMITS
      </motion.div>
    </motion.div>
  )
}
