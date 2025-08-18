import type { Metadata } from "next"
import { getPageMetadata, ROUTES, SITE_CONFIG } from "@/lib/seo"
import { ContactClient } from "@/components/contact-client"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getPageMetadata(ROUTES.contact)
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2014_2710.JPG-LW1ZLPqrPqv3WuZWZJpphvvLbYTI3q.jpeg',
          width: 800,
          height: 600,
          alt: 'Hafa samband við Studio Bloom í Reykjavík',
        },
      ],
    },
  }
}

export default function ContactPage() {
  return <ContactClient />
}

