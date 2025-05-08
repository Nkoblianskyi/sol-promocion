"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado las cookies
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>
              Utilizamos cookies para mejorar tu experiencia en nuestra web. Al continuar navegando aceptas nuestra{" "}
              <Link href="/politica-cookies" className="underline hover:text-primary">
                política de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-white hover:bg-white hover:text-gray-800 transition"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-primary border border-primary text-white hover:bg-primary-dark transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
