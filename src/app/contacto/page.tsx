import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contacto | SolPromoción",
  description:
    "Póngase en contacto con SolPromoción para discutir sus necesidades de marketing offline y publicidad en España.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Estamos aquí para ayudarle con sus necesidades de marketing offline. Póngase en contacto con nosotros hoy
          mismo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <ContactForm />
        <ContactInfo />
      </div>

    </div>
  )
}
