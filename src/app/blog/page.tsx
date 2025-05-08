import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getPosts } from "@/lib/data"
import BlogCategories from "@/components/blog/blog-categories"
import BlogPagination from "@/components/blog/blog-pagination"

export const metadata: Metadata = {
  title: "Blog | SolPromoción",
  description:
    "Artículos y noticias sobre marketing offline, tendencias publicitarias y consejos para mejorar su estrategia de marketing.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubra las últimas tendencias y consejos sobre marketing offline y publicidad efectiva.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-3/4">
          <div className="grid md:grid-cols-2 gap-8">
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
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
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

        </div>

      </div>
    </div>
  )
}
