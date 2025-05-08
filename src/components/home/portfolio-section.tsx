import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getProjects } from "@/lib/data"

export default function PortfolioSection() {
  const projects = getProjects().slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore algunos de nuestros trabajos más recientes y descubra cómo hemos ayudado a nuestros clientes a
          alcanzar sus objetivos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg">
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={project.image || `/placeholder.svg?height=400&width=600&query=${project.title} marketing project`}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-white/80 mb-4">
                {project.client} • {project.category}
              </p>
              <Link href={`/trabajos/${project.slug}`} passHref>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/trabajos" passHref>
          <Button variant="outline" size="lg">
            Ver Todos los Trabajos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
