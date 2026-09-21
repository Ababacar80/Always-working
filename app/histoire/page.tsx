import type { Metadata } from "next"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = { title: "Notre histoire" }

export default function HistoirePage() {
  const { about } = siteConfig
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold">Notre histoire</h1>
      <p className="mt-4 text-[var(--color-text-secondary)]">
        {siteConfig.name} a été fondée en {about.founding} par {about.founderName} ({about.founderTitle}).
        Pourquoi ? {about.pourquoi}. Notre point fort : {about.pointFort.toLowerCase()}.
      </p>
    </main>
  )
}
