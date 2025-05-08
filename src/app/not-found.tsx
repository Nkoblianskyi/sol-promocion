import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl font-bold mt-6 mb-4">Página no encontrada</h2>
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        Lo sentimos, la página que está buscando no existe o ha sido movida.
      </p>
      <div className="flex gap-4">
        <Link href="/" passHref>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Volver al Inicio
          </Button>
        </Link>
        <Link href="/contacto" passHref>
          <Button size="lg" variant="outline">
            Contactar con Nosotros
          </Button>
        </Link>
      </div>
    </div>
  )
}
