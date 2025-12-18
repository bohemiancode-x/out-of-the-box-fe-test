'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import firstFrame from '@/assets/images/video-first-frame.jpg'

interface VideoTransitionCProps {
  isActive: boolean
  onComplete: () => void
  videoSrc: string
}

// OPTION C: Show first frame image immediately, swap to video when ready
export function VideoTransitionC({ isActive, onComplete, videoSrc }: VideoTransitionCProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  // Preload video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsVideoReady(true)
    }

    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  // Handle activation
  useEffect(() => {
    if (!isActive || !videoRef.current) return

    const video = videoRef.current

    if (isVideoReady) {
      // Video is ready, play it and swap from image to video
      const playVideo = async () => {
        try {
          video.currentTime = 0
          await video.play()
          // Small delay to ensure first frame is rendered
          setTimeout(() => setShowVideo(true), 50)
        } catch (error) {
          console.error('Video playback failed:', error)
          setTimeout(onComplete, 100)
        }
      }

      playVideo()
    }

    const handleVideoEnd = () => {
      onComplete()
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.pause()
      setShowVideo(false)
    }
  }, [isActive, isVideoReady, onComplete])

  return (
    <>
      {/* Hidden video for preloading */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="hidden"
        playsInline
        muted
        preload="auto"
      />

      {/* Transition overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeIn' }}
            className="fixed inset-0 z-50 bg-black"
          >
            {showVideo ? (
              // Actual video
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                playsInline
                muted
                autoPlay
              />
            ) : (
              // First frame image as placeholder
              <div className="relative w-full h-full">
                <Image
                  src={firstFrame}
                  alt="Video transition"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
