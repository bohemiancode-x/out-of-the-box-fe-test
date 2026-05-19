'use client'
import { motion } from 'framer-motion'

const cols = [
  {
    title: 'Services',
    links: ['Web Development', 'Mobile App', 'UI/UX Design', 'Cloud Computing', 'QA Testing', 'Talent Acquisition'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Careers', 'Testimonials', 'Recent News', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Help Center', 'Community', 'Partners'],
  },
]

const socials = [
  { label: 'Facebook', icon: 'f' },
  { label: 'Twitter / X', icon: '𝕏' },
  { label: 'LinkedIn', icon: 'in' },
  { label: 'Instagram', icon: '◈' },
  { label: 'YouTube', icon: '▶' },
  { label: 'WhatsApp', icon: '✆' },
  { label: 'GitHub', icon: '⌘' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(to bottom, #050025, #0d0924)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #FC466B, #3F5EFB)' }}>K</div>
              <span className="text-white font-bold text-lg">KeepcodeIn</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Connecting businesses with elite IT talent and delivering bespoke digital solutions worldwide.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 text-white placeholder-gray-500 text-sm px-4 py-2 rounded-full outline-none border border-white/10 focus:border-purple-500 transition-colors"
              />
              <button className="text-white text-xs font-semibold px-4 py-2 rounded-full shrink-0"
                style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>
                Subscribe
              </button>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(to right, #FC466B, #3F5EFB)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2024. KeepcodeIn. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(s => (
              <motion.button
                key={s.label}
                whileHover={{ scale: 1.15, background: 'linear-gradient(135deg, #FC466B, #3F5EFB)' }}
                whileTap={{ scale: 0.9 }}
                title={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border border-white/20 transition-all"
                style={{ background: '#ffffff10' }}
              >
                {s.icon}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
