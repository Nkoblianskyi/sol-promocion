import { Award, Heart, Lightbulb, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
    title: "Creatividad",
    description:
      "Buscamos constantemente ideas innovadoras y soluciones creativas para ayudar a nuestros clientes a destacar en un mercado competitivo.",
  },
  {
    icon: <Award className="h-8 w-8 text-orange-500" />,
    title: "Excelencia",
    description:
      "Nos comprometemos con los más altos estándares de calidad en todos nuestros proyectos, desde el diseño hasta la implementación.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Colaboración",
    description:
      "Trabajamos estrechamente con nuestros clientes, construyendo relaciones de confianza y colaboración para lograr resultados excepcionales.",
  },
  {
    icon: <Target className="h-8 w-8 text-orange-500" />,
    title: "Resultados",
    description:
      "Nos enfocamos en crear campañas que no solo sean visualmente atractivas, sino que también generen resultados tangibles para su negocio.",
  },
  {
    icon: <Heart className="h-8 w-8 text-orange-500" />,
    title: "Pasión",
    description:
      "Amamos lo que hacemos y ponemos pasión en cada proyecto, lo que se refleja en la calidad y efectividad de nuestro trabajo.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Innovación",
    description:
      "Estamos constantemente explorando nuevas tecnologías y enfoques para mantener nuestras soluciones a la vanguardia del marketing offline.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estos son los principios que guían nuestro trabajo y nos ayudan a ofrecer un servicio excepcional a nuestros
            clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {value.icon}
                <h3 className="text-xl font-bold ml-4">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
