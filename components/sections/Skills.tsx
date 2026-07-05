'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/data/skills'
import SectionHeader from '@/components/ui/SectionHeader'

const GROUP_CODE: Record<string, string> = {
  'Backend (Main)': 'core',
  'Cloud / DevOps': 'infra',
  'Frontend / Mobile': 'client',
  'AI & Tools': 'tools',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-20 bg-ink-2 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" en="STACK" right={`${skillGroups.length} modules`}>
          기술 <span className="text-signal">스택</span>
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-ink border border-line-2 rounded-md p-5 transition-colors hover:border-signal/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-signal rotate-45" />
                <p className="font-mono text-[11px] tracking-widest text-fg-dim uppercase">{group.title}</p>
                <span className="ml-auto font-mono text-[10px] text-muted">{GROUP_CODE[group.title] ?? ''}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(({ name, main, color }) => (
                  <span
                    key={name}
                    className={`px-2.5 py-1 rounded-sm text-[11px] font-mono border transition-colors ${
                      color === 'purple'
                        ? 'bg-amber/10 border-amber/30 text-amber'
                        : main
                        ? 'bg-signal/[0.07] border-signal/25 text-signal'
                        : 'bg-ink-2 border-line-2 text-fg-dim'
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
