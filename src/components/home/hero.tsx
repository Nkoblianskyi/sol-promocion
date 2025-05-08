import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Фонове зображення */}
      <div className="absolute inset-0 z-0 bottom-0 ">
        <Image
          src="/bg-hero.png"
          alt="Fondo"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Soluciones de Marketing Offline para Impulsar su Negocio
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Especialistas en la producción de vallas publicitarias, folletos, publicidad en transporte y metro.
              Hacemos que su marca destaque en el mundo real.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/servicios" passHref>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto" passHref>
                <Button size="lg" variant="outline">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/hero.png"
              alt="Marketing Offline"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
