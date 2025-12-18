'use client'

import Image from 'next/image'
import { ParallaxLayer } from '@/components/effects/ParallaxLayer'
import { TitleSVG } from './TitleSVG'
import { Subtitle } from './Subtitle'
import { EnterButton } from './EnterButton'
import homeDoors from '@/assets/images/home-doors.png'

interface LandingProps {
  onEnter?: () => void
}

export function Landing({ onEnter }: LandingProps) {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-dark"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      }}
    >
      {/* Background with gradient */}
      <ParallaxLayer strength={0.015} className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 50% 50%,
                var(--color-dark-panel) 0%,
                var(--color-dark) 70%
              )
            `,
          }}
        />
      </ParallaxLayer>

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-primary-dim) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-primary-dim) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Green glowing circles/halos around door area */}
      <ParallaxLayer strength={0.02} className="absolute inset-0 flex items-center justify-center">
        {/* Outer glow halo */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/10 shadow-[0_0_80px_rgba(45,248,114,0.15)]" />
      </ParallaxLayer>

      <ParallaxLayer strength={0.022} className="absolute inset-0 flex items-center justify-center">
        {/* Middle glow halo */}
        <div className="absolute w-[450px] h-[450px] rounded-full border border-primary/15 shadow-[0_0_60px_rgba(45,248,114,0.2)]" />
      </ParallaxLayer>

      {/* Home Door Image - Full Background with 3D effect */}
      <ParallaxLayer strength={0.02} scale={1.0} className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={homeDoors}
            alt="Hall of Zero Limits Door"
            fill
            priority
            className="object-cover"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(45, 248, 114, 0.3))',
            }}
          />
        </div>
      </ParallaxLayer>

      {/* Horizontal decorative lines - Left side */}
      <ParallaxLayer strength={0.018} className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-16">
          {/* Top left line */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(45,248,114,0.6)]" />
            <div className="w-20 md:w-32 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          {/* Middle left line with dashes */}
          <div className="flex items-center gap-2">
            <svg width="120" height="2" viewBox="0 0 120 2" className="w-20 md:w-32">
              <path
                d="M0 1H120"
                stroke="#2DF872"
                strokeWidth="2"
                strokeDasharray="8 4"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          {/* Bottom left line */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(45,248,114,0.6)]" />
            <div className="w-20 md:w-32 h-[2px] bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
        </div>
      </ParallaxLayer>

      {/* Horizontal decorative lines - Right side */}
      <ParallaxLayer strength={0.018} className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-16">
          {/* Top right line */}
          <div className="flex items-center gap-2 flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(45,248,114,0.6)]" />
            <div className="w-20 md:w-32 h-[2px] bg-gradient-to-l from-primary/60 to-transparent" />
          </div>
          {/* Middle right line with dashes */}
          <div className="flex items-center gap-2 flex-row-reverse">
            <svg width="120" height="2" viewBox="0 0 120 2" className="w-20 md:w-32">
              <path
                d="M0 1H120"
                stroke="#2DF872"
                strokeWidth="2"
                strokeDasharray="8 4"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          {/* Bottom right line */}
          <div className="flex items-center gap-2 flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_10px_rgba(45,248,114,0.6)]" />
            <div className="w-20 md:w-32 h-[2px] bg-gradient-to-l from-primary/60 to-transparent" />
          </div>
        </div>
      </ParallaxLayer>

      {/* Plant frames (simple CSS shapes) */}
      <ParallaxLayer strength={0.03} className="absolute left-10 top-1/4 opacity-20">
        <div className="w-32 h-48 bg-gradient-to-br from-primary/30 to-transparent rounded-[50%] blur-sm" />
      </ParallaxLayer>
      <ParallaxLayer strength={0.03} className="absolute right-10 top-1/4 opacity-20">
        <div className="w-32 h-48 bg-gradient-to-bl from-primary/30 to-transparent rounded-[50%] blur-sm" />
      </ParallaxLayer>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-4">
        <TitleSVG />
        <Subtitle />
        <div className="mt-4">
          <EnterButton onClick={onEnter} />
        </div>
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
        }}
      />
    </section>
  )
}
