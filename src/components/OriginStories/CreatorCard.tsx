'use client'

import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent } from 'react'

interface CreatorCardProps {
  name: string
  title: string
  imageUrl: string
  onWatch: () => void
}

export function CreatorCard({ name, title, imageUrl, onWatch }: CreatorCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation (max 15 degrees)
    const rotateYValue = ((mouseX - centerX) / rect.width) * -15
    const rotateXValue = ((mouseY - centerY) / rect.height) * 15

    setRotateY(rotateYValue)
    setRotateX(rotateXValue)
  }

  const handleMouseLeave = (): void => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full max-w-sm mx-auto cursor-pointer"
    >
      {/* Card container with green border and holographic effect */}
      <div
        className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-dark-panel to-dark shadow-[0_0_30px_rgba(45,248,114,0.2)]"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image with scanline overlay */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Scanline effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(45, 248, 114, 0.1) 2px, rgba(45, 248, 114, 0.1) 4px)',
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ transform: 'translateZ(50px)' }}>
          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-black tracking-wide text-white mb-1 uppercase">
            {name}
          </h3>

          {/* Title */}
          <p className="text-sm tracking-[0.2em] text-white/70 mb-4 uppercase">
            {title}
          </p>

          {/* Watch button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              onWatch()
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start px-6 py-2 bg-primary/10 border border-primary/50 rounded-md text-sm tracking-widest text-primary uppercase font-bold hover:bg-primary/20 transition-colors"
          >
            ▶ WATCH
          </motion.button>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-primary/60" />
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-primary/60" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-primary/60" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary/60" />
      </div>
    </motion.div>
  )
}
