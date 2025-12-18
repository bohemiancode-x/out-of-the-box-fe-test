'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreatorCard } from './CreatorCard'
import { VideoModal } from './VideoModal'

interface Creator {
  name: string
  title: string
  imageUrl: string
  videoUrl: string
}

const creators: Creator[] = [
  {
    name: 'HANNAH BEACHLER',
    title: 'PRODUCTION DESIGNER',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
  },
  {
    name: 'JASMINE ALEXIA',
    title: 'STORYBOARD ARTIST',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
  },
  {
    name: 'ALICIA DIAZ',
    title: 'SCULPTOR',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=600&fit=crop',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
  },
]

export function OriginStories() {
  const [selectedCreatorIndex, setSelectedCreatorIndex] = useState<number | null>(null)

  const handleWatch = (index: number): void => {
    setSelectedCreatorIndex(index)
  }

  const handleClose = (): void => {
    setSelectedCreatorIndex(null)
  }

  const handlePrev = (): void => {
    if (selectedCreatorIndex !== null && selectedCreatorIndex > 0) {
      setSelectedCreatorIndex(selectedCreatorIndex - 1)
    }
  }

  const handleNext = (): void => {
    if (selectedCreatorIndex !== null && selectedCreatorIndex < creators.length - 1) {
      setSelectedCreatorIndex(selectedCreatorIndex + 1)
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-dark py-20 px-4">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 50% 50%,
              var(--color-dark-panel) 0%,
              var(--color-dark) 70%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wide text-white mb-4 uppercase">
            ORIGIN
            <br />
            STORIES
          </h2>
          <p className="text-sm md:text-base tracking-[0.3em] text-white/70 uppercase">
            FIND YOUR INSPIRATION
          </p>
        </motion.div>

        {/* Creator cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CreatorCard
                name={creator.name}
                title={creator.title}
                imageUrl={creator.imageUrl}
                onWatch={() => handleWatch(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedCreatorIndex !== null}
        onClose={handleClose}
        creator={selectedCreatorIndex !== null ? creators[selectedCreatorIndex] : null}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedCreatorIndex !== null && selectedCreatorIndex > 0}
        hasNext={selectedCreatorIndex !== null && selectedCreatorIndex < creators.length - 1}
      />
    </section>
  )
}
