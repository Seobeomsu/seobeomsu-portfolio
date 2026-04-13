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
      <footer className="border-t border-white/[0.06] px-12 py-6 flex justify-between items-center text-xs text-slate-700">
        <span>© 2026 서범수</span>
        <span>Next.js · Vercel</span>
      </footer>
    </>
  )
}
