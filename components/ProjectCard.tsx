'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-video bg-surface mb-4">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-canvas/20 group-hover:bg-canvas/10 transition-colors duration-300" />
          <div className="absolute inset-0 border border-transparent group-hover:border-gold transition-colors duration-300" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-gold font-gt-extended text-xs tracking-[0.25em] uppercase mb-1">
              {project.company} · {project.years}
            </p>
            <h3 className="font-gt-standard font-bold text-primary text-lg group-hover:text-gold transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted text-sm mt-1">{project.role}</p>
          </div>
          <span className="text-muted group-hover:text-gold transition-colors duration-200 mt-1 text-lg flex-shrink-0">
            →
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-muted font-gt-extended tracking-wider border border-line px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
