import Image from "next/image"

const team = [
  {
    name: "Antonio Fernández",
    role: "Director General",
    bio: "Con más de 20 años de experiencia en el sector del marketing offline, Antonio fundó SolPromoción con la visión de ofrecer soluciones publicitarias innovadoras y efectivas para empresas de todos los tamaños.",
    image: "/professional-businessman-suit.png",
  },
  {
    name: "Carmen Rodríguez",
    role: "Directora Creativa",
    bio: "Carmen lidera nuestro equipo creativo, aportando su amplia experiencia en diseño gráfico y su visión innovadora para crear campañas que realmente destacan en el mercado.",
    image: "/professional-creative-director.png",
  },
  {
    name: "Javier López",
    role: "Director de Operaciones",
    bio: "Javier supervisa todos los aspectos operativos de nuestros proyectos, asegurando que cada campaña se ejecute con la máxima calidad y eficiencia.",
    image: "/professional-operations-director.png",
  },
  {
    name: "María González",
    role: "Directora de Cuentas",
    bio: "María trabaja estrechamente con nuestros clientes para entender sus necesidades y objetivos, asegurando que cada proyecto cumpla y supere sus expectativas.",
    image: "/professional-business-woman-account-manager.png",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Contamos con un equipo de profesionales apasionados y experimentados dedicados a crear soluciones de marketing
          offline excepcionales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64 w-full">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
