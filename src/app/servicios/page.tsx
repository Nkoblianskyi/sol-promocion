import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getServices } from "@/lib/data"

export const metadata: Metadata = {
  title: "Servicios | SolPromoción",
  description:
    "Descubra nuestra amplia gama de servicios de marketing offline: vallas publicitarias, folletos, publicidad en transporte y más.",
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ofrecemos soluciones completas de marketing offline para ayudar a su empresa a destacar en el mercado español.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

      <div className="bg-orange-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">¿No encuentra lo que busca?</h2>
        <p className="text-lg mb-6">
          Contáctenos para discutir sus necesidades específicas. Ofrecemos soluciones personalizadas para cada cliente.
        </p>
        <Link href="/contacto" passHref>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Contactar Ahora
          </Button>
        </Link>
      </div>
    </div>
  )
}
