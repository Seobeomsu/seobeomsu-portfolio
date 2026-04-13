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
    <nav className={`fixed top-0 left-0 right-0 z-50 px-12 py-3.5 flex items-center justify-between transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <span className="text-lg font-bold text-slate-100">
        서범수<span className="text-blue-500">.</span>
      </span>
      <ul className="hidden md:flex gap-7">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="text-sm text-slate-400 hover:text-slate-100 transition-colors">{label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Seobeomsu" target="_blank" rel="noopener noreferrer"
          className="text-sm text-slate-400 hover:text-slate-100 transition-colors">GitHub</a>
        <a href="/resume.pdf" download
          className="text-sm font-semibold bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
          📄 이력서 다운로드
        </a>
      </div>
    </nav>
  )
}
