import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SITE_CONFIG } from "@/lib/seo"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: '%s | Studio Bloom',
    default: 'Studio Bloom | Lúxus silkiblóm í áskrift',
  },
  description: 'Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili. Sérhönnuð blómasamsetningar sem endast árum saman og krefjast engrar umhirðu.',
  keywords: ['silkiblóm', 'blómaskreyting', 'áskrift', 'fyrirtæki', 'heimili', 'reykjavík', 'ísland'],
  authors: [{ name: 'Studio Bloom' }],
  creator: 'Studio Bloom',
  publisher: 'Studio Bloom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'is_IS',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Studio Bloom | Lúxus silkiblóm í áskrift',
    description: 'Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili. Sérhönnuð blómasamsetningar sem endast árum saman.',
    images: [
      {
        url: '/studio-bloom-logo.png',
        width: 1200,
        height: 630,
        alt: 'Studio Bloom - Lúxus silkiblóm í áskrift',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Bloom | Lúxus silkiblóm í áskrift',
    description: 'Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili.',
    images: ['/studio-bloom-logo.png'],
  },
  robots: {
    index: process.env.NODE_ENV === 'production',
    follow: process.env.NODE_ENV === 'production',
    googleBot: {
      index: process.env.NODE_ENV === 'production',
      follow: process.env.NODE_ENV === 'production',
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: '/studio-bloom-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/studio-bloom-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/studio-bloom-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="is" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Studio Bloom",
              "url": SITE_CONFIG.url,
              "logo": `${SITE_CONFIG.url}/studio-bloom-logo.png`,
              "description": "Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+354-783-0052",
                "contactType": "customer service",
                "email": "asta@studiobloom.is"
              },
              "sameAs": [
                "https://www.instagram.com/studio.bloom.reykjavik",
                "https://www.facebook.com/profile.php?id=61574531437395"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Studio Bloom",
              "url": SITE_CONFIG.url,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_CONFIG.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans bg-[#faf9f7]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}