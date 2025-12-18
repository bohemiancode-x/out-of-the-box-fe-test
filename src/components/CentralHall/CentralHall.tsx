'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'
import { Panorama } from './Panorama'
import { HallTitle } from './HallTitle'

export function CentralHall() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Pin the section while scrolling
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%', // Pin for 2x viewport height worth of scroll
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          setScrollProgress(progress)
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-dark"
      style={{ perspective: '1000px' }}
    >
      {/* Background Panorama */}
      <Panorama scrollProgress={scrollProgress} />

      {/* Title (top-left) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <HallTitle />
      </div>
    </section>
  )
}
