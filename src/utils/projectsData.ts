import projectsData from "../data/projects.json"

export interface Project {
  id: number
  title: string
  slug: string
  client: string
  category: string
  excerpt: string
  description: string
  image?: string
  gallery: string[]
  results: Array<{
    title: string
    value: string
  }>
  date: string
  location: string
  services: string[]
}

export function getAllProjects(): Project[] {
  return projectsData
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projectsData
  return projectsData.filter((project) => project.category === category)
}

export function getFeaturedProject(): Project {
  // Devuelve el primer proyecto como destacado
  return projectsData[0]
}

export function getRelatedProjects(currentProjectId: number, limit = 3): Project[] {
  return projectsData
    .filter((project) => project.id !== currentProjectId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

export function getProjectCategories(): string[] {
  const categories = new Set<string>()
  projectsData.forEach((project) => {
    categories.add(project.category)
  })
  return Array.from(categories)
}
