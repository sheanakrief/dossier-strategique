export type Audience = "all" | "investisseur" | "client" | "partenaire" | "dev" | "equipe" | "administration"

export const AUDIENCE_LABELS: Record<Audience, string> = {
  all: "Tout",
  investisseur: "Investisseur",
  client: "Client",
  partenaire: "Partenaire",
  dev: "Dev",
  equipe: "Équipe",
  administration: "Administration",
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
    icon: "BarChart3",
    audiences: ["all", "investisseur", "client", "partenaire", "dev", "equipe"],
  },
  {
    slug: "vision",
    title: "Vision & Positionnement",
    icon: "Target",
    audiences: ["all", "investisseur", "client", "partenaire", "dev"],
  },
  {
    slug: "fondatrice",
    title: "La Fondatrice",
    icon: "User",
    audiences: ["all", "investisseur", "partenaire", "equipe"],
  },
  {
    slug: "marche",
    title: "Étude de Marché",
    icon: "TrendingUp",
    audiences: ["all", "investisseur"],
  },
  {
    slug: "concurrence",
    title: "Analyse Concurrentielle",
    icon: "Swords",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "offre",
    title: "Produit & Offre",
    icon: "Gift",
    audiences: ["all", "investisseur", "client", "partenaire", "dev"],
  },
  {
    slug: "architecture",
    title: "Architecture Technique",
    icon: "Wrench",
    audiences: ["all", "dev"],
  },
  {
    slug: "acquisition",
    title: "Stratégie Acquisition",
    icon: "Rocket",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "simulation",
    title: "Simulation Financière",
    icon: "PiggyBank",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "deploiement",
    title: "Plan de Déploiement",
    icon: "CalendarDays",
    audiences: ["all", "investisseur", "equipe", "dev"],
  },
  {
    slug: "juridique",
    title: "Cadre Juridique & Carte G",
    icon: "Scale",
    audiences: ["all", "investisseur", "partenaire"],
  },
  {
    slug: "partenaires-proposition",
    title: "Partenaires — Proposition",
    icon: "Handshake",
    audiences: ["all", "partenaire"],
  },
  {
    slug: "partenaires-catalogue",
    title: "Partenaires — Catalogue",
    icon: "BookOpen",
    audiences: ["all", "partenaire"],
  },
  {
    slug: "budget",
    title: "Budget Lancement",
    icon: "Wallet",
    audiences: ["all", "investisseur", "equipe"],
  },
  {
    slug: "timeline",
    title: "Timeline 3 Mois",
    icon: "Clock",
    audiences: ["all", "equipe"],
  },
  {
    slug: "investissement",
    title: "Proposition d'Investissement",
    icon: "TrendingUp",
    audiences: ["all", "investisseur"],
  },
  {
    slug: "pitch",
    title: "Pitchs Commerciaux",
    icon: "Mic",
    audiences: ["all"],
  },
  {
    slug: "enquete-admin",
    title: "Résultats Enquête",
    icon: "ClipboardList",
    audiences: ["all"],
  },
  {
    slug: "admin",
    title: "Dashboard Admin",
    icon: "Lock",
    audiences: ["all"],
  },
  {
    slug: "decisions",
    title: "Décisions en suspens",
    icon: "HelpCircle",
    audiences: ["all"],
  },
  {
    slug: "roadmap-tech",
    title: "Roadmap Technique",
    icon: "GitBranch",
    audiences: ["all", "dev"],
  },
  {
    slug: "plan-actions",
    title: "Plan d'Actions",
    icon: "ListChecks",
    audiences: ["all", "administration"],
  },
  {
    slug: "gestion-projet",
    title: "Gestion de Projet",
    icon: "Kanban",
    audiences: ["all", "administration"],
  },
  {
    slug: "suivi-financier",
    title: "Suivi Financier",
    icon: "Receipt",
    audiences: ["all", "administration"],
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
  investisseur: [
    "", "vision", "fondatrice", "marche", "concurrence", "offre",
    "pricing", "acquisition", "simulation", "deploiement", "juridique",
    "budget", "pitch", "investissement", "export",
  ],
  partenaire: [
    "", "vision", "fondatrice", "partenaires-proposition",
    "partenaires-catalogue", "offre", "juridique", "pitch", "export",
  ],
  dev: [
    "", "vision", "offre", "architecture", "deploiement",
    "roadmap-tech", "export",
  ],
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

// ─── ADMIN SIDEBAR GROUPS ─────────────────────────────────────
export interface SidebarGroup {
  key: string
  label: string
  icon: string
  sections: Section[]
}

export function getAdminSidebarGroups(): SidebarGroup[] {
  const nonAdminRoles: Role[] = ["investisseur", "partenaire", "dev"]
  const allNonAdminSlugs = new Set<string>()
  nonAdminRoles.forEach((r) => {
    ROLE_ACCESS[r].forEach((s) => { if (s !== "export") allNonAdminSlugs.add(s) })
  })

  const adminOnly = SECTIONS.filter((s) => !allNonAdminSlugs.has(s.slug))
  const investisseurSections = SECTIONS.filter((s) => ROLE_ACCESS.investisseur.includes(s.slug) && s.slug !== "export")
  const partenaireSections = SECTIONS.filter((s) => ROLE_ACCESS.partenaire.includes(s.slug) && s.slug !== "export")
  const devSections = SECTIONS.filter((s) => ROLE_ACCESS.dev.includes(s.slug) && s.slug !== "export")

  return [
    { key: "admin", label: "Administration", icon: "Shield", sections: adminOnly },
    { key: "investisseur", label: "Espace Investisseur", icon: "Briefcase", sections: investisseurSections },
    { key: "partenaire", label: "Espace Partenaire", icon: "Handshake", sections: partenaireSections },
    { key: "dev", label: "Espace Dev", icon: "Code", sections: devSections },
  ]
}
