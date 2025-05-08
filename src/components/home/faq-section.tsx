import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué servicios de marketing offline ofrecen?",
    answer:
      "Ofrecemos una amplia gama de servicios de marketing offline, incluyendo diseño y producción de vallas publicitarias, folletos, catálogos, publicidad en transporte público y metro, diseño gráfico, y más. Nuestro objetivo es ayudar a su empresa a destacar en el mundo físico con soluciones publicitarias efectivas.",
  },
  {
    question: "¿Cuánto tiempo tarda en completarse un proyecto?",
    answer:
      "El tiempo de entrega varía según el tipo y la complejidad del proyecto. Para vallas publicitarias, generalmente necesitamos de 2 a 3 semanas desde la aprobación del diseño. Para folletos y materiales impresos más pequeños, el tiempo de entrega puede ser de 1 a 2 semanas. Durante nuestra consulta inicial, le proporcionaremos un cronograma detallado específico para su proyecto.",
  },
  {
    question: "¿Trabajan en toda España?",
    answer:
      "Sí, ofrecemos nuestros servicios en toda España. Nuestra sede principal está en Madrid, pero tenemos colaboradores y proveedores en las principales ciudades españolas, lo que nos permite ejecutar campañas a nivel nacional. Ya sea que necesite publicidad en Barcelona, Valencia, Sevilla o cualquier otra ciudad española, podemos ayudarle.",
  },
  {
    question: "¿Cómo se determina el presupuesto para un proyecto?",
    answer:
      "El presupuesto se determina en función de varios factores, incluyendo el tipo de servicio, la cantidad de materiales necesarios, la ubicación (en el caso de vallas publicitarias o publicidad en transporte), la complejidad del diseño y el cronograma del proyecto. Ofrecemos consultas gratuitas donde discutimos sus necesidades y objetivos para proporcionarle un presupuesto personalizado y transparente.",
  },
  {
    question: "¿Ofrecen servicios de diseño gráfico?",
    answer:
      "Sí, contamos con un equipo de diseñadores gráficos profesionales que pueden crear diseños atractivos y efectivos para todos sus materiales de marketing. Si ya tiene diseños propios, también podemos trabajar con ellos. Nuestro objetivo es asegurarnos de que su mensaje visual sea claro, atractivo y alineado con su marca.",
  },
]

export default function FaqSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de marketing offline.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
