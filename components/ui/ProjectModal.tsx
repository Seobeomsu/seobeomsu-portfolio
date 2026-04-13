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
      <motion.div data-testid="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-white/10 rounded-2xl max-w-xl w-full p-7 relative">
          <button aria-label="닫기" onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 text-xl leading-none">✕</button>
          <span className="inline-block text-[10px] font-bold text-blue-400 bg-blue-500/15 px-2.5 py-1 rounded mb-3 tracking-wider">
            {TYPE_LABEL[project.type]}
          </span>
          <h3 className="text-xl font-bold text-slate-100 mb-1">{project.title}</h3>
          <p className="text-sm text-slate-400 mb-5">{project.subtitle}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.description}</p>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 mb-5">
            <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-2">📖 문제 해결 과정</p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.story}</p>
          </div>
          <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-lg p-4 mb-5">
            <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">⚡ 핵심 성과</p>
            <p className="text-sm text-emerald-300 leading-relaxed">{project.achievement}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stacks.map((stack) => (
              <span key={stack} className="text-[10px] font-mono bg-white/[0.05] text-slate-400 px-2 py-0.5 rounded">{stack}</span>
            ))}
          </div>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 border border-blue-500/30 px-4 py-2 rounded-lg hover:bg-blue-500/10 transition-colors">
            GitHub에서 보기 ↗
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
