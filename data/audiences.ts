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
  {
    slug: "admin",
    title: "Dashboard Admin",
    icon: "🔐",
    audiences: ["all"],
  },
  {
    slug: "decisions",
    title: "Décisions en suspens",
    icon: "❓",
    audiences: ["all"],
  },
]

export function getVisibleSections(audience: Audience): Section[] {
  if (audience === "all") return SECTIONS
  return SECTIONS.filter((s) => s.audiences.includes(audience))
}

// ─── ROLE-BASED ACCESS (multi-profil auth) ─────────────────────
export type Role = "admin" | "investisseur" | "partenaire" | "dev"

export const ROLE_LABELS: Record<Role, string> = {
  admin: "Admin",
  investisseur: "Investisseur",
  partenaire: "Partenaire",
  dev: "Dev / Équipe",
}

export const ROLE_ACCESS: Record<Role, string[]> = {
  admin: ["all"],
  investisseur: ["", "vision", "fondatrice", "marche", "concurrence", "produit", "architecture", "pricing", "simulation", "deploiement", "juridique", "budget", "pitch"],
  partenaire: ["", "vision", "fondatrice", "produit", "pricing", "juridique", "pitch"],
  dev: ["", "produit", "architecture", "deploiement", "timeline"],
}

export const ROLE_COOKIES: Record<Role, string> = {
  admin: "dossier_auth_admin",
  investisseur: "dossier_auth_investor",
  partenaire: "dossier_auth_partner",
  dev: "dossier_auth_dev",
}

export const ROLE_PASSWORDS: Record<string, Role> = {
  "Sk@Kp4rK2026!": "admin",
  "inv826": "investisseur",
  "par347": "partenaire",
  "dev951": "dev",
}

export function getRoleFromCookies(cookies: Record<string, string>): Role | null {
  if (cookies[ROLE_COOKIES.admin]) return "admin"
  if (cookies[ROLE_COOKIES.investisseur]) return "investisseur"
  if (cookies[ROLE_COOKIES.partenaire]) return "partenaire"
  if (cookies[ROLE_COOKIES.dev]) return "dev"
  return null
}

export function canAccessSlug(role: Role, slug: string): boolean {
  if (role === "admin") return true
  return ROLE_ACCESS[role].includes(slug)
}

export function getSectionsForRole(role: Role): Section[] {
  if (role === "admin") return SECTIONS
  return SECTIONS.filter((s) => ROLE_ACCESS[role].includes(s.slug))
}
