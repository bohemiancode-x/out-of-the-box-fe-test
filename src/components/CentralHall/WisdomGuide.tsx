'use client'

import { motion } from 'framer-motion'

interface Section {
  id: string
  label: string
}

interface WisdomGuideProps {
  sections: Section[]
  currentSection: number
}

// Wavy audio visualization component
function AudioWave() {
  const bars = 5

  return (
    <div className="flex items-center gap-[2px] h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-primary rounded-full"
          animate={{
            height: ['40%', '100%', '60%', '80%', '40%'],
          }}
          transition={{
            duration: 1.2 + i * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}

export function WisdomGuide({ sections, currentSection }: WisdomGuideProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
    >
      <div className="flex flex-col gap-1">
        {/* Header */}
        <div className="mb-4">
          <div className="text-xs tracking-widest text-primary mb-2">WISDOM</div>
          <div className="text-xs tracking-widest text-white/50 mb-3">GUIDE</div>

          {/* Audio wave visualization */}
          <AudioWave />
        </div>

        {/* Navigation dots */}
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center gap-3">
              {/* Dot indicator */}
              <div
                className={`
                  w-3 h-3 rounded-full border-2 transition-all duration-300
                  ${
                    index === currentSection
                      ? 'bg-primary border-primary scale-125 shadow-[0_0_12px_var(--color-primary)]'
                      : 'border-white/30 bg-transparent'
                  }
                `}
              />

              {/* Label (show on active) */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: index === currentSection ? 1 : 0,
                  x: index === currentSection ? 0 : -10,
                }}
                className="text-xs tracking-wider text-white/70 uppercase whitespace-nowrap"
              >
                {section.label}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
