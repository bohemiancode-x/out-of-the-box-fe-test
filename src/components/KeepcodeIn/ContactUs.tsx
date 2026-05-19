'use client'
import { motion } from 'framer-motion'

const contactItems = [
  { icon: '📞', label: 'Phone', value: '+1 (310) 775-6294' },
  { icon: '✉️', label: 'Email', value: 'hello@keepcodein.com' },
  { icon: '📍', label: 'Location', value: '123 Tech Avenue, San Francisco, CA' },
]

export default function ContactUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0d0924' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-2xl p-8"
          style={{ background: 'linear-gradient(135deg, #110D2E, #1e0347)' }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Drop Us Your Message</h2>
          <div className="space-y-4">
            {['Full Name', 'Email Address', 'Subject'].map(placeholder => (
              <input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                className="w-full bg-white/5 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-purple-500 transition-colors"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-white/5 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-purple-500 transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px #6318F170' }}
              whileTap={{ scale: 0.97 }}
              className="w-full text-white font-semibold py-3 rounded-xl text-sm"
              style={{ background: '#6318F1' }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-5 justify-center"
        >
          <h3 className="text-white font-bold text-xl mb-2">Get In Touch</h3>
          {contactItems.map((item) => (
            <div key={item.label}
              className="flex items-start gap-4 rounded-xl p-5 border border-white/10"
              style={{ background: 'linear-gradient(135deg, #110D2E80, #1e034750)' }}
            >
              <span className="text-2xl mt-0.5">{item.icon}</span>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
