'use client'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const experiences = [
  {
    years: '2020 – 2026',
    company: 'Lucid Motors',
    role: 'Senior Manager, Product Design · Head of User Experience',
    location: 'Newark, CA',
    highlights: [
      'Built the Product Design org from 5 to 25+ within 12 months — establishing the team architecture across Product Design, User Research, Advanced Design, 3D / Motion, and Technical Support (Head of UX, 2020–2022)',
      'Re-architected the digital platform from a single-vehicle (Air-centric) framework into a scalable, multi-program information architecture and design system — the foundation supporting Gravity and future vehicle programs',
      'Established the product design lifecycle (concept → design → production → engineering handoff) and built out the UX Program Management function, bridging UX timelines with Engineering and Vehicle Program organizations',
      'Led the team to deliver two Lucid production vehicles end-to-end — Lucid Air and Lucid Gravity — owning the full digital experience design from concept through production launch for both',
      'Led design delivery across 9 HMI domains owned by the Product Design org — ADAS, System Framework, Driver Control, Map & Navigation, AI Voice Assistance, Safety & Security, Entertainment, Design System, and Mobile Experience',
      'Recognized with the 2024 iF Design Gold Award (Lucid LIVE) and 2022 MotorTrend Car of the Year (Lucid Air)',
    ],
    tags: ['Production Delivery', 'Multi-Domain HMI', 'AI Voice Assistance', 'Platform Architecture', 'Team Building (0→1)'],
  },
  {
    years: '2018 – 2020',
    company: 'BYTON',
    role: 'Global Head / Director of Digital Product Design',
    location: 'Santa Clara · Nanjing · Beijing',
    highlights: [
      'Built BYTON\'s China design organization in Nanjing and Beijing from the ground up — growing the global multidisciplinary team (UX, Visual, Motion, Research) to 40+ across Silicon Valley, Nanjing, and Beijing',
      'Defined the foundational Information Architecture for the revolutionary 48″ Shared Experience Display — the world\'s first 48-inch SED in a production vehicle',
      'Orchestrated deep integration with 3rd-party partners (Baidu, Ximalaya, and others) as cohesive native branded in-vehicle experiences',
      'Partnered with C-level stakeholders and VPs of Software/Hardware to define product strategy across the full development lifecycle',
    ],
    tags: ['Global 0→1', 'IA', '48″ SED', 'Cross-Cultural Ops'],
  },
  {
    years: '2003 – 2018',
    company: 'Telenav',
    role: 'Senior Manager, User Experience Design (Founding Designer)',
    location: 'Sunnyvale · Shanghai · Beijing · Xi\'an',
    highlights: [
      'Joined as Founding Designer — architected the world\'s first mobile connected navigation system (v1.0), growing to 20M+ subscription users across AT&T, Sprint, and T-Mobile',
      'Directed HMI / driver-facing UX for Ford Sync 3 and GM / Cadillac Info3 connected navigation systems — early foundations for connected-vehicle and driver-assist navigation',
      'Starting in 2006, built the China UX organization from the ground up — establishing three design teams across Shanghai, Beijing, and Xi\'an (12 designers total) — supporting 20+ product launches',
      'Led the high-stakes transition from PND devices to smartphone ecosystems (iOS, Android, BlackBerry), establishing the company\'s mobile market leadership',
    ],
    tags: ['Navigation', 'Automotive OEM', 'Founding Designer', 'Mobile Pioneer'],
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
