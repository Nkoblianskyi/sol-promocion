import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Buscar</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex gap-2">
            <Input placeholder="Buscar artículos..." className="flex-grow" />
            <Button type="submit" size="icon" className="bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4" />
              <span className="sr-only">Buscar</span>
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categorías</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Estrategias de Marketing",
              "Diseño Publicitario",
              "Publicidad en Transporte",
              "Marketing Impreso",
              "Tendencias",
            ].map((category, index) => (
              <li key={index}>
                <Link
                  href={`/blog/categoria/${category.toLowerCase().replace(/ /g, "-")}`}
                  className="flex justify-between items-center py-2 hover:text-orange-500 transition-colors"
                >
                  <span>{category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Artículos Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              {
                title: "5 Razones por las que el Marketing Offline Sigue Siendo Relevante",
                slug: "marketing-offline-relevante-era-digital",
              },
              {
                title: "Cómo Diseñar Vallas Publicitarias que Realmente Captan la Atención",
                slug: "disenar-vallas-publicitarias-efectivas",
              },
              { title: "La Psicología del Color en el Marketing", slug: "psicologia-color-marketing" },
            ].map((post, index) => (
              <li key={index}>
                <Link href={`/blog/${post.slug}`} className="block hover:text-orange-500 transition-colors">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Suscríbete</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Recibe nuestros últimos artículos y noticias directamente en tu bandeja de entrada.
          </p>
          <form className="space-y-4">
            <Input placeholder="Tu email" type="email" />
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Suscribirse</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
