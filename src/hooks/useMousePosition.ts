'use client'

import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(
    () => {
      const handleMouseMove = (event: MouseEvent): void => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        })
      }

      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', handleMouseMove)
      }

      return (): void => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('mousemove', handleMouseMove)
        }
      }
    },
    []
  )

  return mousePosition
}
