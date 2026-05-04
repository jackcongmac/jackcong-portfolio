'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Project } from '@/lib/projects'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function CaseHero({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative h-[70vh] md:h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-4"
        >
          {project.company} · {project.years}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="font-gt-extended font-black text-4xl md:text-6xl lg:text-7xl text-primary leading-none mb-4"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
          className="text-secondary text-sm md:text-base max-w-xl"
        >
          {project.tagline}
        </motion.p>
      </div>
    </section>
  )
}
