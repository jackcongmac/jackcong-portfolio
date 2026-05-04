import SectionReveal from '@/components/SectionReveal'
import { Project } from '@/lib/projects'

export default function CaseOverview({ project }: { project: Project }) {
  const items = [
    { label: 'Background', text: project.overview.background },
    { label: 'My Role', text: project.overview.myRole },
    { label: 'Key Challenge', text: project.overview.challenge },
  ]

  return (
    <section className="py-20 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {items.map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="bg-canvas p-8 md:p-10 h-full">
                <p className="text-gold font-gt-extended text-xs tracking-[0.25em] uppercase mb-4">
                  {item.label}
                </p>
                <p className="text-secondary text-sm leading-relaxed">{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
