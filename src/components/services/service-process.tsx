interface ServiceProcessProps {
  process: Array<{
    title: string
    description: string
  }>
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Así es como trabajamos para garantizar resultados excepcionales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
