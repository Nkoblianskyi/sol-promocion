import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-orange-500" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Dirección</h4>
            <p className="text-gray-600">Gran Vía, 45, 28013 Madrid, España</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Phone className="h-5 w-5 text-orange-500" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Teléfono</h4>
            <p className="text-gray-600">+34 932 654 321</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Mail className="h-5 w-5 text-orange-500" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-600">info@solpromocion.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Clock className="h-5 w-5 text-orange-500" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Horario de Atención</h4>
            <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-600">Sábado y Domingo: Cerrado</p>
          </div>
        </div>
      </div>

    </div>
  )
}
