import type { Metadata } from "next"
import { getPageMetadata, ROUTES, SITE_CONFIG } from "@/lib/seo"
import { HomeClient } from "@/components/home-client"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadata(ROUTES.home)
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: '/hero-section-flowers.jpeg',
          width: 1920,
          height: 1080,
          alt: 'Falleg silkiblóm frá Studio Bloom í Reykjavík',
        },
      ],
    },
  }
}

export default function Home() {
  return <HomeClient />
}

