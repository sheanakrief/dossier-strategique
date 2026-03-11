"use client"

import { useState, useEffect } from "react"
import { Download, Filter } from "lucide-react"
import { SECTIONS, type Role, ROLE_LABELS, getSectionsForRole } from "@/data/audiences"

/* --- Import ALL page components --- */
import VisionPage from "../vision/page"
import FondatricePage from "../fondatrice/page"
import MarchePage from "../marche/page"
import ConcurrencePage from "../concurrence/page"
import ProduitPage from "../produit/page"
import ArchitecturePage from "../architecture/page"
import PricingPage from "../pricing/page"
import AcquisitionPage from "../acquisition/page"
import SimulationPage from "../simulation/page"
import DeploiementPage from "../deploiement/page"
import JuridiquePage from "../juridique/page"
import BudgetPage from "../budget/page"
import TimelinePage from "../timeline/page"
import PitchPage from "../pitch/page"
import AdminDashboardPage from "../admin/page"

const PAGE_COMPONENTS: Record<string, React.ComponentType> = {
  "vision": VisionPage,
  "fondatrice": FondatricePage,
  "marche": MarchePage,
  "concurrence": ConcurrencePage,
  "produit": ProduitPage,
  "architecture": ArchitecturePage,
  "pricing": PricingPage,
  "acquisition": AcquisitionPage,
  "simulation": SimulationPage,
  "deploiement": DeploiementPage,
  "juridique": JuridiquePage,
  "budget": BudgetPage,
  "timeline": TimelinePage,
  "pitch": PitchPage,
  "admin": AdminDashboardPage,
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

const ROLE_PRESETS: { key: Role; label: string; desc: string }[] = [
  { key: "admin", label: "Tout (Admin)", desc: "Toutes les sections — vision complète" },
  { key: "investisseur", label: "Investisseurs", desc: "Marché, finance, simulation, pitch" },
  { key: "partenaire", label: "Partenaires", desc: "Vision, pricing, juridique, pitch" },
  { key: "dev", label: "Dev / Technique", desc: "Architecture, produit, déploiement" },
]

export default function ExportPage() {
  const [selectedRole, setSelectedRole] = useState<Role>("admin")
  const [printing, setPrinting] = useState(false)
  const [userRole, setUserRole] = useState<Role | null>(null)

  useEffect(() => {
    const detected = detectRole()
    setUserRole(detected)
    if (detected) setSelectedRole(detected)
  }, [])

  // Filter visible sections based on selected role
  const allSections = getSectionsForRole(selectedRole)
  // Filter out homepage, enquete-admin, decisions (not exportable content)
  const visible = allSections.filter(s =>
    s.slug !== "" && s.slug !== "enquete-admin" && s.slug !== "decisions" && PAGE_COMPONENTS[s.slug]
  )

  // Only show role presets the user has access to
  const availablePresets = userRole === "admin"
    ? ROLE_PRESETS
    : ROLE_PRESETS.filter(p => p.key === userRole)

  const handlePrint = () => {
    setPrinting(true)
    setTimeout(() => {
      window.print()
      setPrinting(false)
    }, 500)
  }

  return (
    <div>
      {/* TOOLBAR (hidden in print) */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-display text-xl font-bold text-slate-800">Export PDF</h1>
              <p className="text-sm text-slate-500">Sélectionnez le profil puis exportez</p>
            </div>
            <div className="flex gap-2">
              <a href="/dossier" className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                ← Retour
              </a>
              <button
                onClick={handlePrint}
                disabled={printing}
                className="px-5 py-2 text-sm bg-[#8FAF8A] text-white rounded-lg hover:bg-[#8FAF8A]/90 transition-colors font-medium flex items-center gap-2 shadow-sm disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {printing ? "Préparation..." : "Exporter en PDF"}
              </button>
            </div>
          </div>

          {/* Role selector */}
          {availablePresets.length > 1 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-400" />
              {availablePresets.map((preset) => (
                <button
                  key={preset.key}
                  onClick={() => setSelectedRole(preset.key)}
                  className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all ${
                    selectedRole === preset.key
                      ? "bg-[#1A3D2E] text-white shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                  title={preset.desc}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}

          <p className="text-xs text-slate-400 mt-2">
            {visible.length} sections sélectionnées — {availablePresets.find(p => p.key === selectedRole)?.desc || ""}
          </p>
        </div>
      </div>

      {/* ALL SECTIONS RENDERED */}
      <div className="max-w-6xl mx-auto px-6 py-8 export-content">
        {visible.map((section, idx) => {
          const PageComponent = PAGE_COMPONENTS[section.slug]
          if (!PageComponent) return null

          return (
            <div key={section.slug} className={idx > 0 ? "print-break-before" : ""}>
              {/* Section divider (screen only) */}
              {idx > 0 && (
                <div className="no-print my-8 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {section.icon} {section.title}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                </div>
              )}

              <div className="page-section">
                <PageComponent />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
