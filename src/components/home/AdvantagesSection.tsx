import Image from "next/image"

const advantages = [
    {
        id: "01",
        title: "Experiencia Local",
        description:
            "Conocemos profundamente el mercado local y sus dinámicas, lo que nos permite crear campañas personalizadas y efectivas.",
        image: "/advantage1.png",
    },
    {
        id: "02",
        title: "Alcance Real",
        description:
            "El marketing offline garantiza una presencia física, creando conexiones tangibles con su audiencia y fortaleciendo la confianza.",
        image: "/advantage2.png",
    },
    {
        id: "03",
        title: "Estrategias Creativas",
        description:
            "Diseñamos campañas únicas que captan la atención en espacios públicos, eventos y medios impresos.",
        image: "/advantage3.png",
    },
    {
        id: "04",
        title: "Medición y Optimización",
        description:
            "Monitoreamos resultados de cada campaña y optimizamos para asegurar el mayor retorno de su inversión.",
        image: "/advantage4.png",
    },
]

export default function AdvantagesSection() {
    return (
        <section className="container mx-auto px-4 py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Nuestras Ventajas</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Descubra por qué somos la mejor opción para su estrategia de marketing offline. Trabajamos para hacer que su
                    marca destaque con resultados medibles.
                </p>
            </div>

            <div className="flex flex-col gap-12 relative">
                {advantages.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } items-center md:items-start gap-8`}
                    >
                        <span
                            className="absolute text-[80px] font-bold text-orange-100 top-[-20px] md:top-0 md:static md:text-[100px]"
                            style={{ zIndex: 0 }}
                        >
                            {item.id}
                        </span>

                        <div className="relative z-10 w-full md:w-1/2">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md object-contain"
                            />
                        </div>

                        <div className="relative z-10 w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-orange-500 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
