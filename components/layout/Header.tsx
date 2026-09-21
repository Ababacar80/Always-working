import Link from "next/link"
import { siteConfig } from "@/data/siteConfig"

const links = [
  { href: "/services", label: "Services" },
  { href: "/histoire", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-[var(--color-primary-dark)]">
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--color-primary)]">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
