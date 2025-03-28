"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formState, setFormState] = useState({
    nafn: "",
    netfang: "",
    simi: "",
    skilaboð: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ nafn: "", netfang: "", simi: "", skilaboð: "" })
    }, 1500)
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-[#e5e1d8]">
      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-xl text-[#2c3e2d] mb-4">Takk fyrir skilaboðin!</h3>
          <p className="text-[#4a4a4a]">Við munum hafa samband við þig sem fyrst.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nafn">Nafn</Label>
            <Input
              id="nafn"
              name="nafn"
              value={formState.nafn}
              onChange={handleChange}
              className="border-[#e5e1d8] focus:border-[#2c3e2d] focus:ring-[#2c3e2d]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="netfang">Netfang</Label>
            <Input
              id="netfang"
              name="netfang"
              type="email"
              value={formState.netfang}
              onChange={handleChange}
              className="border-[#e5e1d8] focus:border-[#2c3e2d] focus:ring-[#2c3e2d]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="simi">Sími (valfrjálst)</Label>
            <Input
              id="simi"
              name="simi"
              type="tel"
              value={formState.simi}
              onChange={handleChange}
              className="border-[#e5e1d8] focus:border-[#2c3e2d] focus:ring-[#2c3e2d]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skilaboð">Skilaboð</Label>
            <Textarea
              id="skilaboð"
              name="skilaboð"
              value={formState.skilaboð}
              onChange={handleChange}
              className="min-h-[120px] border-[#e5e1d8] focus:border-[#2c3e2d] focus:ring-[#2c3e2d]"
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#2c3e2d] hover:bg-[#1a2a1b] text-white">
            {isSubmitting ? "Sendir..." : "Senda"}
          </Button>
        </form>
      )}
    </div>
  )
}

