import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ServiceFeaturesProps {
  features: Array<{
    title: string
    description: string
    icon?: string
  }>
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubra lo que hace que nuestro servicio sea excepcional
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
