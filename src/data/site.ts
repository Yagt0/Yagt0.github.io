/*
  Informations générales du site.
  Pour ajouter un lien (Discord, dépôt PassForge…), il suffit de le renseigner ici :
  tant qu'une valeur vaut null, le bouton correspondant n'est pas affiché.
*/

export const site = {
  url: 'https://yagt0.github.io',
  title: 'Ewan Lefevre - Alternant Cybersécurité | Portfolio BTS SIO SISR',
  description:
    "Portfolio d'Ewan Lefevre (Yagt0), étudiant en BTS SIO option SISR et alternant en cybersécurité chez SERVAIR. Parcours, mission professionnelle, projets, compétences et veille.",
  updated: '2026-10-04',
};

export const profile = {
  name: 'Ewan Lefevre',
  handle: 'Yagt0',
  email: 'lefewan@gmail.com',
  discordId: 'yagto',
  cv: '/docs/CV_Ewan_Lefevre.pdf',
};

export const links = {
  github: 'https://github.com/Yagt0',
  linkedin: 'https://www.linkedin.com/in/ewan-lefevre',
  rootme: 'https://www.root-me.org/Yagto?lang=fr#cda71a2d9a26ca2485fb0600b3ca38db',
  tryhackme: 'https://tryhackme.com/p/Y4gt0',
  /* Lien d'invitation ou de profil Discord : à renseigner quand il sera disponible. */
  discord: null as string | null,
  /* Dépôt GitHub de PassForge : à renseigner quand il existera. */
  passforgeRepo: null as string | null,
  /* Tableau de synthèse E5 officiel, une fois rempli : déposer le PDF dans public/docs/ puis indiquer son chemin,
     par exemple '/docs/tableau-synthese-e5.pdf'. */
  e5Table: '/docs/tableau-synthese-e5.pdf' as string | null,
};

/* Navigation principale (ordre d'affichage dans l'en-tête et le menu mobile). */
export const nav = {
  before: [
    { href: '/parcours/', label: 'Parcours' },
    { href: '/alternance/', label: 'Alternance', match: ['/alternance/', '/missions/'] },
    { href: '/projets/', label: 'Projets' },
  ],
  veille: { href: '/veille/', label: 'Veille Techno' },
  after: [
    { href: '/competences/', label: 'Compétences', icon: 'award' },
    { href: '/synthese-e5/', label: 'E5' },
  ],
};
