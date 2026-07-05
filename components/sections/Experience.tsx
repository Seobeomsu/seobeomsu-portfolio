'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences, type ExperienceItem } from '@/data/experience'
import SectionHeader from '@/components/ui/SectionHeader'

function Timeline({ items, inView }: { items: ExperienceItem[]; inView: boolean }) {
  return (
    <div className="relative space-y-7 pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-line-2">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[22px] top-1.5 w-2 h-2 bg-signal rotate-45 ring-4 ring-ink" />
          <p className="font-mono text-[11px] text-signal tracking-wide mb-1">{item.period}</p>
          <h4 className="font-kr text-[14px] font-semibold text-fg mb-0.5">{item.title}</h4>
          <p className="font-mono text-[11px] text-muted mb-1.5">{item.organization}</p>
          <p className="text-[12.5px] text-fg-dim leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const education = experiences.filter((e) => e.category === 'education')
  const activities = experiences.filter((e) => e.category === 'activity')

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-20 bg-ink-2 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" en="TIMELINE" right="education / activity">
          경력 / <span className="text-signal">학력</span>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] text-muted uppercase tracking-widest mb-6">
              <span className="text-signal">#</span> Education
            </p>
            <Timeline items={education} inView={inView} />
          </div>
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] text-muted uppercase tracking-widest mb-6">
              <span className="text-signal">#</span> Activity
            </p>
            <Timeline items={activities} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  )
}
