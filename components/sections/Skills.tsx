'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-12 bg-[#080f1e]">
      <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">Skills</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">기술 <span className="text-blue-500">스택</span></h2>
      <div className="w-10 h-0.5 bg-blue-800 rounded mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5">
            <p className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-3.5">{group.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map(({ name, main, color }) => (
                <span key={name} className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                  color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300' :
                  main ? 'bg-blue-500/15 border border-blue-500/20 text-blue-300' :
                  'bg-white/[0.06] text-slate-400'
                }`}>{name}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
