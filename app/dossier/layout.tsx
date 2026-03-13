"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Download, Menu, ChevronDown,
  BarChart3, Target, User, TrendingUp, Swords, Building2, Wrench,
  CreditCard, Gift, Rocket, PiggyBank, CalendarDays, Scale, Wallet,
  Clock, Mic, ClipboardList, Lock, HelpCircle, Monitor,
  Shield, Briefcase, Handshake, Code,
  BookOpen, GitBranch, ListChecks, KanbanSquare, Receipt,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SECTIONS, type Role, ROLE_LABELS, getSectionsForRole, getAdminSidebarGroups } from "@/data/audiences"

const ICON_MAP: Record<string, LucideIcon> = {
  BarChart3, Target, User, TrendingUp, Swords, Building2, Wrench,
  CreditCard, Gift, Rocket, PiggyBank, CalendarDays, Scale, Wallet,
  Clock, Mic, ClipboardList, Lock, HelpCircle, Monitor,
  Shield, Briefcase, Handshake, Code,
  BookOpen, GitBranch, ListChecks, Kanban: KanbanSquare, Receipt,
}

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

const ROLE_ICONS: Record<Role, LucideIcon> = {
  admin: Shield,
  investisseur: Briefcase,
  partenaire: Handshake,
  dev: Code,
}

export default function DossierLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const [role, setRole] = useState<Role | null>(null)
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())
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
    try {
      const stored = localStorage.getItem("dossier_collapsed_groups")
      if (stored) setCollapsedGroups(new Set(JSON.parse(stored)))
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

  const toggleGroup = (key: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      try { localStorage.setItem("dossier_collapsed_groups", JSON.stringify(Array.from(next))) } catch {}
      return next
    })
  }

  // Get visible sections based on role
  const visible = role ? getSectionsForRole(role) : SECTIONS
  const adminGroups = role === "admin" ? getAdminSidebarGroups() : []

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
          <Link href="/dossier" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[28%] bg-[#1A3D2E] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <rect x="6" y="6" width="28" height="28" rx="5" fill="#E8E4D4"/>
                <rect x="38" y="6" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.5"/>
                <rect x="58" y="6" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.3"/>
                <rect x="6" y="38" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.4"/>
                <rect x="26" y="38" width="16" height="16" rx="4" fill="#8FAF8A"/>
                <rect x="46" y="26" width="28" height="28" rx="5" fill="#E8E4D4"/>
                <rect x="6" y="58" width="28" height="16" rx="4" fill="#E8E4D4" opacity="0.2"/>
                <rect x="38" y="58" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.35"/>
                <rect x="58" y="58" width="16" height="16" rx="4" fill="#8FAF8A" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}>
                <span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span>
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">Dossier Stratégique</p>
            </div>
          </Link>
        </div>

        {/* Role badge */}
        {role && (() => {
          const RoleIcon = ROLE_ICONS[role]
          return (
            <div className="px-5 py-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm">
                <RoleIcon className="w-4 h-4 text-[#1A3D2E]" />
                <span className="font-medium text-slate-700">{ROLE_LABELS[role]}</span>
              </div>
            </div>
          )
        })()}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3">
          {role === "admin" ? (
            /* ═══ ADMIN: grouped sidebar ═══ */
            adminGroups.map((group) => {
              const groupHasActive = group.sections.some((s) => currentSlug === s.slug)
              const isCollapsed = collapsedGroups.has(group.key) && !groupHasActive
              const GroupIcon = ICON_MAP[group.icon]
              return (
                <div key={group.key} className="mb-1">
                  <button
                    onClick={() => toggleGroup(group.key)}
                    className="w-full flex items-center gap-2.5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {GroupIcon && <GroupIcon className="w-3.5 h-3.5" />}
                    <span className="flex-1 text-left">{group.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCollapsed ? "-rotate-90" : ""}`} />
                  </button>
                  {!isCollapsed && group.sections.map((section) => {
                    const isActive = currentSlug === section.slug
                    const href = section.slug ? `/dossier/${section.slug}` : "/dossier"
                    const isVisited = visited.has(section.slug)
                    const SectionIcon = ICON_MAP[section.icon]
                    return (
                      <Link
                        key={`${group.key}-${section.slug}`}
                        href={href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 pl-8 pr-5 py-2 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#1A3D2E]/5 text-[#1A3D2E] font-medium border-r-2 border-[#1A3D2E]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {SectionIcon ? (
                          <SectionIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#1A3D2E]" : "text-slate-400"}`} />
                        ) : (
                          <span className="text-base">{section.icon}</span>
                        )}
                        <span className="flex-1">{section.title}</span>
                        {isVisited && !isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                        )}
                      </Link>
                    )
                  })}
                </div>
              )
            })
          ) : (
            /* ═══ OTHER ROLES: flat list ═══ */
            visible.map((section) => {
              const isActive = currentSlug === section.slug
              const href = section.slug ? `/dossier/${section.slug}` : "/dossier"
              if (section.slug === "" && !role) return null
              const isVisited = visited.has(section.slug)
              const SectionIcon = ICON_MAP[section.icon]
              return (
                <Link
                  key={section.slug}
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#1A3D2E]/5 text-[#1A3D2E] font-medium border-r-2 border-[#1A3D2E]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {SectionIcon ? (
                    <SectionIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#1A3D2E]" : "text-slate-400"}`} />
                  ) : (
                    <span className="text-base">{section.icon}</span>
                  )}
                  <span className="flex-1">{section.title}</span>
                  {isVisited && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                  )}
                </Link>
              )
            })
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/dossier/export"
            className="no-print w-full py-2.5 text-sm bg-[#1A3D2E] text-white rounded-lg hover:bg-[#1A3D2E]/90 transition-all font-medium flex items-center justify-center gap-2 shadow-sm block text-center"
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
          <div className="print-cover-logo"><span style={{ color: '#1A3D2E' }}>PARK</span><span style={{ color: '#8FAF8A' }}>IMMO</span></div>
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
          <span className="print-header-left">PARKIMMO — Dossier Stratégique</span>
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
          <h1 className="text-lg font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}><span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span></h1>
          {role && (() => {
            const MobileRoleIcon = ROLE_ICONS[role]
            return (
              <span className="ml-auto flex items-center gap-1.5 text-xs text-slate-400">
                <MobileRoleIcon className="w-3.5 h-3.5" />
                {ROLE_LABELS[role]}
              </span>
            )
          })()}
        </div>

        <div className="p-6 lg:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
