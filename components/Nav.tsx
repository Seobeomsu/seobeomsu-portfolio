'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: '소개', href: '#about' },
  { label: '기술', href: '#skills' },
  { label: '프로젝트', href: '#projects' },
  { label: '경력', href: '#experience' },
  { label: '연락처', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-20 py-3.5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line-2' : 'border-b border-transparent'
      }`}
    >
      <a href="#hero" className="font-mono text-[15px] font-semibold text-fg tracking-tight">
        seobeomsu<span className="text-signal">_</span>
      </a>

      <ul className="hidden md:flex items-center gap-6 font-mono text-[12.5px]">
        {NAV_LINKS.map(({ label, href }, i) => (
          <li key={href}>
            <a href={href} className="group inline-flex items-center gap-1.5 text-fg-dim hover:text-signal transition-colors">
              <span className="text-muted text-[10px] group-hover:text-signal/60">0{i + 1}</span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 font-mono text-[12.5px]">
        <a
          href="https://github.com/Seobeomsu"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline text-fg-dim hover:text-signal transition-colors"
        >
          github ↗
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 font-medium bg-signal/10 text-signal border border-signal/30 px-3.5 py-2 rounded-sm hover:bg-signal hover:text-ink transition-colors"
        >
          이력서 <span className="text-[10px]">↓</span>
        </a>
      </div>
    </nav>
  )
}
