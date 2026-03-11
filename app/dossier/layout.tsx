"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Download, Menu, LogOut } from "lucide-react"
import { SECTIONS, type Role, ROLE_LABELS, getSectionsForRole, canAccessSlug } from "@/data/audiences"

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? match[2] : null
}

function detectRole(): Role | null {
  if (getCookie("dossier_auth_admin") === "1") return "admin"
  if (getCookie("dossier_auth_investor") === "1") return "investisseur"
  if (getCookie("dossier_auth_partner") === "1") return "partenaire"
  if (getCookie("dossier_auth_dev") === "1") return "dev"
  return null
}

const ROLE_ICONS: Record<Role, string> = {
  admin: "��",
  investisseur: "��",
  partenaire: "��",
  dev: "��",
}

export default function DossierLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const [role, setRole] = useState<Role | null>(null)
  const pathname = usePathname()
  const currentSlug = pathname.replace("/dossier", "").replace(/^\//, "")
  const isHomePage = pathname === "/dossier" || pathname === "/dossier/"

  useEffect(() => {
    setRole(detectRole())
  }, [])

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dossier_visited")
      if (stored) setVisited(new Set(JSON.parse(stored)))
    } catch {}
  }, [])

  useEffect(() => {
    setVisited((prev) => {
      const next = new Set(prev)
      next.add(currentSlug)
      try { localStorage.setItem("dossier_visited", JSON.stringify(Array.from(next))) } catch {}
      return next
    })
  }, [currentSlug])

  // Get visible sections based on role
  const visible = role ? getSectionsForRole(role) : SECTIONS

  // Don't show sidebar on public homepage
  if (isHomePage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <main className="min-w-0 print-full">
          <div className="p-6 lg:p-10 max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar fixed lg:sticky top-0 left-0 z-40 h-screen w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-slate-100">
          <Link href="/dossier" className="block">
            <h1 className="font-display text-xl font-bold text-[#1A5276]">Mon Patrimoine</h1>
            <p className="text-xs text-slate-400 mt-0.5">Dossier Stratégique</p>
          </Link>
        </div>

        {/* Role badge */}
        {role && (
          <div className="px-5 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-sm">
              <span>{ROLE_ICONS[role]}</span>
              <span className="font-medium text-slate-700">{ROLE_LABELS[role]}</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3">
          {visible.map((section) => {
            const isActive = currentSlug === section.slug
            const href = section.slug ? `/dossier/${section.slug}` : "/dossier"

            // Skip the homepage entry since public homepage is different from sections
            if (section.slug === "" && !role) return null

            const isVisited = visited.has(section.slug)
            return (
              <Link
                key={section.slug}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#1A5276]/5 text-[#1A5276] font-medium border-r-2 border-[#1A5276]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="text-base">{section.icon}</span>
                <span className="flex-1">{section.title}</span>
                {isVisited && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/dossier/export"
            className="no-print w-full py-2.5 text-sm bg-[#E67E22] text-white rounded-lg hover:bg-[#E67E22]/90 transition-all font-medium flex items-center justify-center gap-2 shadow-sm block text-center"
          >
            <Download className="w-4 h-4" />
            Exporter en PDF
          </Link>
          <p className="text-[10px] text-slate-400 mt-3 text-center">
            K PAR K CONSEILS — SAS
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 print-full">
        {/* PRINT COVER PAGE */}
        <div className="print-cover">
          <div className="print-cover-logo">Mon Patrimoine</div>
          <div className="print-cover-sub">K PAR K CONSEILS SAS</div>
          <div className="print-cover-line" />
          <div className="print-cover-title">Dossier Stratégique</div>
          <div className="print-cover-desc">
            SaaS B2C de gestion patrimoniale immobilière — La plateforme de pilotage du propriétaire
            sur tout le cycle de vie du bien : acquisition, financement, travaux, location, revente.
          </div>
          <div className="print-cover-footer">
            <strong>K PAR K CONSEILS SAS</strong> — Lyon<br />
            Document confidentiel — Mars 2026<br />
            Contact : Sheana Krief — sheana@kparkconseils.fr
          </div>
        </div>

        {/* PRINT HEADER */}
        <div className="print-header">
          <span className="print-header-left">Mon Patrimoine — Dossier Stratégique</span>
          <span className="print-header-right">K PAR K CONSEILS SAS — Confidentiel — Mars 2026</span>
        </div>

        {/* PRINT FOOTER */}
        <div className="print-page-footer">
          K PAR K CONSEILS SAS — Document confidentiel — Ne pas diffuser sans autorisation
        </div>

        {/* Mobile header */}
        <div className="no-print lg:hidden sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-display text-lg font-bold text-[#1A5276]">Mon Patrimoine</h1>
          {role && (
            <span className="ml-auto text-xs text-slate-400">{ROLE_ICONS[role]} {ROLE_LABELS[role]}</span>
          )}
        </div>

        <div className="p-6 lg:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
