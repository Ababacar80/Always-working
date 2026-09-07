# 2. Architecture du projet Always Working

> Astuce : les mots comme "composant", "props", TypeScript... sont expliqués en détail dans `05-glossaire.md`. Ici on se concentre sur "où ça va et pourquoi", avec la structure **spécifique à Always Working** (site vitrine de services, pas de boutique en ligne).

## La structure à créer pour CE projet

Pas de dossier `src/` : `app/`, `components/`, `data/` et `lib/` sont directement à la racine du projet.

```
always-working/
├── app/
│   ├── layout.tsx          ← squelette commun : html, body, Header, Footer
│   ├── page.tsx            ← page d'accueil (/)
│   ├── globals.css         ← styles globaux + couleurs (Tailwind v4)
│   ├── services/
│   │   ├── layout.tsx      ← UNIQUEMENT le titre/description Google de cette page
│   │   └── page.tsx        ← détail des services proposés
│   ├── histoire/
│   │   ├── layout.tsx
│   │   └── page.tsx        ← histoire, PDG, point fort
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx        ← coordonnées + formulaire de devis
│   ├── cgv/
│   │   └── page.tsx        ← conditions générales
│   └── confidentialite/
│       └── page.tsx        ← politique de confidentialité
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     ← bannière d'accueil
│   │   ├── ServicesSection.tsx ← liste des services (accueil + page services)
│   │   └── CTASection.tsx      ← bloc "Demandez votre devis"
│   └── seo/
│       └── SchemaOrg.tsx       ← infos business au format Google
├── data/
│   └── siteConfig.ts       ← LE fichier central avec toutes les infos business
├── public/
│   └── images/             ← photos de réalisations, logo
├── package.json
├── next.config.ts
└── tsconfig.json
```

**Pas besoin ici** : de dossier `products/`, de `[slug]`, d'espace `/admin`, ni de `lib/api.ts` — Always Working n'a ni boutique en ligne, ni catalogue produits, ni backend à interroger pour l'instant. Tout le contenu est fixe (services, textes, contact), donc tout tient dans `siteConfig.ts`. Si un jour on ajoute une vraie gestion dynamique (ex: un espace admin pour éditer les services soi-même), on ira voir les patterns plus avancés en fin de fichier — mais ce n'est pas le sujet maintenant.

## `data/siteConfig.ts` — le fichier le plus important à comprendre

**C'est ici que le fichier `infos-business.txt` devient du code.** Toutes les infos d'Always Working — nom, slogan, contact, adresse, horaires, histoire, services, SEO — sont centralisées dans **un seul objet TypeScript**, au lieu d'être recopiées à la main dans chaque page.

```ts
// data/siteConfig.ts
export const siteConfig = {
  name: "Always Working",
  slogan: "Votre Propreté notre Priorité",
  url: "https://alwaysworking.com",

  whatsapp: "+221711204949",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}`
  },

  contact: {
    telephone: "71 120 49 49",
    email: "alwaysworking726@gmail.com",
    adresse: "Parcelles Assainies, Unité 12",
    horaires: "24/24",
    zone: "Partout (déplacement chez le client)",
  },

  about: {
    founderName: "Mame Birane Cissé",
    founderTitle: "PDG",
    founding: "2023",
    pourquoi: "Pour être indépendant",
    pointFort: "Un service professionnel",
  },

  services: [
    { nom: "Nettoyage industriel", description: "..." },
    { nom: "Nettoyage pendant construction", description: "..." },
    { nom: "Fin de chantier", description: "..." },
    { nom: "Nettoyage maison / appartement / studio", description: "..." },
    { nom: "Lavage moquette et canapé", description: "..." },
    { nom: "Désinfection", description: "..." },
  ],

  seo: {
    title: "Always Working — Nettoyage professionnel à Dakar",
    description: "Nettoyage industriel, fin de chantier, désinfection... Sur devis, disponible 24/24.",
    keywords: ["nettoyage industriel Dakar", "nettoyage fin de chantier Dakar", "désinfection Dakar"],
  },
} as const
```

**Pourquoi c'est fait comme ça et pas autrement :**

1. **Une seule source de vérité.** Si le numéro de téléphone change, on le modifie à un seul endroit, et il se met à jour automatiquement partout (header, footer, page contact, bouton WhatsApp...). Sans ça, il faudrait chercher le numéro dans chaque fichier un par un.
2. **On l'importe là où on en a besoin** :
   ```tsx
   import { siteConfig } from "@/data/siteConfig"

   <p>{siteConfig.contact.telephone}</p>
   <a href={siteConfig.whatsappUrl}>Nous contacter</a>
   ```
3. **`as const` à la fin** dit à TypeScript "ces valeurs sont figées" — si on se trompe de nom de propriété (`siteConfig.telephon` au lieu de `siteConfig.contact.telephone`), VS Code le signale immédiatement.
4. **La liste `services`** permet d'afficher les 6 services avec un seul composant réutilisable (`ServiceCard`) au lieu d'écrire 6 blocs HTML identiques à la main — voir la section suivante.

**Premier réflexe sur ce projet** : après avoir lu `infos-business.txt`, la toute première chose à coder est ce fichier `data/siteConfig.ts` — avant même la première page.

## `components/` — rangé par catégorie, pas en vrac

- **`components/layout/`** — les éléments qui structurent le site entier : `Header.tsx` (menu du haut, avec les liens vers Accueil / Services / Histoire / Contact), `Footer.tsx` (coordonnées, réseaux sociaux). Les deux sont assemblés directement dans `app/layout.tsx` (voir plus bas).
- **`components/sections/`** — les gros blocs réutilisés sur les pages : `HeroSection.tsx` (bannière avec le slogan), `ServicesSection.tsx` (affiche la liste `siteConfig.services` sous forme de cartes), `CTASection.tsx` (bloc "Demandez votre devis" avec bouton WhatsApp, réutilisé en bas de plusieurs pages).
- **`components/seo/`** — `SchemaOrg.tsx`, qui décrit l'entreprise dans un format que Google comprend (nom, adresse, horaires...) pour mieux ressortir dans les recherches locales.

**Règle pour savoir où ranger un composant** : s'il est réutilisé sur plusieurs pages → dans `components/`, dans le sous-dossier qui correspond à son rôle. S'il n'est utile qu'à une seule page précise → à côté de cette page (voir plus bas, "colocation").

### Exemple concret : la carte de service

```tsx
// components/sections/ServiceCard.tsx
type ServiceCardProps = {
  nom: string;
  description: string;
};

export default function ServiceCard({ nom, description }: ServiceCardProps) {
  return (
    <div className="p-4 border rounded-[var(--radius-lg)] bg-[var(--color-surface)]">
      <h3 className="font-bold text-[var(--color-text-primary)]">{nom}</h3>
      <p className="text-[var(--color-text-secondary)]">{description}</p>
    </div>
  );
}
```

Puis dans `ServicesSection.tsx`, on parcourt `siteConfig.services` pour afficher une carte par service, sans rien recopier à la main :

```tsx
import { siteConfig } from "@/data/siteConfig"
import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteConfig.services.map((service) => (
        <ServiceCard key={service.nom} nom={service.nom} description={service.description} />
      ))}
    </div>
  );
}
```

**C'est le point le plus important à comprendre sur ce projet** : les 6 services d'Always Working ne sont écrits qu'une seule fois, dans `siteConfig.services`. Le composant `ServiceCard` + la boucle `.map()` s'occupent d'afficher une carte par service automatiquement. Si un service est ajouté ou modifié, on ne touche qu'à `siteConfig.ts` — jamais au composant.

## `app/layout.tsx` — Header et Footer directement dedans

Sur d'autres projets d'Ababacar, le Header/Footer passent par un composant intermédiaire (`SiteChrome`) parce que ce projet a besoin de les **cacher** sur les pages `/admin` — ça demande de savoir "sur quelle page suis-je ?" en temps réel, donc un composant client (`"use client"` + `usePathname()`).

**Always Working n'a pas cette contrainte** : Header et Footer doivent apparaître sur *toutes* les pages, sans exception. Pas besoin de cet intermédiaire — on les met directement dans `app/layout.tsx`, qui reste un composant serveur (plus simple, plus rapide, pas de JavaScript supplémentaire envoyé au navigateur juste pour ça) :

```tsx
// app/layout.tsx
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

**Règle à retenir** : on n'ajoute une couche d'abstraction (comme `SiteChrome`) que lorsqu'un vrai besoin l'exige (ici : cacher le Header/Footer quelque part). Sans ce besoin, l'ajouter quand même ne ferait que compliquer le code pour rien.

## Le `layout.tsx` dans un dossier de page — pas pour l'affichage, pour le SEO

C'est un point qui prête à confusion : un `layout.tsx` **à l'intérieur** d'un dossier comme `app/services/` ne sert pas à rajouter du HTML visuel (ça, c'est déjà géré par `app/layout.tsx` à la racine, qui enveloppe automatiquement toutes les pages). Sur les projets d'Ababacar, ce layout imbriqué sert à une seule chose : donner à **cette page précise** un titre et une description Google différents de ceux de la page d'accueil.

Exemple réel (`app/services/layout.tsx` sur un autre projet d'Ababacar, adapté à Always Working) :

```tsx
// app/services/layout.tsx
import type { Metadata } from "next"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Nos services — Nettoyage industriel, fin de chantier, désinfection",
  description: "Nettoyage industriel, fin de chantier, moquette, canapé, désinfection. Sur devis, partout, 24/24.",
  keywords: ["nettoyage industriel Dakar", "nettoyage fin de chantier Dakar"],
  alternates: { canonical: `${siteConfig.url}/services` },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

Remarque le `return children` : ce layout ne rajoute **aucun** HTML, il se contente de transmettre le contenu de `page.tsx` tel quel. Toute son utilité est dans l'export `metadata` au-dessus.

**Pourquoi c'est important** : sans ça, toutes les pages du site auraient le même titre dans l'onglet du navigateur et dans les résultats Google (celui défini dans `app/layout.tsx`). Chaque page mérite son propre titre pour que les internautes qui cherchent "nettoyage fin de chantier Dakar" tombent directement sur la bonne page. **Chaque page du site Always Working (`services`, `histoire`, `contact`) doit avoir ce fichier.**

---

## Pour plus tard (pas nécessaire sur Always Working aujourd'hui)

Ces patterns existent sur d'autres projets d'Ababacar (ex: un projet avec boutique en ligne) — bon à savoir qu'ils existent, mais **inutile de les utiliser ici** :

- **Dossier `[slug]`** : crée une page dynamique qui gère plein d'URLs différentes (une par produit). Utile pour un catalogue qui change souvent — Always Working a une liste de services fixe, pas besoin.
- **`(parenthèses)`** : regroupe des pages sans que ça apparaisse dans l'URL, typiquement pour un espace `/admin` protégé par connexion. Always Working n'a pas d'espace admin pour l'instant.
- **`lib/api.ts`** : fonctions pour aller chercher des données dans une base/API. Utile quand le contenu change souvent et est géré par un backend. Ici tout est statique dans `siteConfig.ts`.
- **`"use client"`** : à ajouter en haut d'un composant seulement s'il a besoin d'interactivité avancée (état qui change, hooks comme `usePathname`). Sur Always Working, ce ne sera probablement nécessaire que pour un éventuel menu mobile qui s'ouvre/ferme au clic.

Si le projet grandit un jour (espace client, prise de RDV en ligne...), on ira rouvrir ces patterns à ce moment-là.
