'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { track } from '@vercel/analytics'
import { extractRefParam, buildTrackingPayload } from '@/lib/analytics'
import { motion } from 'framer-motion'

const STACKS = [
  { label: 'Java', main: true },
  { label: 'Spring Boot', main: true },
  { label: 'JPA / MySQL', main: true },
  { label: 'AWS · GCP', main: false },
  { label: 'Docker', main: false },
  { label: 'Next.js', main: false },
  { label: 'Flutter', main: false },
]

export default function Hero() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = extractRefParam(`?${searchParams.toString()}`)
    if (ref) {
      track('portfolio_visit', buildTrackingPayload(ref))
    }
  }, [searchParams])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-12 bg-slate-950"
      style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium w-fit mb-5">
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        백엔드 개발자 · 구직 중
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-extrabold leading-tight text-slate-100 mb-4">
        문제를 정의하고<br />구조로{' '}<em className="not-italic text-blue-500">해결합니다</em>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
        Java · Spring Boot 백엔드 개발자.<br />
        사용자 관점의 문제 정의부터 시스템 아키텍처 설계까지 직접 이어냅니다.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-9">
        {STACKS.map(({ label, main }) => (
          <span key={label} className={`px-3 py-1 rounded-md text-xs font-mono border ${
            main ? 'bg-blue-500/15 border-blue-500/30 text-blue-300' : 'bg-white/5 border-white/10 text-slate-400'
          }`}>{label}</span>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3">
        <a href="#projects" className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
          🚀 프로젝트 보기
        </a>
        <a href="https://github.com/Seobeomsu" target="_blank" rel="noopener noreferrer"
          className="bg-transparent hover:bg-white/5 text-slate-400 font-medium px-6 py-3 rounded-lg text-sm border border-white/15 transition-colors">
          GitHub ↗
        </a>
      </motion.div>
    </section>
  )
}
