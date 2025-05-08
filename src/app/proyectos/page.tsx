import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getProjects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Proyectos | SolPromoción",
  description:
    "Explore nuestro portafolio de proyectos exitosos de marketing offline realizados para clientes en toda España.",
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubra algunos de nuestros trabajos más destacados en marketing offline para empresas de diversos sectores.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="h-64 relative">
                <Image
                  src={
                    project.image || `/placeholder.svg?height=300&width=400&query=${project.title} marketing project`
                  }
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-4">
                {project.client} • {project.category}
              </p>
              <p>{project.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/proyectos/${project.slug}`} passHref>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
