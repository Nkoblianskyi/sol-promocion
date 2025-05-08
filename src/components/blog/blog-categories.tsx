import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Estrategias de Marketing", count: 8, slug: "estrategias-marketing" },
  { name: "Diseño Publicitario", count: 12, slug: "diseno-publicitario" },
  { name: "Publicidad en Transporte", count: 6, slug: "publicidad-transporte" },
  { name: "Marketing Impreso", count: 9, slug: "marketing-impreso" },
  { name: "Tendencias", count: 7, slug: "tendencias" },
]

const recentPosts = [
  {
    title: "5 Razones por las que el Marketing Offline Sigue Siendo Relevante",
    slug: "marketing-offline-relevante-era-digital",
  },
  {
    title: "Cómo Diseñar Vallas Publicitarias que Realmente Captan la Atención",
    slug: "disenar-vallas-publicitarias-efectivas",
  },
  { title: "La Psicología del Color en el Marketing", slug: "psicologia-color-marketing" },
]

export default function BlogCategories() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Categorías</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/blog/categoria/${category.slug}`}
                  className="flex justify-between items-center py-2 hover:text-orange-500 transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Artículos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentPosts.map((post, index) => (
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
          <CardTitle>Etiquetas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Marketing Offline",
              "Vallas Publicitarias",
              "Diseño Gráfico",
              "Publicidad",
              "Folletos",
              "Branding",
              "Tendencias",
            ].map((tag, index) => (
              <Link
                key={index}
                href={`/blog/etiqueta/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="bg-gray-100 hover:bg-orange-100 hover:text-orange-700 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
