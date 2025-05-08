import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getServiceBySlug, getServices } from "@/lib/data"
import ServiceFeatures from "@/components/services/service-features"
import ServiceProcess from "@/components/services/service-process"
import ServiceCTA from "@/components/services/service-cta"


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado | SolPromoción",
    }
  }

  return {
    title: `${service.title} | SolPromoción`,
    description: service.description,
  }
}

export function generateStaticParams() {
  const services = getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto py-24">
      <Link href="/servicios" className="flex items-center text-orange-500 hover:text-orange-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a Servicios
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{service.shortDescription}</p>
          <div className="prose max-w-none">
            <p>{service.description}</p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={service.image || `/placeholder.svg?height=400&width=600&query=${service.title} marketing service`}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <ServiceFeatures features={service.features} />
      <ServiceProcess process={service.process} />
      <ServiceCTA />
    </div>
  )
}
