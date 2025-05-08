import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug, getProjects } from "@/lib/data"
import ProjectGallery from "@/components/projects/project-gallery"
import ProjectDetails from "@/components/projects/project-details"
import ProjectResults from "@/components/projects/project-results"
import RelatedProjects from "@/components/projects/related-projects"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | SolPromoción",
    }
  }

  return {
    title: `${project.title} | SolPromoción`,
    description: project.description,
  }
}

export function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-24">
      <Link href="/proyectos" className="flex items-center text-orange-500 hover:text-orange-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a Proyectos
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground">
          {project.client} • {project.category}
        </p>
      </div>

      <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
        <Image
          src={project.image || `/placeholder.svg?height=500&width=1200&query=${project.title} marketing project`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <div className="prose max-w-none">
            <p>{project.description}</p>
          </div>
        </div>
        <ProjectDetails project={project} />
      </div>

      <ProjectGallery images={project.gallery} />
      <ProjectResults results={project.results} />
      <RelatedProjects currentProjectId={project.id} />
    </div>
  )
}
