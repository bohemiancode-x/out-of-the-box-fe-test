'use client'

import Image from 'next/image'
import { ParallaxLayer } from '@/components/effects/ParallaxLayer'
import { QuoteCard } from './QuoteCard'
import gardenImage from '@/assets/images/garden.png'

interface PanoramaProps {
  scrollProgress: number
}

// Quote data
const quotes = [
  {
    quote: "You may perceive yourself as having limits and that's your current reality, but there's truly no limit to what you can achieve.",
    author: "Unknown"
  },
  {
    quote: "Once you establish this as your foundational premise - even with doubt and disbelief - new paths will emerge. You simply need to choose one and begin.",
    author: "Unknown"
  },
  {
    quote: "The world is designed to test this principle, to push you back into your comfort zone.",
    author: "Unknown"
  },
  {
    quote: "UseCommandShift's five fundamental keys to achieve the life you desire while progressing to unlimited dimensions.",
    author: "CommandShift"
  }
]

export function Panorama({ scrollProgress }: PanoramaProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Garden background with 3D parallax effect */}
      <ParallaxLayer strength={0.02} scale={1.0} className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={gardenImage}
            alt="Central Hall Garden"
            fill
            className="object-cover"
            priority
          />
          {/* Decorative elements */}

          {/* Central tree placeholder */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-64 h-96">
            <div
              className="w-full h-full opacity-30"
              style={{
                background: `
                  radial-gradient(ellipse at bottom, var(--color-primary-dim) 0%, transparent 70%)
                `,
              }}
            />
            {/* Tree trunk suggestion */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-48 bg-gradient-to-t from-primary/20 to-transparent rounded-t-full" />
          </div>

          {/* Light rays from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20">
            <div
              className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
              style={{ transform: 'rotate(-5deg)' }}
            />
            <div
              className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            />
            <div
              className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
              style={{ transform: 'rotate(5deg)' }}
            />
          </div>

          {/* Quote Cards in alcove positions with 3D perspective */}
          {/* <div style={{ perspective: '1500px', transformStyle: 'preserve-3d' }} className="absolute inset-0">
          
            <QuoteCard
              quote={quotes[0].quote}
              author={quotes[0].author}
              position={{
                left: '8%',
                top: '20%',
                transform: 'rotateY(25deg) translateZ(20px)'
              }}
            />
            <QuoteCard
              quote={quotes[1].quote}
              author={quotes[1].author}
              position={{
                left: '8%',
                top: '52%',
                transform: 'rotateY(25deg) translateZ(20px)'
              }}
            />

            
            <QuoteCard
              quote={quotes[2].quote}
              author={quotes[2].author}
              position={{
                right: '8%',
                top: '20%',
                transform: 'rotateY(-25deg) translateZ(20px)'
              }}
            />
            <QuoteCard
              quote={quotes[3].quote}
              author={quotes[3].author}
              position={{
                right: '8%',
                top: '52%',
                transform: 'rotateY(-25deg) translateZ(20px)'
              }}
            />
          </div> */}

          {/* Floating particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => {
              // Use index-based deterministic values to avoid hydration mismatch
              const left = ((i * 37) % 100)
              const top = ((i * 53) % 100)
              const delay = ((i * 17) % 60) / 10
              const duration = 6 + ((i * 23) % 40) / 10

              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              )
            })}
          </div>
        </div>
      </ParallaxLayer>
    </div>
  )
}
