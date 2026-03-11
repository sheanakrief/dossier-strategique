/**
 * SOURCE DE VERITE — Donnees centralisees du projet Parkimmo
 *
 * Ce fichier contient toutes les donnees business qui sont referencees
 * dans plusieurs pages du dossier strategique. Modifier ici = coherence partout.
 *
 * Les pages importent ces constantes au lieu de dupliquer les chiffres.
 */

// ─── ENTREPRISE ─────────────────────────────────────────────────
export const ENTREPRISE = {
  nom: "Parkimmo",
  societe: "K PAR K CONSEILS SAS",
  ancienNom: "Cas par Cas Conseil",
  fondatrice: "Sheana Krief",
  dateCreation: "Mi-2024",
  dateLancementProjet: "4 mars 2026",
  siret: "", // A renseigner
  adresse: "Lyon / Villeurbanne",
  email: "sheana@kparkconseils.fr",
  site: "parkimmo.io",
} as const

// ─── SITUATION SHEANA ───────────────────────────────────────────
export const SITUATION_SHEANA = {
  structure: "Fondatrice K PAR K CONSEILS SAS",
  clientsPrestations: [
    { nom: "PASCAL", ca: 1800, detail: "1,5 jours/semaine — accompagnement admin", duree: "Client long terme, potentiel investisseur" },
    { nom: "LTOA Assurances", ca: 600, detail: "Quelques heures/semaine — associée en cours de sortie", duree: "Sortie prévue M5" },
  ],
  caExistantMensuel: 2400,
  tempsParkimmo: "2,5 jours/semaine + soirs/WE",
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
    nom: "Essentiel",
    prix: 19,
    biens: "≤ 3",
    stockage: "3 Go",
    recommande: false,
    modules: "Patrimoine + Locatif + Finance + Alertes + Charges + Coffre-fort + Contacts",
    modulesExclus: "Multi-structures, Pipeline acquisition, Scénarios, Export comptable, Partage partenaires",
    support: "Email 72h",
    onboarding: "99€ (offert avec GA)",
    onboardingPrix: 99,
  },
  {
    nom: "Expert",
    prix: 49,
    biens: "≤ 15",
    stockage: "15 Go",
    recommande: true,
    modules: "Tous les modules Essentiel + Travaux & projets + Partage partenaires + Multi-entités",
    modulesExclus: "Pipeline acquisition/revente, Scénarios & simulation, Export comptable",
    support: "Email prioritaire 48h",
    onboarding: "49€ (offert avec GA)",
    onboardingPrix: 49,
  },
  {
    nom: "Pro",
    prix: 79,
    biens: "Illimité",
    stockage: "50 Go",
    recommande: false,
    modules: "Tous les modules — Multi-structures + Pipeline acquisition/revente + Scénarios + Export comptable + API",
    modulesExclus: "",
    support: "Prioritaire 24h + visio",
    onboarding: "Offert",
    onboardingPrix: 0,
  },
] as const

export const TARIFS_GA = {
  paliers: [
    { palier: "Essentiel (≤ 3 biens)", prix: 39, planAssocie: "Essentiel", service: "Quittances, alertes, encaissements, rappels, révisions IRL" },
    { palier: "Expert (≤ 15 biens)", prix: 89, planAssocie: "Expert", service: "+ Multi-entités + reporting + dossier partenaire" },
    { palier: "Pro (illimité)", prix: 149, planAssocie: "Pro", service: "Tout inclus + priorité support + suivi projets" },
  ],
  seuilMinimum: "Disponible sur tous les plans",
  onboarding: {
    inclus: true,
    contenu: "Onboarding TOUJOURS OFFERT avec GA — visio + guides + support",
  },
} as const

// ─── OBJECTIFS & KPIs ───────────────────────────────────────────
export const OBJECTIFS = {
  m6: {
    clients: 6,
    mrr: 330,
  },
  an1: {
    clientsParkimmo: 18,
    clientsGA: 10,
    caParkimmo: 12_300,
    caExistants: 22_800,
    caTotal: 35_100,
    charges: 8_100,
    remunSheana: 4_800,
    resultatNet: 22_200,
    tresorerie: 30_200,
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
