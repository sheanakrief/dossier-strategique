"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Home, Building2, Users } from "lucide-react"

const DONNEES_CLES = [
  { indicateur: "Part ménages propriétaires RP", valeur: "57,4% en 2025", source: "INSEE Focus 359" },
  { indicateur: "Bailleurs privés (% des RP)", valeur: "22,8% (+0,9pt depuis 1997)", source: "INSEE 2025" },
  { indicateur: "Concentration marché", valeur: "3,5% des ménages = 50% des locations", source: "INSEE/BPCE" },
  { indicateur: "Multi-détenteurs (2+ biens)", valeur: "38% des bailleurs", source: "BPCE L'Observatoire" },
  { indicateur: "Taux impayés 2024", valeur: "3,55% grandes villes (vs 0,92% pré-Covid)", source: "BFM Business" },
  { indicateur: "Taxe foncière 2025", valeur: "+1,7% (après +7,1% en 2023)", source: "SDES" },
  { indicateur: "Logements DPE G interdits", valeur: "1,6 million concernés", source: "Loi Climat & Résilience" },
  { indicateur: "Bailleurs ne connaissant pas leur DPE", valeur: "49%", source: "BPCE L'Observatoire" },
  { indicateur: "Charges copro Paris 2024", valeur: "+10,5% Val-de-Marne", source: "BailFacile mai 2025" },
]

const TEMOIGNAGES = [
  {
    quote: "La gestion c'est chronophage.",
    author: "Orpheo, Finary Community — propriétaire bailleur Lyon",
    note: "Propriétaire qui gère seul → notre cible",
    badgeColor: "bg-[#16a34a]/10 text-[#16a34a]",
    badgeLabel: "Cible",
    borderColor: "border-[#1A5276]",
  },
  {
    quote: "Mon excel me suffit.",
    author: "citronconfit, Finary — mono-bailleur",
    note: "PAS notre cible",
    badgeColor: "bg-[#dc2626]/10 text-[#dc2626]",
    badgeLabel: "Non cible",
    borderColor: "border-slate-300",
  },
  {
    quote: "La tech ne sait pas répondre à ça.",
    author: "Henry8, Finary Community",
    note: "C'est exactement pourquoi on propose l'accompagnement HUMAIN",
    badgeColor: "bg-[#E67E22]/10 text-[#E67E22]",
    badgeLabel: "Insight",
    borderColor: "border-[#16a34a]",
  },
  {
    quote: "Les équipes au support sont détestables.",
    author: "Utilisateur Rentila, Trustpilot",
    note: "Notre différenciation : la relation humaine",
    badgeColor: "bg-[#16a34a]/10 text-[#16a34a]",
    badgeLabel: "Cible",
    borderColor: "border-[#E67E22]",
  },
]

export default function MarchePage() {
  return (
    <div>
      <PageHeader
        icon="📈"
        title="Étude de Marché"
        subtitle="Données INSEE / SDES / BPCE 2024-2025"
      />

      {/* KPI Hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="Logements en France" value="38,4M" subtitle="INSEE 2025" color="primary" icon={Home} delay={0} />
        <StatCard label="Lots en location privée" value="7,2M" subtitle="22,8% des résidences principales" color="accent" icon={Building2} delay={100} />
        <StatCard label="Ménages bailleurs" value="3,5M" subtitle="13% de la population — BPCE" color="success" icon={Users} delay={200} />
      </div>

      {/* Données clés */}
      <SectionCard title="Données clés du marché" icon="📊" className="mb-6" delay={100}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium">Indicateur</th>
                <th className="text-left py-3 text-slate-500 font-medium">Valeur</th>
                <th className="text-left py-3 text-slate-500 font-medium">Source</th>
              </tr>
            </thead>
            <tbody>
              {DONNEES_CLES.map((row, i) => (
                <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50" : ""}`}>
                  <td className="py-2.5 text-slate-700 font-medium">{row.indicateur}</td>
                  <td className="py-2.5 text-slate-600">{row.valeur}</td>
                  <td className="py-2.5 text-xs text-slate-400">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* TAM SAM SOM Funnel */}
      <SectionCard title="TAM / SAM / SOM" icon="🎯" className="mb-6" delay={200}>
        <div className="flex flex-col items-center gap-2 py-4">
          {/* TAM - widest */}
          <div className="w-full max-w-xl bg-[#1A5276]/10 border border-[#1A5276]/20 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A5276]/60 mb-1">TAM</p>
            <p className="text-2xl font-bold text-[#1A5276]">~420M€/an</p>
            <p className="text-xs text-slate-500 mt-1">3,5M ménages bailleurs</p>
          </div>
          {/* SAM - medium */}
          <div className="w-full max-w-md bg-[#1A5276]/20 border border-[#1A5276]/30 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A5276]/70 mb-1">SAM</p>
            <p className="text-2xl font-bold text-[#1A5276]">~60M€/an</p>
            <p className="text-xs text-slate-500 mt-1">~500K multi-détenteurs auto-gérés</p>
          </div>
          {/* SOM - narrowest */}
          <div className="w-full max-w-xs bg-[#1A5276] border border-[#1A5276] rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-white/70 mb-1">SOM</p>
            <p className="text-2xl font-bold text-white">~6-12M€/an</p>
            <p className="text-xs text-white/70 mt-1">50-100K multi-détenteurs 3-30 biens, digitalisés</p>
          </div>
        </div>
      </SectionCard>

      {/* Témoignages */}
      <SectionCard title="Témoignages terrain" icon="💬" delay={300}>
        <div className="grid md:grid-cols-2 gap-4">
          {TEMOIGNAGES.map((t, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`relative border-l-4 ${t.borderColor} bg-white rounded-lg border border-slate-200 p-5 overflow-hidden`}>
                <span className="text-6xl text-slate-200 absolute -top-2 -left-1 leading-none select-none">&ldquo;</span>
                <div className="relative z-10">
                  <p className="text-slate-700 italic mb-3 pl-4">&laquo; {t.quote} &raquo;</p>
                  <p className="text-xs text-slate-400 mb-3">— {t.author}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.badgeColor}`}>
                      {t.badgeLabel}
                    </span>
                    <span className="text-xs font-medium text-[#1A5276]">→ {t.note}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
