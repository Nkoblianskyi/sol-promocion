import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServiceCTA() {
  return (
    <section className="py-12 bg-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para impulsar su negocio?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos de marketing con nuestras
          soluciones personalizadas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contacto" passHref>
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Solicitar Presupuesto <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/proyectos" passHref>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-orange-600">
              Ver Nuestros Proyectos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
