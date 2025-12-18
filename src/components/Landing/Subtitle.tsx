'use client'

import { motion } from 'framer-motion'

export function Subtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative text-center pointer-events-none select-none"
    >
      {/* Background gradient element */}
      <div
        className="absolute left-0 w-full opacity-70"
        style={{
          top: '5%',
          height: '90%',
          background: 'linear-gradient(90deg, rgba(0, 150, 77, 0) 0%, #00964D 50%, rgba(0, 150, 77, 0) 100%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Text stacked vertically */}
      <div className="relative flex flex-col gap-1 text-sm md:text-base tracking-[0.5em] text-white/70">
        <div>EXPLORE NEW PATHS.</div>
        <div>FIND YOUR GIFT.</div>
      </div>
    </motion.div>
  )
}
