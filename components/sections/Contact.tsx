'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LINKS = [
  { label: '📧 이메일', href: 'mailto:your-email@example.com' },
  { label: '🐙 GitHub', href: 'https://github.com/Seobeomsu', external: true },
  { label: '📄 이력서 PDF', href: '/resume.pdf', download: true },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-24 px-12 bg-slate-950 text-center">
      <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">Contact</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">함께 <span className="text-blue-500">일해요</span></h2>
      <div className="w-10 h-0.5 bg-blue-800 rounded mx-auto mb-5" />
      <p className="text-slate-500 text-[15px] mb-9">새로운 기회와 도전에 언제나 열려있습니다.</p>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} className="flex justify-center gap-3 flex-wrap">
        {LINKS.map(({ label, href, external, download }) => (
          <a key={label} href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...(download ? { download: true } : {})}
            className="flex items-center gap-2 bg-white/[0.04] border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25 px-6 py-3 rounded-lg text-sm transition-colors">
            {label}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
