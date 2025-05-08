import type React from "react"
import type { Metadata } from "next"
import { Figtree   } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Figtree  ({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SolPromoción - Agencia de Marketing Offline en España",
  description:
    "Agencia especializada en la producción de vallas publicitarias, folletos, publicidad en transporte y metro en España.",
  keywords: [
    "marketing offline",
    "vallas publicitarias",
    "folletos",
    "publicidad en transporte",
    "publicidad en metro",
    "España",
    "Madrid",
  ],
  authors: [{ name: "SolPromoción" }],
  creator: "SolPromoción",
  publisher: "SolPromoción",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
