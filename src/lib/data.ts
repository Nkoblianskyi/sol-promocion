// Mock data for the website

// Services
export interface Service {
  id: number
  title: string
  slug: string
  shortDescription: string
  excerpt: string
  description: string
  image?: string
  features: Array<{
    title: string
    description: string
    icon?: string
  }>
  process: Array<{
    title: string
    description: string
  }>
  testimonials: Array<{
    name: string
    company: string
    text: string
    image?: string
  }>
}

const services: Service[] = [
  {
    id: 1,
    title: "Vallas Publicitarias",
    slug: "vallas-publicitarias",
    shortDescription: "Impacto visual a gran escala",
    excerpt:
      "Maximice la visibilidad de su marca con nuestras vallas publicitarias estratégicamente ubicadas en toda España.",
    description:
      "Nuestras vallas publicitarias ofrecen una presencia visual dominante que captura la atención de miles de personas diariamente. Trabajamos con usted para seleccionar las ubicaciones más estratégicas basadas en su público objetivo y objetivos de marketing. Desde el diseño hasta la instalación, gestionamos todo el proceso para garantizar un impacto máximo de su mensaje publicitario.",
    image: "/modern-city-billboard.png",
    features: [
      {
        title: "Ubicaciones Premium",
        description: "Acceso a las mejores ubicaciones en ciudades principales y carreteras de alto tráfico.",
        icon: "map-pin",
      },
      {
        title: "Diseño de Alto Impacto",
        description: "Creación de diseños visualmente impactantes que capturan la atención instantáneamente.",
        icon: "palette",
      },
      {
        title: "Materiales de Calidad",
        description:
          "Utilizamos materiales duraderos y de alta calidad para garantizar una presentación óptima en cualquier condición climática.",
        icon: "shield",
      },
      {
        title: "Análisis de Tráfico",
        description: "Estudios detallados de tráfico para maximizar la exposición de su mensaje.",
        icon: "bar-chart",
      },
    ],
    process: [
      {
        title: "Consulta Inicial",
        description: "Analizamos sus objetivos de marketing y público objetivo.",
      },
      {
        title: "Selección de Ubicaciones",
        description: "Identificamos las mejores ubicaciones basadas en sus necesidades específicas.",
      },
      {
        title: "Diseño Creativo",
        description: "Desarrollamos conceptos visuales impactantes para su aprobación.",
      },
      {
        title: "Producción e Instalación",
        description: "Fabricamos e instalamos su valla publicitaria con los más altos estándares de calidad.",
      },
      {
        title: "Mantenimiento",
        description: "Ofrecemos servicios de mantenimiento para garantizar que su publicidad siempre luzca perfecta.",
      },
    ],
    testimonials: [
      {
        name: "Carlos Rodríguez",
        company: "Restaurantes El Sabor",
        text: "Las vallas publicitarias de SolPromoción aumentaron significativamente el tráfico a nuestros restaurantes. Su ubicación estratégica y diseño llamativo captaron exactamente el tipo de clientes que buscábamos.",
      },
      {
        name: "María González",
        company: "Inmobiliaria Nuevo Hogar",
        text: "Hemos utilizado las vallas publicitarias de SolPromoción para promocionar nuestros nuevos desarrollos inmobiliarios con excelentes resultados. Su equipo profesional hizo que todo el proceso fuera sencillo y efectivo.",
      },
    ],
  },
  {
    id: 2,
    title: "Folletos y Catálogos",
    slug: "folletos",
    shortDescription: "Material impreso de alta calidad",
    excerpt:
      "Diseñamos y producimos folletos y catálogos atractivos que comunican eficazmente su mensaje y destacan su marca.",
    description:
      "Nuestros folletos y catálogos combinan diseño atractivo, contenido persuasivo y producción de alta calidad para crear materiales impresos que realmente destacan. Ya sea que necesite folletos para distribución masiva, catálogos de productos detallados o materiales promocionales para eventos, nuestro equipo creativo desarrollará soluciones que comuniquen eficazmente su mensaje y refuercen la identidad de su marca.",
    image: "/folletosjpg.jpg",
    features: [
      {
        title: "Diseño Personalizado",
        description: "Creación de diseños únicos que reflejan la identidad de su marca y atraen a su público objetivo.",
        icon: "pen-tool",
      },
      {
        title: "Impresión de Alta Calidad",
        description: "Utilizamos las mejores técnicas de impresión y papeles de calidad para un resultado profesional.",
        icon: "printer",
      },
      {
        title: "Opciones Versátiles",
        description:
          "Desde folletos simples hasta catálogos complejos, ofrecemos una amplia gama de opciones para satisfacer sus necesidades.",
        icon: "layers",
      },
      {
        title: "Contenido Persuasivo",
        description:
          "Desarrollo de textos convincentes que motivan a la acción y comunican claramente sus mensajes clave.",
        icon: "message-square",
      },
    ],
    process: [
      {
        title: "Briefing Detallado",
        description: "Comprendemos sus objetivos, público objetivo y mensajes clave.",
      },
      {
        title: "Concepto y Diseño",
        description: "Desarrollamos conceptos creativos y diseños preliminares para su revisión.",
      },
      {
        title: "Redacción y Edición",
        description: "Creamos contenido persuasivo que comunica eficazmente su mensaje.",
      },
      {
        title: "Revisión y Aprobación",
        description: "Refinamos el diseño basado en sus comentarios hasta obtener su aprobación final.",
      },
      {
        title: "Impresión y Entrega",
        description: "Producimos sus materiales con los más altos estándares de calidad y los entregamos puntualmente.",
      },
    ],
    testimonials: [
      {
        name: "Ana Martínez",
        company: "Festival de Artes Escénicas",
        text: "Los folletos diseñados por SolPromoción para nuestro festival anual fueron excepcionales. El diseño captó perfectamente la esencia de nuestro evento y recibimos numerosos comentarios positivos de los asistentes.",
      },
      {
        name: "Pedro Sánchez",
        company: "Muebles Elegancia",
        text: "Nuestro nuevo catálogo de productos ha sido fundamental para aumentar nuestras ventas. El equipo de SolPromoción entendió perfectamente nuestra visión y creó un catálogo que realmente destaca nuestra colección.",
      },
    ],
  },
  {
    id: 3,
    title: "Publicidad en Transporte",
    slug: "publicidad-transporte",
    shortDescription: "Visibilidad móvil en toda la ciudad",
    excerpt:
      "Lleve su mensaje por toda la ciudad con nuestra publicidad en autobuses, taxis y otros medios de transporte público.",
    description:
      "La publicidad en transporte ofrece una forma dinámica y efectiva de llegar a un público amplio y diverso en entornos urbanos. Nuestras soluciones incluyen publicidad en autobuses, taxis, trenes y otros medios de transporte, permitiendo que su mensaje viaje por toda la ciudad y alcance a potenciales clientes en múltiples ubicaciones. Con opciones tanto para el exterior como para el interior de los vehículos, podemos crear campañas que maximicen su visibilidad y generen un impacto duradero.",
    image: "/urban-bus-digital-ad.png",
    features: [
      {
        title: "Amplia Cobertura",
        description: "Su mensaje viaja por toda la ciudad, alcanzando a un público diverso en múltiples ubicaciones.",
        icon: "map",
      },
      {
        title: "Opciones Flexibles",
        description:
          "Diferentes formatos y tamaños disponibles para adaptarse a su presupuesto y objetivos de marketing.",
        icon: "layout",
      },
      {
        title: "Alto Impacto Visual",
        description: "Diseños llamativos que captan la atención incluso en entornos urbanos concurridos.",
        icon: "eye",
      },
      {
        title: "Segmentación Geográfica",
        description:
          "Posibilidad de seleccionar rutas específicas para llegar a audiencias objetivo en áreas determinadas.",
        icon: "target",
      },
    ],
    process: [
      {
        title: "Análisis de Necesidades",
        description: "Evaluamos sus objetivos y determinamos las mejores opciones de transporte para su campaña.",
      },
      {
        title: "Planificación de Rutas",
        description: "Seleccionamos las rutas más efectivas basadas en su público objetivo.",
      },
      {
        title: "Diseño Adaptado",
        description: "Creamos diseños específicamente optimizados para los diferentes formatos de transporte.",
      },
      {
        title: "Producción e Instalación",
        description: "Producimos e instalamos su publicidad siguiendo estrictos controles de calidad.",
      },
      {
        title: "Seguimiento y Mantenimiento",
        description: "Monitorizamos su campaña y realizamos mantenimiento cuando sea necesario.",
      },
    ],
    testimonials: [
      {
        name: "Laura Fernández",
        company: "Academia de Idiomas Global",
        text: "Nuestra campaña en autobuses urbanos generó un aumento del 30% en las inscripciones. La visibilidad constante en toda la ciudad fue exactamente lo que necesitábamos para dar a conocer nuestros nuevos cursos.",
      },
      {
        name: "Javier López",
        company: "Cadena de Gimnasios FitLife",
        text: "La publicidad en taxis nos permitió llegar a nuestro público objetivo de profesionales urbanos de manera muy efectiva. El equipo de SolPromoción gestionó todo el proceso de forma impecable.",
      },
    ],
  },
  {
    id: 4,
    title: "Publicidad en Metro",
    slug: "publicidad-metro",
    shortDescription: "Impacto en el transporte subterráneo",
    excerpt:
      "Aproveche el alto tráfico de pasajeros del metro para promocionar su marca con nuestra publicidad especializada.",
    description:
      "El metro representa una oportunidad única para conectar con un público cautivo durante sus desplazamientos diarios. Ofrecemos diversas opciones de publicidad en estaciones y vagones de metro, desde carteles tradicionales hasta instalaciones innovadoras que captan la atención. Con millones de pasajeros utilizando el metro cada día, su marca obtendrá una exposición significativa en un entorno donde los mensajes publicitarios reciben mayor atención y tiempo de visualización.",
    image: "/metro-music-ads.png",
    features: [
      {
        title: "Audiencia Cautiva",
        description: "Llegue a pasajeros que tienen tiempo para absorber su mensaje durante sus trayectos diarios.",
        icon: "users",
      },
      {
        title: "Alta Frecuencia",
        description: "Los pasajeros regulares verán su anuncio repetidamente, aumentando el reconocimiento de marca.",
        icon: "repeat",
      },
      {
        title: "Formatos Diversos",
        description: "Desde carteles tradicionales hasta instalaciones innovadoras y pantallas digitales.",
        icon: "monitor",
      },
      {
        title: "Segmentación por Estaciones",
        description: "Seleccione estaciones específicas para dirigirse a demografías particulares o áreas de interés.",
        icon: "map-pin",
      },
    ],
    process: [
      {
        title: "Consulta Estratégica",
        description: "Analizamos su público objetivo y determinamos las mejores ubicaciones dentro de la red de metro.",
      },
      {
        title: "Selección de Formatos",
        description: "Recomendamos los formatos más efectivos para sus objetivos específicos.",
      },
      {
        title: "Diseño Especializado",
        description: "Creamos diseños optimizados para el entorno único del metro.",
      },
      {
        title: "Gestión de Permisos",
        description: "Nos encargamos de todos los trámites necesarios con las autoridades del transporte.",
      },
      {
        title: "Instalación y Monitoreo",
        description:
          "Instalamos su publicidad y realizamos comprobaciones regulares para asegurar su óptima presentación.",
      },
    ],
    testimonials: [
      {
        name: "Elena Navarro",
        company: "Teatro Clásico",
        text: "Nuestra campaña en el metro para promocionar la nueva temporada teatral superó todas las expectativas. Las ventas de entradas aumentaron significativamente y muchos espectadores mencionaron haber visto nuestros anuncios en el metro.",
      },
      {
        name: "Roberto Díaz",
        company: "Escuela de Negocios Avanzados",
        text: "La publicidad en las estaciones de metro nos permitió llegar a profesionales jóvenes, nuestro principal público objetivo. La calidad de la implementación y el asesoramiento estratégico de SolPromoción fueron excepcionales.",
      },
    ],
  },
  {
    id: 5,
    title: "Diseño Gráfico",
    slug: "diseno-grafico",
    shortDescription: "Creatividad visual para su marca",
    excerpt:
      "Nuestro equipo de diseñadores gráficos profesionales crea soluciones visuales impactantes que refuerzan su identidad de marca.",
    description:
      "El diseño gráfico es fundamental para comunicar eficazmente la esencia de su marca. Nuestro equipo de diseñadores gráficos combina creatividad, conocimiento técnico y comprensión estratégica para desarrollar soluciones visuales que no solo son estéticamente atractivas, sino también efectivas para alcanzar sus objetivos de comunicación. Desde logotipos y identidad corporativa hasta materiales promocionales y diseño editorial, ofrecemos servicios completos de diseño gráfico adaptados a sus necesidades específicas.",
    image: "/4fbebb83cb5a1f10397c9119aaa9b08c.jpg",
    features: [
      {
        title: "Equipo Creativo",
        description: "Diseñadores profesionales con amplia experiencia en diversos sectores y estilos.",
        icon: "users",
      },
      {
        title: "Enfoque Estratégico",
        description: "Diseños que no solo son atractivos, sino que también apoyan sus objetivos de negocio.",
        icon: "target",
      },
      {
        title: "Versatilidad",
        description: "Experiencia en una amplia gama de aplicaciones, desde impresos hasta digitales.",
        icon: "layers",
      },
      {
        title: "Atención al Detalle",
        description: "Meticuloso cuidado en cada aspecto del diseño para garantizar resultados de alta calidad.",
        icon: "zoom-in",
      },
    ],
    process: [
      {
        title: "Briefing Creativo",
        description: "Comprendemos a fondo sus necesidades, objetivos y preferencias estéticas.",
      },
      {
        title: "Investigación",
        description: "Analizamos su sector, competencia y tendencias relevantes.",
      },
      {
        title: "Conceptualización",
        description: "Desarrollamos conceptos creativos basados en la información recopilada.",
      },
      {
        title: "Presentación de Propuestas",
        description: "Presentamos múltiples opciones de diseño para su consideración.",
      },
      {
        title: "Refinamiento",
        description: "Perfeccionamos el diseño seleccionado basándonos en sus comentarios.",
      },
      {
        title: "Entrega Final",
        description: "Proporcionamos los archivos finales en todos los formatos necesarios para su uso.",
      },
    ],
    testimonials: [
      {
        name: "Isabel Torres",
        company: "Boutique Moda Exclusiva",
        text: "El rediseño de nuestra identidad corporativa por SolPromoción transformó completamente la percepción de nuestra marca. Su enfoque creativo y profesional nos impresionó desde el primer momento.",
      },
      {
        name: "Miguel Ángel Ruiz",
        company: "Festival Gastronómico Mediterráneo",
        text: "Los materiales promocionales diseñados para nuestro festival fueron extraordinarios. Captaron perfectamente la esencia mediterránea y contribuyeron significativamente al éxito del evento.",
      },
    ],
  },
]

export function getServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

// Projects
export interface Project {
  id: number
  title: string
  slug: string
  client: string
  category: string
  excerpt: string
  description: string
  image?: string
  gallery: string[]
  results: Array<{
    title: string
    value: string
  }>
  date: string
  location: string
  services: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Campaña de Vallas Publicitarias para Lanzamiento de Producto",
    slug: "campana-vallas-lanzamiento-producto",
    client: "Naturalia Cosmética",
    category: "Vallas Publicitarias",
    excerpt:
      "Estrategia integral de vallas publicitarias para el lanzamiento de una nueva línea de productos cosméticos naturales en Madrid y Barcelona.",
    description:
      "Desarrollamos una campaña estratégica de vallas publicitarias para el lanzamiento de la nueva línea de cosméticos naturales de Naturalia. El objetivo era generar conocimiento de marca y comunicar los beneficios clave de los productos a un público urbano interesado en la belleza sostenible. Seleccionamos ubicaciones estratégicas en Madrid y Barcelona, con alta visibilidad en zonas comerciales y de ocio frecuentadas por el público objetivo. El diseño visual destacaba la pureza de los ingredientes naturales con una estética minimalista y elegante que reflejaba los valores de la marca.",
    image: "/images/projects/naturalia-billboard.png",
    gallery: [
      "/images/projects/naturalia-billboard-1.png",
      "/images/projects/naturalia-billboard-2.png",
      "/images/projects/naturalia-billboard-3.png",
    ],
    results: [
      {
        title: "Incremento en Ventas",
        value: "32%",
      },
      {
        title: "Reconocimiento de Marca",
        value: "+45%",
      },
      {
        title: "Tráfico a Tiendas",
        value: "+28%",
      },
      {
        title: "ROI de la Campaña",
        value: "3.5x",
      },
    ],
    date: "Marzo - Mayo 2025",
    location: "Madrid y Barcelona",
    services: ["Vallas Publicitarias", "Diseño Gráfico", "Planificación Estratégica"],
  },
  {
    id: 2,
    title: "Catálogos y Folletos para Feria Inmobiliaria",
    slug: "catalogos-folletos-feria-inmobiliaria",
    client: "Grupo Inmobiliario Horizonte",
    category: "Folletos y Catálogos",
    excerpt:
      "Diseño y producción de catálogos premium y folletos informativos para la presentación de nuevos desarrollos inmobiliarios en una feria sectorial.",
    description:
      "Para la participación del Grupo Inmobiliario Horizonte en la Feria Inmobiliaria de España 2025, desarrollamos una serie de materiales impresos de alta calidad que presentaban sus nuevos proyectos residenciales y comerciales. Creamos un catálogo premium de 40 páginas con acabados de lujo que mostraba los desarrollos más exclusivos, complementado con folletos específicos para cada proyecto. El diseño combinaba fotografías arquitectónicas de alta calidad, renderizados 3D y planos detallados, con una narrativa que enfatizaba el estilo de vida y las características únicas de cada desarrollo.",
    image: "/images/projects/horizonte-catalog.png",
    gallery: [
      "/images/projects/horizonte-catalog-1.png",
      "/images/projects/horizonte-catalog-2.png",
      "/e716d2333ac39f454c15c0188c718c2d.jpg",
    ],
    results: [
      {
        title: "Leads Generados",
        value: "215",
      },
      {
        title: "Reservas de Propiedades",
        value: "18",
      },
      {
        title: "Valoración de Materiales",
        value: "9.2/10",
      },
      {
        title: "ROI de la Inversión",
        value: "4.8x",
      },
    ],
    date: "Febrero 2025",
    location: "Valencia",
    services: ["Folletos y Catálogos", "Diseño Gráfico", "Impresión de Alta Calidad"],
  },
  {
    id: 3,
    title: "Campaña Publicitaria en Autobuses Urbanos",
    slug: "campana-publicitaria-autobuses",
    client: "Academia de Idiomas Poliglota",
    category: "Publicidad en Transporte",
    excerpt:
      "Campaña integral en autobuses urbanos para promocionar cursos de idiomas, cubriendo rutas estratégicas en Sevilla.",
    description:
      "Diseñamos e implementamos una campaña publicitaria en autobuses urbanos para la Academia de Idiomas Poliglota, con el objetivo de promocionar sus cursos intensivos de verano. La campaña incluyó rotulación completa de 15 autobuses que cubrían rutas estratégicas en Sevilla, pasando por universidades, zonas de oficinas y áreas residenciales con alta concentración de jóvenes profesionales y estudiantes. El diseño visual era vibrante y multicultural, incorporando elementos de diferentes idiomas y culturas, con mensajes claros sobre los beneficios de aprender idiomas y una llamada a la acción directa.",
    image: "/88238a9dbd42608053ae658f93872abf.jpg",
    gallery: [
      "/ea7cf155137b6d44d588851c42ca7c54.jpg",
      "/58d224e44c28fe33cd41a025cc23bcd4.jpg",
      "/74d50afb671a258247991efa52b25e18.jpg",
    ],
    results: [
      {
        title: "Nuevas Inscripciones",
        value: "+42%",
      },
      {
        title: "Visitas al Sitio Web",
        value: "+156%",
      },
      {
        title: "Llamadas Recibidas",
        value: "+89%",
      },
      {
        title: "Retorno de Inversión",
        value: "3.2x",
      },
    ],
    date: "Abril - Junio 2025",
    location: "Sevilla",
    services: ["Publicidad en Transporte", "Diseño Gráfico", "Planificación de Rutas"],
  },
  {
    id: 4,
    title: "Campaña Publicitaria en Estaciones de Metro",
    slug: "campana-publicitaria-metro",
    client: "Festival de Música Urbana",
    category: "Publicidad en Metro",
    excerpt: "Campaña inmersiva en estaciones de metro clave para promocionar un festival de música urbana en Madrid.",
    description:
      "Creamos una campaña publicitaria inmersiva en estaciones de metro seleccionadas para promocionar el Festival de Música Urbana de Madrid. La campaña transformó cinco estaciones estratégicas con una combinación de carteles, vinilos en paredes y suelos, y elementos interactivos que permitían a los pasajeros escanear códigos QR para escuchar muestras de los artistas participantes. El diseño visual era dinámico y contemporáneo, reflejando la energía del festival y destacando el cartel de artistas. La campaña se concentró en estaciones cercanas a universidades y zonas de ocio frecuentadas por el público objetivo del festival.",
    image: "/ae0562cf30bdefb31859a25128d62f30.jpg",
    gallery: [
      "/a4941e9e0cb8f63d2406c375215cf93e.jpg",
      "/544bebe268143bbfc52e0c76cc4539ff.jpg",
      "/4fe7d8883eb71b876d3d3794786d310b.jpg",
    ],
    results: [
      {
        title: "Venta de Entradas",
        value: "+38%",
      },
      {
        title: "Interacciones con QR",
        value: "12,450",
      },
      {
        title: "Menciones en Redes",
        value: "3,200+",
      },
      {
        title: "Ocupación del Festival",
        value: "98%",
      },
    ],
    date: "Mayo 2025",
    location: "Madrid",
    services: ["Publicidad en Metro", "Diseño Gráfico", "Marketing Interactivo"],
  },
  {
    id: 5,
    title: "Rediseño de Identidad Visual Corporativa",
    slug: "rediseno-identidad-visual",
    client: "Clínica Dental Sonrisa",
    category: "Diseño Gráfico",
    excerpt:
      "Renovación completa de la identidad visual de una red de clínicas dentales, incluyendo logo, papelería y señalética.",
    description:
      "Llevamos a cabo un rediseño integral de la identidad visual corporativa para la red de Clínicas Dentales Sonrisa, con el objetivo de modernizar su imagen y reflejar mejor sus valores de profesionalidad, calidez y tecnología avanzada. El proyecto incluyó el rediseño del logotipo, desarrollo de un sistema visual completo con paleta de colores, tipografías y elementos gráficos, y aplicación a toda la papelería corporativa, señalética de las clínicas, uniformes del personal y materiales promocionales. El nuevo diseño logró un equilibrio entre profesionalidad médica y accesibilidad, utilizando colores cálidos y formas redondeadas que transmiten confianza y bienestar.",
    image: "/7819ec359255242d33bb8de2e28e3f15.jpg",
    gallery: [
      "/8baffef3ee9bd1822a104d1e86d13be4.jpg",
      "/4b3741cc531e22908bb5572077d57799.jpg",
      "/804148e49d534b45bc30c95acc51f556.jpg",
    ],
    results: [
      {
        title: "Percepción de Marca",
        value: "+62%",
      },
      {
        title: "Nuevos Pacientes",
        value: "+25%",
      },
      {
        title: "Satisfacción de Empleados",
        value: "92%",
      },
      {
        title: "Reconocimiento de Marca",
        value: "+40%",
      },
    ],
    date: "Enero - Marzo 2025",
    location: "Barcelona, Valencia, Zaragoza",
    services: ["Diseño Gráfico", "Identidad Corporativa", "Señalética"],
  },
  {
    id: 6,
    title: "Campaña Multicanal para Centro Comercial",
    slug: "campana-multicanal-centro-comercial",
    client: "Centro Comercial Meridiano",
    category: "Campaña Integral",
    excerpt:
      "Estrategia publicitaria multicanal para el 10º aniversario de un centro comercial, combinando vallas, folletos y publicidad en transporte.",
    description:
      "Desarrollamos una campaña publicitaria integral para celebrar el 10º aniversario del Centro Comercial Meridiano. La estrategia multicanal incluyó vallas publicitarias en las principales vías de acceso a la ciudad, publicidad en autobuses urbanos que conectaban con el centro comercial, folletos promocionales distribuidos en hogares de la zona, y elementos decorativos especiales dentro del propio centro. Todos los materiales compartían una identidad visual festiva y coherente, centrada en el concepto '10 Años Creando Experiencias', con promociones especiales y eventos programados durante un mes de celebración. La campaña logró aumentar significativamente el tráfico de visitantes y las ventas durante el período promocional.",
    image: "/57417ce5e694fb8506bdf0fc32d4b2b8.jpg",
    gallery: [
      "/8a03b423299a0207b7169b810906e169.jpg",
      "/6486ae3ed726bc8a3cf443b1b7ad3971.jpg",
      "/b221e18790b9c18cfbe84c6902963e84.jpg",
    ],
    results: [
      {
        title: "Incremento de Visitantes",
        value: "+45%",
      },
      {
        title: "Aumento en Ventas",
        value: "+37%",
      },
      {
        title: "Participación en Eventos",
        value: "12,800 personas",
      },
      {
        title: "Retorno de Inversión",
        value: "5.2x",
      },
    ],
    date: "Abril - Mayo 2025",
    location: "Málaga",
    services: ["Vallas Publicitarias", "Publicidad en Transporte", "Folletos y Catálogos", "Diseño Gráfico"],
  },
]

export function getProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

// Blog Posts
export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string[]
  image?: string
  date: string
  category: string
  author: {
    name: string
    role: string
    image?: string
    bio: string
  }
  tags: string[]
}

const posts: Post[] = [
  {
    id: 1,
    title: "5 Razones por las que el Marketing Offline Sigue Siendo Relevante en la Era Digital",
    slug: "marketing-offline-relevante-era-digital",
    excerpt:
      "A pesar del auge del marketing digital, las estrategias offline siguen siendo fundamentales para una estrategia de marketing completa. Descubra por qué.",
    content: [
      "En un mundo cada vez más digitalizado, muchas empresas centran todos sus esfuerzos de marketing en canales online. Sin embargo, el marketing offline sigue siendo una herramienta poderosa que puede complementar y potenciar sus estrategias digitales. En este artículo, exploramos cinco razones convincentes por las que el marketing offline sigue siendo relevante en la era digital.",
      "1. Tangibilidad y Permanencia",
      "A diferencia del contenido digital que puede desaparecer con un simple deslizamiento, los materiales de marketing físicos como folletos, catálogos o vallas publicitarias tienen una presencia tangible y duradera. Un folleto bien diseñado puede permanecer en una mesa durante semanas, generando múltiples impresiones, mientras que un anuncio digital puede ser olvidado en segundos. Esta tangibilidad crea una conexión más profunda con los consumidores y mejora el recuerdo de marca.",
      "2. Menos Competencia por la Atención",
      "El espacio digital está saturado de anuncios y contenidos que compiten por la atención del usuario. En contraste, los canales offline como vallas publicitarias o publicidad en transporte pueden ofrecer un entorno menos congestionado donde su mensaje tiene más posibilidades de destacar. Además, muchos consumidores han desarrollado 'ceguera a los anuncios digitales', mientras que los formatos físicos siguen captando la atención.",
      "3. Alcance a Audiencias Diversas",
      "No todos los segmentos demográficos tienen la misma presencia online. Las estrategias de marketing offline permiten llegar a audiencias que pueden no estar tan activas digitalmente, como personas mayores o aquellas en áreas con acceso limitado a internet. Además, ciertos contextos como el transporte público o espacios de espera ofrecen oportunidades únicas para conectar con consumidores cuando están más receptivos a los mensajes.",
      "4. Credibilidad y Confianza",
      "Los materiales de marketing físicos a menudo se perciben como más creíbles y profesionales. La inversión en publicidad impresa o exterior transmite un mensaje de solidez y permanencia que puede reforzar la confianza en su marca. Para muchos consumidores, una empresa que invierte en marketing offline demuestra un compromiso más serio con su presencia en el mercado.",
      "5. Integración con Estrategias Digitales",
      "El marketing más efectivo no es exclusivamente digital u offline, sino una combinación estratégica de ambos. Las campañas offline pueden dirigir a los consumidores a plataformas digitales a través de códigos QR, URLs personalizadas o hashtags. Esta integración crea una experiencia de marca coherente y multiplica el impacto de sus esfuerzos de marketing en ambos entornos.",
      "Conclusión",
      "El marketing offline no debe verse como una alternativa anticuada al marketing digital, sino como un componente complementario de una estrategia integral. Las empresas que logran equilibrar e integrar ambos enfoques obtienen mejores resultados al aprovechar las fortalezas únicas de cada canal. En SolPromoción, somos expertos en desarrollar estrategias de marketing offline que se integran perfectamente con sus iniciativas digitales para maximizar su impacto en el mercado.",
    ],
    image: "/46e1bce13e01cb93b7f8e435019c3e41.jpg",
    date: "15 de abril de 2025",
    category: "Estrategias de Marketing",
    author: {
      name: "Director de Estrategia",
      role: "Director de Estrategia",
      bio: "Profesional con más de 15 años de experiencia en marketing offline y ha liderado campañas premiadas para marcas nacionales e internacionales.",
    },
    tags: ["Marketing Offline", "Estrategia de Marketing", "Publicidad", "Branding"],
  },
  {
    id: 2,
    title: "Cómo Diseñar Vallas Publicitarias que Realmente Captan la Atención",
    slug: "disenar-vallas-publicitarias-efectivas",
    excerpt:
      "Descubra los principios clave para crear vallas publicitarias impactantes que generen resultados tangibles para su negocio.",
    content: [
      "Las vallas publicitarias siguen siendo uno de los medios más efectivos para crear visibilidad de marca y comunicar mensajes a un público amplio. Sin embargo, con la cantidad de estímulos visuales que bombardean a los consumidores diariamente, diseñar una valla publicitaria que realmente capte la atención y genere resultados requiere conocimiento y estrategia. En este artículo, compartimos principios fundamentales para crear vallas publicitarias efectivas.",
      "Simplicidad y Claridad",
      "El error más común en el diseño de vallas publicitarias es la sobrecarga de información. Recuerde que los espectadores generalmente verán su valla durante unos pocos segundos, a menudo mientras conducen o se desplazan. Un mensaje claro y conciso, acompañado de elementos visuales impactantes, tendrá mucho más efecto que un diseño sobrecargado. Limítese a un solo mensaje principal y asegúrese de que sea inmediatamente comprensible.",
      "Tipografía Legible",
      "La legibilidad es crucial en las vallas publicitarias. Utilice fuentes claras y de buen tamaño que puedan leerse fácilmente a distancia. Como regla general, evite las fuentes decorativas o excesivamente estilizadas para el mensaje principal. El contraste entre el texto y el fondo también es fundamental para garantizar que su mensaje sea legible en diversas condiciones de iluminación.",
      "Contraste y Color",
      "Los colores vibrantes y los contrastes fuertes ayudan a que su valla destaque en el entorno urbano. Considere no solo el atractivo estético, sino también la psicología del color y cómo se alinea con su mensaje y marca. Recuerde que ciertos colores pueden ser más visibles a distancia o en diferentes condiciones climáticas. El uso estratégico del color puede dirigir la atención a los elementos más importantes de su diseño.",
      "Imágenes de Alto Impacto",
      "Una imagen poderosa puede comunicar instantáneamente una idea o emoción. Opte por imágenes de alta calidad, sorprendentes o emocionalmente resonantes que complementen su mensaje. Las imágenes deben ser lo suficientemente simples para ser comprendidas rápidamente, pero lo suficientemente intrigantes para captar la atención. Evite imágenes genéricas o predecibles que puedan pasar desapercibidas.",
      "Llamada a la Acción Clara",
      "Incluso la valla publicitaria más atractiva será ineficaz si los espectadores no saben qué hacer con la información. Incluya una llamada a la acción clara y concisa que indique el siguiente paso deseado. Ya sea visitar un sitio web, llamar a un número de teléfono o visitar una ubicación física, asegúrese de que esta información sea fácil de recordar.",
      "Ubicación y Contexto",
      "El diseño de su valla debe considerar su ubicación específica. Factores como la dirección del tráfico, la velocidad promedio de los vehículos, la distancia de visualización y el entorno circundante pueden influir significativamente en la efectividad de su diseño. Una valla junto a una carretera de alta velocidad requerirá un enfoque diferente que una en una zona peatonal.",
      "Conclusión",
      "Diseñar vallas publicitarias efectivas es un equilibrio entre creatividad y estrategia. Al seguir estos principios fundamentales, puede crear vallas que no solo capten la atención, sino que también comuniquen eficazmente su mensaje y generen los resultados deseados. En SolPromoción, combinamos estos principios con un profundo conocimiento del mercado español para crear vallas publicitarias que realmente destacan y generan retorno de inversión para nuestros clientes.",
    ],
    image: "/3eaeb2541075ba6129736611ccb6624d.jpg",
    date: "2 de marzo de 2025",
    category: "Diseño Publicitario",
    author: {
      name: "Directora Creativa",
      role: "Directora Creativa",
      bio: "Diseñadora gráfica premiada con especialización en publicidad exterior y más de una década de experiencia en campañas de alto impacto.",
    },
    tags: ["Vallas Publicitarias", "Diseño Gráfico", "Publicidad Exterior", "Marketing Visual"],
  },
  {
    id: 3,
    title: "La Psicología del Color en el Marketing: Cómo Influir en las Percepciones y Decisiones",
    slug: "psicologia-color-marketing",
    excerpt:
      "Explore cómo los colores afectan las emociones y comportamientos de los consumidores y cómo utilizarlos estratégicamente en sus campañas de marketing.",
    content: [
      "El color es uno de los elementos más poderosos en el marketing visual, capaz de evocar emociones, influir en percepciones y hasta modificar comportamientos de compra sin que el consumidor sea plenamente consciente de ello. Comprender la psicología del color puede darle una ventaja significativa al diseñar materiales publicitarios efectivos. En este artículo, exploramos cómo diferentes colores impactan en la psicología del consumidor y cómo utilizarlos estratégicamente.",
      "El Poder Emocional de los Colores",
      "Cada color tiene el potencial de evocar diferentes respuestas emocionales y asociaciones. El rojo, por ejemplo, puede estimular la excitación, urgencia y pasión, haciéndolo efectivo para ofertas por tiempo limitado o llamadas a la acción. El azul transmite confianza, seguridad y profesionalidad, razón por la cual es tan común en el sector bancario y tecnológico. El verde se asocia con naturaleza, salud y crecimiento, mientras que el amarillo evoca optimismo y claridad. Estas asociaciones, aunque pueden variar según factores culturales, proporcionan un punto de partida para seleccionar colores que refuercen su mensaje.",
      "Colores y Comportamiento del Consumidor",
      "Estudios han demostrado que los colores pueden influir directamente en el comportamiento de compra. Por ejemplo, el uso estratégico del rojo en etiquetas de precios puede aumentar la percepción de urgencia y estimular decisiones de compra más rápidas. Los tonos azules pueden incrementar la sensación de confianza en una marca, especialmente importante en sectores donde la seguridad es una preocupación primordial. Comprender estas dinámicas permite diseñar materiales que no solo atraen visualmente, sino que también guían sutilmente hacia las acciones deseadas.",
      "Consideraciones Culturales y Contextuales",
      "Es fundamental recordar que las asociaciones de color pueden variar significativamente entre diferentes culturas y contextos. Por ejemplo, mientras que el blanco se asocia con pureza y bodas en muchas culturas occidentales, en algunas culturas orientales tradicionalmente simboliza el luto. Igualmente, el significado de los colores puede cambiar según el sector industrial, el público objetivo o incluso las tendencias actuales. Una estrategia de color efectiva debe considerar cuidadosamente estos factores contextuales.",
      "Combinaciones de Colores y Armonía",
      "Más allá de los colores individuales, las combinaciones y esquemas de color pueden crear diferentes efectos y transmitir mensajes complejos. Los esquemas complementarios (colores opuestos en la rueda cromática) crean un contraste vibrante que puede hacer que ciertos elementos destaquen, mientras que los esquemas análogos (colores adyacentes) crean una sensación de armonía y cohesión. La selección de la combinación adecuada dependerá de sus objetivos específicos y del mensaje que desee transmitir.",
      "Aplicación Práctica en Marketing Offline",
      "En materiales impresos como folletos, vallas publicitarias o publicidad en transporte, la selección de color debe considerar factores adicionales como la visibilidad a distancia, las condiciones de iluminación y el entorno circundante. Los colores brillantes pueden destacar en entornos urbanos congestionados, mientras que los tonos más sutiles pueden ser apropiados para comunicar sofisticación o exclusividad. La consistencia en el uso del color a través de diferentes materiales también refuerza el reconocimiento de marca y la coherencia del mensaje.",
      "Conclusión",
      "La psicología del color es una herramienta poderosa en el arsenal del marketing que, cuando se utiliza estratégicamente, puede aumentar significativamente la efectividad de sus campañas. Al comprender cómo los diferentes colores influyen en las emociones, percepciones y comportamientos, puede diseñar materiales publicitarios que no solo atraen visualmente, sino que también comunican sutilmente los valores de su marca y motivan las acciones deseadas. En SolPromoción, integramos este conocimiento en cada proyecto para crear soluciones de marketing offline que resuenen profundamente con su público objetivo.",
    ],
    image: "/47a3d537932f2aa5bb898021ac8e50d0.jpg",
    date: "20 de enero de 2025",
    category: "Diseño Publicitario",
    author: {
      name: "Especialista en Diseño Visual",
      role: "Especialista en Diseño Visual",
      bio: "Profesional que combina su formación en psicología y diseño gráfico para crear experiencias visuales que conectan emocionalmente con las audiencias.",
    },
    tags: ["Psicología del Color", "Diseño Gráfico", "Branding", "Marketing Visual"],
  },
  {
    id: 4,
    title: "Publicidad en Transporte: Cómo Convertir el Tiempo de Viaje en Oportunidades de Marketing",
    slug: "publicidad-transporte-oportunidades-marketing",
    excerpt:
      "Descubra cómo la publicidad en medios de transporte puede ofrecer una forma única de conectar con audiencias cautivas durante sus desplazamientos diarios.",
    content: [
      "En un mundo donde la atención del consumidor es cada vez más fragmentada, la publicidad en transporte ofrece una oportunidad única: acceso a una audiencia cautiva durante períodos prolongados. Ya sea en autobuses, metros, trenes o taxis, los pasajeros representan un público potencialmente receptivo durante sus desplazamientos diarios. En este artículo, exploramos cómo aprovechar eficazmente este canal para crear campañas de marketing impactantes.",
      "Audiencia Cautiva: La Ventaja Única",
      "A diferencia de muchos otros formatos publicitarios que compiten constantemente por la atención, la publicidad en transporte se beneficia de un público que, en muchos casos, busca activamente distracciones durante su viaje. Un pasajero promedio de metro puede pasar entre 20 y 40 minutos diarios en este medio, tiempo durante el cual su anuncio tiene múltiples oportunidades de ser visto y procesado. Esta exposición repetida y prolongada puede aumentar significativamente el recuerdo de marca y la efectividad del mensaje.",
      "Segmentación Geográfica y Demográfica",
      "La publicidad en transporte permite una segmentación geográfica precisa basada en rutas específicas. Por ejemplo, las líneas de autobús que pasan por zonas universitarias pueden ser ideales para productos dirigidos a estudiantes, mientras que las rutas que conectan distritos financieros pueden ser más efectivas para servicios profesionales. Además, diferentes medios de transporte pueden atraer distintos perfiles demográficos, permitiendo una mayor precisión en la segmentación de sus campañas.",
      "Formatos Creativos y Adaptados",
      "La publicidad en transporte ofrece una variedad de formatos que pueden adaptarse a diferentes objetivos y presupuestos. Desde la rotulación exterior completa de vehículos que genera alta visibilidad en las calles, hasta los anuncios interiores que permiten mensajes más detallados para pasajeros, pasando por instalaciones especiales en estaciones que pueden crear experiencias inmersivas. Cada formato tiene sus propias ventajas y puede ser seleccionado según sus objetivos específicos de comunicación.",
      "Integración Digital: Puente Entre Offline y Online",
      "La moderna publicidad en transporte no se limita a mensajes estáticos. La incorporación de elementos interactivos como códigos QR, tecnología NFC o realidad aumentada puede transformar un anuncio tradicional en una puerta de entrada a experiencias digitales. Estos elementos no solo aumentan el engagement, sino que también permiten medir la efectividad de la campaña y recopilar datos valiosos sobre la interacción del público con su mensaje.",
      "Consideraciones Prácticas y Mejores Prácticas",
      "Al diseñar publicidad para medios de transporte, es esencial considerar el contexto específico de visualización. Los mensajes deben ser claros y fácilmente comprensibles en un vistazo, especialmente para formatos exteriores. Para anuncios interiores, donde el tiempo de exposición es mayor, se puede incluir más información, pero siempre manteniendo un equilibrio que favorezca la claridad. El diseño debe considerar también las condiciones variables de iluminación y las distancias de visualización.",
      "Casos de Éxito y Resultados Medibles",
      "Numerosas marcas han obtenido resultados excepcionales con campañas en medios de transporte. Por ejemplo, una campaña reciente para una aplicación de aprendizaje de idiomas en los autobuses de Madrid generó un aumento del 45% en las descargas durante el período de la campaña. Otro caso destacable fue una promoción inmobiliaria que utilizó estaciones de metro estratégicas, resultando en un incremento del 60% en visitas a pisos piloto. Estos ejemplos demuestran el potencial tangible de este canal cuando se ejecuta con estrategia y creatividad.",
      "Conclusión",
      "La publicidad en transporte representa una oportunidad valiosa para conectar con audiencias durante momentos de receptividad natural. Al combinar la ventaja de un público cautivo con estrategias creativas y segmentación inteligente, este canal puede ofrecer resultados excepcionales en términos de reconocimiento de marca y respuesta directa. En SolPromoción, ayudamos a las empresas a diseñar e implementar campañas de publicidad en transporte que maximizan el impacto y el retorno de inversión en el competitivo mercado español.",
    ],
    image: "/290b8897db81a9aa1872fa523343611c.jpg",
    date: "8 de febrero de 2025",
    category: "Publicidad en Transporte",
    author: {
      name: "Especialista en Publicidad Exterior",
      role: "Especialista en Publicidad Exterior",
      bio: "Profesional que ha gestionado campañas de publicidad en transporte para más de 50 marcas nacionales e internacionales durante los últimos 8 años.",
    },
    tags: ["Publicidad en Transporte", "Marketing Exterior", "Publicidad Urbana", "OOH"],
  },
  {
    id: 5,
    title: "Folletos y Catálogos en la Era Digital: Por Qué Siguen Siendo Herramientas de Marketing Esenciales",
    slug: "folletos-catalogos-era-digital",
    excerpt:
      "A pesar del auge digital, los materiales impresos siguen ofreciendo ventajas únicas para conectar con clientes y comunicar valor de marca.",
    content: [
      "En un mundo dominado por pantallas y contenido digital, podría parecer que los materiales impresos como folletos y catálogos han perdido relevancia. Sin embargo, la realidad es que estos formatos tradicionales continúan ofreciendo ventajas únicas que los convierten en componentes valiosos de una estrategia de marketing integral. En este artículo, exploramos por qué los folletos y catálogos siguen siendo herramientas esenciales en la era digital y cómo maximizar su efectividad.",
      "La Experiencia Táctil: Una Conexión Más Profunda",
      "Los estudios neurocientíficos han demostrado que los materiales físicos involucran más nuestros sentidos y crean una conexión emocional más profunda que los contenidos digitales. El tacto del papel, el sonido al pasar las páginas y hasta el olor de la tinta contribuyen a una experiencia multisensorial que puede mejorar significativamente el recuerdo de marca y la retención de información. Esta dimensión táctil ofrece una forma de destacar en un mundo cada vez más virtual y crear una impresión duradera en los clientes potenciales.",
      "Credibilidad y Valor Percibido",
      "Un catálogo o folleto bien diseñado y producido con materiales de calidad transmite profesionalismo y compromiso con la excelencia. Para muchos consumidores, especialmente en sectores como el lujo, la moda o los servicios profesionales, los materiales impresos siguen siendo un indicador de credibilidad y estatus. La inversión en materiales físicos de alta calidad puede elevar significativamente la percepción de valor de su marca y sus productos o servicios.",
      "Atención Focalizada Sin Distracciones",
      "A diferencia de los medios digitales, donde las notificaciones, anuncios y otros contenidos compiten constantemente por la atención, un folleto o catálogo ofrece una experiencia de lectura más inmersiva y libre de distracciones. Esto permite una comunicación más efectiva de mensajes complejos o detallados, como especificaciones de productos, historias de marca o propuestas de valor elaboradas que podrían perderse en el entorno digital saturado.",
      "Alcance a Audiencias Diversas",
      "No todos los segmentos demográficos tienen la misma presencia o comodidad en el entorno digital. Los materiales impresos permiten llegar a audiencias que pueden preferir formatos físicos, como ciertos segmentos de mayor edad o en contextos donde el acceso digital es limitado. Además, en entornos como ferias comerciales, presentaciones de ventas o puntos de venta físicos, los materiales impresos ofrecen una herramienta tangible que facilita la interacción y la comunicación.",
      "Integración con Estrategias Digitales",
      "Los folletos y catálogos modernos no existen aislados del mundo digital, sino que pueden servir como puentes hacia experiencias online más ricas. La incorporación de elementos como códigos QR, realidad aumentada o URLs personalizadas permite combinar las ventajas de lo físico y lo digital. Un catálogo puede presentar productos de forma atractiva y luego dirigir al lector a un sitio web para más información, videos o compra directa, creando un recorrido del cliente fluido y multicanal.",
      "Diseño Efectivo para el Mundo Actual",
      "Para maximizar la efectividad de los materiales impresos hoy, es esencial adaptar su diseño y contenido al comportamiento actual del consumidor. Esto implica mensajes claros y concisos, jerarquías visuales bien definidas, y un equilibrio cuidadoso entre texto e imágenes. Los folletos y catálogos más efectivos no intentan incluir toda la información posible, sino que presentan los puntos clave de forma atractiva y luego dirigen hacia recursos digitales para profundizar.",
      "Conclusión",
      "Lejos de ser reliquias del pasado, los folletos y catálogos siguen siendo herramientas de marketing poderosas que ofrecen ventajas únicas en términos de conexión emocional, credibilidad y comunicación focalizada. Cuando se diseñan con inteligencia y se integran estratégicamente con canales digitales, estos materiales impresos pueden potenciar significativamente la efectividad de sus esfuerzos de marketing. En SolPromoción, combinamos décadas de experiencia en diseño impreso con un profundo conocimiento de las dinámicas actuales del mercado para crear materiales que realmente destacan y generan resultados.",
    ],
    image: "/36f7f392d11b01ffffbe859e5f3b97f0.jpg",
    date: "12 de marzo de 2025",
    category: "Marketing Impreso",
    author: {
      name: "Directora de Proyectos Impresos",
      role: "Directora de Proyectos Impresos",
      bio: "Profesional que ha supervisado la producción de más de 500 proyectos de materiales impresos para clientes de diversos sectores en los últimos 12 años.",
    },
    tags: ["Folletos", "Catálogos", "Marketing Impreso", "Diseño Gráfico"],
  },
  {
    id: 6,
    title: "Tendencias en Publicidad Exterior para 2025: Innovación y Sostenibilidad",
    slug: "tendencias-publicidad-exterior-2025",
    excerpt:
      "Descubra las últimas innovaciones y tendencias en publicidad exterior que están transformando el panorama del marketing offline en España y globalmente.",
    content: [
      "La publicidad exterior está experimentando una transformación significativa impulsada por avances tecnológicos, preocupaciones ambientales y cambios en el comportamiento del consumidor. A medida que avanzamos en 2025, nuevas tendencias están redefiniendo lo que es posible en este espacio tradicional pero en constante evolución. En este artículo, exploramos las tendencias más importantes que están dando forma al futuro de la publicidad exterior.",
      "Digitalización e Interactividad",
      "Las pantallas digitales están revolucionando la publicidad exterior, permitiendo contenido dinámico, programático y adaptativo. A diferencia de las vallas tradicionales estáticas, las pantallas digitales pueden mostrar diferentes anuncios según la hora del día, las condiciones climáticas o incluso el perfil demográfico predominante en diferentes momentos. Además, la incorporación de tecnologías interactivas como reconocimiento gestual, pantallas táctiles o integración con dispositivos móviles está creando experiencias publicitarias más inmersivas y memorables.",
      "Sostenibilidad como Prioridad",
      "La conciencia ambiental está impulsando una transformación significativa en los materiales y prácticas de la publicidad exterior. Las nuevas tecnologías de impresión utilizan tintas ecológicas y materiales biodegradables o reciclables, reduciendo significativamente el impacto ambiental. Además, estamos viendo un aumento en la publicidad 'verde' que no solo es más sostenible en su producción, sino que también contribuye positivamente al entorno urbano, como vallas que purifican el aire o generan energía solar. Esta tendencia responde tanto a las regulaciones más estrictas como a la creciente preferencia de los consumidores por marcas ambientalmente responsables.",
      "Hiperlocalización y Contextualización",
      "La publicidad exterior está volviéndose cada vez más precisa en su segmentación geográfica y contextual. Gracias a datos de ubicación, patrones de movimiento y análisis demográficos, las campañas pueden adaptarse a microzonas específicas dentro de las ciudades. Esto permite mensajes altamente relevantes que responden al contexto inmediato del espectador, como referencias a eventos locales, condiciones climáticas o incluso el tráfico en tiempo real. Esta contextualización aumenta significativamente la relevancia y efectividad de los mensajes publicitarios.",
      "Realidad Aumentada y Experiencias Inmersivas",
      "La integración de realidad aumentada (RA) está difuminando las líneas entre publicidad física y digital. Utilizando sus smartphones, los transeúntes pueden interactuar con vallas publicitarias o carteles para desbloquear contenido adicional, animaciones 3D, juegos o experiencias virtuales. Estas campañas no solo generan mayor engagement, sino que también proporcionan datos valiosos sobre la interacción del usuario y extienden el impacto de la publicidad mucho más allá de la exposición inicial.",
      "Medición y Análisis Avanzados",
      "Una de las limitaciones históricas de la publicidad exterior ha sido la dificultad para medir con precisión su impacto. Sin embargo, nuevas tecnologías están revolucionando esta área. Sensores de reconocimiento facial anónimo pueden determinar cuántas personas miran un anuncio y durante cuánto tiempo, mientras que el seguimiento de dispositivos móviles puede medir el tráfico peatonal y vehicular. Estas métricas permiten un análisis ROI mucho más preciso y la optimización continua de las campañas basada en datos reales.",
      "Integración Multicanal Perfecta",
      "La publicidad exterior ya no existe en aislamiento, sino como parte de ecosistemas de marketing integrados. Las campañas más efectivas crean puentes fluidos entre experiencias físicas y digitales, utilizando la publicidad exterior como punto de entrada a recorridos del cliente más amplios. Esto puede incluir códigos QR que dirigen a micrositios, hashtags específicos para campañas en redes sociales, o experiencias de compra móvil directamente desde anuncios físicos. Esta integración multicanal maximiza el impacto y proporciona múltiples puntos de conversión.",
      "Conclusión",
      "El futuro de la publicidad exterior es emocionante y dinámico, combinando la potencia tradicional de la presencia física con las posibilidades que ofrecen las nuevas tecnologías y enfoques sostenibles. Las marcas que adopten estas tendencias emergentes estarán bien posicionadas para crear campañas que no solo capten la atención, sino que también generen experiencias memorables y resultados medibles. En SolPromoción, estamos a la vanguardia de estas innovaciones, ayudando a nuestros clientes a aprovechar todo el potencial de la publicidad exterior en este nuevo panorama.",
    ],
    image: "/5da36575825b722b99001bd82c5d6ea2.jpg",
    date: "5 de abril de 2025",
    category: "Tendencias",
    author: {
      name: "Director de Innovación",
      role: "Director de Innovación",
      bio: "Profesional que se especializa en la integración de nuevas tecnologías en campañas de publicidad tradicional, con particular énfasis en soluciones sostenibles e interactivas.",
    },
    tags: ["Publicidad Exterior", "Tendencias", "Innovación", "Sostenibilidad"],
  },
]

export function getPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
