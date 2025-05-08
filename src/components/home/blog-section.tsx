import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getPosts } from "@/lib/data"

export default function BlogSection() {
  const posts = getPosts().slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16 bg-[#F9BC6E]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Últimos Artículos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Manténgase al día con las últimas tendencias y consejos sobre marketing offline y publicidad efectiva.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="h-48 relative">
                <Image
                  src={post.image || `/placeholder.svg?height=200&width=400&query=${post.title} marketing blog`}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <div className="flex items-center mb-2">
                <span className="text-sm text-orange-500">{post.category}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} passHref>
                <Button variant="link" className="text-orange-500 hover:text-orange-600 p-0">
                  Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog" passHref>
          <Button variant="outline" size="lg">
            Ver Todos los Artículos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
