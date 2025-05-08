import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

interface ProjectResultsProps {
  results: Array<{
    title: string
    value: string
  }>
}

export default function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Resultados del Proyecto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Datos concretos que demuestran el éxito de nuestra campaña
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Card key={index} className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-orange-500 mb-2">{result.value}</p>
                <p className="text-gray-600">{result.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
