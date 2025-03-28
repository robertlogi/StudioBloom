"use client"

import { useRef } from "react"
import type React from "react"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const formInView = useInView(formRef, { once: true })
  const infoInView = useInView(infoRef, { once: true })

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f3f0eb] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2c3e2d] text-center animate-fade-in">Hafa samband</h1>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div
              ref={formRef}
              className={`transition-all duration-700 ${formInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-8">Sendu okkur skilaboð</h2>
              <p className="text-[#4a4a4a] text-lg mb-8">
                Hafðu samband við okkur ef þú hefur einhverjar spurningar um þjónustu okkar eða vilt gerast áskrifandi.
                Við svörum öllum fyrirspurnum eins fljótt og auðið er.
              </p>
              <ContactForm />
            </div>

            <div
              ref={infoRef}
              className={`transition-all duration-700 ${infoInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h2 className="text-3xl md:text-4xl text-[#2c3e2d] mb-8">Upplýsingar</h2>

              <div className="space-y-8">
                <ContactInfoItem
                  icon={<Mail className="h-6 w-6 text-[#2c3e2d]" />}
                  title="Netfang"
                  content="contact@studiobloom.is"
                  link="mailto:contact@studiobloom.is"
                />
                <ContactInfoItem
                  icon={<Phone className="h-6 w-6 text-[#2c3e2d]" />}
                  title="Sími"
                  content="+354 783 0052"
                  link="tel:+3547830052"
                />
              </div>

              <div className="mt-12 bg-[#f3f0eb] p-8 rounded-lg">
                <h3 className="text-2xl text-[#2c3e2d] mb-4">Fylgstu með okkur</h3>
                <p className="text-[#4a4a4a] mb-6">
                  Fylgstu með okkur á samfélagsmiðlum til að sjá nýjustu blómaskreytingarnar okkar og fá innblástur.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/studio.bloom.reykjavik?igsh=OGo2c3l6ZnAzZHc0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2c3e2d] text-white p-3 rounded-full hover:bg-[#1a2a1b] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574531437395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2c3e2d] text-white p-3 rounded-full hover:bg-[#1a2a1b] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactInfoItem({
  icon,
  title,
  content,
  link,
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl text-[#2c3e2d] mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-[#4a4a4a] hover:text-[#2c3e2d] transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-[#4a4a4a]">{content}</p>
        )}
      </div>
    </div>
  )
}

