import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface BlogAuthorProps {
  author: {
    name: string
    role: string
    image?: string
    bio: string
  }
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <Card className="border-none shadow-md my-12">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-shrink-0">
            {author.image ? (
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="h-24 w-24 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                <span className="font-bold text-2xl">{author.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold">{author.name}</h3>
            <p className="text-orange-500 mb-3">{author.role}</p>
            <p className="text-gray-600">{author.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
