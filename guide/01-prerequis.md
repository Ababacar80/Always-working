# 1. Prérequis et création du projet

> Astuce : si un mot ci-dessous n'est pas clair (Node, npm, Tailwind, `src/`...), va voir `05-glossaire.md`, chaque terme y est expliqué en détail avec des exemples.

## C'est quoi Next.js ?

Next.js est un "framework" basé sur React (une librairie JavaScript pour construire des interfaces). En clair : au lieu d'écrire du HTML/CSS/JS à la main dans des fichiers `.html`, on écrit des "composants" en JavaScript qui génèrent le HTML automatiquement. Next.js ajoute par-dessus :
- la gestion automatique des pages (pas besoin de lier soi-même chaque `.html`)
- de meilleures performances (le site est optimisé automatiquement)
- la possibilité de faire du contenu dynamique (formulaire de devis, appel à une base de données, etc.) plus tard si besoin

C'est le choix par défaut d'Ababacar pour les sites vitrines/business comme Always Working.

## Vérifier les outils installés

Ouvre un terminal (dans VS Code : menu Terminal > New Terminal) et tape :

```bash
node -v
```

```bash
npm -v
```

Tu dois voir un numéro de version pour chaque commande (ex: `v20.11.0`). Si une commande dit "command not found", Node n'est pas bien installé — dans ce cas, on réinstalle avant de continuer.

## Créer un nouveau projet Next.js

Dans le terminal, place-toi dans le dossier où tu veux créer le projet, puis :

```bash
npx create-next-app@latest nom-du-projet
```

`npx` sert à exécuter un outil sans avoir à l'installer définitivement sur l'ordinateur — ici, l'outil officiel qui construit toute la structure de base d'un projet Next.js en une seule commande (dossiers, fichiers de config, librairies...). Sans lui, il faudrait créer tous ces fichiers à la main.

Remplace `nom-du-projet` par exemple `always-working`. L'outil va poser plusieurs questions, et pourquoi on répond ainsi :

| Question | Réponse | Pourquoi |
|---|---|---|
| TypeScript ? | Oui | TypeScript ajoute une couche de vérification en plus de JavaScript : on précise le "type" de chaque donnée (texte, nombre, liste...), et VS Code prévient tout de suite en cas d'erreur (avant même de tester dans le navigateur). Ababacar travaille systématiquement en TypeScript — les fichiers de composants et de pages sont donc en `.tsx` (et non `.jsx`/`.js`). Voir `05-glossaire.md`. |
| ESLint ? | Oui | Un outil qui repère automatiquement les erreurs et fautes de syntaxe pendant qu'on écrit le code, comme un correcteur orthographique pour le code. |
| Tailwind CSS ? | Oui | La méthode qu'on utilise pour tout le style visuel du site (voir `05-glossaire.md`) — on l'active dès la création plutôt que de l'ajouter après. |
| `src/` directory ? | **Non** | Sur les projets d'Ababacar, `app/`, `components/`, `lib/` et `data/` restent directement à la racine du projet, pas dans un dossier `src/`. C'est une préférence d'organisation — les deux façons fonctionnent, mais on reste cohérent avec les projets existants (voir `02-architecture.md`). |
| App Router ? | Oui | La façon moderne dont Next.js organise les pages du site — un dossier = une page (voir `02-architecture.md` et `03-pages-et-routing.md`). |
| Import alias personnalisé ? | Non, garder le défaut | C'est un raccourci pour écrire les chemins d'import dans le code (ex: `@/components/Header`). Le réglage par défaut convient très bien, pas besoin d'y toucher. |

Une fois terminé, un dossier `nom-du-projet` est créé avec tout le nécessaire, y compris un fichier `package.json` (le "carnet d'identité" du projet, voir glossaire) et un dossier `node_modules/` (les librairies téléchargées — on n'y touche jamais).

## Lancer le projet en local

```bash
cd nom-du-projet
npm run dev
```

Puis ouvrir `http://localhost:3000` dans le navigateur. Tant que le terminal tourne, le site se met à jour automatiquement à chaque fois qu'un fichier est sauvegardé.

Pour arrêter le serveur : `Ctrl + C` dans le terminal.

## Récap des commandes utiles

```bash
npm run dev      # lancer le site en local pour travailler dessus
npm run build    # préparer une version optimisée pour la mise en ligne
npm install nom-du-package   # ajouter une librairie
```
