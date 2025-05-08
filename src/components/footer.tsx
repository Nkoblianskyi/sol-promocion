import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
                SolPromoción
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Agencia especializada en marketing offline y publicidad exterior en España.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/vallas-publicitarias" className="text-gray-400 hover:text-white transition">
                  Vallas Publicitarias
                </Link>
              </li>
              <li>
                <Link href="/servicios/publicidad-transporte" className="text-gray-400 hover:text-white transition">
                  Publicidad en Transporte
                </Link>
              </li>
              <li>
                <Link href="/servicios/diseno-grafico" className="text-gray-400 hover:text-white transition">
                  Producción Gráfica
                </Link>
              </li>
              <li>
                <Link href="/servicios/publicidad-metro" className="text-gray-400 hover:text-white transition">
                  Publicidad en Metro
                </Link>
              </li>
              <li>
                <Link href="/servicios/folletos" className="text-gray-400 hover:text-white transition">
                Folletos y Catálogos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-gray-400 hover:text-white transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-400 hover:text-white transition">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">
                Gran Vía, 45
                <br />
                28013 Madrid, España
              </p>
              <p className="mb-2">
                <a href="tel:+34 932 654 321" className="text-gray-400 hover:text-white transition">
                  +34 932 654 321
                </a>
              </p>
              <p>
                <a href="mailto:info@solpromocion.com" className="text-gray-400 hover:text-white transition">
                  info@solpromocion.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SolPromoción. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
