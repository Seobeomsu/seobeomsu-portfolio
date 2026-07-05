'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const LINKS = [
  { label: 'beom710@gmail.com', cmd: 'mail', href: 'mailto:beom710@gmail.com' },
  { label: 'github.com/Seobeomsu', cmd: 'git', href: 'https://github.com/Seobeomsu', external: true },
  { label: '이력서 PDF', cmd: 'resume', href: '/resume.pdf', download: true },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 sm:px-10 lg:px-20 bg-ink border-t border-line">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader index="05" en="CONTACT" center>
          함께 <span className="text-signal">일해요</span>
        </SectionHeader>

        <p className="text-fg-dim text-[15px] mb-10">
          새로운 기회와 도전에 언제나 열려있습니다.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg divide-y divide-line-2 border border-line-2 rounded-md overflow-hidden bg-ink-2 text-left"
        >
          {LINKS.map(({ label, cmd, href, external, download }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(download ? { download: true } : {})}
              className="group flex items-center gap-3 px-5 py-4 font-mono text-[13px] transition-colors hover:bg-signal/[0.05]"
            >
              <span className="text-signal/70 select-none">$</span>
              <span className="text-muted w-16 shrink-0">{cmd}</span>
              <span className="text-fg-dim group-hover:text-signal transition-colors truncate">{label}</span>
              <span className="ml-auto text-muted group-hover:text-signal transition-colors">↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
