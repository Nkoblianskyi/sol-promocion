import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getProjects } from "@/lib/data"

interface RelatedProjectsProps {
  currentProjectId: number
}

export default function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const allProjects = getProjects()
  const relatedProjects = allProjects.filter((project) => project.id !== currentProjectId).slice(0, 3)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Proyectos Relacionados</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={project.image || `/placeholder.svg?height=200&width=400&query=${project.title} marketing project`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {project.client} • {project.category}
              </p>
              <Link href={`/proyectos/${project.slug}`} passHref>
                <Button variant="link" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                  Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
