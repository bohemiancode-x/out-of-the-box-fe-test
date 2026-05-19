'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const gettingStarted = [
  { q: 'How do I get started with KeepcodeIn?', a: 'Simply click Apply Now, fill in your requirements, and our team will reach out within 24 hours to discuss your project scope and timeline.' },
  { q: 'What types of projects do you take on?', a: 'We handle everything from MVPs and redesigns to full-scale enterprise applications across web, mobile, cloud, and custom software.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary — a simple landing page can take 1–2 weeks while complex platforms may run 3–6 months. We provide a detailed roadmap upfront.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer flexible retainer packages for post-launch support, feature additions, and performance monitoring.' },
]

const safety = [
  { q: 'How do you vet IT talent?', a: 'Every professional goes through a rigorous 5-step screening: technical assessment, code review, portfolio evaluation, cultural fit interview, and background check.' },
  { q: 'Is my project IP protected?', a: 'Absolutely. All engagements include NDAs and full IP assignment clauses. Your code and data remain exclusively yours.' },
  { q: 'How is data security handled?', a: 'We follow OWASP best practices, conduct regular security audits, and use encrypted communication for all sensitive data.' },
  { q: 'What if I am unhappy with the work?', a: 'We offer revision cycles and a satisfaction guarantee. If issues persist, we will reassign resources or issue a partial refund per our SLA.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-4">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center justify-between w-full text-left text-white text-sm font-semibold gap-3"
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-lg leading-none"
          style={{ color: '#FC466B' }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm pt-3 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#050023' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 pb-2"
              style={{ borderBottom: '2px solid', borderImage: 'linear-gradient(to right, #FC466B, #3F5EFB) 1' }}>
              Getting Started
            </h3>
            {gettingStarted.map((item, i) => <FAQItem key={i} {...item} />)}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4 pb-2"
              style={{ borderBottom: '2px solid', borderImage: 'linear-gradient(to right, #FC466B, #3F5EFB) 1' }}>
              Safety, Security &amp; Policies
            </h3>
            {safety.map((item, i) => <FAQItem key={i} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
