/*
  Réalisations présentées sur l'accueil et la page Projets.
  status : 'fait' | 'en-cours' | 'prevu'      kind : 'alternance' | 'scolaire' | 'perso'
*/

export interface Realisation {
  slug: string;
  href: string;
  title: string;
  summary: string;
  kind: 'alternance' | 'scolaire' | 'perso';
  status: 'fait' | 'en-cours' | 'prevu';
  statusLabel: string;
  tags: string[];
  image: string;
  imageFit?: 'cover' | 'contain';
  icon: 'shield' | 'network' | 'key';
}

export const realisations: Realisation[] = [
  {
    slug: 'phishing',
    href: '/missions/analyse-phishing/',
    title: 'Analyse de Campagne Phishing',
    summary:
      "Mission en alternance chez SERVAIR : analyse des données d'une campagne de sensibilisation et script Python d'aide à l'analyse, avec pseudonymisation des utilisateurs.",
    kind: 'alternance',
    status: 'fait',
    statusLabel: 'Script testé',
    tags: ['Python', 'Analyse de données', 'Pseudonymisation'],
    image: '/images/projets/phishing.svg',
    icon: 'shield',
  },
  {
    slug: 'hsp',
    href: '/projets/hsp/',
    title: 'HSP : Réseau Hospitalier Sécurisé',
    summary:
      "Projet de groupe BTS (Team Leader) : maquette réseau d'un hôpital sous Packet Tracer avec VLAN, VTP, trunk, routage inter-VLAN et ACL.",
    kind: 'scolaire',
    status: 'en-cours',
    statusLabel: 'En cours',
    tags: ['Packet Tracer', 'VLAN', 'ACL', 'GanttProject'],
    image: '/images/projets/hsp-architecture.webp',
    imageFit: 'contain',
    icon: 'network',
  },
  {
    slug: 'passforge',
    href: '/projets/passforge/',
    title: 'PassForge',
    summary:
      'Projet personnel en Python : générateur de mots de passe en terminal, avec longueur et jeux de caractères au choix et estimation de robustesse.',
    kind: 'perso',
    status: 'en-cours',
    statusLabel: 'En amélioration',
    tags: ['Python', 'CLI'],
    image: '/images/projets/passforge.webp',
    icon: 'key',
  },
];
