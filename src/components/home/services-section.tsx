import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getServices } from "@/lib/data"

export default function ServicesSection() {
  const services = getServices().slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16 bg-[#F9BC6E]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de servicios de marketing offline para ayudar a su empresa a destacar en el mercado.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={service.image || `/placeholder.svg?height=200&width=400&query=${service.title} marketing`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{service.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/servicios/${service.slug}`} passHref>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Más Información <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/servicios" passHref>
          <Button variant="outline" size="lg">
            Ver Todos los Servicios <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
