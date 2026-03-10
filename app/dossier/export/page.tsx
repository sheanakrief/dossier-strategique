"use client"

import { useState } from "react"
import { Download, Filter } from "lucide-react"
import { SECTIONS, AUDIENCE_LABELS, getVisibleSections, type Audience } from "@/data/audiences"

/* ─── Import ALL page components ─── */
import DashboardPage from "../page"
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

const PAGE_COMPONENTS: Record<string, React.ComponentType> = {
  "": DashboardPage,
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
}

const AUDIENCE_PRESETS: { key: Audience; label: string; desc: string }[] = [
  { key: "all", label: "Tout (Perso)", desc: "Toutes les sections — vision complète" },
  { key: "investisseur", label: "Investisseurs", desc: "Marché, finance, simulation, pitch" },
  { key: "client", label: "Clients", desc: "Produit, pricing, vision, pitch" },
  { key: "partenaire", label: "Partenaires", desc: "Vision, pricing, juridique, pitch" },
  { key: "equipe", label: "Collaborateurs", desc: "Dashboard, simulation, déploiement, acquisition" },
  { key: "dev", label: "Dev / Technique", desc: "Architecture, produit, déploiement" },
]

export default function ExportPage() {
  const [audience, setAudience] = useState<Audience>("all")
  const [printing, setPrinting] = useState(false)
  const visible = getVisibleSections(audience)

  const handlePrint = () => {
    setPrinting(true)
    setTimeout(() => {
      window.print()
      setPrinting(false)
    }, 500)
  }

  return (
    <div>
      {/* ═══ TOOLBAR (hidden in print) ═══ */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-display text-xl font-bold text-slate-800">Export PDF</h1>
              <p className="text-sm text-slate-500">Sélectionnez l&apos;audience puis exportez</p>
            </div>
            <div className="flex gap-2">
              <a href="/dossier" className="px-4 py-2 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                ← Retour
              </a>
              <button
                onClick={handlePrint}
                disabled={printing}
                className="px-5 py-2 text-sm bg-[#E67E22] text-white rounded-lg hover:bg-[#E67E22]/90 transition-colors font-medium flex items-center gap-2 shadow-sm disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {printing ? "Préparation..." : "Exporter en PDF"}
              </button>
            </div>
          </div>

          {/* Audience selector */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-slate-400" />
            {AUDIENCE_PRESETS.map((preset) => (
              <button
                key={preset.key}
                onClick={() => setAudience(preset.key)}
                className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all ${
                  audience === preset.key
                    ? "bg-[#1A5276] text-white shadow-sm"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
                title={preset.desc}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-2">
            {visible.length} sections sélectionnées — {AUDIENCE_PRESETS.find(p => p.key === audience)?.desc}
          </p>
        </div>
      </div>

      {/* ═══ ALL SECTIONS RENDERED ═══ */}
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
