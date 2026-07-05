'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { track } from '@vercel/analytics'
import { extractRefParam, buildTrackingPayload } from '@/lib/analytics'

const STACKS = [
  { label: 'Java', main: true },
  { label: 'Spring Boot', main: true },
  { label: 'JPA / MySQL', main: true },
  { label: 'AWS · GCP', main: false },
  { label: 'Docker', main: false },
  { label: 'Redis', main: false },
]

const METRICS = [
  { value: 80, prefix: '−', suffix: '%', label: '파일 트래픽', dir: 'S3/CloudFront 재설계', ctx: 'RAILDOCK' },
  { value: 3, prefix: '×', suffix: '', label: '게시글 업로드', dir: '익명 마스킹 도입', ctx: 'CLUB' },
  { value: 40, prefix: '−', suffix: '%', label: 'AI 응답 속도', dir: '데이터 접근 분리', ctx: 'RAILDOCK' },
]

/** 수치 카운트업 — 기본값은 최종값이라 JS가 안 돌아도 정확한 숫자가 보인다 */
function CountUp({ target }: { target: number }) {
  const [n, setN] = useState(target)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const dur = 1300
    const ease = (p: number) => 1 - Math.pow(1 - p, 3)
    setN(0)
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      setN(Math.round(target * ease(p)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return <>{n}</>
}

/** 모서리 등록 마크 (설계도 정합 마크) */
function CornerMark({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base = 'absolute w-3 h-3 border-signal/50'
  const map = {
    tl: 'top-6 left-6 border-t border-l',
    tr: 'top-6 right-6 border-t border-r',
    bl: 'bottom-6 left-6 border-b border-l',
    br: 'bottom-6 right-6 border-b border-r',
  }
  return <span className={`${base} ${map[pos]}`} aria-hidden />
}

export default function Hero() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = extractRefParam(`?${searchParams.toString()}`)
    if (ref) {
      track('portfolio_visit', buildTrackingPayload(ref))
    }
  }, [searchParams])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-ink flex items-center"
    >
      {/* 배경 레이어: 설계도 그리드 + 글로우 + 스캔라인 */}
      <div
        className="blueprint-grid absolute inset-0 opacity-60"
        style={{ maskImage: 'radial-gradient(ellipse 80% 70% at 35% 45%, #000 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 35% 45%, #000 55%, transparent 100%)' }}
        aria-hidden
      />
      <div className="blueprint-grid-major absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(600px 400px at 68% 42%, rgba(62,224,208,0.10), transparent 70%), radial-gradient(500px 360px at 22% 78%, rgba(255,182,77,0.06), transparent 70%)' }}
        aria-hidden
      />
      <div className="scanlines absolute inset-0 opacity-40" aria-hidden />

      {/* 모서리 등록 마크 */}
      <CornerMark pos="tl" /><CornerMark pos="tr" /><CornerMark pos="bl" /><CornerMark pos="br" />

      {/* 좌측 세로 계측 라벨 */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3" aria-hidden>
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted [writing-mode:vertical-rl] rotate-180">
          SECTION.00 / HERO
        </span>
        <span className="w-px h-24 bg-line-2" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-28">
        {/* 상단 주석 라인 */}
        <div className="reveal flex items-center justify-between font-mono text-[11px] text-muted mb-10 border-b border-line-2 pb-3" style={{ ['--d' as string]: '0s' }}>
          <span className="text-fg-dim">SBS<span className="text-signal">:</span>~/portfolio<span className="cursor-blink text-signal">▊</span></span>
          <span className="hidden sm:inline">seobeomsu.github.io · build 2026</span>
        </div>

        {/* 상태 배지 */}
        <div className="reveal inline-flex items-center gap-2.5 font-mono text-[12px] mb-8" style={{ ['--d' as string]: '0.06s' }}>
          <span className="inline-flex items-center gap-2 rounded-sm border border-signal/30 bg-signal/[0.07] px-2.5 py-1.5 text-signal">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-signal opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-signal" />
            </span>
            OPEN TO WORK
          </span>
          <span className="text-muted">// 백엔드 개발자 · 구직 중</span>
        </div>

        {/* 헤드라인 */}
        <p className="reveal font-mono text-[12px] tracking-[0.25em] text-amber mb-4" style={{ ['--d' as string]: '0.12s' }}>
          01 — 문제를 구조로.
        </p>
        <h1 className="font-kr font-bold text-fg leading-[1.08] tracking-tight text-[clamp(2.4rem,6.5vw,4.75rem)]">
          <span className="reveal block" style={{ ['--d' as string]: '0.18s' }}>문제를 정의하고</span>
          <span className="reveal block" style={{ ['--d' as string]: '0.26s' }}>
            구조로{' '}
            <span className="relative whitespace-nowrap text-signal">
              <span className="text-signal/40 font-mono font-normal">[</span>
              해결
              <span className="text-signal/40 font-mono font-normal">]</span>
            </span>
            합니다
            <span className="cursor-blink text-signal font-normal ml-1">▊</span>
          </span>
        </h1>

        {/* 서브카피 */}
        <div className="reveal mt-7 font-mono text-[13.5px] leading-relaxed text-fg-dim max-w-xl space-y-1.5" style={{ ['--d' as string]: '0.34s' }}>
          <p><span className="text-signal/70 select-none">$ </span>Java · Spring Boot 백엔드 개발자</p>
          <p><span className="text-signal/70 select-none">$ </span>사용자 관점의 문제 정의부터 시스템 아키텍처 설계까지 직접 이어냅니다.</p>
        </div>

        {/* 스택 토큰 */}
        <div className="reveal mt-8 flex flex-wrap gap-2 font-mono text-[12px]" style={{ ['--d' as string]: '0.42s' }}>
          {STACKS.map(({ label, main }) => (
            <span
              key={label}
              className={`px-2.5 py-1 rounded-sm border transition-colors ${
                main
                  ? 'border-signal/30 bg-signal/[0.06] text-signal'
                  : 'border-line-2 bg-ink-2 text-fg-dim'
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* 계측 패널 — 측정된 성과 */}
        <div className="reveal mt-12" style={{ ['--d' as string]: '0.5s' }}>
          <div className="flex items-center gap-3 font-mono text-[11px] text-muted mb-3">
            <span className="text-amber">// PROVEN</span>
            <span>측정된 성과</span>
            <span className="flex-1 h-px bg-line-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line-2 border border-line-2 rounded-md overflow-hidden">
            {METRICS.map((m) => (
              <div key={m.label} className="group relative bg-ink-2 p-5 transition-colors hover:bg-[#0f1621]">
                <span className="absolute top-2 right-2 font-mono text-[9px] tracking-wider text-muted/70">{m.ctx}</span>
                <div className="font-mono font-semibold text-amber leading-none text-[clamp(2rem,4.5vw,2.9rem)] tabular-nums">
                  <span className="text-amber/50 text-[0.7em]">{m.prefix}</span>
                  <CountUp target={m.value} />
                  <span className="text-amber/60 text-[0.6em]">{m.suffix}</span>
                </div>
                <p className="mt-2.5 font-kr text-[13px] text-fg">{m.label}</p>
                <p className="mt-0.5 font-mono text-[10.5px] text-muted">{m.dir}</p>
                {/* 하단 인디케이터 바 */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber/70 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-11 flex flex-wrap items-center gap-3" style={{ ['--d' as string]: '0.58s' }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 font-mono text-[13px] font-medium bg-signal text-ink px-5 py-3 rounded-sm transition-all hover:shadow-[0_0_28px_-6px_rgba(62,224,208,0.6)]"
          >
            <span className="text-ink/70">▸</span> 프로젝트 보기
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://github.com/Seobeomsu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-fg-dim px-5 py-3 rounded-sm border border-line-2 transition-colors hover:border-signal/40 hover:text-signal"
          >
            github <span className="text-muted">↗</span>
          </a>
        </div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-muted" aria-hidden>
        <span className="tracking-[0.3em]">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-signal/60 to-transparent" />
      </div>
    </section>
  )
}
