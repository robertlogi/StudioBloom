"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { SITE_CONFIG } from "@/lib/seo"

export function ServicesClient() {
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
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Þjónustur silkiblóma</h1>
        </div>
      </section>

      <section ref={servicesRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-6">Áskriftarleiðir fyrir fyrirtæki á höfuðborgarsvæðinu</h2>
            <p className="text-[#4a4a4a] max-w-3xl mx-auto text-lg">
              Við bjóðum upp á mismunandi áskriftarleiðir til að mæta þörfum allra viðskiptavina okkar á höfuðborgarsvæðinu.
              Allar áskriftir innihalda hágæða silkiblóm í vösum og afhendingu í þitt fyrirtæki eða beint heim að dyrum.
              Skreytingin er endurnýjuð á þriggja mánaða fresti til að tryggja ferskt lúkk allt árið um kring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              title="Lítil skreyting"
              description="Nett og fáguð skreyting sem hentar minni rýmum eins og móttökum, skrifborðum eða salernum."
              price="9.900 kr. á mánuði"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2005_0186.JPG-uXphAJnqGCCtBcm8IRD7yDmd7uBOtF.jpeg"
              delay={0}
            />
            <ServiceCard
              title="Miðlungs skreyting"
              description="Vel mótuð og áberandi skreyting fyrir fundarherbergi, biðstofur eða kaffirými."
              price="14.900 kr. á mánuði"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2003_SHOT%2005_0434.JPG-VmV3GhtE1G9mQcmJLCFDVG6pwuK38Q.jpeg"
              delay={200}
            />
            <ServiceCard
              title="Stór skreyting"
              description="Stór og glæsileg skreyting sem setur svip á anddyri, veitingasali eða aðalrými."
              price="19.900 kr. á mánuði"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_SHOT%2004_0159.JPG-DMYV8IGw3cKcXM6a8ESnPNxA55VdX8.jpeg"
              delay={400}
            />
          </div>
        </div>
      </section>

      <section ref={customRef} className="section-spacing">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${customInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240619_SILKKA_SS25_CAMPAIGN_Thema%2001_Shot%2003_1170%20kopie.JPG-I1kXIsBEJ6NS3gRPVzqz7tg78Y0XvA.jpeg"
                alt="Sérsniðin þjónusta fyrir fyrirtæki á höfuðborgarsvæðinu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-8">Sérsniðin þjónusta fyrir fyrirtæki</h2>
              <div className="space-y-6">
                <p className="text-[#4a4a4a] text-lg">
                  Við bjóðum einnig upp á sérsniðna þjónustu fyrir fyrirtæki, veitingastaði, hótel og sérstök tilefni á höfuðborgarsvæðinu.
                </p>
                <p className="text-[#4a4a4a] text-lg">
                  Hafðu samband við okkur til að ræða þínar þarfir og við munum útbúa sérsniðna lausn fyrir þig.
                </p>
                <div className="pt-4">
                  <Link
                    href="/hafa-samband"
                    className="inline-block px-8 py-3 bg-[#948774] text-white hover:bg-[#675B48] transition-colors duration-300"
                  >
                    Fáðu ókeypis ráðgjöf
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="section-spacing bg-[#f3f0eb]">
        <div
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-12 text-center">Algengar spurningar um silkiblóm</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <FaqItem
              question="Er hægt að panta sérhannaða skreytingu fyrir viðburði?"
              answer="Já, innifalið er ráðgjöf, afhending, uppsetning og sótt eftir viðburð. Best er að panta með góðum fyrirvara."
              delay={0}
            />
            <FaqItem
              question="Get ég hætt áskrift hvenær sem er?"
              answer="Já, þú getur hætt áskrift hvenær sem er með því að hafa samband við okkur með að minnsta kosti 14 daga fyrirvara fyrir næstu afhendingu."
              delay={200}
            />
            <FaqItem
              question="Afhendið þið um allt Ísland?"
              answer="Nei, ekki ennþá. Við þjónustum nú aðeins höfuðborgarsvæðið en stefnum á að bjóða afhendingu víðar á næstunni."
              delay={400}
            />
            <FaqItem
              question="Get ég valið hvaða blóm ég fæ?"
              answer="Við bjóðum upp á nokkra mismunandi stíla sem þú getur valið á milli. Blómasérfræðingar okkar sjá svo um að velja fallegustu blómin í þeim stíl sem þú velur."
              delay={600}
            />
            <FaqItem
              question="Hvernig virkar áskriftin fyrir fyrirtæki?"
              answer="Við hönnum sérsniðna blómasamsetningu fyrir þitt rými og afhendum hana á fyrirfram ákveðnum degi. Skreytingin er endurnýjuð á þriggja mánaða fresti."
              delay={800}
            />
            <FaqItem
              question="Eru silkiblómin umhverfisvæn?"
              answer="Já, silkiblóm eru umhverfisvænn kostur þar sem þau endast árum saman og krefjast engrar umhirðu, ólíkt ferskum blómum sem þurfa reglulega skiptingu."
              delay={1000}
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
                "name": "Þjónustur silkiblóma",
                "item": `${SITE_CONFIG.url}/thjonusta`
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Er hægt að panta sérhannaða skreytingu fyrir viðburði?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Já, innifalið er ráðgjöf, afhending, uppsetning og sótt eftir viðburð. Best er að panta með góðum fyrirvara."
                }
              },
              {
                "@type": "Question",
                "name": "Get ég hætt áskrift hvenær sem er?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Já, þú getur hætt áskrift hvenær sem er með því að hafa samband við okkur með að minnsta kosti 14 daga fyrirvara fyrir næstu afhendingu."
                }
              },
              {
                "@type": "Question",
                "name": "Afhendið þið um allt Ísland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nei, ekki ennþá. Við þjónustum nú aðeins höfuðborgarsvæðið en stefnum á að bjóða afhendingu víðar á næstunni."
                }
              },
              {
                "@type": "Question",
                "name": "Get ég valið hvaða blóm ég fæ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Við bjóðum upp á nokkra mismunandi stíla sem þú getur valið á milli. Blómasérfræðingar okkar sjá svo um að velja fallegustu blómin í þeim stíl sem þú velur."
                }
              },
              {
                "@type": "Question",
                "name": "Hvernig virkar áskriftin fyrir fyrirtæki?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Við hönnum sérsniðna blómasamsetningu fyrir þitt rými og afhendum hana á fyrirfram ákveðnum degi. Skreytingin er endurnýjuð á þriggja mánaða fresti."
                }
              },
              {
                "@type": "Question",
                "name": "Eru silkiblómin umhverfisvæn?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Já, silkiblóm eru umhverfisvænn kostur þar sem þau endast árum saman og krefjast engrar umhirðu, ólíkt ferskum blómum sem þurfa reglulega skiptingu."
                }
              }
            ]
          })
        }}
      />
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
        <Image 
          src={imageSrc || "/placeholder.svg"} 
          alt={`${title} - ${description}`} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-[#2c3e2d] mb-2">{title}</h3>
        <p className="text-[#4a4a4a] mb-4">{description}</p>
        <p className="text-xl font-medium text-[#2c3e2d]">{price}</p>
        <div className="mt-6">
          <Link
            href="/hafa-samband"
            className="inline-block w-full text-center py-3 bg-[#f3f0eb] text-[#2c3e2d] hover:bg-[#675B48] hover:text-white transition-colors duration-300"
          >
            Gerast áskrifandi
          </Link>
        </div>
      </div>
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