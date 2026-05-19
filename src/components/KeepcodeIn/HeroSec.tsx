'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { title: 'Web Development', tag: 'React · Next.js · TypeScript' },
  { title: 'Mobile App Dev', tag: 'React Native · Flutter' },
  { title: 'UI/UX Design', tag: 'Figma · Adobe XD' },
  { title: 'Cloud Computing', tag: 'AWS · GCP · Azure' },
  { title: 'QA Testing', tag: 'Selenium · Cypress' },
  { title: 'Talent Acquisition', tag: 'IT Staffing · Headhunting' },
  { title: 'Custom Solutions', tag: 'Bespoke Software' },
]

export default function HeroSec() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % slides.length), 2500)
    return () => clearInterval(id)
  }, [])

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  const visible = [-1, 0, 1].map(offset => ({
    slide: slides[(current + offset + slides.length) % slides.length],
    offset,
  }))

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #110D2E 0%, #050023 100%)' }}>
      {/* Blur blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#6318F1' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
            The Metaverse to{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>
              Diversity &amp; Customized Technology
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Connecting &amp; Linking you to ideal software resources, freeing you to prioritize what truly counts.
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px #6318F180' }}
              whileTap={{ scale: 0.97 }}
              className="text-white font-semibold px-7 py-3 rounded-full text-sm"
              style={{ background: '#6318F1' }}
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-white font-semibold px-7 py-3 rounded-full text-sm border border-white/20"
              style={{ background: '#35314D' }}
            >
              Explore
            </motion.button>
          </div>
        </motion.div>

        {/* Right — layered coverflow slider */}
        <div className="relative flex items-center justify-center h-64 select-none">
          <button onClick={prev}
            className="absolute left-0 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            ‹
          </button>

          <div className="relative w-full flex items-center justify-center gap-0 overflow-visible">
            <AnimatePresence initial={false}>
              {visible.map(({ slide, offset }) => (
                <motion.div
                  key={slide.title + offset}
                  className="absolute rounded-2xl p-5 flex flex-col justify-end"
                  style={{
                    width: offset === 0 ? '52%' : '38%',
                    height: offset === 0 ? '200px' : '150px',
                    background: offset === 0
                      ? 'linear-gradient(135deg, #6318F1, #3F5EFB)'
                      : 'linear-gradient(135deg, #1e0347, #110D2E)',
                    left: offset === -1 ? '2%' : offset === 1 ? '46%' : '24%',
                    zIndex: offset === 0 ? 10 : 5,
                    opacity: offset === 0 ? 1 : 0.5,
                    filter: offset === 0 ? 'none' : 'blur(1px)',
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: offset === 0 ? 1 : 0.5, scale: offset === 0 ? 1 : 0.87 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-white font-bold text-sm">{slide.title}</p>
                  <p className="text-white/60 text-xs mt-1">{slide.tag}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={next}
            className="absolute right-0 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            ›
          </button>

          {/* Pagination dots */}
          <div className="absolute -bottom-8 flex gap-2 justify-center w-full">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className="rounded-full transition-all"
                style={{ width: i === current ? 20 : 8, height: 8, background: i === current ? '#6318F1' : '#ffffff40' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
