import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getPosts } from "@/lib/data"

interface RelatedPostsProps {
  currentPostId: number
}

export default function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  const allPosts = getPosts()
  const relatedPosts = allPosts.filter((post) => post.id !== currentPostId).slice(0, 3)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Artículos Relacionados</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={post.image || `/placeholder.svg?height=200&width=400&query=${post.title} marketing blog`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm text-orange-500">{post.category}</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <Link href={`/blog/${post.slug}`} passHref>
                <Button variant="link" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                  Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
