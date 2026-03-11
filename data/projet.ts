/**
 * SOURCE DE VERITE — Donnees centralisees du projet Mon Patrimoine
 *
 * Ce fichier contient toutes les donnees business qui sont referencees
 * dans plusieurs pages du dossier strategique. Modifier ici = coherence partout.
 *
 * Les pages importent ces constantes au lieu de dupliquer les chiffres.
 */

// ─── ENTREPRISE ─────────────────────────────────────────────────
export const ENTREPRISE = {
  nom: "Mon Patrimoine",
  societe: "K PAR K CONSEILS SAS",
  ancienNom: "Cas par Cas Conseil",
  fondatrice: "Sheana Krief",
  dateCreation: "Mi-2024",
  dateLancementProjet: "4 mars 2026",
  siret: "", // A renseigner
  adresse: "Lyon / Villeurbanne",
  email: "sheana@kparkconseils.fr",
  site: "dossier-strategique.vercel.app",
} as const

// ─── SITUATION SHEANA ───────────────────────────────────────────
export const SITUATION_SHEANA = {
  structure: "Fondatrice K PAR K CONSEILS SAS",
  clientsPrestations: [
    { nom: "PASCAL", ca: 1800, detail: "1,5 jours/semaine — accompagnement admin", duree: "Client long terme, potentiel investisseur" },
    { nom: "LTOA Assurances", ca: 1000, detail: "1 jour/semaine — associée en cours de sortie", duree: "Sortie prévue M5" },
  ],
  caExistantMensuel: 2800,
  tempsMonPatrimoine: "2,5 jours/semaine + soirs/WE",
  aideFamille: "Soeur (~10h/sem), mère et frère ponctuellement — rémunérés en perso, hors SAS",
} as const

// ─── CLIENTS PILOTES ────────────────────────────────────────────
export const CLIENTS_PILOTES = [
  {
    nom: "Client A (Dayot)",
    biens: 18,
    statut: "actif" as const,
    type: "MDB + SCI + SNC + nom propre",
    detail: "Pilote actif depuis mars 2026",
  },
  {
    nom: "Client B",
    biens: 4,
    statut: "onboarding" as const,
    type: "Particulier multi-biens",
    detail: "En cours d'onboarding",
  },
  {
    nom: "Client C",
    biens: 50,
    statut: "onboarding" as const,
    type: "Marchand de biens",
    detail: "50+ biens, profil MDB",
  },
] as const

// ─── PRICING ────────────────────────────────────────────────────
export const PLANS_SAAS = [
  {
    nom: "Solo",
    prix: 24,
    biens: "≤ 3",
    stockage: "3 Go",
    recommande: true,
    modules: "Patrimoine + Locatif + Finance + Alertes + Charges + Coffre-fort + Contacts",
    modulesExclus: "Travaux & projets, Multi-structures, Pipeline acquisition, Scénarios, Export comptable, API, Partage partenaires",
    support: "Email 72h",
    onboarding: "Guides + tutoriels + FAQ",
  },
  {
    nom: "Pro",
    prix: 49,
    biens: "≤ 15",
    stockage: "15 Go",
    recommande: false,
    modules: "Tous les modules Solo + Travaux & projets + Partage partenaires",
    modulesExclus: "Multi-structures (SCI/SNC), Pipeline acquisition/revente, Scénarios & simulation, Export comptable, API",
    support: "Email prioritaire 48h",
    onboarding: "3 visios onboarding + support email",
  },
  {
    nom: "Expert",
    prix: 79,
    biens: "Illimité",
    stockage: "50 Go",
    recommande: false,
    modules: "Tous les modules — Multi-structures + Pipeline acquisition/revente + Scénarios + Export comptable + API",
    modulesExclus: "",
    support: "Prioritaire 24h + visio",
    onboarding: "Visios illimitées + support prioritaire",
  },
] as const

export const FORFAIT_LUXE = {
  prix: 299,
  setup: "A partir de 1 500 EUR",
  cible: ["Marchands de biens", "Chefs d'entreprise", "Multi-propriétaires 10+", "Family offices"],
} as const

export const TARIFS_GA = {
  paliers: [
    { palier: "3-5 biens", prix: 89, service: "Quittances, alertes, encaissements, rappels, révisions IRL, MAJ coffre-fort", vs: "-60%" },
    { palier: "6-10 biens", prix: 129, service: "+ Multi-entités + reporting + dossier partenaire", vs: "-71%" },
    { palier: "11-20 biens", prix: 189, service: "+ Suivi projets + préparation bilans SCI", vs: "-78%" },
    { palier: "20+ biens", prix: 259, service: "Tout inclus + priorité support", vs: "-81%" },
  ],
  seuilMinimum: "3 biens",
  onboarding: {
    inclus: true,
    contenu: "Visio d'onboarding + guides + webinaires + notifications intelligentes + support",
  },
} as const

// ─── OBJECTIFS & KPIs ───────────────────────────────────────────
export const OBJECTIFS = {
  m6: {
    clients: 6,
    mrr: 330,
  },
  an1: {
    clientsMonPatrimoine: 18,
    clientsGA: 10,
    caMonPatrimoine: 12_300,
    caExistants: 26_600,
    caTotal: 38_900,
    charges: 8_100,
    remunSheana: 4_800,
    resultatNet: 26_000,
    tresorerie: 34_000,
    mrrM12: 2_040,
  },
  an2: {
    clients: 50,
    caTotal: 80_000,
    mrrCible: 3_000,
  },
} as const

// ─── BUDGET LANCEMENT ───────────────────────────────────────────
export const BUDGET = {
  investissementInitial: 2_965,
  chargesMensuelles: 675,
  budgetAn1: 8_100,
  tresorerieDepart: 8_000,
  categories: {
    juridique: { total: 2_150, detail: "Avocat 900 + SAS 350 + Carte G 500 + RGPD 400" },
    outils: { mensuel: 175, detail: "Claude 20 + Chrome UX 80 + Vercel 20 + Supabase 25 + OCR 30" },
    marketing: { mensuel: 350, detail: "Google Ads 250 + LinkedIn 80 + Canva 20" },
    fonctionnement: { mensuel: 150, detail: "RC Pro 25/mois + Comptable 80 + Banque 15 + Tel 30" },
  },
} as const

// ─── MARCHE ─────────────────────────────────────────────────────
export const MARCHE = {
  marcheLogicielImmoFR: { valeur: "718M€", croissance: "+5%/an", source: "Septeo / études sectorielles 2025" },
  marcheMondial: { valeur: "3,66 Mds USD (2025)", projection: "6,47 Mds USD (2033)", tcac: "7,3%" },
  segmentCloud: "64% des déploiements (SaaS)",
  tam: { valeur: "~420M€", description: "3,5M ménages bailleurs × 10€/mois moyen" },
  sam: { valeur: "~60M€", description: "~500K multi-détenteurs auto-gérés" },
  som: { valeur: "~6-12M€", description: "50-100K multi-détenteurs digitalisés, 3-30 biens" },
  foyersBailleurs: "5,9M",
  sansOutil: "70%",
  deleguentPro: "50% (+9 pts en 3 ans)",
  proprietairesMultiBiens: "2,8M",
  sciFrance: "2,1M",
  phobieAdministrative: "76%",
} as const

// ─── FONDATRICE ─────────────────────────────────────────────────
export const FONDATRICE = {
  formation: "Master Droit Privé — Université Lyon 3",
  ecoleAvocats: "École des Avocats Rhône-Alpes",
  parcours: [
    { periode: "Formation", role: "Secrétaire / assistante juridique en cabinets d'avocats", detail: "Copropriété, transactions, locatif, construction" },
    { periode: "Stage", role: "Stage élève-avocat — Lamy Expertise (PPI)", detail: "6 mois avec experts techniques immo, valeurs vénales/locatives" },
    { periode: "Avocate", role: "Avocate — contentieux construction", detail: "Assurance décennale, suivi chantier, litiges" },
    { periode: "Mentor", role: "Mentorée par entrepreneuse → directrice juridique puis associée courtage assurances", detail: "4 ans d'apprentissage terrain, vision business" },
    { periode: "Mi-2024", role: "Création K PAR K CONSEILS SAS", detail: "Accompagne 1 dirigeant MDB (10+ biens actifs) = 2 ans de R&D terrain" },
  ],
  competences: [
    "Droit immobilier", "Assurance construction", "Gestion locative",
    "Contentieux construction", "Assurance décennale", "Accompagnement MDB",
    "Fiscalité SCI", "RGPD", "Pilotage projet", "IA & automatisation",
  ],
  conviction: "Le propriétaire est le rouage de tout",
  vision: "Plateforme sécurisée patrimoine, vue simplifiée, organiser dès la 1ère étape",
} as const
