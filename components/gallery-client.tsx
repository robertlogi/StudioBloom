"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { SITE_CONFIG } from "@/lib/seo"

export function GalleryClient() {
  const galleryRef = useRef<HTMLDivElement>(null)

  const galleryInView = useInView(galleryRef, { once: true })

  return (
    <>
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Myndasafn silkiblóma</h1>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 max-w-6xl opacity-100 translate-y-0 transition-all duration-700">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryItem
              src="/IMG_3181.jpg"
              delay={0}
            />
            <GalleryItem
              src="/IMG_3060.jpg"
              delay={100}
            />
            <GalleryItem
              src="/IMG_3166.jpg"
              delay={200}
            />
            <GalleryItem
              src="/IMG_3050.jpg"
              delay={300}
            />
            <GalleryItem
              src="/IMG_3155.jpg"
              delay={400}
            />
            <GalleryItem
              src="/IMG_3059.jpg"
              delay={500}
            />
            <GalleryItem
              src="/IMG_3177.jpg"
              delay={600}
            />
            <GalleryItem
              src="/IMG_3200.jpg"
              delay={700}
            />
            <GalleryItem
              src="/IMG_3195.jpg"
              delay={800}
            />
            <GalleryItem
              src="/IMG_3239.jpg"
              delay={900}
            />
            <GalleryItem
              src="/IMG_3253.jpg"
              delay={1000}
            />
            <GalleryItem
              src="/IMG_3256.jpg"
              delay={1100}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2005_0186.JPG-uXphAJnqGCCtBcm8IRD7yDmd7uBOtF.jpeg"
              delay={1200}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2003_SHOT%2005_0434.JPG-VmV3GhtE1G9mQcmJLCFDVG6pwuK38Q.jpeg"
              delay={1300}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2004_0159.JPG-DMYV8IGw3cKcXM6a8ESnPNxA55VdX8.jpeg"
              delay={1400}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2013_2581%20kopie.JPG-IIPeParTDJC1lhpwIoSa8GwZfrpic1.jpeg"
              delay={1500}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2013_2614%20kopie.JPG-kdyi9GUZjDiaeDuaPPbsQ8aa7CCkBi.jpeg"
              delay={1600}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1413%20kopie.JPG-CC81Ej4oYxZMjFsdIQIrlBpfopsT74.jpeg"
              delay={1700}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2005_1539%201.JPG-hqVqtw6xWFCsj5JRXg2BAGAM4WCIf3.jpeg"
              delay={1800}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2014_2710.JPG-LW1ZLPqrPqv3WuZWZJpphvvLbYTI3q.jpeg"
              delay={1900}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2001-COVER_2.JPG-LsZT2oIijggWHIB6Xu9SJm9ax7oQ5w.jpeg"
              delay={2000}
            />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Forsíða",
                "item": SITE_CONFIG.url
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Myndasafn silkiblóma",
                "item": `${SITE_CONFIG.url}/myndasafn`
              }
            ]
          })
        }}
      />
    </>
  )
}

function GalleryItem({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div
      className="group relative aspect-[4/5] w-full max-w-xs min-h-[320px] overflow-hidden rounded-lg animate-fade-in mx-auto"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt="Falleg silkiblómaskreyting frá Studio Bloom í Reykjavík"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  )
} 