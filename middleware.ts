import { NextRequest, NextResponse } from "next/server"

// Role → cookie name mapping (must match data/audiences.ts)
const ROLE_COOKIES = {
  admin: "dossier_auth_admin",
  investisseur: "dossier_auth_investor",
  partenaire: "dossier_auth_partner",
  dev: "dossier_auth_dev",
} as const

type Role = keyof typeof ROLE_COOKIES

// Role → allowed page slugs (must match data/audiences.ts ROLE_ACCESS)
const ROLE_ACCESS: Record<Role, string[]> = {
  admin: ["all"],
  investisseur: ["marche", "fondatrice", "concurrence", "offre", "acquisition", "simulation", "deploiement", "investissement", "export"],
  partenaire: ["", "vision", "fondatrice", "offre", "juridique", "export"],
  dev: ["offre", "architecture", "deploiement", "timeline", "export"],
}

// Role → first content page (used to redirect from /dossier homepage)
const ROLE_DEFAULT_PAGE: Record<Role, string> = {
  admin: "/dossier",
  investisseur: "/dossier/marche",
  partenaire: "/dossier/vision",
  dev: "/dossier/architecture",
}

function getRoleFromRequest(req: NextRequest): Role | null {
  if (req.cookies.get(ROLE_COOKIES.admin)?.value === "1") return "admin"
  if (req.cookies.get(ROLE_COOKIES.investisseur)?.value === "1") return "investisseur"
  if (req.cookies.get(ROLE_COOKIES.partenaire)?.value === "1") return "partenaire"
  if (req.cookies.get(ROLE_COOKIES.dev)?.value === "1") return "dev"
  return null
}

function canAccess(role: Role, slug: string): boolean {
  if (role === "admin") return true
  return ROLE_ACCESS[role].includes(slug)
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // /enquete is always public
  if (pathname.startsWith("/enquete")) {
    return NextResponse.next()
  }

  // /dossier exact (homepage) — redirect logged-in non-admin users to their default page
  if (pathname === "/dossier" || pathname === "/dossier/") {
    const role = getRoleFromRequest(req)
    if (role && role !== "admin") {
      return NextResponse.redirect(new URL(ROLE_DEFAULT_PAGE[role], req.url))
    }
    return NextResponse.next()
  }

  // /dossier/fondatrice is public — Sheana's CV page
  if (pathname === "/dossier/fondatrice" || pathname === "/dossier/fondatrice/") {
    return NextResponse.next()
  }

  // /dossier/* pages require auth
  if (pathname.startsWith("/dossier/")) {
    const role = getRoleFromRequest(req)

    if (!role) {
      // No valid cookie → redirect to login
      const loginUrl = new URL("/login", req.url)
      loginUrl.searchParams.set("role", "investisseur")
      return NextResponse.redirect(loginUrl)
    }

    // Extract the page slug from pathname
    const slug = pathname.replace("/dossier/", "").replace(/\/$/, "")

    if (!canAccess(role, slug)) {
      // Role doesn't have access to this page → redirect to their default page
      return NextResponse.redirect(new URL(ROLE_DEFAULT_PAGE[role], req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dossier/:path*", "/enquete/:path*"],
}
