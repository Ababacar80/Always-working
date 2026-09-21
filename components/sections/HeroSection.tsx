import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function HeroSection() {
  return (
    <section className="bg-[var(--color-surface)] py-24 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
          {siteConfig.slogan}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {siteConfig.seo.description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white hover:opacity-90"
        >
          Demander un devis
        </Link>
      </div>
    </section>
  )
}
