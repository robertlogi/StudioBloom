import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Studio Bloom | Lúxus silkiblóm í áskrift",
  description: "Hágæða silkiblóm í áskrift",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="is" className="scroll-smooth">
      <head>
        <link rel="icon" href="/studio-bloom-logo.png" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-[#faf9f7]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'