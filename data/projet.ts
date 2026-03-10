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
  adresse: "Ile-de-France",
  email: "sheana@kparkconseils.fr",
  site: "dossier-strategique.vercel.app",
} as const

// ─── CLIENTS PILOTES ────────────────────────────────────────────
export const CLIENTS_PILOTES = [
  {
    nom: "Client A (Dayot)",
    biens: 19,
    statut: "actif" as const,
    type: "SCI familiale",
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
  { nom: "Starter", prix: 9.9, biens: "1-2", recommande: false },
  { nom: "Solo", prix: 19.9, biens: "1-5", recommande: true },
  { nom: "Pro", prix: 34.9, biens: "1-15", recommande: false },
  { nom: "Expert", prix: 59.9, biens: "Illimité", recommande: false },
] as const

export const FORFAIT_LUXE = {
  prix: 299,
  setup: "A partir de 1 500 EUR",
  cible: ["Marchands de biens", "Chefs d'entreprise", "Multi-propriétaires 10+", "Family offices"],
} as const

export const TARIFS_GA = {
  paliers: [
    { biens: "1-5", prixParBien: 70 },
    { biens: "6-15", prixParBien: 55 },
    { biens: "16-50", prixParBien: 40 },
    { biens: "50+", prixParBien: "Sur devis" },
  ],
  packDemarrage: { prix: 250, inclus: "Setup + import données + formation 1h" },
} as const

// ─── OBJECTIFS & KPIs ───────────────────────────────────────────
export const OBJECTIFS = {
  m3: {
    clients: 8,
    mrr: 500,
    recrue: true,
    label: "Bilan M3 — 1er juin 2026",
  },
  an1: {
    clients: 58,
    ca: 180_000,
    marge: "63%",
    tresorerie: 48_000,
  },
  an2: {
    clients: 180,
    ca: 520_000,
    recrutement: 3,
  },
} as const

// ─── BUDGET LANCEMENT ───────────────────────────────────────────
export const BUDGET = {
  investissementInitial: 2_965,
  chargesMensuelles: 2_412,
  budgetAn1: 31_900,
  tresorerieDepart: 13_000,
  categories: {
    juridique: { total: 2_150, detail: "Avocat 900 + SAS 350 + Carte G 500 + RGPD 400" },
    outils: { mensuel: 175, detail: "Claude 20 + Chrome UX 80 + Vercel 20 + Supabase 25 + OCR 30" },
    marketing: { mensuel: 262, detail: "Google Ads 200 + LinkedIn 50 + Canva 12" },
    recrutement: { mensuel: 1_800, detail: "Recrue #1 POE/CDD à partir M3" },
    fonctionnement: { mensuel: 125, detail: "RC Pro 25/mois + Comptable 80 + Banque 15 + Tel 30" },
  },
} as const

// ─── EMPLOI & CONTRAINTES ───────────────────────────────────────
export const CONTRAINTES = {
  emploiActuel: "LTOA puis PASCAL",
  heuresSemaine: 35,
  heuresMonPatrimoine: "15-20h/sem (soir + week-end)",
  vacances: "Fin mars / début avril (2 semaines, formation IA)",
  avocat: { tarif: 180, provision: "5h", specialite: "IA / droit des affaires / PI" },
  budgetOutils: 100, // EUR/mois
} as const

// ─── MARCHE ─────────────────────────────────────────────────────
export const MARCHE = {
  tam: { valeur: "3,7 Mds EUR", description: "Gestion immobilière France" },
  sam: { valeur: "850 M EUR", description: "Propriétaires multi-biens" },
  som: { valeur: "12 M EUR", description: "IDF, early adopters tech" },
  proprietairesMultiBiens: "2,8 M",
  sciFrance: "2,1 M",
  phobieAdministrative: "68%", // des propriétaires
} as const

// ─── FONDATRICE ─────────────────────────────────────────────────
export const FONDATRICE = {
  formation: "Droit immobilier",
  experience: [
    "Juriste droit immobilier (stages Lamy Expertise, contentieux construction)",
    "Courtière en assurances (LTOA, spécialiste RC décennale / DO)",
    "Mentorée par courtier senior (vision terrain, accompagnement MDB)",
    "Création K PAR K CONSEILS SAS (mi-2024)",
  ],
  competences: [
    "Droit immobilier", "Assurance construction", "Gestion locative",
    "Contentieux construction", "Assurance décennale", "Accompagnement MDB",
    "Fiscalité SCI", "RGPD", "Pilotage projet", "IA & automatisation",
  ],
} as const
