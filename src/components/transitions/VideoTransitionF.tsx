'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import homeDoors from '@/assets/images/home-doors.png'

interface VideoTransitionFProps {
  isActive: boolean
  onComplete: () => void
  videoSrc: string
}

// OPTION F: Match first frame exactly - hold on landing bg, then seamlessly transition to video
export function VideoTransitionF({ isActive, onComplete, videoSrc }: VideoTransitionFProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  // Preload video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlayThrough = () => {
      setIsVideoReady(true)
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough)

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
    }
  }, [])

  // Handle activation
  useEffect(() => {
    if (!isActive || !videoRef.current) return

    const video = videoRef.current

    const playVideo = async () => {
      try {
        video.currentTime = 0
        await video.play()

        // Wait a tiny bit to ensure video first frame is rendered
        // Then crossfade from static image to video
        setTimeout(() => setShowVideo(true), 100)
      } catch (error) {
        console.error('Video playback failed:', error)
        setTimeout(onComplete, 100)
      }
    }

    // Try to play immediately, don't wait for canplaythrough
    if (isVideoReady) {
      playVideo()
    } else {
      // If not ready yet, play as soon as it becomes ready
      const checkReady = () => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          playVideo()
        }
      }

      video.addEventListener('canplay', checkReady)
      checkReady() // Check immediately in case already ready

      return () => {
        video.removeEventListener('canplay', checkReady)
      }
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
      {isActive && (
        <div className="fixed inset-0 z-50">
          {/* Landing background as placeholder - matches exactly what user sees */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: showVideo ? 0 : 1 }}
          >
            <Image
              src={homeDoors}
              alt="Hall of Zero Limits Door"
              fill
              className="object-cover"
              priority
              style={{
                filter: 'drop-shadow(0 0 40px rgba(45, 248, 114, 0.3))',
              }}
            />
          </div>

          {/* Video fades in over the static image */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: showVideo ? 1 : 0 }}
          >
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              playsInline
              muted
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  )
}
