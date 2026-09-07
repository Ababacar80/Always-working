# 3. Les pages et le routing

## La règle d'or du "App Router"

Dans Next.js (version App Router, celle qu'on utilise), **chaque dossier dans `app/` = une URL du site**, à condition qu'il contienne un fichier `page.tsx`. Le dossier `app/` est directement à la racine du projet (pas de `src/` — voir `02-architecture.md`).

Exemple pour un site comme Always Working :

```
app/
├── page.tsx                    → correspond à  monsite.com/
├── services/
│   └── page.tsx                → correspond à  monsite.com/services
├── histoire/
│   └── page.tsx                → correspond à  monsite.com/histoire
├── contact/
│   └── page.tsx                → correspond à  monsite.com/contact
└── layout.tsx                  → le squelette commun (voir fichier 02)
```

(`histoire` plutôt que `a-propos` : c'est le nom utilisé sur les projets d'Ababacar pour la page qui raconte l'histoire du fondateur/de l'entreprise.)

Pas besoin de "router" quoi que ce soit à la main comme en HTML classique avec des liens vers des `.html` différents : Next.js le fait tout seul selon les noms de dossiers.

## Créer une nouvelle page — étape par étape

Pour ajouter une page "Services" :

1. Crée un dossier `services` dans `app/`
2. Dedans, crée un fichier `page.tsx`
3. Écris :

```tsx
export default function ServicesPage() {
  return (
    <main>
      <h1>Nos services</h1>
      <p>Contenu de la page services...</p>
    </main>
  );
}
```

4. Va sur `http://localhost:3000/services` → la page apparaît.

## Naviguer entre les pages (le menu)

On n'utilise jamais `<a href="...">` pour aller d'une page à l'autre à l'intérieur du site (ça recharge toute la page, c'est plus lent). On utilise le composant `Link` fourni par Next.js :

```tsx
import Link from "next/link";

<Link href="/services">Nos services</Link>
<Link href="/contact">Contact</Link>
```

Ça se met typiquement dans `components/layout/Header.tsx` (voir `02-architecture.md` pour l'organisation de `components/`), pour le menu de navigation visible sur toutes les pages.

## Les pages du site Always Working

C'est la liste définitive à créer pour ce projet (d'après `infos-business.txt`) :

- `/` — Accueil (présentation rapide, services phares, bouton WhatsApp/appel)
- `/services` — Détail des services (nettoyage industriel, fin de chantier, moquette/canapé, désinfection...)
- `/histoire` — Histoire, PDG, point fort ("service professionnel")
- `/contact` — Téléphone, WhatsApp, adresse, formulaire de demande de devis (puisque c'est "sur devis")
- `/cgv` et `/confidentialite` — pages légales (conditions générales de vente, politique de confidentialité). Ababacar les ajoute systématiquement, même sur un site vitrine simple — bon réflexe pour la crédibilité et le référencement.

Pas besoin de page "Boutique" (pas de vente en ligne), ni de page "Tarifs" fixes (tout est sur devis) — on peut plutôt mettre un bouton "Demander un devis" bien visible partout.

## Ce qu'il faut demander à l'IA (exemple concret)

Une fois la structure de dossiers créée, tu peux demander à une IA un prompt du style :

> "Crée-moi le contenu du fichier `app/services/page.tsx` en Next.js/TypeScript avec Tailwind v4, qui affiche `siteConfig.services` sous forme de cartes via le composant `ServiceCard`. Le style doit être professionnel et sobre, couleurs bleu/blanc, en utilisant les variables `var(--color-...)` définies dans `globals.css`."

L'IA te donnera le code du composant — ton travail à toi, c'est de savoir dans quel fichier le coller, et de vérifier que ça correspond à la structure du projet (composants réutilisés, cohérence entre les pages).
