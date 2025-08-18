"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { SITE_CONFIG } from "@/lib/seo"

export function HomeClient() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const welcomeInView = useInView(welcomeRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: scrollY === 0 ? "translateY(0)" : `translateY(${Math.max(0, scrollY * 0.1)}px)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <Image
            src="/hero-section-flowers.jpeg"
            alt="Falleg silkiblóm frá Studio Bloom í Reykjavík - Hágæða silkiblóm í áskrift"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-cormorant font-light mb-6 animate-fade-in">
            <span className="block">Studio</span>
            <span className="block font-medium">Bloom</span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 font-normal animate-fade-in animation-delay-200">
            Hágæða silkiblóm í áskrift í Reykjavík
          </p>
          <Link
            href="/thjonusta"
            className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300 text-lg animate-fade-in animation-delay-400"
          >
            Skoða þjónustur silkiblóma
          </Link>
        </div>
      </section>

      <section ref={welcomeRef} className="section-spacing bg-white">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${welcomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Velkomin í Studio Bloom í Reykjavík</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg leading-loose whitespace-pre-line">
              Silkiblóm í áskrift færa líf og fegurð inn á þinn vinnustað.
              {"\n"}
              Áhyggjulaus og viðhaldsfrí leið til þess að hámarka upplifun viðskipta þinna.
              {"\n"}
              Hver skreyting er sérhönnuð fyrir rýmið þitt og er endurnýjuð á þriggja mánaða fresti.
            </p>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Myndasafn silkiblóma</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg">
              Skoðaðu nokkur dæmi um fallegar blómasamsetningar sem við höfum hannað fyrir fyrirtæki í Reykjavík.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 inline-grid">
              <GalleryPreviewItem
                src="/IMG_3195.jpg"
                delay={0}
              />
              <GalleryPreviewItem
                src="/IMG_3255.jpg"
                delay={200}
              />
              <GalleryPreviewItem
                src="/IMG_3247.jpg"
                delay={400}
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/myndasafn"
              className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300"
            >
              Sjá fleiri silkiblómaskreytingar
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="section-spacing relative bg-white"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2014_2710.JPG-LW1ZLPqrPqv3WuZWZJpphvvLbYTI3q.jpeg"
            alt="Tilbúin að byrja? bakgrunnsmynd fyrir silkiblóm í Reykjavík"
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 relative z-10 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-[#f3f0eb] p-10 md:p-16 lg:p-10 rounded-lg text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Tilbúin að byrja?</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg mb-8">
              Komdu í hóp ánægðra viðskiptavina Studio Bloom í Reykjavík og njóttu þess að hafa falleg blóm á þínum vinnustað allt árið.
            </p>
            <Link
              href="/hafa-samband"
              className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300 text-lg"
            >
              Hafðu samband við okkur
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Silkiblóm í áskrift",
            "description": "Hágæða silkiblóm í áskrift fyrir fyrirtæki og heimili í Reykjavík. Sérhönnuð blómasamsetningar sem endast árum saman.",
            "provider": {
              "@type": "Organization",
              "name": "Studio Bloom",
              "url": SITE_CONFIG.url
            },
            "areaServed": {
              "@type": "Country",
              "name": "Iceland"
            },
            "serviceType": "Flower Subscription Service",
            "offers": [
              {
                "@type": "Offer",
                "name": "Lítil skreyting",
                "price": "9900",
                "priceCurrency": "ISK",
                "availability": "https://schema.org/InStock",
                "url": `${SITE_CONFIG.url}/thjonusta`,
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "9900",
                  "priceCurrency": "ISK",
                  "billingIncrement": "P1M"
                }
              },
              {
                "@type": "Offer",
                "name": "Miðlungs skreyting",
                "price": "14900",
                "priceCurrency": "ISK",
                "availability": "https://schema.org/InStock",
                "url": `${SITE_CONFIG.url}/thjonusta`,
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "14900",
                  "priceCurrency": "ISK",
                  "billingIncrement": "P1M"
                }
              },
              {
                "@type": "Offer",
                "name": "Stór skreyting",
                "price": "19900",
                "priceCurrency": "ISK",
                "availability": "https://schema.org/InStock",
                "url": `${SITE_CONFIG.url}/thjonusta`,
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "19900",
                  "priceCurrency": "ISK",
                  "billingIncrement": "P1M"
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

function GalleryPreviewItem({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div
      className="group relative aspect-[4/5] max-w-xs w-full min-h-[320px] overflow-hidden rounded-lg animate-fade-in mx-auto"
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