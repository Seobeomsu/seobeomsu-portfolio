'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/data/projects'

interface Props { project: Project; onClose: () => void }

const TYPE_LABEL: Record<string, string> = {
  graduation: '졸업작품',
  team: '팀 프로젝트',
  personal: '개인 프로젝트',
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        data-testid="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-ink-2 border border-line-2 rounded-lg max-w-xl w-full p-7 max-h-[90vh] overflow-y-auto"
        >
          {/* 모서리 정합 마크 */}
          <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-signal/40" aria-hidden />
          <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-signal/40" aria-hidden />

          <button
            aria-label="닫기"
            onClick={onClose}
            className="absolute top-4 right-4 font-mono text-muted hover:text-signal text-lg leading-none transition-colors"
          >
            ✕
          </button>

          <span className="inline-block font-mono text-[10px] tracking-wider text-signal border border-signal/25 bg-signal/[0.06] px-2 py-0.5 rounded-sm mb-3">
            {TYPE_LABEL[project.type]}
          </span>
          <h3 className="font-kr text-xl font-bold text-fg mb-1">{project.title}</h3>
          <p className="font-mono text-[12px] text-signal/80 mb-5">{project.subtitle}</p>
          <p className="text-[13.5px] text-fg-dim leading-relaxed mb-5">{project.description}</p>

          <div className="bg-ink border border-line-2 rounded-md p-4 mb-4">
            <p className="font-mono text-[10px] tracking-widest text-signal mb-2">// PROBLEM → SOLUTION</p>
            <p className="text-[13px] text-fg-dim leading-relaxed">{project.story}</p>
          </div>

          <div className="border-l-2 border-amber/60 bg-amber/[0.05] rounded-r-md p-4 mb-5">
            <p className="font-mono text-[10px] tracking-widest text-amber mb-2">▲ RESULT</p>
            <p className="text-[13px] text-amber/90 leading-relaxed">{project.achievement}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stacks.map((stack) => (
              <span key={stack} className="text-[10px] font-mono bg-ink border border-line-2 text-fg-dim px-2 py-0.5 rounded-sm">{stack}</span>
            ))}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-signal border border-signal/30 px-4 py-2 rounded-sm hover:bg-signal/10 transition-colors"
          >
            github에서 보기 ↗
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
