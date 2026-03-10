"use client"

import { Database, Server, Layout, UserPlus, Home, FileText, Eye, Bell, ArrowRight } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const PLAN_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Tous: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
  "Solo+": { bg: "bg-[#1A5276]/10", text: "text-[#1A5276]", border: "border-[#1A5276]/20" },
  "Pro+": { bg: "bg-[#E67E22]/10", text: "text-[#E67E22]", border: "border-[#E67E22]/20" },
  Expert: { bg: "bg-[#7c3aed]/10", text: "text-[#7c3aed]", border: "border-[#7c3aed]/20" },
}

const MODULES = [
  { icon: "🏠", name: "Mon Patrimoine", desc: "Fiches biens, entités SCI/SNC, adresses, parkings", plans: "Tous" },
  { icon: "📋", name: "Locatif", desc: "Baux, locataires, quittances PDF, révisions IRL", plans: "Tous" },
  { icon: "💰", name: "Finance", desc: "Encaissements, prêts, rendement, cash-flow", plans: "Solo+" },
  { icon: "🔔", name: "Alertes", desc: "Calendrier, rappels, échéances assurance/bail", plans: "Solo+" },
  { icon: "🛡️", name: "Charges & Assurances", desc: "Charges récurrentes, PNO/GLI/DO, sinistres", plans: "Pro+" },
  { icon: "📇", name: "Contacts", desc: "Annuaire, prestataires, association contact↔bien", plans: "Pro+" },
  { icon: "🔨", name: "Travaux & Projets", desc: "Pipeline Kanban, budget, postes de dépense", plans: "Expert" },
  { icon: "⚙️", name: "Outils avancés", desc: "Simulateur, scénarios, exports, API", plans: "Expert" },
]

const JOURNEY = [
  { icon: UserPlus, label: "Inscription" },
  { icon: Home, label: "Paramétrage bien" },
  { icon: FileText, label: "Import docs" },
  { icon: Eye, label: "Vision rendement" },
  { icon: Bell, label: "Alertes auto" },
]

export default function ProduitPage() {
  return (
    <div className="page-enter">
      <PageHeader icon="🏗️" title="Le Produit — 8 Modules" subtitle="38 modèles Prisma · 50+ routes API · 25+ pages/écrans" />

      {/* Product mockup */}
      <ScrollReveal>
        <div className="mb-8 rounded-xl overflow-hidden shadow-xl border border-slate-200">
          <div className="bg-slate-700 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-slate-600 rounded-md px-3 py-1 text-xs text-slate-300 text-center">
                app-mon-patrimoine.vercel.app/direction
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1A5276]/5 via-white to-[#E67E22]/5 p-8 text-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Interface Mon Patrimoine</p>
            <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Découvrez l&apos;interface</h3>
            <p className="text-sm text-slate-500">8 modules · Dashboard · Quittances PDF · Gestion locative complète</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Module grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {MODULES.map((mod, i) => {
          const planStyle = PLAN_COLORS[mod.plans] || PLAN_COLORS.Tous
          return (
            <ScrollReveal key={mod.name} delay={i * 80}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {mod.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-base font-semibold text-slate-800">{mod.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${planStyle.bg} ${planStyle.text} border ${planStyle.border} transition-transform hover:scale-105`}>
                        {mod.plans}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{mod.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* User journey */}
      <ScrollReveal>
        <SectionCard title="Parcours utilisateur" subtitle="De l'inscription aux alertes automatiques">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 py-4">
            {JOURNEY.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-0 md:flex-col">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A5276]/10 to-[#E67E22]/10 flex items-center justify-center border-2 border-[#1A5276]/20">
                    <step.icon className="w-6 h-6 text-[#1A5276]" />
                  </div>
                </div>
                <p className="text-xs font-medium text-slate-600 mt-0 md:mt-2 text-center">{step.label}</p>
                {i < JOURNEY.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-[#E67E22]/40 absolute" style={{ display: "none" }} />
                )}
              </div>
            ))}
          </div>
          {/* Connecting line for desktop */}
          <div className="hidden md:block relative -mt-[52px] mb-8 mx-7">
            <div className="h-0.5 bg-gradient-to-r from-[#1A5276]/30 via-[#E67E22]/30 to-[#7c3aed]/30 mx-7" />
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard label="Modèles Prisma" value="38" icon={Database} color="primary" delay={0} />
        <StatCard label="Routes API" value="50+" icon={Server} color="accent" delay={100} />
        <StatCard label="Pages / écrans" value="25+" icon={Layout} color="slate" delay={200} />
      </div>
    </div>
  )
}
