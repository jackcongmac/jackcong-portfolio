import SectionReveal from '@/components/SectionReveal'
import { Project } from '@/lib/projects'

export default function CaseImpact({ project }: { project: Project }) {
  return (
    <section className="py-20 border-t border-line bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-12">
            // Impact
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {project.impact.map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="bg-surface p-10">
                <p className="font-gt-extended font-black text-3xl md:text-4xl text-primary mb-3 leading-none">
                  {item.value}
                </p>
                <p className="text-muted font-gt-extended text-xs tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
