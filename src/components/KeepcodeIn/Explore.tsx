'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const filters = ['All', 'Fashion', 'Music', 'Video', 'Game', 'Real Estate']

const cases = [
  { title: 'Health Care', category: 'Video', color: 'from-[#59D3AA] to-[#3F5EFB]' },
  { title: 'Robotics', category: 'Game', color: 'from-[#FC466B] to-[#6318F1]' },
  { title: 'Casino Game', category: 'Game', color: 'from-[#6318F1] to-[#3F5EFB]' },
  { title: 'Construction', category: 'Real Estate', color: 'from-[#3F5EFB] to-[#59D3AA]' },
  { title: 'Influencer', category: 'Fashion', color: 'from-[#FC466B] to-[#3F5EFB]' },
  { title: 'NFT Platform', category: 'Music', color: 'from-[#6318F1] to-[#FC466B]' },
  { title: 'Survey App', category: 'Video', color: 'from-[#59D3AA] to-[#6318F1]' },
  { title: 'Sports', category: 'Game', color: 'from-[#3F5EFB] to-[#FC466B]' },
  { title: 'Shoe Store', category: 'Fashion', color: 'from-[#FC466B] to-[#59D3AA]' },
  { title: 'Portfolio', category: 'Music', color: 'from-[#6318F1] to-[#59D3AA]' },
]

export default function Explore() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? cases : cases.filter(c => c.category === active)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#0d0924' }}>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#6318F1' }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Case Studies</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-white text-sm font-semibold px-5 py-2 rounded-full self-start sm:self-auto"
            style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}
          >
            Apply Now
          </motion.button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === f ? 'linear-gradient(to right, #FC466B, #3F5EFB)' : 'transparent',
                color: active === f ? 'white' : '#9ca3af',
                border: active === f ? 'none' : '1px solid #ffffff20',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((c, i) => (
            <motion.div
              key={c.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`bg-gradient-to-br ${c.color} rounded-2xl h-36 flex flex-col justify-end p-4 cursor-pointer`}
            >
              <span className="text-white text-xs font-medium opacity-70">{c.category}</span>
              <span className="text-white font-bold text-sm mt-0.5">{c.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
