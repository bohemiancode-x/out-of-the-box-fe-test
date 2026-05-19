'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Home', 'Services', 'Case Studies', 'Careers', 'Testimonials', 'About', 'Contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: '#110D2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #FC466B, #3F5EFB)' }}>K</div>
          <span className="text-white font-bold text-lg tracking-wide">KeepcodeIn</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link} href="#"
              className="text-gray-300 text-sm hover:text-white transition-colors duration-200 hover:scale-105 inline-block">
              {link}
            </a>
          ))}
        </nav>

        {/* Search + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray-300 text-sm px-3 py-1.5 rounded-full outline-none w-36 placeholder-gray-500"
              style={{ border: '1px solid', borderImage: 'linear-gradient(to right, #FC466B, #3F5EFB) 1' }}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="text-white text-sm font-semibold px-4 py-1.5 rounded-full"
            style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}
          >
            Apply Now
          </motion.button>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(v => !v)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden px-4 pb-4"
            style={{ background: '#110D2E' }}
          >
            {navLinks.map(link => (
              <a key={link} href="#"
                className="block text-gray-300 py-2 text-sm hover:text-white border-b border-white/10">
                {link}
              </a>
            ))}
            <button
              className="mt-3 w-full text-white text-sm font-semibold px-4 py-2 rounded-full"
              style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
