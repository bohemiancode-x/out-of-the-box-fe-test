'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuoteCardProps {
  quote: string
  author: string
  position: {
    left?: string
    right?: string
    top?: string
    bottom?: string
    transform?: string
  }
}

export function QuoteCard({ quote, author, position }: QuoteCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      {/* Card in alcove position */}
      {!isFlipped && (
        <motion.div
          className="absolute w-32 h-48 cursor-pointer"
          style={{
            ...position,
            transformStyle: 'preserve-3d',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card container with border and glow */}
          <div
            className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-300"
            style={{
              border: '2px solid rgba(45, 248, 114, 0.3)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              boxShadow: isHovered
                ? '0 0 20px rgba(45, 248, 114, 0.6), inset 0 0 20px rgba(45, 248, 114, 0.2)'
                : '0 0 10px rgba(45, 248, 114, 0.3)',
            }}
          >
            {/* Quote preview text */}
            <div className="p-4 flex flex-col justify-between h-full">
              <p className="text-white/70 text-[10px] leading-tight line-clamp-6">
                {quote}
              </p>
              <p className="text-primary text-[8px] mt-2">— {author}</p>
            </div>

            {/* Hover indicator */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/5 pointer-events-none"
              />
            )}
          </div>
        </motion.div>
      )}

      {/* Closeup view when flipped */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={handleClick}
            style={{ perspective: '1000px' }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Card closeup */}
            <motion.div
              className="relative w-[90%] max-w-2xl h-[70vh] max-h-[600px] rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: '3px solid rgba(45, 248, 114, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 40px rgba(45, 248, 114, 0.4), inset 0 0 40px rgba(45, 248, 114, 0.1)',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                {/* Quote text */}
                <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light">
                  "{quote}"
                </p>

                {/* Author */}
                <p className="text-primary text-lg md:text-xl">— {author}</p>

                {/* Close hint */}
                <p className="text-white/40 text-sm mt-8">Click to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
