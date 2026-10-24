/*
  Veille technologique.

  status :
    'propose'  : article sélectionné et vérifié (titre, date, URL), lecture non attestée ;
    'consulte' : article dont Ewan confirme la lecture.
  Pour attester une lecture, passer status à 'consulte' (et éventuellement renseigner readOn).

  Titres et dates vérifiés sur les pages d'origine le 4 octobre 2026.
*/

export type SourceId = 'cert-fr' | 'thn' | 'krebs' | 'darkreading';

export const sources: Record<
  SourceId,
  { name: string; url: string; logo: string; fit: 'contain' | 'cover'; lang: string; description: string }
> = {
  'cert-fr': {
    name: 'CERT-FR',
    url: 'https://www.cert.ssi.gouv.fr/',
    logo: '/images/logos/cert-fr.webp',
    fit: 'contain',
    lang: 'FR',
    description: "Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques, rattaché à l'ANSSI.",
  },
  thn: {
    name: 'The Hacker News',
    url: 'https://thehackernews.com/',
    logo: '/images/logos/the-hacker-news.webp',
    fit: 'cover',
    lang: 'EN',
    description: 'Média d’actualité en cybersécurité : vulnérabilités, campagnes et correctifs.',
  },
  krebs: {
    name: 'Krebs on Security',
    url: 'https://krebsonsecurity.com/',
    logo: '/images/logos/krebs-on-security.webp',
    fit: 'cover',
    lang: 'EN',
    description: 'Blog d’enquête du journaliste Brian Krebs sur la cybercriminalité et les correctifs.',
  },
  darkreading: {
    name: 'Dark Reading',
    url: 'https://www.darkreading.com/',
    logo: '/images/logos/dark-reading.webp',
    fit: 'cover',
    lang: 'EN',
    description: 'Média professionnel consacré à la sécurité des systèmes d’information.',
  },
};

export interface Article {
  title: string;
  date: string; // AAAA-MM-JJ
  source: SourceId;
  url: string;
  ref?: string;
  summary: string;
  interest: string;
  topics: string[];
  status: 'propose' | 'consulte';
  readOn?: string;
}

export const articles: Article[] = [
  {
    title: "Warlock Exploits SharePoint Flaws to Disable Security Tools and Deploy Ransomware",
    date: '2026-10-03',
    source: 'thn',
    url: 'https://thehackernews.com/2026/10/warlock-exploits-sharepoint-flaws-to.html',
    summary:
      "Le groupe Warlock exploite des failles SharePoint pour déposer des web shells et voler les clés machine ASP.NET. Il désactive ensuite les outils de sécurité via un pilote vulnérable, puis déploie un rançongiciel sur des dizaines de postes en passant par le partage SYSVOL du domaine.",
    interest:
      "Montre l'enchaînement complet d'une attaque sur une infrastructure Windows : serveur exposé, élévation, neutralisation de l'EDR, puis propagation par Active Directory.",
    topics: ['SharePoint', 'Rançongiciel', 'Active Directory'],
    status: 'propose',
  },
  {
    title: 'GitLab Patches Critical 9.9 AI Gateway Flaw Allowing Command Execution on Self-Hosted Servers',
    date: '2026-10-02',
    source: 'thn',
    url: 'https://thehackernews.com/2026/10/gitlab-patches-critical-self-hosted-ai.html',
    ref: 'CVE-2026-90970',
    summary:
      "GitLab corrige une vulnérabilité critique (CVSS 9.9) dans l'AI Gateway auto-hébergée : un utilisateur authentifié peut sortir du modèle de prompt et exécuter des commandes sur le serveur. Pas de contournement, mise à jour requise.",
    interest:
      'Rappelle que les nouvelles briques (ici l’IA) intégrées à des outils internes auto-hébergés élargissent la surface d’attaque et doivent suivre le cycle de correctifs.',
    topics: ['GitLab', 'Exécution de code', 'Correctif'],
    status: 'propose',
  },
  {
    title: 'Critical FortiMail Zero-Day Flaw Exploited in Attacks Allows Unauthenticated Arbitrary File Writes',
    date: '2026-10-02',
    source: 'thn',
    url: 'https://thehackernews.com/2026/10/critical-fortimail-zero-day-flaw.html',
    ref: 'CVE-2026-104286',
    summary:
      "Une faille zero-day de Fortinet FortiMail (CVSS 9.8) permet à un attaquant non authentifié d'écrire des fichiers arbitraires. Elle est exploitée et ajoutée au catalogue KEV de la CISA ; Fortinet recommande de corriger et de restreindre l'accès à l'interface d'administration.",
    interest:
      "Les passerelles de messagerie sont exposées sur Internet par nature : un exemple concret de l'importance de cloisonner les interfaces d'administration.",
    topics: ['Messagerie', 'Zero-day', 'Fortinet'],
    status: 'propose',
  },
  {
    title: 'Dual NetScaler Zero-Days Trigger Chaos for Citrix Customers',
    date: '2026-09-29',
    source: 'darkreading',
    url: 'https://www.darkreading.com/vulnerabilities-threats/netscaler-zero-days-chaos-citrix',
    ref: 'CVE-2026-88771, CVE-2026-88772',
    summary:
      "Citrix a publié deux vulnérabilités critiques (CVSS 9.5) dans NetScaler ADC et Gateway après plusieurs jours de signalements d'exploitation. Elles touchent les configurations par défaut et peuvent mener à une exécution de code à distance.",
    interest:
      "Les équipements d'accès distant sont une cible prioritaire : l'article illustre le délai dangereux entre premières exploitations et publication du correctif.",
    topics: ['Citrix', 'Accès distant', 'Zero-day'],
    status: 'propose',
  },
  {
    title: 'South Africa Seeks Help After Cyberattack Targets Air Traffic Control',
    date: '2026-09-30',
    source: 'darkreading',
    url: 'https://www.darkreading.com/cyberattacks-data-breaches/south-africa-help-cyberattack-air-traffic-control',
    summary:
      "L'opérateur sud-africain du contrôle aérien (ATNS) a détecté un logiciel malveillant lié à un rançongiciel dans un réseau OT servant aux opérations météo. Il sollicite des prestataires de forensique pour enquêter, ainsi que sur un possible vol de données interne.",
    interest:
      "Concerne le secteur aérien et les réseaux industriels (OT) : la segmentation entre IT et OT et la détection jouent ici un rôle central.",
    topics: ['Aérien', 'OT', 'Rançongiciel'],
    status: 'propose',
  },
  {
    title: 'Multiples vulnérabilités dans Citrix NetScaler ADC et Gateway',
    date: '2026-09-28',
    source: 'cert-fr',
    url: 'https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-011/',
    ref: 'CERTFR-2026-ALE-011',
    summary:
      "Alerte du CERT-FR : plusieurs vulnérabilités permettent une exécution de code arbitraire et un déni de service à distance. Des exploitations ont été observées avant la publication des correctifs, et des preuves de concept sont publiques.",
    interest:
      "Le point de vue officiel français sur la même faille que l'article de Dark Reading : utile pour comparer les sources et retenir les mesures recommandées.",
    topics: ['Citrix', 'Alerte', 'Correctif'],
    status: 'propose',
  },
  {
    title: 'Roundcube Pre-Auth SQL Injection Flaw Actively Exploited in the Wild',
    date: '2026-09-25',
    source: 'thn',
    url: 'https://thehackernews.com/2026/09/roundcube-pre-auth-sql-injection-flaw.html',
    ref: 'CVE-2026-48842',
    summary:
      "Une injection SQL sans authentification dans un greffon de Roundcube Webmail peut exposer des identifiants et des messages. Le correctif existe depuis mai 2026, mais l'exploitation se poursuit sur les serveurs non mis à jour.",
    interest:
      'Illustre le risque des correctifs non appliqués : la faille est connue et corrigée depuis des mois, pourtant encore exploitée.',
    topics: ['Webmail', 'Injection SQL', 'Gestion des correctifs'],
    status: 'propose',
  },
  {
    title: 'Microsoft Plugs Nearly 1,000 Security Holes',
    date: '2026-09-08',
    source: 'krebs',
    url: 'https://krebsonsecurity.com/2026/09/microsoft-plugs-nearly-1000-security-holes/',
    summary:
      "Microsoft publie sa plus grosse vague de correctifs à ce jour : au moins 974 vulnérabilités, dont 113 critiques et deux zero-days déjà exploités, touchant notamment Windows, Windows Server et Exchange.",
    interest:
      "Donne la mesure du travail de gestion des mises à jour dans un parc Windows et de la nécessité de prioriser les correctifs.",
    topics: ['Windows', 'Patch Tuesday', 'Exchange'],
    status: 'propose',
  },
  {
    title: 'Multiples vulnérabilités dans SonicWall Secure Mobile Access',
    date: '2026-09-02',
    source: 'cert-fr',
    url: 'https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-009/',
    ref: 'CERTFR-2026-ALE-009',
    summary:
      "Deux vulnérabilités des équipements SonicWall SMA1000, activement exploitées, permettent une exécution de code et une SSRF. Au-delà du correctif, le CERT-FR recommande de réinstaller le système et de renouveler tous les mots de passe et secrets TOTP.",
    interest:
      "Montre qu'un correctif ne suffit pas toujours : après une compromission possible, il faut aussi reconstruire et renouveler les secrets.",
    topics: ['VPN', 'Alerte', 'Réponse à incident'],
    status: 'propose',
  },
  {
    title: "Two Alleged ‘TeamPCP’ Hackers Arrested in Australia",
    date: '2026-08-27',
    source: 'krebs',
    url: 'https://krebsonsecurity.com/2026/08/two-alleged-teampcp-hackers-arrested-in-australia/',
    summary:
      "Deux suspects liés au groupe TeamPCP ont été arrêtés en Australie. Le groupe est accusé d'avoir injecté du code malveillant dans de nombreux outils open source à l'aide d'un ver volant les identifiants des développeurs.",
    interest:
      "Illustre les attaques sur la chaîne d'approvisionnement logicielle : une dépendance compromise peut atteindre l'infrastructure de milliers d'organisations.",
    topics: ['Supply chain', 'Open source', 'Cybercriminalité'],
    status: 'propose',
  },
  {
    title: 'Multiples vulnérabilités dans Microsoft Sharepoint',
    date: '2026-07-22',
    source: 'cert-fr',
    url: 'https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-008/',
    ref: 'CERTFR-2026-ALE-008',
    summary:
      "Deux vulnérabilités de SharePoint Server permettent une exécution de code à distance, dont une activement exploitée. En cas de compromission, le CERT-FR recommande de renouveler les clés machine ASP.NET, sans quoi l'attaquant peut revenir après la mise à jour.",
    interest:
      "Le contexte des attaques Warlock d'octobre : relier une alerte officielle à son exploitation réelle quelques semaines plus tard.",
    topics: ['SharePoint', 'Alerte', 'Exécution de code'],
    status: 'propose',
  },
  {
    title: 'Vulnérabilité dans F5 BIG-IP Access Policy Manager',
    date: '2026-03-31',
    source: 'cert-fr',
    url: 'https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-004/',
    ref: 'CERTFR-2026-ALE-004',
    summary:
      "Une vulnérabilité de F5 BIG-IP APM, exploitée depuis fin mars 2026, permet une exécution de code à distance. L'alerte détaille les versions concernées et des indicateurs de compromission à rechercher sur les équipements.",
    interest:
      "Un exemple d'alerte qui ne se limite pas au correctif : elle fournit des éléments concrets pour vérifier si l'équipement a déjà été compromis.",
    topics: ['F5', 'Accès distant', 'Indicateurs de compromission'],
    status: 'propose',
  },
];
