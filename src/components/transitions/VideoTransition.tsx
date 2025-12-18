'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoTransitionProps {
  isActive: boolean
  onComplete: () => void
  videoSrc: string
}

export function VideoTransition({ isActive, onComplete, videoSrc }: VideoTransitionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (!isActive || !videoRef.current) return

    const video = videoRef.current

    // Play video when component becomes active
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.error('Video playback failed:', error)
        // If video fails, complete transition anyway
        setTimeout(onComplete, 100)
      }
    }

    playVideo()

    // Handle video end
    const handleVideoEnd = () => {
      onComplete()
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [isActive, onComplete])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            playsInline
            muted
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
          />

          {/* Loading indicator while video loads */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
