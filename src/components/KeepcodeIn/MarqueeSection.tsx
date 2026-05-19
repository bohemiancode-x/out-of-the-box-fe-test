'use client'

const techs = ['Redux', 'PHP', 'Laravel', 'React', 'WordPress', 'GraphQL', 'Animations', 'Node.js',
  'TypeScript', 'Python', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Next.js', 'Flutter']

const icons: Record<string, string> = {
  Redux: '⚛', PHP: '🐘', Laravel: '🔴', React: '⚛', WordPress: '🌐', GraphQL: '◈',
  Animations: '✨', 'Node.js': '🟢', TypeScript: '🔷', Python: '🐍', Docker: '🐳',
  AWS: '☁', MongoDB: '🍃', PostgreSQL: '🐘', 'Next.js': '▲', Flutter: '💙',
}

function Row({ reverse = false }) {
  const list = [...techs, ...techs]
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 py-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animation: `${reverse ? 'marquee-rev' : 'marquee'} 28s linear infinite` }}
      >
        {list.map((t, i) => (
          <div key={i}
            className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 shrink-0 border border-white/10 hover:border-white/30 transition-colors">
            <span className="text-lg">{icons[t] ?? '⚙'}</span>
            <span className="text-gray-300 text-sm whitespace-nowrap">{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="py-14 px-4" style={{ background: '#0d0924' }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-rev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>
      <h2 className="text-center text-white font-bold text-2xl sm:text-3xl mb-8">
        Skilled across <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}>25+ updated tech stacks</span>
      </h2>
      <div className="space-y-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
