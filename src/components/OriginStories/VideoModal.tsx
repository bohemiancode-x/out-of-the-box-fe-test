'use client'

import { Modal } from '../ui/Modal'
import { motion } from 'framer-motion'

interface Creator {
  name: string
  title: string
  videoUrl: string
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  creator: Creator | null
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

export function VideoModal({
  isOpen,
  onClose,
  creator,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: VideoModalProps) {
  if (!creator) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Video player */}
        <div className="relative w-full aspect-video bg-black">
          <video
            src={creator.videoUrl}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>

        {/* Creator info */}
        <div className="p-6 border-t border-primary/20">
          <h3 className="text-2xl font-black tracking-wide text-white mb-2 uppercase">
            {creator.name}
          </h3>
          <p className="text-sm tracking-[0.2em] text-white/70 uppercase">
            {creator.title}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-primary/20">
          <motion.button
            onClick={onPrev}
            disabled={!hasPrev}
            whileHover={hasPrev ? { scale: 1.05 } : {}}
            whileTap={hasPrev ? { scale: 0.95 } : {}}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md text-sm tracking-wider uppercase font-bold transition-colors
              ${
                hasPrev
                  ? 'text-primary border border-primary/50 hover:bg-primary/10'
                  : 'text-white/30 border border-white/10 cursor-not-allowed'
              }
            `}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            PREV
          </motion.button>

          <motion.button
            onClick={onNext}
            disabled={!hasNext}
            whileHover={hasNext ? { scale: 1.05 } : {}}
            whileTap={hasNext ? { scale: 0.95 } : {}}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md text-sm tracking-wider uppercase font-bold transition-colors
              ${
                hasNext
                  ? 'text-primary border border-primary/50 hover:bg-primary/10'
                  : 'text-white/30 border border-white/10 cursor-not-allowed'
              }
            `}
          >
            NEXT
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </Modal>
  )
}
