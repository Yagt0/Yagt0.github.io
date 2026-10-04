# Portfolio (Yagt0)

Portfolio professionnel pour le BTS SIO SISR (épreuve E5), destiné à GitHub Pages : https://yagt0.github.io

Site statique construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com). Direction artistique calquée sur [trxtxbook.com](https://trxtxbook.com) (police JetBrains Mono, fond `#0a0a0f`, cartes `#1a1a1f`), accent cyan. Pas de backend, pas de base de données, pas de cookie.

## Lancer le site sur son PC

Il faut [Node.js](https://nodejs.org) 22 ou plus récent.

```bash
npm install        # une seule fois
npm run dev        # aperçu en direct sur http://localhost:4321
npm run build      # génère le site final dans dist/
npm run preview    # affiche le site final généré
npm run cv         # régénère le CV PDF à partir de cv/cv.html (Chrome ou Edge requis)
```

## Mettre le site en ligne (GitHub Pages)

Le dépôt `Yagt0.github.io` existe déjà avec l'ancien site. Pour le remplacer :

1. Cloner le dépôt, puis (conseillé) garder l'ancien site dans une branche : `git branch ancien-site`.
2. Supprimer les anciens fichiers (`index.html`, `style.css`, `script.js`, `avatar.png`, `rootme.png`, `assets/`) et copier à la place **tout le contenu de ce dossier** (y compris le dossier caché `.github/`).
3. Sur GitHub : **Settings > Pages > Build and deployment > Source = « GitHub Actions »**.
4. Commiter et pousser sur `main`. Le workflow `.github/workflows/deploy.yml` construit et publie le site (onglet **Actions** pour suivre). Compter une à deux minutes.

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| Changer un lien (GitHub, LinkedIn, Root-Me, TryHackMe), l'e-mail | `src/data/site.ts` |
| Ajouter le lien Discord | `src/data/site.ts` → `links.discord` (le bouton apparaît tout seul) |
| Ajouter le dépôt PassForge | `src/data/site.ts` → `links.passforgeRepo` (le bouton GitHub apparaît tout seul) |
| Publier le tableau de synthèse E5 | déposer le PDF dans `public/docs/`, puis renseigner `links.e5Table` dans `src/data/site.ts` |
| Ajouter ou modifier un article de veille | `src/data/veille.ts` |
| Indiquer qu'un article de veille a été lu | `src/data/veille.ts` → passer `status` de `'propose'` à `'consulte'` |
| Modifier les cartes de projets | `src/data/realisations.ts` |
| Modifier le CV | éditer `cv/cv.html`, puis `npm run cv` (écrit `public/docs/CV_Ewan_Lefevre.pdf`) |
| Mettre à jour les stats Root-Me / TryHackMe | `src/data/stats.ts` (chiffres + date du relevé) |
| Modifier une page | `src/pages/…` (un fichier `.astro` par page) |
| Couleurs du thème clair/sombre | `src/styles/global.css` ; le reste est en classes Tailwind dans les composants |
| Sections de l'accueil | `src/components/home/` (hero, stats, formation, trajectoire, contact) |

## Structure

```
cv/                source du CV (cv.html) et script de génération du PDF
public/            fichiers servis tels quels (CV, images, logos, favicon)
src/data/          contenus modifiables (liens, veille, réalisations, stats)
src/components/    en-tête, pied de page, cartes, icônes…
src/layouts/       gabarit commun à toutes les pages
src/pages/         une page = un fichier (l'adresse suit le nom du fichier)
.github/workflows/ déploiement automatique sur GitHub Pages
```

## À compléter ou vérifier

- **Discord** : ajouter le lien quand il est disponible (seul l'identifiant `yagto` est affiché, avec un bouton « Copier »).
- **PassForge** : ajouter l'URL du dépôt quand il existera.
- **Tableau de synthèse E5** : la page `/synthese-e5/` réserve l'emplacement. Aucun tableau n'est inventé en attendant le document officiel.
- **Veille** : les 12 articles sont marqués « Proposé ». Passer en « Consulté » ceux qui ont réellement été lus.
- **Mentions légales** : relire la page `/mentions-legales/` (éditeur, contact) et l'adapter si besoin.
- **CV** : voir la section suivante.

## Le CV publié

Le CV publié (`public/docs/CV_Ewan_Lefevre.pdf`) est un **nouveau CV** réalisé dans la direction artistique du site, à partir des informations du prompt et du CV d'origine. Il ne contient **ni adresse postale, ni numéro de téléphone, ni ville de résidence** (les communes des employeurs proches du domicile ont aussi été retirées). Le CV d'origine n'est pas modifié et n'est pas publié.

À vérifier par Ewan dans `cv/cv.html` : les intitulés des expériences, la ligne « Autres expériences » et la mention du permis B.
