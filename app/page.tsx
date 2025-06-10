"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const welcomeInView = useInView(welcomeRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })

  // Parallax effect with strict clamping
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section with Parallax */}
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
            alt="Falleg blóm frá Studio Bloom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-cormorant font-light mb-6 animate-fade-in">
            <span className="block">Studio</span>
            <span className="block font-medium">Bloom</span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 font-normal animate-fade-in animation-delay-200">
            Hágæða silkiblóm í áskrift
          </p>
          <Link
            href="/thjonusta"
            className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300 text-lg animate-fade-in animation-delay-400"
          >
            Skoða þjónustur
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section ref={welcomeRef} className="section-spacing bg-white">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${welcomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Velkomin í Studio Bloom</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg leading-loose whitespace-pre-line">
              Silkiblóm í áskrift færa líf og fegurð inn á þinn vinnustað.
              {"\n"}
              Áhyggjulaus og viðhaldsfrí leið til þess að hámarka upplifun viðskipta þinna.
              {"\n"}
              Hver skreyting er sérhönnuð fyrir rýmið þitt og er endurnýjuð á þriggja mánaða fresti.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              title="Hágæða silkiblóm"
              description="Náttúruleg og endingargóð silkiblóm sem líta út eins og fersk blóm."
              delay={0}
            />
            <FeatureCard
              title="Sérsniðin áskrift"
              description="Veldu tíðni og stíl sem hentar þínum þörfum og smekk."
              delay={200}
            />
            <FeatureCard
              title="Afhending heim"
              description="Við sjáum um að koma blómunum til þín, hvert sem er á landinu."
              delay={400}
            />
          </div> */}
        </div>
      </section>

      {/* Gallery Preview */}
      <section ref={galleryRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Myndasafn</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg">
              Skoðaðu nokkur dæmi um fallegar blómasamsetningar sem við höfum hannað.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 inline-grid">
              <GalleryPreviewItem
                src="IMG_3195.jpg"
                delay={0}
              />
              <GalleryPreviewItem
                src="IMG_3255.jpg"
                delay={200}
              />
              <GalleryPreviewItem
                src="IMG_3247.jpg"
                delay={400}
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/myndasafn"
              className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300"
            >
              Sjá meira
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="section-spacing relative bg-white"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2013_2581%20kopie.JPG-IIPeParTDJC1lhpwIoSa8GwZfrpic1.jpeg"
            alt="Tilbúin að byrja? bakgrunnsmynd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 relative z-10 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-[#f3f0eb] p-10 md:p-16 lg:p-10 rounded-lg text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-[#2c3e2d] mb-6">Tilbúin að byrja?</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg mb-8">
              Komdu í hóp ánægðra viðskiptavina Studio Bloom í dag og njóttu þess að hafa falleg blóm á þínum vinnustað allt árið.
            </p>
            <Link
              href="/hafa-samband"
              className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300 text-lg"
            >
              Hafa samband
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  return (
    <div
      className="bg-[#f8f5f1] p-8 rounded-lg text-center hover:shadow-md transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl text-[#2c3e2d] mb-4">{title}</h3>
      <p className="text-[#4a4a4a]">{description}</p>
    </div>
  )
}

function GalleryPreviewItem({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div
      className="group relative aspect-[4/5] max-w-xs w-full min-h-[320px] overflow-hidden rounded-lg animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt="Blómasamsetning"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

