"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Gift, Users, ArrowRight } from "lucide-react"

const ALL_MODULES = [
  "Patrimoine",
  "Locatif",
  "Finance",
  "Alertes",
  "Charges",
  "Coffre-fort",
  "Contacts",
  "Travaux & projets",
  "Partage partenaires",
  "Multi-structures (SCI/SNC)",
  "Pipeline acquisition/revente",
  "Scénarios & simulation",
  "Export comptable",
]

const PLANS = [
  {
    plan: "Essentiel",
    prix: "19€",
    biens: "≤ 3 biens",
    stockage: "3 Go",
    support: "Email 72h",
    onboarding: "99€",
    onboardingGA: "Offert",
    highlight: false,
    color: "#1A3D2E",
    modulesInclus: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts"],
  },
  {
    plan: "Expert ★",
    prix: "49€",
    biens: "≤ 15 biens",
    stockage: "15 Go",
    support: "Email prioritaire 48h",
    onboarding: "49€",
    onboardingGA: "Offert",
    highlight: true,
    color: "#8FAF8A",
    modulesInclus: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts", "Travaux & projets", "Partage partenaires", "Multi-structures (SCI/SNC)"],
  },
  {
    plan: "Pro",
    prix: "79€",
    biens: "Illimité",
    stockage: "50 Go",
    support: "Prioritaire 24h + visio",
    onboarding: "Offert",
    onboardingGA: "Offert",
    highlight: false,
    color: "#7c3aed",
    modulesInclus: ALL_MODULES,
  },
]

const GA_TIERS = [
  { plan: "Essentiel", ga: "+39€/mois", total: "58€", service: "Quittances, alertes, encaissements, rappels, révisions IRL", color: "#1A3D2E" },
  { plan: "Expert", ga: "+89€/mois", total: "138€", service: "+ Multi-entités + reporting + dossier partenaire", color: "#8FAF8A" },
  { plan: "Pro", ga: "+149€/mois", total: "228€", service: "Tout inclus + priorité support + suivi projets", color: "#7c3aed" },
]

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        icon="💶"
        title="Pricing"
        subtitle="SaaS + Gestion Assistée — 3 plans, sans engagement"
      />

      {/* Philosophie */}
      <ScrollReveal>
        <div className="bg-[#1A3D2E]/5 border-l-4 border-[#1A3D2E] rounded-xl p-5 mb-8">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#1A3D2E]">Le propriétaire est le client. Le professionnel est le canal de distribution.</strong>
            {" "}Parkimmo est un outil B2C — le propriétaire paye son abonnement. Le professionnel (comptable, CGP,
            gestionnaire) accède gratuitement aux données de ses clients via l&apos;Espace Partenaire.
          </p>
        </div>
      </ScrollReveal>

      {/* Plans SaaS */}
      <ScrollReveal>
        <h2 className="font-display text-xl font-bold text-slate-800 mb-6">SaaS — 3 plans</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {PLANS.map((p, i) => {
          const isHighlight = p.highlight

          return (
            <ScrollReveal key={p.plan} delay={i * 80}>
              <div
                className={`rounded-xl p-5 transition-all duration-300 ${
                  isHighlight
                    ? "scale-[1.03] border-2 border-[#8FAF8A] bg-[#8FAF8A]/5 shadow-md relative overflow-visible"
                    : "bg-white border border-slate-200"
                } hover:shadow-lg`}
              >
                {isHighlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8FAF8A] text-white rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-sm">
                    Recommandé
                  </span>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                  <h3 className="font-display text-lg font-bold text-slate-800">{p.plan}</h3>
                </div>

                <p className="text-2xl font-bold mt-1" style={{ color: p.color }}>
                  {p.prix}<span className="text-sm text-slate-400 font-normal">/mois</span>
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p><span className="text-slate-400">Biens :</span> {p.biens}</p>
                  <p><span className="text-slate-400">Stockage :</span> {p.stockage}</p>
                  <p><span className="text-slate-400">Support :</span> {p.support}</p>
                  <p><span className="text-slate-400">Onboarding :</span> {p.onboarding}</p>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Modules par plan */}
      <SectionCard title="Modules par plan" icon="📦" delay={100} className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium">Module</th>
                {PLANS.map((p) => (
                  <th key={p.plan} className="text-center py-3 text-slate-700 font-semibold px-3">{p.plan.replace(" ★", "")}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ALL_MODULES.map((mod) => (
                <tr key={mod} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2 text-slate-700 text-xs">{mod}</td>
                  {PLANS.map((p) => (
                    <td key={p.plan} className="py-2 text-center">
                      {p.modulesInclus.includes(mod) ? (
                        <span className="text-[#059669] font-bold">✓</span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Gestion Assistée */}
      <SectionCard title="Gestion Assistée — Chargé d'affaires dédié" icon="🤝" delay={200} className="mb-8">
        <p className="text-sm text-slate-500 mb-4">
          Le propriétaire peut ajouter la Gestion Assistée à son plan SaaS. Un chargé d&apos;affaires dédié
          gère l&apos;administratif au quotidien : quittances, relances, révisions, encaissements, reporting.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {GA_TIERS.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tier.color }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: tier.color }}>{tier.plan}</span>
                </div>
                <p className="text-xl font-bold" style={{ color: tier.color }}>{tier.ga}</p>
                <p className="text-sm text-slate-500 mt-1">Total : {tier.total}/mois</p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">{tier.service}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Onboarding offert avec GA */}
        <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-4 flex items-start gap-3">
          <Gift className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#059669]">Onboarding TOUJOURS OFFERT avec la Gestion Assistée</p>
            <p className="text-xs text-slate-500 mt-1">
              Quel que soit le plan choisi, l&apos;onboarding est gratuit dès que le client souscrit à la GA.
              Visio de paramétrage + import des biens + formation — inclus.
            </p>
          </div>
        </div>

        {/* Comparaison agence */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Comparaison mensuelle (10 biens)</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-36 shrink-0">Agence classique</span>
              <div className="flex-1 bg-red-100 rounded-full h-5 relative">
                <div className="bg-red-500 h-5 rounded-full w-full flex items-center justify-end pr-3">
                  <span className="text-[11px] font-bold text-white">~450€/mois</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-36 shrink-0">Parkimmo Expert + GA</span>
              <div className="flex-1 bg-green-50 rounded-full h-5 relative">
                <div className="bg-[#059669] h-5 rounded-full flex items-center justify-end pr-3" style={{ width: "30%" }}>
                  <span className="text-[11px] font-bold text-white whitespace-nowrap ml-2">138€/mois</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span className="inline-flex items-center gap-1.5 bg-[#059669]/10 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full">
              Économie : jusqu&apos;à 70%
            </span>
          </div>
        </div>
      </SectionCard>

      {/* Modèle partenaire */}
      <SectionCard title="Modèle partenaire — Canal de distribution" icon="🤝" delay={300}>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-start gap-3 mb-4">
            <Users className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">Le professionnel ne paye rien</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Le comptable, le CGP, le notaire ou le gestionnaire accède gratuitement à l&apos;Espace Partenaire.
                Il consulte les données patrimoniales de ses clients, reçoit les documents automatiquement,
                et gagne du temps sur chaque dossier.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { step: "1", label: "Le pro recommande Parkimmo", desc: "Il voit l'intérêt pour ses clients ET pour lui-même" },
              { step: "2", label: "Le client souscrit", desc: "Abonnement SaaS ± GA — le client paye directement" },
              { step: "3", label: "Le pro accède aux données", desc: "Espace Partenaire gratuit — documents, reporting, alertes" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#7c3aed]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#7c3aed]">{item.step}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{item.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <ArrowRight className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Le professionnel devient un <strong className="text-[#7c3aed]">canal de distribution naturel</strong> — il recommande l&apos;outil à ses clients parce qu&apos;il en bénéficie directement.</span>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
