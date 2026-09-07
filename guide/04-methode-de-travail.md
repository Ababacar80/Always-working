# 4. Méthode de travail

## L'ordre dans lequel Ababacar avance sur un projet

1. **Collecte des infos client** → fichier `infos-business.txt` (nom, services, contact, histoire, photos...)
2. **Création du projet Next.js** → voir `01-prerequis.md`
3. **Fichier `data/siteConfig.ts`** → toutes les infos du client sont transformées en un objet TypeScript central (voir `02-architecture.md`), avant même de commencer les pages
4. **Structure des pages** → lister les pages nécessaires selon le business (voir `03-pages-et-routing.md`)
5. **Composants réutilisables d'abord** → `components/layout/Header.tsx`, `Footer.tsx`, la carte de service (`ServiceCard.tsx`) dans `components/sections/` — puis les pages qui les assemblent
6. **Remplissage du contenu** en important `siteConfig` (jamais de texte "en dur" recopié à la main, jamais de faux texte "Lorem Ipsum")
7. **Photos** → dans `public/images/`, optimisées (pas de photos trop lourdes, ça ralentit le site)
8. **Responsive** → toujours vérifier l'affichage mobile (la majorité des clients du client final viennent du téléphone)
9. **Pages légales** → `/cgv`, `/confidentialite` (voir `03-pages-et-routing.md`)
10. **Mise en ligne** (déploiement — généralement via Vercel, l'hébergeur fait pour Next.js)

## Utiliser l'IA pour écrire le code — comment bien le faire

Tu n'as pas besoin d'écrire tout le JSX/Tailwind toi-même. Le plus efficace :

1. Tu sais déjà **quelle page ou quel composant** tu veux créer, et où il doit vivre (grâce aux fichiers 02 et 03 — dans `components/` s'il est réutilisé, à côté de sa page s'il est spécifique)
2. Tu donnes à l'IA un prompt précis avec :
   - le fichier concerné (`app/services/page.tsx`, `components/layout/Header.tsx`...)
   - le fait que le projet utilise TypeScript (`.tsx`), pas du JavaScript simple
   - le contenu réel à afficher — en précisant qu'il doit venir de `siteConfig` (`data/siteConfig.ts`), pas être recopié en dur
   - le style voulu (couleurs, ambiance)
3. Tu colles le code au bon endroit
4. Tu vérifies dans le navigateur (`npm run dev`) que ça marche et que ça correspond

**Ne jamais** demander à l'IA "fais-moi tout le site d'un coup" sans structure — le résultat est souvent incohérent d'une page à l'autre. On avance composant par composant, page par page.

## Convention de style

- Tailwind CSS pour tout le style (pas de fichier `.css` séparé par page)
- **Tailwind v4** : les couleurs, polices, ombres et rayons de bordure sont définis une seule fois dans `app/globals.css`, dans un bloc `@theme` — pas dans un fichier `tailwind.config.js` (qui n'existe plus dans cette version) :
  ```css
  @theme {
    --color-primary: #1D4ED8;
    --color-background: #FFFFFF;
    --color-text-primary: #0F172A;
    --radius-lg: 1.25rem;
  }
  ```
  Ensuite, dans le code, on utilise ces variables plutôt que les couleurs par défaut de Tailwind :
  ```tsx
  <div className="bg-[var(--color-background)] text-[var(--color-text-primary)] rounded-[var(--radius-lg)]">
  ```
  **Pourquoi** : si on change `--color-primary` une seule fois, toute la charte du site change automatiquement (boutons, liens, accents...), sans avoir à chercher chaque `bg-blue-500` un par un dans le code.
- Mobile-first : on pense d'abord à l'affichage téléphone, puis on adapte pour desktop

## Checklist avant de considérer une page "terminée"

- [ ] Contenu réel du client (pas de texte de remplissage), affiché via `siteConfig` quand c'est une info business
- [ ] Affichage correct sur mobile ET desktop
- [ ] Liens de navigation fonctionnels (`Link`, pas `<a>`)
- [ ] Bouton contact/devis visible (WhatsApp ou téléphone)
- [ ] Images optimisées et présentes dans `public/`
- [ ] Pas d'erreur dans la console du navigateur (clic droit > Inspecter > Console)
