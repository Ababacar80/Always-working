# 5. Glossaire — les mots qu'on va utiliser tout le temps

Pas besoin de tout retenir par cœur, mais avoir une idée de chaque mot t'évite de te sentir perdue en lisant du code ou une doc.

## Node.js
Un programme installé sur l'ordinateur qui permet d'exécuter du JavaScript **en dehors du navigateur** (sur ton PC directement, dans le terminal). Sans Node, on ne peut pas faire tourner un projet Next.js en local. C'est la base de tout.

## npm (Node Package Manager)
L'outil (installé avec Node) qui télécharge et gère les "librairies" (du code déjà écrit par d'autres, qu'on réutilise au lieu de tout recoder). Exemple : `npm install` télécharge tout ce dont le projet a besoin.

## npx
Une commande qui permet de lancer un outil sans l'installer définitivement sur l'ordinateur. On l'utilise une seule fois, pour créer le projet (`npx create-next-app`).

## package.json
Le "carnet d'identité" du projet. Il liste :
- le nom du projet
- toutes les librairies utilisées (React, Next.js, Tailwind...)
- les commandes disponibles (`npm run dev`, etc.)

On n'a presque jamais besoin de le modifier à la main.

## node_modules/
Le dossier où toutes les librairies téléchargées par npm sont stockées physiquement. Il peut contenir des milliers de fichiers — **on n'y touche jamais**, on ne le regarde même pas. Si jamais il est supprimé par erreur, `npm install` le recrée automatiquement.

## React
Une librairie JavaScript (créée par Facebook/Meta) pour construire des interfaces en découpant l'écran en petits blocs réutilisables appelés **composants**. Next.js est construit par-dessus React — donc Next = React + des fonctionnalités en plus (pages automatiques, performance...).

## JSX
La syntaxe utilisée dans les fichiers `.jsx`/`.js` de React/Next : ça ressemble à du HTML, mais c'est en fait écrit à l'intérieur du JavaScript. Exemple :

```jsx
const message = <h1>Bonjour</h1>;
```

Ça permet de mélanger la logique et l'affichage (HTML) dans le même fichier, sans jongler entre plusieurs fichiers `.html` / `.js` séparés comme avant.

## TypeScript / TSX
TypeScript est une version de JavaScript à laquelle on ajoute des **types** : pour chaque donnée (un texte, un nombre, une liste, les infos attendues par un composant...), on précise sa nature exacte. Exemple :

```ts
let age: number = 25;       // "age" doit toujours être un nombre
let nom: string = "Ababacar"; // "nom" doit toujours être du texte
```

**Utilité concrète** : si par erreur on essaie de mettre du texte dans `age`, ou d'appeler un composant en oubliant une info qu'il attend, VS Code souligne l'erreur en rouge **immédiatement**, avant même de lancer le site dans le navigateur. Ça évite énormément de bugs bêtes, surtout quand un projet grandit et qu'on ne se souvient plus par cœur de ce qu'attend chaque composant.

Un fichier `.tsx` = un fichier TypeScript qui contient aussi du JSX (donc de l'affichage). Un fichier `.ts` = du TypeScript "pur", sans affichage (souvent des fonctions utilitaires, des types partagés, des appels à une base de données...). **Ababacar travaille en `.tsx`/`.ts`, pas en `.jsx`/`.js`** — c'est la convention à suivre sur tous ses projets.

## Composant
Un morceau d'interface réutilisable (un bouton, une carte, un header...), écrit comme une fonction. **Utilité concrète** : au lieu de copier-coller le même bloc HTML 10 fois (par exemple 10 cartes de service), on écrit le bloc une seule fois et on l'appelle 10 fois avec des infos différentes. Ça évite les erreurs de copier-coller et ça permet de changer le design à un seul endroit pour que ça se répercute partout.

## Props (propriétés)
Les informations qu'on donne à un composant pour qu'il affiche des choses différentes à chaque utilisation. Exemple : le composant `ServiceCard` reçoit `titre` et `description` en props, ce qui lui permet d'afficher "Nettoyage industriel" une fois, "Fin de chantier" une autre fois — avec le même bloc de code.

## Tailwind CSS
Une manière d'écrire le CSS directement dans le HTML/JSX, avec des classes courtes toutes prêtes, au lieu d'écrire un fichier `.css` séparé avec des noms de classes personnalisés.

Exemple classique (CSS traditionnel) :
```css
.bouton {
  background-color: blue;
  padding: 10px;
  border-radius: 8px;
}
```
```html
<button class="bouton">Cliquer</button>
```

Avec Tailwind, on écrit directement :
```jsx
<button className="bg-blue-500 p-2 rounded-lg">Cliquer</button>
```

**Utilité concrète** : plus besoin de jongler entre un fichier CSS et le HTML, ni d'inventer des noms de classes (`.bouton`, `.bouton2`, `.bouton-final`...). Chaque classe Tailwind a un nom qui décrit directement ce qu'elle fait (`bg-blue-500` = fond bleu, `p-2` = padding, `rounded-lg` = coins arrondis). C'est plus rapide une fois qu'on connaît les classes de base, et le design reste cohérent sur tout le site car tout le monde utilise le même système de valeurs (mêmes tailles, mêmes couleurs).

**Sur les projets d'Ababacar (Tailwind v4)** : au lieu de couleurs par défaut (`bg-blue-500`), on définit des couleurs personnalisées dans `app/globals.css` (bloc `@theme`), puis on les utilise via des variables : `bg-[var(--color-primary)]`. Voir `04-methode-de-travail.md` pour l'exemple complet. Avantage : changer une couleur à un seul endroit met à jour tout le site.

## `src/` (source) — convention Next.js par défaut, NON utilisée par Ababacar
Dans beaucoup de tutoriels et projets Next.js, tout le code (`app/`, `components/`...) est rangé dans un dossier `src/` à la racine, pour bien le séparer des fichiers de configuration. **Sur les projets d'Ababacar, ce dossier `src/` n'existe pas** : `app/`, `components/`, `data/` et `lib/` sont directement à la racine du projet (voir `02-architecture.md`). Si tu vois ce mot ailleurs (docs officielles, tutoriels), sache que c'est une variante que nos projets n'utilisent pas.

## `public/`
Le dossier pour tout ce qui doit être accessible tel quel par une URL directe : images, logo, favicon, PDF... Tout ce qui est dans `public/logo.png` devient accessible via `monsite.com/logo.png`.

## Route / Routing
Le "routing", c'est le système qui décide quelle page afficher selon l'URL tapée (`/`, `/services`, `/contact`...). Dans Next.js App Router, le routing se fait automatiquement selon les noms des dossiers dans `app/` (voir `03-pages-et-routing.md`) — on n'a pas besoin de configurer ça à la main comme dans d'autres systèmes.

## Layout
Le squelette commun à toutes les pages (header + footer par exemple), dans lequel le contenu spécifique de chaque page vient s'insérer. Voir `02-architecture.md`.

## Route group `(...)` et dossier dynamique `[...]` — pas utilisés sur Always Working
Deux patterns qu'on croise sur d'autres projets d'Ababacar (ex: une boutique en ligne avec espace admin), mais **inutiles sur Always Working** pour l'instant — pas de catalogue produits, pas d'espace admin. Détail dans la section "Pour plus tard" de `02-architecture.md`, à connaître mais pas à utiliser ici.

## Composant serveur vs composant client
Par défaut dans Next.js App Router, **tous les composants s'exécutent côté serveur** : le HTML est généré avant même d'arriver dans le navigateur du visiteur (plus rapide, meilleur pour le référencement). Mais certaines choses ont besoin de s'exécuter dans le navigateur : réagir à un clic, savoir sur quelle page on est en temps réel, utiliser des animations interactives...

Pour ça, on ajoute `"use client"` tout en haut du fichier. Ça dit à Next.js "ce composant a besoin du navigateur, exécute-le côté client". Exemple : un composant qui utilise `usePathname()` pour savoir en temps réel sur quelle page on est (utile sur d'autres projets d'Ababacar pour cacher le Header/Footer sur un espace admin — pas nécessaire sur Always Working, voir `02-architecture.md`).

**Règle pratique** : par défaut on n'ajoute rien (composant serveur). On ajoute `"use client"` seulement quand une erreur ou un besoin d'interactivité (clic, formulaire, état qui change) l'exige.

## Colocation
Le fait de ranger un fichier à côté du fichier qui l'utilise, plutôt que dans un dossier partagé (`components/`). Sur les projets d'Ababacar : un composant utilisé sur une seule page (ex: `BoutiqueClient.tsx` à côté de `app/boutique/page.tsx`) est "colocalisé" avec sa page, alors qu'un composant réutilisé sur plusieurs pages va dans `components/`. Voir `02-architecture.md`.

## Déploiement
L'étape où on met le site en ligne pour de vrai, accessible à tout le monde via un nom de domaine (ex: alwaysworking.com), généralement via un service comme Vercel (le créateur de Next.js, qui héberge gratuitement les projets Next.js les plus simples).
