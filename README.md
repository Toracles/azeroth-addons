# CloudNine_Ex — Addons for Azeroth

Site vitrine statique français pour Curator OctoWoW et les éditions Octo, Raven et Dev de SpotiWoW. Compatible GitHub Pages, sans compilation.

## Développement

Lancer `node serve.cjs`, puis ouvrir http://127.0.0.1:4173. Les fichiers du site sont à la racine. Les liens de téléchargement pointent sur les dernières releases GitHub.

## Médias

- `assets/curator-booster.webp` : capture en jeu issue du dépôt Curator OctoWoW.
- `assets/curator-trailer.mp4` : trailer fourni dans le workspace, chargé uniquement à l’ouverture du lecteur.
- `assets/hero.png` : illustration originale générée avec l’outil intégré ImageGen. Prompt : paysage fantasy nocturne peint, arche de pierre monumentale, tours médiévales, vallée brumeuse, montagnes bleues et lumière arcanique dorée ; composition large, espace sombre à gauche, sans texte ni logo.

Les marques World of Warcraft et Spotify appartiennent à leurs détenteurs respectifs. Ce site communautaire est indépendant.


## Langues et logos

Le sélecteur FR / EN relie `index.html` et `en.html`. Après une modification du contenu français ou des traductions dans `update-pages.cjs`, exécuter `node update-pages.cjs` pour régénérer la page anglaise. Le trailer original est partagé entre les deux langues.

Les tuiles utilisent le logo Curator fourni dans le workspace et le logo SpotiWoW issu de `Toracles/SpotiWoW-Dev/companion/SpotiWoW-Dev.png`.
