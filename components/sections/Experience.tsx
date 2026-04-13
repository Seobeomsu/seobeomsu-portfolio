'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '@/data/experience'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const education = experiences.filter((e) => e.category === 'education')
  const activities = experiences.filter((e) => e.category === 'activity')

  return (
    <section id="experience" ref={ref} className="py-24 px-12 bg-[#080f1e]">
      <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">Experience</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">경력 / <span className="text-blue-500">학력</span></h2>
      <div className="w-10 h-0.5 bg-blue-800 rounded mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Education</p>
          <div className="space-y-7">
            {education.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pl-5 border-l-2 border-blue-500/30 relative">
                <span className="absolute -left-1.5 top-1 w-2.5 h-2.5 bg-blue-700 rounded-full" />
                <p className="text-[11px] font-semibold text-blue-400 tracking-wide mb-0.5">{item.period}</p>
                <h4 className="text-sm font-bold text-slate-200 mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-500 mb-1.5">{item.organization}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Activity</p>
          <div className="space-y-7">
            {activities.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pl-5 border-l-2 border-blue-500/30 relative">
                <span className="absolute -left-1.5 top-1 w-2.5 h-2.5 bg-blue-700 rounded-full" />
                <p className="text-[11px] font-semibold text-blue-400 tracking-wide mb-0.5">{item.period}</p>
                <h4 className="text-sm font-bold text-slate-200 mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-500 mb-1.5">{item.organization}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
