export type Audience = "all" | "investisseur" | "client" | "partenaire" | "dev" | "equipe"

export const AUDIENCE_LABELS: Record<Audience, string> = {
  all: "Tout",
  investisseur: "Investisseur",
  client: "Client",
  partenaire: "Partenaire",
  dev: "Dev",
  equipe: "Équipe",
}

export interface Section {
  slug: string
  title: string
  icon: string
  audiences: Audience[]
}

export const SECTIONS: Section[] = [
  {
    slug: "",
    title: "Dashboard",
    icon: "📊",
    audiences: ["all", "investisseur", "client", "partenaire", "dev", "equipe"],
  },
  {
    slug: "vision",
    title: "Vision & Positionnement",
    icon: "🎯",
    audiences: ["all", "investisseur", "client", "partenaire", "dev"],
  },
  {
    slug: "fondatrice",
    title: "La Fondatrice",
    icon: "👩‍💼",
    audiences: ["all", "investisseur", "partenaire", "equipe"],
  },
  {
    slug: "marche",
    title: "Étude de Marché",
    icon: "📈",
    audiences: ["all", "investisseur"],
  },
  {
    slug: "concurrence",
    title: "Analyse Concurrentielle",
    icon: "⚔️",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "produit",
    title: "Le Produit",
    icon: "🏗️",
    audiences: ["all", "investisseur", "client", "dev"],
  },
  {
    slug: "architecture",
    title: "Architecture Technique",
    icon: "🔧",
    audiences: ["all", "dev"],
  },
  {
    slug: "pricing",
    title: "Pricing",
    icon: "💶",
    audiences: ["all", "investisseur", "client", "partenaire"],
  },
  {
    slug: "offre",
    title: "Offre Détaillée",
    icon: "🎁",
    audiences: ["all", "investisseur", "client", "partenaire"],
  },
  {
    slug: "acquisition",
    title: "Stratégie Acquisition",
    icon: "🚀",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "simulation",
    title: "Simulation Financière",
    icon: "💰",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "deploiement",
    title: "Plan de Déploiement",
    icon: "📅",
    audiences: ["all", "investisseur", "equipe", "dev"],
  },
  {
    slug: "juridique",
    title: "Cadre Juridique & Carte G",
    icon: "⚖️",
    audiences: ["all", "investisseur", "partenaire"],
  },
  {
    slug: "budget",
    title: "Budget Lancement",
    icon: "💸",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "timeline",
    title: "Timeline 3 Mois",
    icon: "🗓️",
    audiences: ["all", "equipe"],
  },
  {
    slug: "pitch",
    title: "Pitchs Commerciaux",
    icon: "🎤",
    audiences: ["all", "investisseur", "client", "partenaire"],
  },
  {
    slug: "enquete-admin",
    title: "Résultats Enquête",
    icon: "📋",
    audiences: ["all"],
  },
]

export function getVisibleSections(audience: Audience): Section[] {
  if (audience === "all") return SECTIONS
  return SECTIONS.filter((s) => s.audiences.includes(audience))
}
