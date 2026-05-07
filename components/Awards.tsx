'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionReveal from './SectionReveal'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const awards = [
  {
    year: '2024',
    name: 'iF Design Gold Award',
    project: 'Lucid In-Vehicle Experience (LIVE)',
    description: 'First automotive manufacturer in 70 years to win iF Design GOLD for User Experience.',
    href: 'https://ifdesign.com/en/winner-ranking/project/lucid-in-vehicle-experience-live/624136',
    logo: '/ifgold.png',
    side: 'left' as const,
  },
  {
    year: '2022',
    name: 'MotorTrend Car of the Year',
    project: 'Lucid Air — Design Lead',
    description: 'Design leadership on the most aerodynamic production car ever built, with 516-mile range.',
    href: 'https://www.motortrend.com/news/lucid-air-2022-car-of-the-year',
    logo: null,
    side: 'right' as const,
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-24 md:py-32 border-t border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-8">
            // Recognition
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-px bg-line">
          {awards.map((award, i) => (
            <motion.a
              key={award.name}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: award.side === 'left' ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.15 }}
              whileHover={{ backgroundColor: '#1a1a1a' }}
              className="bg-surface p-10 md:p-16 block group relative"
            >
              <div className="h-16 flex items-end mb-4">
                {award.logo
                  ? <Image src={award.logo} alt="iF Gold Award" width={64} height={64} />
                  : <p className="text-muted font-gt-extended text-xs tracking-widest uppercase">{award.year}</p>
                }
              </div>
              <h3 className="font-gt-extended font-black text-3xl md:text-4xl text-primary leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                {award.name}
              </h3>
              <p className="text-gold font-gt-extended text-sm tracking-wider mb-6">
                {award.project}
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
