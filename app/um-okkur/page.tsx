"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  const storyInView = useInView(storyRef, { once: true })
  const valuesInView = useInView(valuesRef, { once: true })
  const teamInView = useInView(teamRef, { once: true })

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Um okkur</h1>
        </div>
      </section>

      {/* About Content */}
      <section ref={storyRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-8">Saga okkar</h2>
              <div className="space-y-6">
                <p className="text-[#4a4a4a] text-lg">
                  Studio Bloom var stofnað árið 2025 með þá hugsjón að færa fegurð náttúrunnar inn á heimili fólks á
                  sjálfbæran hátt.
                </p>
                <p className="text-[#4a4a4a] text-lg">
                  Við sérhæfum okkur í hágæða silkiblómum sem líta út eins og fersk blóm en endast miklu lengur og
                  krefjast engrar umhirðu.
                </p>
                <p className="text-[#4a4a4a] text-lg">
                  Áskriftarþjónusta okkar gerir viðskiptavinum kleift að njóta fegurðar blóma allt árið um kring, án
                  þess að hafa áhyggjur af því að þau visni.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1170%20kopie.JPG-I1kXIsBEJ6NS3gRPVzqz7tg78Y0XvA.jpeg"
                alt="Falleg blóm frá Studio Bloom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Gildi okkar</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ValueCard
              title="Gæði"
              description="Við notum aðeins hágæða silkiblóm sem líta út eins og þau séu nýtínd."
              delay={0}
            />
            <ValueCard
              title="Sjálfbærni"
              description="Silkiblóm eru umhverfisvænn kostur sem endist árum saman."
              delay={200}
            />
            <ValueCard
              title="Fagurfræði"
              description="Hver blómasamsetning er hönnuð af reyndum blómasérfræðingum."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Teymið okkar</h2>

          <div className="max-w-md mx-auto">
            <div className="text-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1413%20kopie.JPG-CC81Ej4oYxZMjFsdIQIrlBpfopsT74.jpeg"
                  alt="Ásta Björk Sigþórsdóttir"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl text-[#2c3e2d] mb-2">Ásta Björk Sigþórsdóttir</h3>
              <p className="text-[#4a4a4a]">Stofnandi og framkvæmdastjóri</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  return (
    <div
      className="bg-white p-8 rounded-lg text-center hover:shadow-md transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl text-[#2c3e2d] mb-4">{title}</h3>
      <p className="text-[#4a4a4a]">{description}</p>
    </div>
  )
}

