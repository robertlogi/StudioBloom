import type { Metadata } from "next"
import { getPageMetadata, ROUTES, SITE_CONFIG } from "@/lib/seo"
import { GalleryClient } from "@/components/gallery-client"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadata(ROUTES.gallery)
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: '/IMG_3181.jpg',
          width: 800,
          height: 1000,
          alt: 'Falleg silkiblómaskreyting frá Studio Bloom í Reykjavík',
        },
      ],
    },
  }
}

export default function GalleryPage() {
  return <GalleryClient />
}

