"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
            SolPromoción
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition duration-300">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-primary transition duration-300">
              Servicios
            </Link>
            <Link href="/trabajos" className="text-gray-700 hover:text-primary transition duration-300">
              Trabajos
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 hover:text-primary transition duration-300">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-primary transition duration-300">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-primary transition duration-300">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-primary transition duration-300">
              Servicios
            </Link>
            <Link href="/trabajos" className="text-gray-700 hover:text-primary transition duration-300">
              Trabajos
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 hover:text-primary transition duration-300">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-primary transition duration-300">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
