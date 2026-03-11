"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Video, BookOpen, Bell, Headphones } from "lucide-react"

const PLAN_COLORS: Record<string, string> = {
  "Solo ★": "#1A3D2E",
  Pro: "#8FAF8A",
  Expert: "#7c3aed",
  "LUXE ✦": "#b8860b",
}

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
  "API",
]

const PLANS_SAAS = [
  {
    plan: "Solo ★",
    prix: "24€",
    biens: "≤ 3",
    stockage: "3 Go",
    support: "Email 72h",
    highlight: true,
    modulesInclus: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts"],
  },
  {
    plan: "Pro",
    prix: "49€",
    biens: "≤ 15",
    stockage: "15 Go",
    support: "Email prioritaire 48h",
    highlight: false,
    modulesInclus: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts", "Travaux & projets", "Partage partenaires"],
  },
  {
    plan: "Expert",
    prix: "79€",
    biens: "Illimité",
    stockage: "50 Go",
    support: "Prioritaire 24h + visio",
    highlight: false,
    modulesInclus: ALL_MODULES,
  },
]

/* ─── FORFAIT LUXE ─── */
const LUXE_FEATURES = [
  { feature: "Accompagnement à domicile", detail: "Déplacement chez le client pour paramétrage, formation, support" },
  { feature: "Assistante personnelle dédiée", detail: "Interlocutrice unique — gestion locative, admin, relances" },
  { feature: "Paramétrage complet du parc", detail: "Tous les biens, SCI, copropriétés — on fait tout" },
  { feature: "Coffre-fort numérique complet", detail: "Numérisation + classement de tous les documents existants" },
  { feature: "OCR & extraction IA", detail: "Extraction automatique des données depuis vos contrats et factures" },
  { feature: "Bilan patrimonial personnalisé", detail: "Diagnostic complet + recommandations (avec CGP partenaire)" },
  { feature: "Reporting trimestriel premium", detail: "Synthèse patrimoniale, performance, alertes — format investisseur" },
  { feature: "Accès prioritaire support 24/48h", detail: "Ligne directe Sheana — résolution express" },
  { feature: "Tous modules Expert inclus", detail: "Multi-structures, API, scénarios, export comptable illimité" },
  { feature: "Kit de bienvenue premium", detail: "Classeur cuir personnalisé, rangement complet, goodies aux couleurs du client" },
]

const GA_PALIERS = [
  { palier: "3-5 biens", prix: "89€", service: "Quittances, alertes, encaissements, rappels, révisions IRL, MAJ coffre-fort", vs: "-60%" },
  { palier: "6-10 biens", prix: "129€", service: "+ Multi-entités + reporting + dossier partenaire", vs: "-71%" },
  { palier: "11-20 biens", prix: "189€", service: "+ Suivi projets + préparation bilans SCI", vs: "-78%" },
  { palier: "20+ biens", prix: "259€", service: "Tout inclus + priorité support", vs: "-81%" },
]

const ONBOARDING_TIERS = [
  { plan: "Solo", icon: BookOpen, title: "Autonomie totale", desc: "Guides, tutoriels, FAQ intégrée — vous démarrez seul à votre rythme", color: "#1A3D2E" },
  { plan: "Pro", icon: Video, title: "3 visios onboarding", desc: "3 RDV visio pour paramétrer, importer vos biens et vous lancer — puis autonomie + support email", color: "#8FAF8A" },
  { plan: "Expert", icon: Headphones, title: "Visios illimitées", desc: "Accompagnement continu par visio + support prioritaire 24h — vous n'êtes jamais seul", color: "#7c3aed" },
]

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        icon="💶"
        title="Pricing"
        subtitle="SaaS + Gestion Assistée + Forfait LUXE — Onboarding accompagné inclus"
      />

      {/* Plans SaaS */}
      <ScrollReveal>
        <h2 className="font-display text-xl font-bold text-slate-800 mb-6">SaaS — 3 plans</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {PLANS_SAAS.map((p, i) => {
          const color = PLAN_COLORS[p.plan] || "#64748b"
          const isSolo = p.highlight
          const isExpert = p.plan === "Expert"

          return (
            <ScrollReveal key={p.plan} delay={i * 80}>
              <div
                className={`rounded-xl p-5 transition-all duration-300 ${
                  isSolo
                    ? "scale-[1.03] border-2 border-[#8FAF8A] bg-[#8FAF8A]/5 shadow-md relative overflow-visible"
                    : isExpert
                    ? "bg-gradient-to-b from-purple-50 to-white border border-slate-200"
                    : "bg-white border border-slate-200"
                } hover:shadow-lg`}
              >
                {/* Recommended badge for Solo */}
                {isSolo && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8FAF8A] text-white rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-sm">
                    Recommandé
                  </span>
                )}

                {/* Plan name with colored badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3 className="font-display text-lg font-bold text-slate-800">{p.plan}</h3>
                </div>

                {/* Price */}
                <p className="text-2xl font-bold mt-1" style={{ color }}>
                  {p.prix}
                  <span className="text-sm text-slate-400 font-normal">/mois</span>
                </p>

                {/* Details */}
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p><span className="text-slate-400">Biens :</span> {p.biens}</p>
                  <p><span className="text-slate-400">Stockage :</span> {p.stockage}</p>
                  <p><span className="text-slate-400">Support :</span> {p.support}</p>
                </div>

                {/* CTA Button */}
                <div className="mt-5">
                  {isSolo ? (
                    <button className="w-full py-2 rounded-lg bg-[#8FAF8A] text-white font-semibold text-sm hover:bg-[#cf6d17] transition-colors">
                      Commencer
                    </button>
                  ) : (
                    <button className="w-full py-2 rounded-lg border border-slate-300 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors">
                      Nous contacter
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Modules inclus/exclus */}
      <SectionCard title="Modules par plan" icon="📦" delay={100} className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium">Module</th>
                {PLANS_SAAS.map((p) => (
                  <th key={p.plan} className="text-center py-3 text-slate-700 font-semibold px-3">{p.plan.replace(" ★", "")}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ALL_MODULES.map((mod) => (
                <tr key={mod} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2 text-slate-700 text-xs">{mod}</td>
                  {PLANS_SAAS.map((p) => (
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

      {/* Onboarding — 3 niveaux */}
      <SectionCard title="🎓 Accompagnement selon votre plan" delay={150} className="mb-8">
        <p className="text-sm text-slate-500 mb-4">Chaque plan a son niveau d&apos;accompagnement — du 100% autonome au suivi continu.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {ONBOARDING_TIERS.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${tier.color}15` }}>
                    <tier.icon className="w-4 h-4" style={{ color: tier.color }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: tier.color }}>{tier.plan}</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{tier.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Gestion Assistée */}
      <SectionCard title="Gestion Assistée — À partir de 3 biens · Sans engagement" delay={200}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 text-slate-500 font-medium">Palier</th>
                <th className="text-left py-2 text-slate-500 font-medium">Prix/mois</th>
                <th className="text-left py-2 text-slate-500 font-medium">Service</th>
                <th className="text-right py-2 text-slate-500 font-medium">vs Agence 7%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {GA_PALIERS.map((row, i) => {
                const isMax = row.vs === "-90%"
                return (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 font-medium text-slate-700">{row.palier}</td>
                    <td className="py-2.5 text-[#1A3D2E] font-bold">{row.prix}</td>
                    <td className="py-2.5 text-slate-600 text-xs">{row.service}</td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                          isMax
                            ? "bg-[#059669] text-white"
                            : "bg-[#059669]/10 text-[#059669]"
                        }`}
                      >
                        {row.vs}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Mini comparison bar */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Comparaison mensuelle</p>
          <div className="space-y-2">
            {/* Agence classique bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-36 shrink-0">Agence classique</span>
              <div className="flex-1 bg-red-100 rounded-full h-5 relative">
                <div className="bg-red-500 h-5 rounded-full w-full flex items-center justify-end pr-3">
                  <span className="text-[11px] font-bold text-white">~450€/mois</span>
                </div>
              </div>
            </div>
            {/* PARKIMMO bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-36 shrink-0">PARKIMMO</span>
              <div className="flex-1 bg-green-50 rounded-full h-5 relative">
                <div className="bg-[#059669] h-5 rounded-full flex items-center justify-end pr-3" style={{ width: "12%" }}>
                  <span className="text-[11px] font-bold text-white whitespace-nowrap ml-2">89€/mois</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span className="inline-flex items-center gap-1.5 bg-[#059669]/10 text-[#059669] text-xs font-bold px-3 py-1.5 rounded-full">
              Économie : jusqu&apos;à 90%
            </span>
          </div>
        </div>
      </SectionCard>

      {/* ═══ FORFAIT LUXE ═══ */}
      <ScrollReveal delay={300}>
        <div className="mt-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b]" />

          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✦</span>
            <h2 className="font-display text-2xl font-bold text-[#daa520]">Forfait LUXE</h2>
          </div>
          <p className="text-sm text-slate-300 mb-6">
            Accompagnement premium à domicile — Pour les marchands de biens, chefs d&apos;entreprise,
            et multi-propriétaires exigeants qui veulent tout déléguer.
          </p>

          {/* Pricing */}
          <div className="flex flex-wrap items-end gap-6 mb-6">
            <div>
              <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Setup initial</p>
              <p className="text-3xl font-bold text-white">Sur devis</p>
              <p className="text-xs text-slate-400 mt-1">À partir de 1 500€ — selon taille du parc</p>
            </div>
            <div>
              <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Accompagnement mensuel</p>
              <p className="text-3xl font-bold text-white">299€<span className="text-sm text-slate-400 font-normal">/mois</span></p>
              <p className="text-xs text-slate-400 mt-1">Assistante dédiée + tous modules + support prioritaire</p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {LUXE_FEATURES.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#daa520] flex items-center justify-center text-[10px] font-bold text-[#1a1a2e] flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{f.feature}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[#daa520] text-[#1a1a2e] font-bold text-sm rounded-lg hover:bg-[#b8860b] transition-colors shadow-lg">
              Prendre rendez-vous
            </button>
            <p className="flex items-center text-xs text-slate-400">
              Déplacement Lyon / Villeurbanne inclus · Visio pour hors zone
            </p>
          </div>

          {/* Target badge */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs">
            {["Marchands de biens", "Chefs d'entreprise", "Multi-propriétaires 10+", "Family offices"].map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-[#daa520]/20 text-[#daa520] font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
