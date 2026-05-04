'use client'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const experiences = [
  {
    years: '2020 – 2026',
    company: 'Lucid Motors',
    role: 'Senior Manager, Product Design',
    location: 'Newark, CA',
    highlights: [
      'Led end-to-end HMI design for Lucid Air & Gravity — from concept to production',
      'Scaled design team from 5 to 25+ across infotainment, cluster, and ADAS domains',
      'Won iF Design Gold Award 2024 for Lucid In-Vehicle Experience (LIVE)',
      'Directed Mid-Size Platform concept, establishing next-gen design language',
    ],
    tags: ['HMI', 'Infotainment', 'Design Systems', 'Team Leadership'],
  },
  {
    years: '2018 – 2020',
    company: 'BYTON',
    role: 'Global Head / Director of Product Design',
    location: 'Santa Clara, CA · Nanjing · Beijing',
    highlights: [
      'Built and led a 40+ member global design organization across 3 locations',
      'Defined Information Architecture for the world\'s first 48″ Shared Experience Display',
      'Integrated Baidu, Ximalaya, and third-party ecosystems as native in-vehicle experiences',
    ],
    tags: ['Global Team', 'IA', 'Innovation', 'Cross-Cultural'],
  },
  {
    years: '2003 – 2018',
    company: 'Telenav',
    role: 'Senior Manager, Global UX Design',
    location: 'Sunnyvale, CA',
    highlights: [
      'Joined as Founding Designer — grew product to 20M+ subscribers',
      'Led HMI & navigation design for Ford Sync 3, Cadillac, and GM platforms',
      'Built and managed China UX organization across 3 offices',
      'Pioneered connected navigation from mobile-first to in-car embedded systems',
    ],
    tags: ['Navigation', 'Automotive OEM', 'Founding Designer', 'Mobile'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <SectionReveal>
          <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-16">
            // Career Highlights
          </p>
        </SectionReveal>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-12 border-b border-line group"
            >
              {/* Left — year + location */}
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-gt-extended text-sm text-gold tracking-widest">
                  {exp.years}
                </span>
                <span className="text-xs text-muted leading-relaxed">
                  {exp.location}
                </span>
              </div>

              {/* Right — content */}
              <div>
                <h3 className="font-gt-extended font-black text-2xl md:text-3xl text-primary leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                  {exp.company}
                </h3>
                <p className="text-secondary text-sm font-gt-standard mb-6">
                  {exp.role}
                </p>

                <ul className="flex flex-col gap-2 mb-6">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-secondary leading-relaxed">
                      <span className="text-gold mt-1 shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-gt-extended tracking-wider text-muted border border-line px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
