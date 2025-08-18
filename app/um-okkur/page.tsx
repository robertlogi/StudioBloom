import type { Metadata } from "next"
import { getPageMetadata, ROUTES, SITE_CONFIG } from "@/lib/seo"
import { AboutClient } from "@/components/about-client"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadata(ROUTES.about)
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1170%20kopie.JPG-I1kXIsBEJ6NS3gRPVzqz7tg78Y0XvA.jpeg',
          width: 800,
          height: 600,
          alt: 'Studio Bloom - Saga og gildi fyrirtækisins í Reykjavík',
        },
      ],
    },
  }
}

export default function AboutPage() {
  return <AboutClient />
}

