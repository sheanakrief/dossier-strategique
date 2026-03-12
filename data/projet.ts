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
  fondatrice: "Sheana Krief",
  dateCreation: "Mi-2024",
  dateLancementProjet: "4 mars 2026",
  siret: "", // A renseigner
  adresse: "Lyon / Villeurbanne",
  email: "sheana@kparkconseils.fr",
  site: "parkimmo.app",
} as const

// ─── SITUATION SHEANA ───────────────────────────────────────────
export const SITUATION_SHEANA = {
  structure: "Fondatrice K PAR K CONSEILS SAS",
  tempsParkimmo: "Temps plein dédié au projet",
  aideFamille: "Soeur (~10h/sem), mère et frère ponctuellement — rémunérés en perso, hors SAS",
} as const

// ─── CLIENTS PILOTES ────────────────────────────────────────────
export const CLIENTS_PILOTES = [
  {
    nom: "Client A (Dayot)",
    biens: 19,
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
    nom: "Découverte",
    prix: 0,
    biens: "1",
    stockage: "500 Mo",
    recommande: false,
    modules: "Patrimoine + Prêts (basique)",
    modulesExclus: "Locatif, Finance, Alertes, Charges, Coffre-fort, Contacts, Travaux, Multi-structures, Acquisition",
    support: "FAQ / communauté",
    onboarding: "—",
    onboardingPrix: 0,
  },
  {
    nom: "Essentiel",
    prix: 19,
    biens: "≤ 3",
    stockage: "3 Go",
    recommande: false,
    modules: "Patrimoine + Locatif + Finance + Alertes + Charges + Documents",
    modulesExclus: "Coffre-fort, Contacts, Travaux, Multi-structures, Acquisition, Export comptable",
    support: "Email 72h",
    onboarding: "99€",
    onboardingPrix: 99,
  },
  {
    nom: "Pro",
    prix: 39,
    biens: "≤ 15",
    stockage: "15 Go",
    recommande: false,
    modules: "Tous les modules Essentiel + Coffre-fort, Contacts, Travaux, Partage partenaires",
    modulesExclus: "Multi-structures, Pipeline acquisition, Scénarios, Export comptable",
    support: "Email prioritaire 48h",
    onboarding: "49€",
    onboardingPrix: 49,
  },
  {
    nom: "Expert",
    prix: 59,
    biens: "Illimité",
    stockage: "50 Go",
    recommande: true,
    modules: "Tous les modules — Multi-structures + Pipeline acquisition/revente + Scénarios + Export comptable",
    modulesExclus: "",
    support: "Prioritaire 24h + visio",
    onboarding: "Offert",
    onboardingPrix: 0,
  },
] as const

// ─── ACCOMPAGNEMENT (3 niveaux) ─────────────────────────────────
export const NIVEAUX_ACCOMPAGNEMENT = {
  niveau1: {
    nom: "Autonomie totale",
    prix: "Inclus",
    description: "Le propriétaire gère tout seul via l'application",
    plans: "Tous les plans",
  },
  niveau2: {
    nom: "Support Juridique & Gestionnaire",
    prixParBien: [
      { tranche: "1-3 biens", prix: 15 },
      { tranche: "4-10 biens", prix: 12 },
      { tranche: "11+ biens", prix: 10 },
    ],
    description: "Conseil juridique, aide rédaction bail, accompagnement révision IRL, mise en relation réseau pros",
    plans: "Pro et Expert",
  },
  niveau3: {
    nom: "Gestion Locative Parkimmo (Carte G)",
    tauxLoyers: 0.04, // 4% HT
    tauxLoyersPlus20: 0.035, // 3,5% HT au-delà de 20 biens
    minimum: 200,
    description: "Mandat de gestion locative, encaissement, quittances, relances, entrées/sorties, reporting",
    plans: "Expert uniquement",
    disponibilite: "Juillet 2026 (obtention Carte G en cours)",
  },
} as const

// ─── OBJECTIFS & KPIs ───────────────────────────────────────────
export const OBJECTIFS = {
  m6: {
    inscritsFree: 400,
    clientsPayants: 17,
    clientsGA: 2,
    mrr: 756,
  },
  an1: {
    inscritsFree: 1_800,
    clientsPayants: 81,
    clientsGA: 14,
    mrrM12: 4_128,
    caTotal: 17_500,
    chargesTotal: 28_000,
    resultatNet: -10_500,
    tresorerieAvecInvestissement: 27_500,
  },
  an2: {
    clientsPayants: 200,
    clientsGA: 35,
    mrrM24: 9_500,
    caTotal: 85_000,
    breakEvenMensuel: "M15-M16",
    tresorerieFin: 55_000,
  },
} as const

// ─── INVESTISSEMENT ─────────────────────────────────────────────
export const INVESTISSEMENT = {
  montantMin: 30_000,
  montantMax: 50_000,
  repartition: {
    acquisition: { pct: 60, detail: "Google Ads, influenceurs tech/immo, création contenu, SEO, courrier SCIs" },
    operations: { pct: 25, detail: "Premier chargé d'affaires GA (mi-temps), outils métier" },
    infrastructure: { pct: 15, detail: "Hébergement, outils analytics, dev freelance (audit sécurité)" },
  },
  roiAttendu: "Break-even M15-M16, rentabilité An2",
} as const

// ─── BUDGET LANCEMENT ───────────────────────────────────────────
export const BUDGET = {
  tresorerieDepart: 8_000,
  phases: {
    phase1: {
      label: "Pré-lancement (M1-M3)",
      mensuel: 675,
      detail: {
        infra: { mensuel: 175, detail: "Vercel, Turso, Scaleway" },
        marketing: { mensuel: 150, detail: "Outils SEO, design" },
        admin: { mensuel: 150, detail: "Comptable, juridique" },
        outils: { mensuel: 200, detail: "Claude, domaines, emails" },
      },
    },
    phase2: {
      label: "Lancement & traction (M3-M6)",
      mensuel: 1_200,
      detail: {
        infra: { mensuel: 175, detail: "Vercel, Turso, Scaleway" },
        googleAds: { mensuel: 500, detail: "Search ciblé" },
        admin: { mensuel: 150, detail: "Comptable, juridique" },
        outils: { mensuel: 200, detail: "Claude, analytics" },
        contenu: { mensuel: 175, detail: "Création contenu SEO/YouTube" },
      },
    },
    phase3: {
      label: "Accélération (M6-M12)",
      mensuelAvantRecrutement: 2_500,
      mensuelApresRecrutement: 4_200,
      detail: {
        infra: { mensuel: 200, detail: "Infra scalée" },
        googleAds: { mensuel: 1_000, detail: "Search + retargeting" },
        influenceurs: { mensuel: 800, detail: "Partenariats tech/immo" },
        contenu: { mensuel: 400, detail: "Vidéos, articles, guides" },
        outils: { mensuel: 300, detail: "Claude, analytics, outils" },
        chargeAffaires: { mensuel: 1_500, detail: "Mi-temps à partir de M9" },
        admin: { mensuel: 200, detail: "Comptable, juridique, assurance" },
      },
    },
  },
} as const

// ─── ACQUISITION ────────────────────────────────────────────────
export const ACQUISITION = {
  canaux: [
    "SEO (fichier Excel lead magnet)",
    "YouTube (expertise avocate × tech)",
    "Influenceurs tech/immo",
    "Google Ads (search ciblé)",
    "Réseau partenaires pros (comptables, CGP, notaires)",
    "Courrier direct SCIs",
  ],
  objectifsAn1: {
    inscritsFree: 1_800,
    clientsPayants: 81,
    clientsGA: 14,
  },
  metriques: {
    cacCible: "25-40€",
    ltvCacRatio: ">10×",
    conversionFreePaid: "4%",
    budgetAn1: 20_000,
    coutParInscritPayant: "5-8€ (payant), 0€ (organique)",
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
