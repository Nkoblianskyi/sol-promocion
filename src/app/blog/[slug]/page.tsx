import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug, getPosts } from "@/lib/data"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogAuthor from "@/components/blog/blog-author"
import RelatedPosts from "@/components/blog/related-posts"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | SolPromoción",
    }
  }

  return {
    title: `${post.title} | SolPromoción`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-24">
      <Link href="/blog" className="flex items-center text-orange-500 hover:text-orange-600 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver al Blog
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-sm text-orange-500">{post.category}</span>
              <span className="mx-2">•</span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image || `/placeholder.svg?height=400&width=800&query=${post.title} marketing blog`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none mb-12">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <BlogAuthor author={post.author} />
          <RelatedPosts currentPostId={post.id} />
        </div>

        <div className="md:w-1/4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
