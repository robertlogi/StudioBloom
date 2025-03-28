"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const customRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const servicesInView = useInView(servicesRef, { once: true })
  const howItWorksInView = useInView(howItWorksRef, { once: true })
  const customInView = useInView(customRef, { once: true })
  const faqInView = useInView(faqRef, { once: true })

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Þjónustur</h1>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-6">Áskriftarleiðir okkar</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg">
              Við bjóðum upp á mismunandi áskriftarleiðir til að mæta þörfum allra viðskiptavina okkar. Allar áskriftir
              innihalda hágæða silkiblóm og afhendingu heim að dyrum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              title="Mánaðarleg áskrift"
              description="Ný blómasamsetning afhent einu sinni í mánuði."
              price="12.900 kr. á mánuði"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2005_0186.JPG-uXphAJnqGCCtBcm8IRD7yDmd7uBOtF.jpeg"
              delay={0}
            />
            <ServiceCard
              title="Árstíðabundin áskrift"
              description="Ný blómasamsetning afhent á þriggja mánaða fresti, í takt við árstíðir."
              price="14.900 kr. á afhendingu"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2003_SHOT%2005_0434.JPG-VmV3GhtE1G9mQcmJLCFDVG6pwuK38Q.jpeg"
              delay={200}
            />
            <ServiceCard
              title="Árleg áskrift"
              description="Tvær stórar blómasamsetningar afhentar á ári."
              price="24.900 kr. á afhendingu"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2004_0159.JPG-DMYV8IGw3cKcXM6a8ESnPNxA55VdX8.jpeg"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Hvernig virkar það?</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <StepCard
              number="1"
              title="Veldu áskrift"
              description="Veldu áskriftarleið sem hentar þér best."
              delay={0}
            />
            <StepCard
              number="2"
              title="Við hönnun"
              description="Blómasérfræðingar okkar hanna fallega samsetningu fyrir þig."
              delay={200}
            />
            <StepCard
              number="3"
              title="Afhending"
              description="Við afhendum blómin beint heim að dyrum á fyrirfram ákveðnum degi."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section ref={customRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${customInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1170%20kopie.JPG-I1kXIsBEJ6NS3gRPVzqz7tg78Y0XvA.jpeg"
                alt="Sérsniðin þjónusta"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-8">Sérsniðin þjónusta</h2>
              <div className="space-y-6">
                <p className="text-[#4a4a4a] text-lg">
                  Við bjóðum einnig upp á sérsniðna þjónustu fyrir fyrirtæki, veitingastaði, hótel og sérstök tilefni.
                </p>
                <p className="text-[#4a4a4a] text-lg">
                  Hafðu samband við okkur til að ræða þínar þarfir og við munum útbúa sérsniðna lausn fyrir þig.
                </p>
                <div className="pt-4">
                  <Link
                    href="/hafa-samband"
                    className="inline-block px-8 py-3 bg-[#2c3e2d] text-white hover:bg-[#1a2a1b] transition-colors duration-300"
                  >
                    Hafa samband
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Algengar spurningar</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <FaqItem
              question="Hversu lengi endast silkiblómin?"
              answer="Silkiblómin okkar eru hágæða og endast í mörg ár ef þau eru meðhöndluð rétt. Þau þurfa enga sérstaka umhirðu, aðeins að rykhreinsa þau af og til."
              delay={0}
            />
            <FaqItem
              question="Get ég hætt áskrift hvenær sem er?"
              answer="Já, þú getur hætt áskrift hvenær sem er með því að hafa samband við okkur með að minnsta kosti 14 daga fyrirvara fyrir næstu afhendingu."
              delay={200}
            />
            <FaqItem
              question="Afhendið þið um allt land?"
              answer="Já, við afhendum um allt land. Afhendingarkostnaður er innifalinn í verði áskriftar."
              delay={400}
            />
            <FaqItem
              question="Get ég valið hvaða blóm ég fæ?"
              answer="Við bjóðum upp á nokkra mismunandi stíla sem þú getur valið á milli. Blómasérfræðingar okkar sjá svo um að velja fallegustu blómin í þeim stíl sem þú velur."
              delay={600}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({
  title,
  description,
  price,
  imageSrc,
  delay = 0,
}: {
  title: string
  description: string
  price: string
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
        <p className="text-[#4a4a4a] mb-4">{description}</p>
        <p className="text-xl font-medium text-[#2c3e2d]">{price}</p>
        <div className="mt-6">
          <Link
            href="/hafa-samband"
            className="inline-block w-full text-center py-3 bg-[#f3f0eb] text-[#2c3e2d] hover:bg-[#2c3e2d] hover:text-white transition-colors duration-300"
          >
            Gerast áskrifandi
          </Link>
        </div>
      </div>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
  delay = 0,
}: {
  number: string
  title: string
  description: string
  delay?: number
}) {
  return (
    <div
      className="bg-white p-8 rounded-lg text-center hover:shadow-md transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-[#2c3e2d] text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-2xl text-[#2c3e2d] mb-4">{title}</h3>
      <p className="text-[#4a4a4a]">{description}</p>
    </div>
  )
}

function FaqItem({
  question,
  answer,
  delay = 0,
}: {
  question: string
  answer: string
  delay?: number
}) {
  return (
    <div className="bg-white p-6 rounded-lg animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-xl text-[#2c3e2d] mb-3">{question}</h3>
      <p className="text-[#4a4a4a]">{answer}</p>
    </div>
  )
}

