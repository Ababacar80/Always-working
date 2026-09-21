import type { Metadata } from "next"
import ServicesSection from "@/components/sections/ServicesSection"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = { title: "Nos services" }

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
      <CTASection />
    </main>
  )
}
