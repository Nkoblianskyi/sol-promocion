import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  totalPages: number
  currentPage: number
}

export default function BlogPagination({ totalPages, currentPage }: BlogPaginationProps) {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" disabled={currentPage === 1} asChild={currentPage !== 1}>
          {currentPage !== 1 ? (
            <Link href={`/blog/pagina/${currentPage - 1}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Link>
          ) : (
            <span>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </span>
          )}
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            className={currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}
            asChild={currentPage !== page}
          >
            {currentPage !== page ? <Link href={`/blog/pagina/${page}`}>{page}</Link> : <span>{page}</span>}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          asChild={currentPage !== totalPages}
        >
          {currentPage !== totalPages ? (
            <Link href={`/blog/pagina/${currentPage + 1}`}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Página siguiente</span>
            </Link>
          ) : (
            <span>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Página siguiente</span>
            </span>
          )}
        </Button>
      </div>
    </div>
  )
}
