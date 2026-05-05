import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProjects, getProjectBySlug, getAdjacentProject } from '@/lib/projects'
import CaseHero from '@/components/work/CaseHero'
import CaseOverview from '@/components/work/CaseOverview'
import CaseGallery from '@/components/work/CaseGallery'
import CaseImpact from '@/components/work/CaseImpact'
import CaseNextProject from '@/components/work/CaseNextProject'

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  const next = getAdjacentProject(slug)

  return (
    <main>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <Link
            href="/#work"
            className="text-muted hover:text-gold font-gt-extended text-xs tracking-widest uppercase transition-colors duration-200"
          >
            ← Back to Work
          </Link>
        </div>
        <CaseHero project={project} />
        <CaseOverview project={project} />
        <CaseGallery images={project.images} layout={project.galleryLayout} />
        <CaseImpact project={project} />
        <CaseNextProject next={next} />
      </div>
    </main>
  )
}
