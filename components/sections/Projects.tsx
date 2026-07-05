'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import ProjectModal from '@/components/ui/ProjectModal'
import SectionHeader from '@/components/ui/SectionHeader'

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
      <section id="projects" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-20 bg-ink border-t border-line">
        <div className="max-w-6xl mx-auto">
          <SectionHeader index="03" en="PROJECTS" right={`${projects.length} entries`}>
            주요 <span className="text-signal">프로젝트</span>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelected(project)}
                className={`group relative cursor-pointer rounded-md p-5 border flex flex-col transition-colors ${
                  project.featured
                    ? 'bg-signal/[0.04] border-signal/30 hover:border-signal/60'
                    : 'bg-ink-2 border-line-2 hover:border-signal/40'
                }`}
              >
                {/* 인덱스 마커 */}
                <span className="absolute top-4 right-4 font-mono text-[10px] text-muted">0{i + 1}</span>

                <span className="font-mono text-[10px] tracking-wider text-signal border border-signal/25 bg-signal/[0.06] px-2 py-0.5 rounded-sm w-fit mb-3">
                  {TYPE_LABEL[project.type]}
                </span>
                <h3 className="font-kr text-[17px] font-bold text-fg mb-2">{project.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="border-l-2 border-amber/60 bg-amber/[0.05] rounded-r-sm px-3 py-2 mb-4">
                  <p className="font-mono text-[9px] tracking-widest text-amber mb-1">▲ RESULT</p>
                  <p className="text-[11.5px] text-amber/90 leading-relaxed">{project.achievement}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stacks.map((s) => (
                    <span key={s} className="text-[10px] font-mono bg-ink border border-line-2 text-fg-dim px-1.5 py-0.5 rounded-sm">{s}</span>
                  ))}
                </div>

                <div className="flex gap-2 font-mono text-[11px]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-signal border border-signal/30 px-3 py-1.5 rounded-sm hover:bg-signal/10 transition-colors"
                  >
                    github ↗
                  </a>
                  <button className="text-fg-dim border border-line-2 px-3 py-1.5 rounded-sm hover:border-signal/40 hover:text-signal transition-colors">
                    상세 →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
