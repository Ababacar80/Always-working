import { siteConfig } from "@/data/siteConfig"

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Nos services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((s) => (
            <article key={s.nom} className="rounded-xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-primary-dark)]">{s.nom}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
