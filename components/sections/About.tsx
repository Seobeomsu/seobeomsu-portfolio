'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STRENGTHS = [
  { icon: '🔍', title: '문제 정의 역량', desc: '사용자·서비스·시스템 레벨에서 문제를 다각도로 분석하고 본질을 파악합니다.' },
  { icon: '🏗', title: '아키텍처 설계', desc: '확장성과 유지보수성을 고려한 구조 설계. 책임 분리 원칙을 실제 프로젝트에 적용합니다.' },
  { icon: '📊', title: '수치로 증명', desc: '트래픽 80% 감소, 게시글 업로드 3배 증가 등 측정 가능한 결과를 만들어냅니다.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 px-12 bg-slate-950">
      <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">About</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">저는 이런 <span className="text-blue-500">개발자</span>입니다</h2>
      <div className="w-10 h-0.5 bg-blue-800 rounded mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }} className="space-y-4 text-slate-400 text-[15px] leading-relaxed">
          <p>충북대학교 컴퓨터공학과를 졸업하고 <strong className="text-slate-200">Java · Spring Boot 기반 백엔드 개발</strong>에 집중해왔습니다. 단순히 기능을 구현하는 것을 넘어, 문제의 <strong className="text-slate-200">본질을 정확히 정의</strong>하고 구조적으로 해결하는 것을 중요하게 생각합니다.</p>
          <p>졸업 프로젝트 별도리에서는 <strong className="text-slate-200">JSON 기반 실행 엔진</strong>을 설계했고, 레일독 프로젝트에서는 <strong className="text-slate-200">S3/CloudFront 아키텍처 재설계</strong>로 파일 트래픽을 80% 줄였습니다.</p>
          <p>오케스트라 동아리(라인필하모닉)에서 배운 <strong className="text-slate-200">팀워크와 호흡</strong>을 개발 협업에서도 실천합니다.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }} className="space-y-3">
          {STRENGTHS.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/[0.03] border border-white/[0.08] border-l-[3px] border-l-blue-700 rounded-r-lg pl-4 pr-4 py-3.5">
              <h4 className="text-slate-200 text-sm font-semibold mb-1">{icon} {title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
