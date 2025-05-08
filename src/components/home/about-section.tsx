import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative h-[400px]">
          <Image src="/about.png" alt="Sobre SolPromoción" fill className="object-cover rounded-lg" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6">Sobre SolPromoción</h2>
          <p className="text-lg text-gray-600 mb-4">
            Somos una agencia de marketing offline con más de 10 años de experiencia en el mercado español. Nos
            especializamos en la creación y producción de materiales publicitarios físicos que generan un impacto real
            en su audiencia.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Nuestro equipo de profesionales combina creatividad, conocimiento técnico y experiencia para ofrecer
            soluciones publicitarias que destacan en un mundo cada vez más digital.
          </p>
          <Link href="/sobre-nosotros" passHref>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Conocer Más <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
