'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const STRENGTHS = [
  { tag: 'DEFINE', title: '문제 정의 역량', desc: '사용자·서비스·시스템 레벨에서 문제를 다각도로 분석하고 본질을 파악합니다.' },
  { tag: 'DESIGN', title: '아키텍처 설계', desc: '확장성과 유지보수성을 고려한 구조 설계. 책임 분리 원칙을 실제 프로젝트에 적용합니다.' },
  { tag: 'PROVE', title: '수치로 증명', desc: '트래픽 80% 감소, 게시글 업로드 3배 증가 등 측정 가능한 결과를 만들어냅니다.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-20 bg-ink border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" en="ABOUT" right="whoami">
          저는 이런 <span className="text-signal">개발자</span>입니다
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-fg-dim text-[15px] leading-relaxed"
          >
            <p>충북대학교 컴퓨터공학과를 졸업하고 <strong className="text-fg font-medium">Java · Spring Boot 기반 백엔드 개발</strong>에 집중해왔습니다. 단순히 기능을 구현하는 것을 넘어, 문제의 <strong className="text-signal font-medium">본질을 정확히 정의</strong>하고 구조적으로 해결하는 것을 중요하게 생각합니다.</p>
            <p>졸업 프로젝트 별도리에서는 <strong className="text-fg font-medium">JSON 기반 실행 엔진</strong>을 설계했고, 레일독 프로젝트에서는 <strong className="text-fg font-medium">S3/CloudFront 아키텍처 재설계</strong>로 파일 트래픽을 <strong className="text-amber font-medium">80%</strong> 줄였습니다.</p>
            <p>오케스트라 동아리(라인필하모닉)에서 배운 <strong className="text-fg font-medium">팀워크와 호흡</strong>을 개발 협업에서도 실천합니다.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            {STRENGTHS.map(({ tag, title, desc }) => (
              <div key={title} className="group relative bg-ink-2 border border-line-2 rounded-md p-4 pl-5 overflow-hidden transition-colors hover:border-signal/40">
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal/50 transition-colors group-hover:bg-signal" />
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10px] tracking-widest text-signal">[{tag}]</span>
                  <h4 className="font-kr text-[14px] font-semibold text-fg">{title}</h4>
                </div>
                <p className="text-muted text-[12.5px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
