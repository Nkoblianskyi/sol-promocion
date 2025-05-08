import { Calendar, MapPin, Tag } from "lucide-react"

interface ProjectDetailsProps {
  project: {
    date: string
    location: string
    client: string
    category: string
    services: string[]
  }
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Detalles del Proyecto</h3>

      <div className="space-y-4">
        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
          <div>
            <p className="font-medium">Fecha</p>
            <p className="text-gray-600">{project.date}</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
          <div>
            <p className="font-medium">Ubicación</p>
            <p className="text-gray-600">{project.location}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Tag className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
          <div>
            <p className="font-medium">Cliente</p>
            <p className="text-gray-600">{project.client}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Tag className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
          <div>
            <p className="font-medium">Categoría</p>
            <p className="text-gray-600">{project.category}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Tag className="h-5 w-5 text-orange-500 mt-0.5 mr-3" />
          <div>
            <p className="font-medium">Servicios</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.services.map((service, index) => (
                <span key={index} className="bg-orange-100 text-orange-700 text-sm px-2 py-1 rounded">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
