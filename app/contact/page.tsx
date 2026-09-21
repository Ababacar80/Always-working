import type { Metadata } from "next"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  const { contact } = siteConfig
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold">Contact</h1>
      <ul className="mt-6 space-y-2 text-[var(--color-text-secondary)]">
        <li>Téléphone : {contact.telephone}</li>
        <li>Email : <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></li>
        <li>Adresse : {contact.adresse}</li>
        <li>Horaires : {contact.horaires}</li>
        <li>Zone : {contact.zone}</li>
        <li>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline">
            Nous écrire sur WhatsApp
          </a>
        </li>
      </ul>
    </main>
  )
}
