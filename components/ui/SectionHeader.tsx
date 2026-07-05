'use client'
import type { ReactNode } from 'react'

interface Props {
  index: string       // "02"
  en: string          // "SKILLS"
  right?: string      // 우측 모노 주석
  children: ReactNode // 한글 타이틀 (강조 span 포함 가능)
  center?: boolean
}

/** 섹션 공통 헤더 — 설계도 라벨 + 타이틀 + 노드 디바이더 */
export default function SectionHeader({ index, en, right, children, center }: Props) {
  return (
    <div className={`mb-11 ${center ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 font-mono text-[11px] mb-3 ${center ? 'justify-center' : 'justify-between'}`}>
        <span className="text-amber tracking-[0.2em]">// {index} — {en}</span>
        {right && !center && <span className="text-muted hidden sm:inline">{right}</span>}
      </div>
      <h2 className="font-kr text-[clamp(1.6rem,3.6vw,2.4rem)] font-bold text-fg tracking-tight">
        {children}
      </h2>
      <div className={`mt-4 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
        <span className="w-1.5 h-1.5 bg-signal rotate-45" />
        <span className={`h-px bg-line-2 ${center ? 'w-16' : 'flex-1'}`} />
      </div>
    </div>
  )
}
