'use client'
import { motion } from 'framer-motion'

const services = [
  { icon: '💻', heading: 'Web / Mobile Development', paragraph: 'Designing pixel-perfect websites and developing high-performance mobile applications tailored to your business.' },
  { icon: '🎨', heading: 'Graphics / UI UX Design', paragraph: 'Elevate your brand with stunning graphics and intuitive UI/UX design that converts visitors into customers.' },
  { icon: '☁️', heading: 'Cloud Computing', paragraph: 'Scalable cloud infrastructure and data storage solutions that power your operations securely and efficiently.' },
  { icon: '🧪', heading: 'Q/A Testing', paragraph: 'Comprehensive quality assurance and bug detection to ensure your product ships flawlessly every time.' },
  { icon: '🤝', heading: 'Talent Acquisition', paragraph: 'Connecting you with vetted, specialized IT professionals ready to join your team and accelerate delivery.' },
  { icon: '⚙️', heading: 'Custom Solutions', paragraph: 'Tailored innovation and bespoke software development designed precisely around your unique challenges.' },
]

export default function Services() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#050023' }}>
      {/* Decorative blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: '#6318F1' }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Our Most In-Demand Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            From design to deployment, we cover every layer of the digital product lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, borderColor: '#FC466B' }}
              className="group rounded-2xl p-6 flex gap-4 items-start cursor-default transition-colors duration-300 border border-transparent"
              style={{ background: 'linear-gradient(135deg, #59D3AA18, #05002380)', borderLeft: '3px solid #59D3AA' }}
            >
              <span className="text-3xl mt-0.5 shrink-0">{s.icon}</span>
              <div>
                <h3 className="text-white font-bold mb-2">{s.heading}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.paragraph}</p>
                <button className="mt-4 text-xs font-semibold text-white px-4 py-1.5 rounded-full transition-all"
                  style={{ background: '#6318F1' }}>
                  Explore More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
