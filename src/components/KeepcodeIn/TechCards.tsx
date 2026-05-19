'use client'
import { ReactNode } from 'react'

interface TechCardsProps {
  icon: ReactNode
  title: string
}

export default function TechCards({ icon, title }: TechCardsProps) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-lg opacity-80 hover:opacity-100 transition-shadow hover:shadow-lg mx-2"
      style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)', width: '160px', height: '56px' }}
    >
      {icon}
      <span className="text-white text-sm font-medium">{title}</span>
    </div>
  )
}
