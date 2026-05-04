import { getAllProjects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import SectionReveal from './SectionReveal'

export default function CaseStudies() {
  const projects = getAllProjects()

  return (
    <section id="work" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-4">
                // Selected Work
              </p>
              <h2 className="font-gt-extended font-black text-3xl md:text-5xl text-primary leading-none">
                Case Studies
              </h2>
            </div>
            <p className="text-muted text-sm hidden md:block">
              {projects.length} projects
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
