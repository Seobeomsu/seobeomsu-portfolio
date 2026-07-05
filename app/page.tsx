import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line-2 bg-ink px-6 sm:px-10 lg:px-20 py-7 flex flex-col sm:flex-row gap-2 justify-between items-center font-mono text-[11px] text-muted">
        <span>© 2026 <span className="text-fg-dim">서범수</span> · all systems operational</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-signal/70 rounded-full" />
          built with Next.js · deployed on GitHub Pages
        </span>
      </footer>
    </>
  )
}
