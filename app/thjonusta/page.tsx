import type { Metadata } from "next"
import { getPageMetadata, ROUTES, SITE_CONFIG } from "@/lib/seo"
import { ServicesClient } from "@/components/services-client"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadata(ROUTES.services)
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2005_0186.JPG-uXphAJnqGCCtBcm8IRD7yDmd7uBOtF.jpeg',
          width: 800,
          height: 600,
          alt: 'Lítil silkiblómaskreyting fyrir fyrirtæki í Reykjavík',
        },
      ],
    },
  }
}

export default function ServicesPage() {
  return <ServicesClient />
}

