'use client'

import { useRef, useEffect } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { gsap } from '@/lib/gsap'

interface ParallaxLayerProps {
  children: React.ReactNode
  strength?: number
  className?: string
  scale?: number // Scale factor for 3D depth
}

export function ParallaxLayer({
  children,
  strength = 0.02,
  className = '',
  scale = 1.1
}: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()

  useEffect(() => {
    if (!layerRef.current) return

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    // Calculate normalized mouse position (-1 to 1 range)
    const normalizedX = (mousePosition.x / windowWidth - 0.5) * 2
    const normalizedY = (mousePosition.y / windowHeight - 0.5) * 2

    // Calculate offset based on mouse position from center
    const offsetX = normalizedX * windowWidth * strength
    const offsetY = normalizedY * windowHeight * strength

    // Calculate rotation for 3D effect (the side where mouse moves to rolls forward)
    const rotateX = -normalizedY * 1 // Tilt up/down (mouse up = top rolls forward)
    const rotateY = normalizedX * 1 // Tilt left/right (mouse right = right side rolls forward)

    // Smooth animation to new position with 3D transforms
    gsap.to(layerRef.current, {
      x: offsetX,
      y: offsetY,
      rotationX: rotateX,
      rotationY: rotateY,
      scale: scale,
      duration: 0.8,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center center',
    })
  }, [mousePosition, strength, scale])

  return (
    <div ref={layerRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
