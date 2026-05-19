'use client'
import { motion } from 'framer-motion'

function FloatBox({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`absolute rounded-md opacity-30 border-4 ${className}`}
      style={style}
      animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function FloatCircle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-25 border-4 ${className}`}
      style={style}
      animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function CustomTech() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-center" style={{ background: '#0d0924' }}>
      {/* Decorative shapes */}
      <FloatBox className="w-16 h-16" style={{ borderColor: '#59D3AA', top: '15%', left: '8%' }} />
      <FloatBox className="w-10 h-10" style={{ borderColor: '#FC466B', top: '60%', left: '5%' }} />
      <FloatBox className="w-12 h-12" style={{ borderColor: '#3F5EFB', top: '20%', right: '10%' }} />
      <FloatBox className="w-20 h-20" style={{ borderColor: '#b46ffe', bottom: '15%', right: '7%' }} />
      <FloatCircle className="w-24 h-24" style={{ borderColor: '#6318F1', top: '10%', left: '20%' }} />
      <FloatCircle className="w-16 h-16" style={{ borderColor: '#FC466B', bottom: '20%', left: '15%' }} />
      <FloatCircle className="w-20 h-20" style={{ borderColor: '#59D3AA', bottom: '10%', right: '20%' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-extrabold leading-none mb-2"
        >
          <span className="block text-5xl sm:text-7xl xl:text-8xl text-white tracking-tight">CUSTOM</span>
          <span className="block text-5xl sm:text-7xl xl:text-8xl bg-clip-text text-transparent tracking-tight"
            style={{ backgroundImage: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>
            TECHNOLOGY
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mt-4 mb-8 text-base sm:text-lg"
        >
          Enhance your digital presence, or revolutionize your industry.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 30px #FC466B60' }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-semibold px-8 py-3 rounded-full text-sm"
            style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}
          >
            Apply Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-semibold px-8 py-3 rounded-full text-sm border-2"
            style={{ borderColor: '#3F5EFB', background: 'transparent' }}
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </section>
  )
}
