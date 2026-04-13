'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import ProjectModal from '@/components/ui/ProjectModal'

const TYPE_LABEL: Record<string, string> = {
  graduation: '졸업작품 · 팀',
  team: '팀 프로젝트',
  personal: '개인 프로젝트',
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <section id="projects" ref={ref} className="py-24 px-12 bg-slate-950">
        <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">Projects</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-3">주요 <span className="text-blue-500">프로젝트</span></h2>
        <div className="w-10 h-0.5 bg-blue-800 rounded mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }} onClick={() => setSelected(project)}
              className={`cursor-pointer rounded-xl p-6 border transition-colors flex flex-col ${
                project.featured ? 'bg-blue-500/[0.04] border-blue-500/25 hover:border-blue-500/50' :
                'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
              }`}>
              <span className="text-[10px] font-bold text-blue-400 bg-blue-500/15 px-2.5 py-1 rounded w-fit mb-3 tracking-wider">
                {TYPE_LABEL[project.type]}
              </span>
              <h3 className="text-[17px] font-bold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="bg-emerald-500/[0.07] border border-emerald-500/15 rounded-md px-3 py-2.5 mb-4">
                <p className="text-[10px] font-bold text-emerald-400 mb-1">⚡ 핵심 성과</p>
                <p className="text-[11px] text-emerald-300 leading-relaxed">{project.achievement}</p>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.stacks.map((s) => (
                  <span key={s} className="text-[10px] font-mono bg-white/[0.05] text-slate-400 px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="text-[11px] text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded hover:bg-blue-500/10 transition-colors">
                  GitHub ↗
                </a>
                <button className="text-[11px] text-slate-400 border border-white/15 px-3 py-1.5 rounded hover:bg-white/5 transition-colors">
                  상세 보기
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
