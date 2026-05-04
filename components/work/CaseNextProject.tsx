import Link from 'next/link'
import Image from 'next/image'
import SectionReveal from '@/components/SectionReveal'
import { Project } from '@/lib/projects'

export default function CaseNextProject({ next }: { next: Project }) {
  return (
    <section className="border-t border-line">
      <SectionReveal>
        <Link href={`/work/${next.slug}`} className="group block relative overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src={next.coverImage}
              alt={next.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-canvas/70 group-hover:bg-canvas/50 transition-colors duration-300" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <p className="text-muted font-gt-extended text-xs tracking-widest uppercase mb-3">Next Project</p>
            <h3 className="font-gt-extended font-black text-2xl md:text-4xl text-primary group-hover:text-gold transition-colors duration-300">
              {next.title} →
            </h3>
            <p className="text-secondary text-sm mt-2">{next.company}</p>
          </div>
        </Link>
      </SectionReveal>
    </section>
  )
}
