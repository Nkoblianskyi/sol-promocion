import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

const milestones = [
  {
    year: "2013",
    title: "Fundación de SolPromoción",
    description:
      "Antonio Fernández funda SolPromoción con la visión de ofrecer soluciones de marketing offline innovadoras y efectivas para empresas españolas.",
  },
  {
    year: "2015",
    title: "Expansión a Barcelona",
    description:
      "Tras el éxito inicial en Madrid, abrimos nuestra segunda oficina en Barcelona para atender mejor a clientes en Cataluña.",
  },
  {
    year: "2017",
    title: "Premio a la Innovación en Marketing",
    description:
      "Recibimos el prestigioso Premio Nacional a la Innovación en Marketing Offline por nuestra campaña para el Festival de Cine de San Sebastián.",
  },
  {
    year: "2020",
    title: "Integración de Tecnologías Digitales",
    description:
      "Comenzamos a integrar tecnologías digitales como realidad aumentada y códigos QR en nuestras soluciones de marketing offline.",
  },
  {
    year: "2023",
    title: "Compromiso con la Sostenibilidad",
    description:
      "Lanzamos nuestra iniciativa de sostenibilidad, comprometiéndonos a utilizar materiales ecológicos y procesos respetuosos con el medio ambiente.",
  },
  {
    year: "2025",
    title: "Presente y Futuro",
    description:
      "Hoy, SolPromoción es líder en el sector del marketing offline en España, con un equipo de más de 50 profesionales y clientes en todo el país.",
  },
]

export default function HistorySection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Desde nuestra fundación, hemos crecido y evolucionado, manteniendo siempre nuestro compromiso con la
          excelencia y la innovación.
        </p>
      </div>

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <Card
            key={index}
            className={index % 2 === 0 ? "border-l-4 border-l-orange-500" : "border-r-4 border-r-orange-500"}
          >
            <CardContent className="p-6">
              <div className={`flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"}`}>
                <div className={`flex-shrink-0 ${index % 2 === 0 ? "mr-6" : "ml-6"}`}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500">
                    <CalendarDays className="h-8 w-8" />
                    <span className="absolute font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
