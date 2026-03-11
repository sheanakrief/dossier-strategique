"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const POURQUOI = [
  { title: "Crédibilité", desc: "Profession réglementée CCI = signal confiance" },
  { title: "Couverture juridique", desc: "Accompagnement patrimonial dans le cadre légal (loi Hoguet 1970)" },
  { title: "Conseil juridique accessoire", desc: "Article 59 loi 1971 — consultations juridiques en immobilier sans être avocate" },
  { title: "Vision stratégique", desc: "Ouvre la porte à la gestion locative complète (perception loyers, mandats)" },
  { title: "Formation continue", desc: "42h/3 ans (loi ALUR) = veille réglementaire → contenu SEO + fonctionnalités" },
]

const CIRCLE_COLORS = [
  "bg-[#1A3D2E] text-white",
  "bg-[#8FAF8A] text-white",
  "bg-[#059669] text-white",
  "bg-[#7c3aed] text-white",
  "bg-[#1A3D2E] text-white",
]

const ELIGIBILITE = [
  { critere: "Diplôme", status: "done" as const, detail: "Master Droit Privé Lyon 3 (Bac+5 droit) → condition remplie de droit" },
  { critere: "Casier judiciaire", status: "done" as const, detail: "Vierge (à commander)" },
  { critere: "RC Pro immobilière", status: "pending" as const, detail: "~300-800€/an" },
  { critere: "Garantie financière", status: "pending" as const, detail: "Dispense possible, sinon ~500-1 500€/an" },
  { critere: "Dépôt CCI", status: "pending" as const, detail: "~120€, délai 2-4 semaines" },
]

export default function JuridiquePage() {
  return (
    <div>
      <PageHeader
        icon="⚖️"
        title="Cadre Juridique & Carte G"
        subtitle="Carte de gestion immobilière CCI"
      />

      {/* Pourquoi */}
      <SectionCard title="Pourquoi la Carte T+G ?" icon="🎯" className="mb-6" delay={0}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POURQUOI.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className={`w-8 h-8 rounded-full ${CIRCLE_COLORS[i]} flex items-center justify-center flex-shrink-0 text-sm font-bold`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-medium text-[#1A3D2E] mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Eligibilite */}
      <SectionCard title="Éligibilité Sheana Krief" icon="📋" className="mb-6" delay={100}>
        <div className="space-y-3">
          {ELIGIBILITE.map((item) => (
            <div key={item.critere} className="flex items-start gap-3">
              {item.status === "done" ? (
                <span className="text-xl w-10 h-10 rounded-lg bg-[#059669]/10 flex items-center justify-center flex-shrink-0">✅</span>
              ) : (
                <span className="text-xl w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">⏳</span>
              )}
              <div>
                <p className="font-medium text-slate-700">{item.critere}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <ScrollReveal delay={200}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#8FAF8A]/5 border border-[#8FAF8A]/20 rounded-xl p-6">
            <h3 className="font-display text-base font-semibold text-slate-800 mb-3">Coût total estimé</h3>
            <p className="text-2xl font-bold text-[#1A3D2E]">~1 000 - 2 000€</p>
            <p className="text-sm text-slate-500 mt-1">Délai : 4-6 semaines</p>
          </div>
          <SectionCard>
            <h3 className="font-display text-base font-semibold text-slate-800 mb-3">Usage actuel</h3>
            <p className="text-sm text-slate-600">
              Fondation stratégique (crédibilité + couverture juridique), pas commercialisé en façade.
              À terme : activation du service gestion locative complète (% des loyers).
            </p>
          </SectionCard>
        </div>
      </ScrollReveal>
    </div>
  )
}
