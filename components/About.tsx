'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import SectionReveal from './SectionReveal'

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Automotive OEMs' },
  { value: 25, suffix: '+', label: 'Team Members Led' },
  { value: 20, suffix: 'M+', label: 'Users Impacted' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const duration = 1500
    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start!) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-gt-extended font-black text-gold">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <SectionReveal>
          <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-12">
            // About Jack
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — bio */}
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="font-gt-extended font-black text-3xl md:text-4xl text-primary leading-tight mb-8">
                Bridging luxury brand identity with scalable product architecture
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-secondary leading-relaxed mb-6">
                With over 20 years of hands-on experience in automotive, mobile, and web product design, I specialize in creating user-centered experiences that blend innovation with functionality.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <p className="text-secondary leading-relaxed mb-8">
                My design philosophy is rooted in three pillars: <span className="text-primary">Compassion</span> — identifying real pain points; <span className="text-primary">Cognition</span> — aligning with mental models; <span className="text-primary">Emotion</span> — building lasting trust.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {['Smart Cabin / HMI', 'SDV', 'Design Systems', 'IA', 'React Native', 'AI Tooling', 'Team Building'].map((tag) => (
                  <span key={tag} className="text-xs font-gt-extended tracking-wider text-muted border border-line px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-px bg-line">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={0.1 * i}>
                <div className="bg-canvas p-8 flex flex-col gap-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <span className="text-muted text-xs font-gt-extended tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
