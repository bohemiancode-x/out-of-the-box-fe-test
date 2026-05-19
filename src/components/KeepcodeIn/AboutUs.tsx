'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / 60
    const id = setInterval(() => {
      start += step
      if (start >= end) { setVal(end); clearInterval(id) }
      else setVal(Math.floor(start))
    }, 20)
    return () => clearInterval(id)
  }, [inView, end])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 1700, suffix: '+', label: 'Vetted IT Experts', sub: '20,000+ achievements' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', sub: '20,000+ Rating Users' },
  { value: 3000, suffix: '+', label: 'Projects Delivered', sub: '12,000+ Completions' },
]

export default function AboutUs() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#050023' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold mb-2 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Empowering Businesses From Cutting Edge Technology
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            KeepcodeIn is a next-generation technology partner, connecting companies with elite IT talent and delivering
            bespoke digital solutions. We bridge the gap between ambition and execution through innovation, expertise,
            and an unwavering commitment to client success.
          </p>
          <button className="text-white font-semibold px-6 py-3 rounded-full text-sm"
            style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>
            Learn More
          </button>
        </div>

        {/* Right — stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i}
              className="rounded-2xl p-6 flex flex-col items-center text-center border border-white/10"
              style={{ background: 'linear-gradient(135deg, #110D2E, #1e0347)' }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white text-sm font-semibold mb-1">{s.label}</p>
              <p className="text-gray-500 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
