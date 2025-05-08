import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ValuesSection from "@/components/about/values-section"
import HistorySection from "@/components/about/history-section"

export const metadata: Metadata = {
  title: "Sobre Nosotros | SolPromoción",
  description:
    "Conozca más sobre SolPromoción, nuestra historia, valores y equipo. Somos expertos en marketing offline en España.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 space-y-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sobre SolPromoción</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Somos una agencia de marketing offline con más de 10 años de experiencia creando soluciones publicitarias
          impactantes para empresas en toda España.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
          <p className="text-lg mb-4">
            En SolPromoción, nuestra misión es ayudar a las empresas a destacar en el mundo físico a través de
            estrategias de marketing offline efectivas y creativas.
          </p>
          <p className="text-lg">
            Creemos que a pesar del auge digital, la publicidad tradicional sigue siendo una herramienta poderosa para
            conectar con los clientes y crear experiencias memorables.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/about.png" alt="Oficina de SolPromoción" fill className="object-cover" />
        </div>
      </div>

      <HistorySection />
      <ValuesSection />

      <Card className="bg-orange-50 border-none">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para discutir cómo podemos ayudar a tu empresa a destacar con nuestras soluciones de
            marketing offline.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Contactar Ahora
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
