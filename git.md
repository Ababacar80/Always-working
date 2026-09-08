# Git — le strict minimum pour travailler sur ce projet

Ta branche s'appelle **`khadija`**. Tu travailles toujours dessus, jamais sur `main`.

## Une seule fois : récupérer le projet

```bash
git clone https://github.com/Ababacar80/Always-working.git
cd Always-working
```

## Se mettre sur ta branche

À chaque fois que tu ouvres le projet, avant de commencer à travailler :

```bash
git switch khadija
```

## Le cycle à répéter à chaque fois que tu veux sauvegarder

Tu modifies des fichiers dans VS Code, puis dans le terminal :

```bash
git add .
```
→ prépare tout ce que tu as changé

```bash
git commit -m "explique ici ce que tu as fait"
```
→ enregistre les changements avec un petit message. Exemple : `git commit -m "Ajout de la page contact"`

```bash
git push
```
→ envoie tes changements sur GitHub

**C'est tout.** `add` → `commit -m "..."` → `push`, dans cet ordre, à chaque fois.

## Si `git push` refuse la première fois

Tape plutôt :

```bash
git push -u origin khadija
```

Une seule fois (le tout premier push). Après ça, `git push` tout court suffira.

## Une commande utile pour vérifier

```bash
git status
```

Te dit ce qui a changé et si tout est bien sauvegardé. Utilise-la si tu n'es pas sûre de l'état actuel.

## Si tu vois un message d'erreur

Ne force rien, n'essaie pas de "réparer" avec d'autres commandes au hasard — copie le message d'erreur et demande à Ababacar avant de continuer.
