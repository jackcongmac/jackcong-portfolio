import projectsData from '@/data/projects.json'

export interface Project {
  slug: string
  title: string
  company: string
  role: string
  years: string
  tagline: string
  coverImage: string
  heroImage: string
  overview: {
    background: string
    myRole: string
    challenge: string
  }
  images: string[]
  galleryLayout?: Array<{ type: 'full'; src: string } | { type: 'pair'; srcs: [string, string] }>
  impact: { label: string; value: string }[]
  tags: string[]
}

export function getAllProjects(): Project[] {
  return projectsData as Project[]
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug)
}

export function getAdjacentProject(slug: string): Project {
  const all = getAllProjects()
  const idx = all.findIndex((p) => p.slug === slug)
  if (idx === -1) throw new Error(`getAdjacentProject: slug "${slug}" not found`)
  return all[(idx + 1) % all.length]
}
