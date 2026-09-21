import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[var(--color-primary)] px-6 py-12 text-center shadow-lg sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Besoin d&apos;un service de nettoyage ?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Parlons de votre projet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Contactez {siteConfig.name} pour discuter de vos besoins et obtenir
            un devis adapté à votre projet.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-primary-light)]"
            >
              Demander un devis
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--color-success)] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
