"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Тут можна додати реальну логіку відправки (наприклад, fetch або axios)
    setSubmitted(true)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">¡Hablemos de su Proyecto!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Estamos aquí para ayudarle a crear soluciones de marketing offline efectivas. Póngase en contacto con
            nosotros para discutir sus necesidades.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-500 font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Contáctenos</h3>
                <p className="text-gray-600">Complete el formulario o llámenos directamente.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-500 font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Consulta Gratuita</h3>
                <p className="text-gray-600">Discutiremos sus objetivos y necesidades específicas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-500 font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Propuesta Personalizada</h3>
                <p className="text-gray-600">Recibirá una propuesta adaptada a sus necesidades.</p>
              </div>
            </div>
          </div>
          <Link href="/contacto" passHref>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Contactar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-6">Envíenos un Mensaje</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input type="text" placeholder="Nombre" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" required />
            </div>
            <div>
              <Input type="tel" placeholder="Teléfono" />
            </div>
            <div>
              <Textarea placeholder="Mensaje" rows={4} required />
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="privacy" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Acepto la{" "}
                <Link href="/politica-privacidad" className="text-orange-500 hover:underline">
                  Política de Privacidad
                </Link>{" "}
                y el procesamiento de mis datos personales.
              </label>
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Enviar Mensaje
            </Button>
          </form>
          {submitted && (
            <div className="mt-6 p-4 text-center bg-green-100 text-green-700 rounded-lg font-medium">
              Gracias por su mensaje. Nos pondremos en contacto con usted pronto.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
