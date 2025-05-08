"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getAllProjects, getFeaturedProject, getProjectCategories, getProjectsByCategory } from "@/utils/projectsData"
import type { Project } from "@/utils/projectsData"

export default function WorksPage() {
  const allProjects = getAllProjects()
  const featuredProject = getFeaturedProject()
  const categories = getProjectCategories()

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects)
  const [isFiltering, setIsFiltering] = useState(false)

  // Filtrar proyectos cuando cambia la categoría seleccionada
  useEffect(() => {
    setIsFiltering(true)

    setTimeout(() => {
      if (selectedCategory === "all") {
        setFilteredProjects(allProjects)
      } else {
        setFilteredProjects(getProjectsByCategory(selectedCategory))
      }
      setIsFiltering(false)
    }, 300) // Pequeño retraso para la animación
  }, [selectedCategory, allProjects])

  // Manejar el cambio de categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    // Desplazar a la sección de proyectos
    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Trabajos</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubra algunos de nuestros proyectos más destacados en marketing offline para empresas de diversos sectores.
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          className={`rounded-full transition-all ${selectedCategory === "all" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
          onClick={() => handleCategoryChange("all")}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`rounded-full transition-all ${selectedCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Proyecto destacado */}
      <div className="mb-16 bg-orange-50 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[400px]">
            <Image
              src={featuredProject.image || `/placeholder.svg?height=400&width=600&query=marketing project`}
              alt={featuredProject.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="text-orange-500 font-medium mb-2">Proyecto Destacado</div>
            <h2 className="text-3xl font-bold mb-4">{featuredProject.title}</h2>
            <p className="text-muted-foreground mb-2">
              {featuredProject.client} • {featuredProject.category}
            </p>
            <p className="mb-6">{featuredProject.excerpt}</p>
            <Link href={`/trabajos/${featuredProject.slug}`} passHref>
              <Button className="w-fit bg-orange-500 hover:bg-orange-600">
                Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid de proyectos */}
      <div id="projects-grid" className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          {selectedCategory === "all" ? "Todos los Proyectos" : `Proyectos de ${selectedCategory}`}
          {selectedCategory !== "all" && (
            <Button variant="link" className="ml-2 text-orange-500" onClick={() => handleCategoryChange("all")}>
              Ver todos
            </Button>
          )}
        </h2>

        {isFiltering ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No se encontraron proyectos en esta categoría.</p>
            <Button variant="link" className="text-orange-500 mt-4" onClick={() => handleCategoryChange("all")}>
              Ver todos los proyectos
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="h-64 relative">
                    <Image
                      src={
                        project.image ||
                        `/placeholder.svg?height=300&width=400&query=${project.title} marketing project`
                      }
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                  <p>{project.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/trabajos/${project.slug}`} passHref>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

    
      {/* CTA */}
      <div className="text-center bg-orange-500 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Destacar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Permítanos ayudarle a crear una campaña de marketing offline que genere resultados excepcionales para su
          negocio.
        </p>
        <Link href="/contacto" passHref>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-orange-500"
          >
            Contactar Ahora
          </Button>
        </Link>
      </div>
    </div>
  )
}
