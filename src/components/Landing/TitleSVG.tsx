'use client'

import { motion } from 'framer-motion'

export function TitleSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center pointer-events-none select-none w-full max-w-4xl mx-auto px-4"
    >
      {/* Container with relative positioning for THE and OF */}
      <div className="relative w-full">
        {/* THE text - positioned near top-left of HALL text */}
        <div
          className="absolute left-[28.5%] top-0 md:top-1 text-white text-[10px] md:text-xs tracking-[0.3em] uppercase -translate-x-[calc(100%+0.5rem)]"
          style={{
            textShadow: '0 0 0.3em rgba(153, 255, 136, 0.7), 0 0 1.6em rgba(16, 111, 0, 1)',
          }}
        >
          THE
        </div>

        {/* Main SVG Logo - HALL */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 713.6 91.7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 3px rgba(153, 255, 136, 0.4)) drop-shadow(0 0 12px rgba(16, 111, 0, 0.5))',
          }}
        >
            <defs>
              <filter id="hall-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feColorMatrix
                  in="blur1"
                  type="matrix"
                  values="0 0 0 0 0.0619048 0 0 0 0 0.433333 0 0 0 0 0 0 0 0 0.5 0"
                  result="colorblur1"
                />
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur2" />
                <feColorMatrix
                  in="blur2"
                  type="matrix"
                  values="0 0 0 0 0.6 0 0 0 0 1 0 0 0 0 0.533333 0 0 0 0.35 0"
                  result="colorblur2"
                />
                <feMerge>
                  <feMergeNode in="colorblur1" />
                  <feMergeNode in="colorblur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* HALL text - The H starts around x=203 (28.5% of 713.6), L ends around x=513 (71.9%) */}
            <g fill="#fff" filter="url(#hall-glow-filter)">
              <path d="m374 85.1v-.8-.2-.5l-.4-.2c-4-2.2-5.4-4.8-8.7-12l-31-67-.7.3.7-.3-.3-.4h-.5-.4-.5l-.2.5-29 64.8c-3.3 7.3-6.1 11.9-10.2 14.1l.4.7-.4-.7-.4.2v.5.2.8h.8 18.3.8v-.8-.2-.5l-.5-.2c-3.1-1.4-5.1-4-5.1-7 0-2.4.7-4.8 1.7-7l4-9.5h30.9l5.4 11.9c1.1 2.6 1.7 4.5 1.7 6.3 0 2.2-1.4 3.9-4.6 5.3l.3.7-.3-.7-.5.2v.5.2.8h.8 27zm-46.5-60 13.7 30.2h-26.8z" />
              <path d="m443.6 60.7h-.5l-.2.4c-3.3 6.3-6.5 11.2-10.5 14.5s-8.7 5-15.2 5h-15.7v-60.6c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2.3-.7-.3.7c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l.3.7-.3-.7-.4.2v.5.2.8h.8 59.2.7l.1-.7 3.7-22.8.1-.9h-.9-.2z" />
              <path d="m230.6 85.1h.8v-.8-.2-.5l-.4-.2-.3.7.3-.7c-2.5-1.2-3.9-2.7-4.8-4.7-.9-2.1-1.2-4.8-1.2-8.4v-23.7h40v23.6c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l-.4.2v.5.2.8h.8 26.2.8v-.8-.2-.5l-.4-.2-.3.7.3-.7c-2.5-1.2-3.9-2.7-4.8-4.7-.9-2.1-1.2-4.8-1.2-8.4v-50.2c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l-.3-.7.3.7.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v21.8h-40v-21.7c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l-.3-.7.3.7.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l-.4.2v.5.2.8h.8 26.2z" />
              <path d="m508.3 85.1h.7l.1-.7 3.7-22.8-.8-.1.8.1.1-.9h-.9-.2-.5l-.2.4c-3.3 6.3-6.5 11.2-10.5 14.5s-8.7 5-15.2 5h-15.7v-60.6c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l.4-.2v-.6-.2-.8h-.8-26.3-.8v.8.2.5l.4.2.3-.7-.3.7c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l.3.7-.3-.7-.4.2v.5.2.8h.8 59.3z" />
            </g>
          </svg>

        {/* OF text - positioned near bottom-right of HALL text */}
        <div
          className="absolute right-[28%] bottom-1 md:bottom-2 text-white text-[10px] md:text-xs tracking-[0.3em] uppercase translate-x-[calc(100%+0.5rem)]"
          style={{
            textShadow: '0 0 0.3em rgba(153, 255, 136, 0.7), 0 0 1.6em rgba(16, 111, 0, 1)',
          }}
        >
          OF
        </div>
      </div>

      {/* ZERO LIMITS - Second SVG */}
      <svg
        className="w-full h-auto mt-2"
        viewBox="0 0 713.6 94.2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 3px rgba(153, 255, 136, 0.4)) drop-shadow(0 0 12px rgba(16, 111, 0, 0.5))',
        }}
      >
          <defs>
            <filter id="zero-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur1" />
              <feColorMatrix
                in="blur1"
                type="matrix"
                values="0 0 0 0 0.0619048 0 0 0 0 0.433333 0 0 0 0 0 0 0 0 0.5 0"
                result="colorblur1"
              />
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur2" />
              <feColorMatrix
                in="blur2"
                type="matrix"
                values="0 0 0 0 0.6 0 0 0 0 1 0 0 0 0 0.533333 0 0 0 0.35 0"
                result="colorblur2"
              />
              <feMerge>
                <feMergeNode in="colorblur1" />
                <feMergeNode in="colorblur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ZERO LIMITS text */}
          <g fill="#fff" filter="url(#zero-glow-filter)">
            <path d="m83.5 6-48.1 70h48.3v12.5h-75.6l48-70h-45.1v-12.5zm65.7 0v12.5h-37.4v21.7h35.8v12.5h-35.8v23.3h38.2v12.5h-54.1v-82.5zm41.8 0c7.8 0 14.1 2.1 19 6.4s7.3 9.9 7.3 16.8c0 4.7-1.2 8.8-3.7 12.3-2.4 3.5-6 6.2-10.7 8.2 2.6 1.4 5 3.3 7 5.8 2 2.4 4.6 6.6 7.6 12.3 5 10 8.8 16.9 11.2 20.7h-17.7c-1.2-1.8-2.9-4.7-5-8.7-4.6-8.8-7.9-14.7-10-17.7-2.1-3.1-4.2-5.2-6.1-6.5-2-1.3-4.2-1.9-6.8-1.9h-5.8v34.8h-15.9v-82.5zm-3.6 35.2c4.2 0 7.4-1 9.8-3.1s3.6-4.9 3.6-8.6c0-3.8-1.2-6.6-3.5-8.4-2.4-1.9-5.7-2.8-10.1-2.8h-9.9v23h10.1zm85.7-36.2c8.5 0 16.2 1.8 23 5.3s12.3 8.6 16.4 15.2 6.1 13.9 6.1 21.8c0 7.7-2 14.9-6 21.5-3.9 6.6-9.4 11.7-16.3 15.4-6.9 3.6-14.7 5.4-23.3 5.4-8.5 0-16.3-1.8-23.3-5.6-7-3.7-12.4-8.8-16.3-15.2-3.9-6.5-5.8-13.7-5.8-21.5 0-7.6 1.9-14.7 5.8-21.3 3.9-6.7 9.3-11.8 16.1-15.5s14.7-5.5 23.6-5.5zm-29.1 42.3c0 5.5 1.2 10.4 3.7 14.8s5.9 7.8 10.3 10.2 9.5 3.6 15.1 3.6c8.5 0 15.4-2.7 20.8-8 5.5-5.3 8.2-12.2 8.2-20.5 0-5.5-1.2-10.4-3.7-14.8-2.4-4.4-5.9-7.8-10.4-10.2-4.4-2.4-9.5-3.6-15.1-3.6s-10.6 1.2-15.1 3.7c-4.4 2.4-7.9 5.8-10.3 10.2-2.3 4.2-3.5 9.1-3.5 14.6zm123.4-41.3v70h40v12.5h-56v-82.5zm67.3 0v82.5h-15.9v-82.5zm26.9 0 27.1 32.5 27.1-32.5h14.2v82.5h-15.9v-57.9h-.5l-23.9 29h-2.2l-23.9-29h-.5v57.9h-15.9v-82.5zm98.1 0v82.5h-15.9v-82.5zm84.5 0v12.5h-29.3v70h-15.9v-70h-29.3v-12.5zm34.8-1c8 0 15.8 2 23.2 6v14.2c-8.5-5.2-16.1-7.7-22.7-7.7-4 0-7.2.8-9.4 2.4-2.2 1.5-3.4 3.6-3.4 6.2 0 3.1 2.1 6 6.3 8.6 1.2.8 5.7 3 13.6 6.6 6.8 3.2 11.7 6.7 14.6 10.6 3 3.9 4.5 8.6 4.5 14.1 0 7.1-2.6 12.8-7.7 17.2-5.1 4.3-11.7 6.5-19.8 6.5-5.3 0-9.8-.6-13.6-1.7-3.8-1.2-8-3.2-12.8-6v-15.7c8.8 7.3 17.1 11 24.9 11 3.9 0 7-.8 9.4-2.5s3.6-3.9 3.6-6.7c0-3.8-2.1-6.9-6.3-9.3-3.5-1.9-7.9-4.2-13.4-6.8-6.5-3-11.4-6.4-14.6-10.3s-4.8-8.5-4.8-13.7c0-6.9 2.6-12.4 7.7-16.5 5.5-4.5 12.3-6.5 20.7-6.5z" />
            {/* The dot/square in ZERO - adjusted position for new viewBox */}
            <path d="m267.6 40.8h13v13h-13z" />
          </g>
        </svg>
    </motion.div>
  )
}
