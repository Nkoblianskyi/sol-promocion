import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react"
import { getProjectBySlug, getAllProjects, getRelatedProjects } from "@/utils/projectsData"
import { Button } from "@/components/ui/button"


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | SolPromoción",
    }
  }

  return {
    title: `${project.title} | SolPromoción`,
    description: project.excerpt,
  }
}

export function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project.id, 3)

  return (
    <div className="container mx-auto py-24">
      <Link href="/trabajos" className="flex items-center text-orange-500 hover:text-orange-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a Trabajos
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
        <div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Detalles del Proyecto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Fecha</p>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Tag className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Servicios</p>
                  <ul className="text-muted-foreground">
                    {project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Galería del Proyecto</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image || `/placeholder.svg?height=300&width=400&query=${project.title} gallery ${index}`}
                alt={`${project.title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Resultados</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {project.results.map((result, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-orange-500 mb-2">{result.value}</p>
              <p className="font-medium">{result.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proyectos relacionados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Proyectos Relacionados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedProjects.map((relatedProject) => (
            <div key={relatedProject.id} className="group relative h-64 rounded-lg overflow-hidden">
              <Image
                src={
                  relatedProject.image ||
                  `/placeholder.svg?height=300&width=400&query=${relatedProject.title || "/placeholder.svg"} marketing project`
                }
                alt={relatedProject.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{relatedProject.title}</h3>
                <p className="text-white/80 text-sm mb-4">{relatedProject.category}</p>
                <Link href={`/trabajos/${relatedProject.slug}`} passHref>
                  <span className="text-orange-300 hover:text-orange-200 text-sm font-medium cursor-pointer">
                    Ver Proyecto
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-orange-500 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">¿Le Gustaría un Proyecto Similar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos de marketing con soluciones
          creativas y efectivas.
        </p>
        <Link href="/contacto" passHref>
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-orange-500"
          >
            Solicitar Presupuesto
          </Button>
        </Link>
      </div>
    </div>
  )
}
