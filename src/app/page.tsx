'use client'

import { useState } from 'react'
import { Landing } from '@/components/Landing/Landing'
import { CentralHall } from '@/components/CentralHall/CentralHall'
import { VideoTransitionF } from '@/components/transitions/VideoTransitionF'

type Section = 'landing' | 'transition' | 'garden'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('landing')

  const handleEnter = () => {
    setCurrentSection('transition')
  }

  const handleTransitionComplete = () => {
    setCurrentSection('garden')
  }

  return (
    <main>

      {/* Landing Page - visible initially */}
      {currentSection === 'landing' && (
        <Landing onEnter={handleEnter} />
      )}

      {/* Video Transition - plays when Enter is clicked */}
      <VideoTransitionF
        isActive={currentSection === 'transition'}
        onComplete={handleTransitionComplete}
        videoSrc="/videos/gen-new-hq.mp4"
      />

      {/* Garden Scene - visible after video completes */}
      {currentSection === 'garden' && (
        <div id="central-hall">
          <CentralHall />
        </div>
      )}
    </main>
  )
}
