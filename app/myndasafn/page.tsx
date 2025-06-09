"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export default function GalleryPage() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const galleryInView = useInView(galleryRef, { once: true })
  const categoriesInView = useInView(categoriesRef, { once: true })

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Myndasafn</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${galleryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2005_0186.JPG-uXphAJnqGCCtBcm8IRD7yDmd7uBOtF.jpeg"
              delay={0}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2003_SHOT%2005_0434.JPG-VmV3GhtE1G9mQcmJLCFDVG6pwuK38Q.jpeg"
              delay={100}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2004_0159.JPG-DMYV8IGw3cKcXM6a8ESnPNxA55VdX8.jpeg"
              delay={200}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2013_2581%20kopie.JPG-IIPeParTDJC1lhpwIoSa8GwZfrpic1.jpeg"
              delay={300}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2013_2614%20kopie.JPG-kdyi9GUZjDiaeDuaPPbsQ8aa7CCkBi.jpeg"
              delay={400}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1413%20kopie.JPG-CC81Ej4oYxZMjFsdIQIrlBpfopsT74.jpeg"
              delay={500}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2005_1539%201.JPG-hqVqtw6xWFCsj5JRXg2BAGAM4WCIf3.jpeg"
              delay={600}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2004_Shot%2014_2710.JPG-LW1ZLPqrPqv3WuZWZJpphvvLbYTI3q.jpeg"
              delay={700}
            />
            <GalleryItem
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2001-COVER_2.JPG-LsZT2oIijggWHIB6Xu9SJm9ax7oQ5w.jpeg"
              delay={800}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section ref={categoriesRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${categoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Flokkar</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <CategoryCard
              title="Borðskreytingar"
              description="Fallegar blómaskreytingar fyrir borðið þitt."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1170%20kopie.JPG-I1kXIsBEJ6NS3gRPVzqz7tg78Y0XvA.jpeg"
              delay={0}
            />
            <CategoryCard
              title="Stofuskreytingar"
              description="Stærri blómaskreytingar fyrir stofuna."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2004_0159.JPG-DMYV8IGw3cKcXM6a8ESnPNxA55VdX8.jpeg"
              delay={200}
            />
            <CategoryCard
              title="Gjafapakkar"
              description="Sérstakir gjafapakkar fyrir sérstök tilefni."
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1413%20kopie.JPG-CC81Ej4oYxZMjFsdIQIrlBpfopsT74.jpeg"
              delay={400}
            />
          </div>
        </div>
      </section> */}
    </>
  )
}

function GalleryItem({ src, delay = 0 }: { src: string; delay?: number }) {
  return (
    <div
      className="group relative h-80 overflow-hidden rounded-lg animate-fade-in"
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

function CategoryCard({
  title,
  description,
  imageSrc,
  delay = 0,
}: {
  title: string
  description: string
  imageSrc: string
  delay?: number
}) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-60 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-[#2c3e2d] mb-2">{title}</h3>
        <p className="text-[#4a4a4a]">{description}</p>
      </div>
    </div>
  )
}

