import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[var(--color-text-secondary)] sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-[var(--color-text-primary)]">{siteConfig.name}</p>
          <p>{siteConfig.slogan}</p>
        </div>
        <div>
          <p>{siteConfig.contact.telephone}</p>
          <p>{siteConfig.contact.email}</p>
          <p>{siteConfig.contact.adresse}</p>
        </div>
        <div className="flex gap-4">
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
    </footer>
  )
}
