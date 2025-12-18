'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface EnterButtonProps {
  onClick?: () => void
}

export function EnterButton({ onClick }: EnterButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="button relative inline-flex items-center justify-center cursor-pointer group"
      style={{
        width: '12.5rem',
        height: '4.8125rem',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 1: Decorative lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-[1.125rem] pointer-events-none">
        {/* Top line with dash pattern - moves from left to right on hover */}
        <div className="w-full px-[1.625rem] relative overflow-hidden" style={{ height: '4px' }}>
          <motion.div
            className="absolute"
            style={{ left: '10px' }}
            animate={{
              x: isHovered ? 100 : 0,
              scaleX: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <svg width="74" height="4" viewBox="0 0 74 4" fill="none">
              <path
                d="M2 2H72"
                stroke="#2DF872"
                strokeDasharray="15 3 3 53"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
        {/* Bottom line with dash pattern - moves from right to left on hover */}
        <div className="w-full px-[1.625rem] relative overflow-hidden" style={{ height: '4px' }}>
          <motion.div
            className="absolute right-0"
            animate={{
              x: isHovered ? -100 : 0,
              scaleX: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <svg width="74" height="4" viewBox="0 0 74 4" fill="none">
              <path
                d="M2 2H72"
                stroke="#2DF872"
                strokeDasharray="15 3 3 53"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Outer container with shape */}
      <div className="button__outer absolute inset-0">
        {/* Green gradient background element - behind everything */}
        <div
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 150, 77, 0) 0%, #00964D 50%, rgba(0, 150, 77, 0) 100%)',
            filter: 'blur(8px)',
            clipPath: 'polygon(0 10%, 4% 0, 96% 0, 100% 10%, 100% 90%, 96% 100%, 4% 100%, 0 90%)',
          }}
        />

        {/* Background fill - lighter green on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundColor: isHovered ? 'rgba(45, 248, 114, 0.15)' : 'rgba(45, 248, 114, 0.05)',
          }}
          transition={{ duration: 0.4 }}
          style={{
            clipPath: 'polygon(0 10%, 4% 0, 96% 0, 100% 10%, 100% 90%, 96% 100%, 4% 100%, 0 90%)',
          }}
        />

        {/* Background shape with clipped corner */}
        <div className="button__bg absolute inset-0">
          {/* Clipped corner shape with gaps in border */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 59"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="m190 53.5h-173.7c-.5 0-1-.2-1.4-.6l-8.3-8.3c-.4-.4-.6-.9-.6-1.4v-29.7-3.5c0-2.2 1.8-4 4-4h173.7c.5 0 1 .199 1.4.6l8.3 8.3c.4.4.6.9.6 1.4v29.7 3.5c0 2.2-1.8 4-4 4"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeDasharray="15 12 150 0 50 0 120 15 15 15 50 0"
              strokeLinecap="round"
            />
          </svg>

          {/* Green glowing outline */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 59"
            fill="none"
            preserveAspectRatio="none"
            animate={{
              filter: isHovered
                ? 'drop-shadow(0 0 6px rgba(45, 248, 114, 0.6))'
                : 'drop-shadow(0 0 0px rgba(45, 248, 114, 0))',
            }}
            transition={{ duration: 0.3 }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="0 0 0 0 0.6 0 0 0 0 1 0 0 0 0 0.533333 0 0 0 1 0"
                />
              </filter>
            </defs>
            <motion.path
              d="m190 53.5h-173.7c-.5 0-1-.2-1.4-.6l-8.3-8.3c-.4-.4-.6-.9-.6-1.4v-29.7-3.5c0-2.2 1.8-4 4-4h173.7c.5 0 1 .199 1.4.6l8.3 8.3c.4.4.6.9.6 1.4v29.7 3.5c0 2.2-1.8 4-4 4"
              stroke="#2DF872"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="12 7 38 13 170 25 200 200"
              strokeDashoffset="0"
              filter="url(#glow)"
              className="opacity-80"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </div>

        {/* Inner content */}
        <div className="button__inner relative z-10 flex items-center justify-center gap-2 h-full">
          {/* Text with shiny effect on hover */}
          <motion.div
            className="button__text text-white font-bold tracking-wider text-sm uppercase relative"
            animate={{
              textShadow: isHovered
                ? '0 0 8px rgba(255, 255, 255, 0.8), 0 0 12px rgba(45, 248, 114, 0.4)'
                : '0 0 0px rgba(255, 255, 255, 0)',
            }}
            transition={{ duration: 0.3 }}
          >
            Enter
          </motion.div>
          {/* Arrow icon */}
          <motion.div
            className="button__icon"
            animate={{
              x: isHovered ? 3 : 0,
              filter: isHovered
                ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 1)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))'
                : 'drop-shadow(0 0 8px rgba(45, 248, 114, 1)) drop-shadow(0 0 12px rgba(45, 248, 114, 0.8))',
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              className="icon-arrow"
            >
              <motion.path
                d="M5 2.26904C6.32172 3.2154 10.0474 6.27714 9.99954 6.55548C9.82715 7.5575 6.03439 10.2296 5 10.7306"
                stroke={isHovered ? '#FFFFFF' : '#2DF872'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d="M11.5008 1.5C13.087 2.62923 17.0002 6.27996 17.0002 6.51812C17.0002 7.15217 12.2416 10.9022 11.0002 11.5"
                stroke={isHovered ? '#FFFFFF' : '#2DF872'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d="M16 6.88464L1 6.88464"
                stroke={isHovered ? '#FFFFFF' : '#2DF872'}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
