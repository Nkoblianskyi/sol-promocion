import Hero from "@/components/home/hero"
import AboutSection from "@/components/home/about-section"
import ServicesSection from "@/components/home/services-section"
import PortfolioSection from "@/components/home/portfolio-section"
import BlogSection from "@/components/home/blog-section"
import ContactSection from "@/components/home/contact-section"
import FaqSection from "@/components/home/faq-section"
import type { Metadata } from "next"
import AdvantagesSection from "@/components/home/AdvantagesSection"

export const metadata: Metadata = {
  title: "SolPromoción - Agencia Líder en Marketing Offline en España",
  description:
    "Especialistas en vallas publicitarias, folletos, publicidad en transporte y metro. Soluciones creativas para tu negocio en toda España.",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <AboutSection />
      <AdvantagesSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <FaqSection />
    </div>
  )
}
