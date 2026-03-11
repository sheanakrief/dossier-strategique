"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Home, Building2, Users, TrendingUp, Target } from "lucide-react"

const DONNEES_CLES = [
  { indicateur: "Part ménages propriétaires RP", valeur: "57,4% en 2025", source: "INSEE Focus 359" },
  { indicateur: "Bailleurs privés (% des RP)", valeur: "22,8% (+0,9pt depuis 1997)", source: "INSEE 2025" },
  { indicateur: "Concentration marché", valeur: "3,5% des ménages = 50% des locations", source: "INSEE/BPCE" },
  { indicateur: "Multi-détenteurs (2+ biens)", valeur: "38% des bailleurs", source: "BPCE L’Observatoire" },
  { indicateur: "Taux impayés 2024", valeur: "3,55% grandes villes (vs 0,92% pré-Covid)", source: "BFM Business" },
  { indicateur: "Taxe foncière 2025", valeur: "+1,7% (après +7,1% en 2023)", source: "SDES" },
  { indicateur: "Logements DPE G interdits", valeur: "1,6 million concernés", source: "Loi Climat & Résilience" },
  { indicateur: "Bailleurs ne connaissant pas leur DPE", valeur: "49%", source: "BPCE L’Observatoire" },
  { indicateur: "Charges copro Paris 2024", valeur: "+10,5% Val-de-Marne", source: "BailFacile mai 2025" },
]

const TEMOIGNAGES = [
  {
    quote: "La gestion c’est chronophage.",
    author: "Orpheo, Finary Community — propriétaire bailleur Lyon",
    note: "Propriétaire qui gère seul → notre cible",
    badgeColor: "bg-[#059669]/10 text-[#059669]",
    badgeLabel: "Cible",
    borderColor: "border-[#1A3D2E]",
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
    note: "C’est exactement pourquoi on propose l’accompagnement HUMAIN",
    badgeColor: "bg-[#8FAF8A]/10 text-[#8FAF8A]",
    badgeLabel: "Insight",
    borderColor: "border-[#059669]",
  },
  {
    quote: "Les équipes au support sont détestables.",
    author: "Utilisateur Rentila, Trustpilot",
    note: "Notre différenciation : la relation humaine",
    badgeColor: "bg-[#059669]/10 text-[#059669]",
    badgeLabel: "Cible",
    borderColor: "border-[#8FAF8A]",
  },
]

export default function MarchePage() {
  return (
    <div>
      <PageHeader
        icon="��"
        title="Étude de Marché"
        subtitle="Données INSEE / SDES / BPCE / IFOP / OCDE 2024-2025"
      />

      {/* Contexte macro */}
      <SectionCard title="Contexte macro" icon="��" className="mb-6" delay={0}>
        <div className="grid md:grid-cols-2 gap-4">
          <ScrollReveal delay={50}>
            <div className="bg-[#1A3D2E]/5 rounded-xl p-5 h-full">
              <p className="text-xs font-bold text-[#1A3D2E] uppercase tracking-wider mb-3">Immobilier = valeur refuge</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1A3D2E] mt-0.5">{"●"}</span>
                  L&apos;immobilier reste le placement préféré des Français (69% selon CECOP/IFOP mars 2025)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A3D2E] mt-0.5">{"●"}</span>
                  Instabilité crypto → retour vers l&apos;immobilier comme valeur refuge
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1A3D2E] mt-0.5">{"●"}</span>
                  <strong>76%</strong> trouvent le locatif &laquo; trop compliqué &raquo; (IFOP/Masteos) — paradoxe intention/action
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-[#8FAF8A]/5 rounded-xl p-5 h-full">
              <p className="text-xs font-bold text-[#8FAF8A] uppercase tracking-wider mb-3">Nouvelles générations</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  18-35 ans s&apos;ouvrent à l&apos;investissement locatif via réseaux sociaux et influenceurs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  <strong>41%</strong> des 18-24 ans utilisent les réseaux sociaux comme 1ère source d&apos;info investissement (OCDE/AMF 2023)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  Génération digital-native qui attend un outil SaaS, pas un tableur Excel
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionCard>

      {/* KPI Hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="Logements en France" value="38,4M" subtitle="INSEE 2025" color="primary" icon={Home} delay={0} />
        <StatCard label="Lots en location privée" value="7,2M" subtitle="22,8% des résidences principales" color="accent" icon={Building2} delay={100} />
        <StatCard label="Ménages bailleurs" value="3,5M" subtitle="13% de la population — BPCE" color="success" icon={Users} delay={200} />
      </div>

      {/* Deux segments */}
      <SectionCard title="Deux segments, un même besoin" icon="��" className="mb-6" delay={50}>
        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal delay={80}>
            <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3D2E]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#1A3D2E]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Le particulier novice</p>
                  <p className="text-xs text-slate-400">25-45 ans</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                S&apos;ouvre à l&apos;investissement, cherche un outil intuitif et rassurant.
                A besoin d&apos;être guidé pas à pas — du premier achat à la première mise en location.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8FAF8A]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#8FAF8A]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Le propriétaire expérimenté</p>
                  <p className="text-xs text-slate-400">45-65 ans</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Possède déjà plusieurs biens, gère sur Excel ou via agence.
                A besoin de visibilité consolidée et de professionnels connectés.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionCard>

      {/* Données clés */}
      <SectionCard title="Données clés du marché" icon="��" className="mb-6" delay={100}>
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

      {/* Marché du logiciel de gestion immobilière */}
      <SectionCard title="Marché du logiciel de gestion immobilière" icon="��" className="mb-6" delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1A3D2E]/5 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#1A3D2E]">718M€</p>
            <p className="text-sm font-medium text-slate-700 mt-1">Marché français</p>
            <p className="text-xs text-slate-400 mt-1">+5%/an — Septeo / études sectorielles 2025</p>
          </div>
          <div className="bg-[#8FAF8A]/5 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#8FAF8A]">3,66 Mds$</p>
            <p className="text-sm font-medium text-slate-700 mt-1">Marché mondial (2025)</p>
            <p className="text-xs text-slate-400 mt-1">→ 6,47 Mds$ en 2033 · TCAC 7,3%</p>
          </div>
          <div className="bg-[#059669]/5 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#059669]">64%</p>
            <p className="text-sm font-medium text-slate-700 mt-1">Déploiements Cloud / SaaS</p>
            <p className="text-xs text-slate-400 mt-1">Tendance forte vers le SaaS</p>
          </div>
        </div>
      </SectionCard>

      {/* TAM SAM SOM Funnel */}
      <SectionCard title="TAM / SAM / SOM" icon="��" className="mb-6" delay={200}>
        <div className="flex flex-col items-center gap-2 py-4">
          {/* TAM - widest */}
          <div className="w-full max-w-xl bg-[#1A3D2E]/10 border border-[#1A3D2E]/20 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A3D2E]/60 mb-1">TAM — Total Addressable Market</p>
            <p className="text-2xl font-bold text-[#1A3D2E]">~420M€</p>
            <p className="text-xs text-slate-500 mt-1">3,5M ménages bailleurs × 10€/mois moyen</p>
          </div>
          {/* SAM - medium */}
          <div className="w-full max-w-md bg-[#1A3D2E]/20 border border-[#1A3D2E]/30 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A3D2E]/70 mb-1">SAM — Serviceable Addressable Market</p>
            <p className="text-2xl font-bold text-[#1A3D2E]">~60M€</p>
            <p className="text-xs text-slate-500 mt-1">~500K multi-détenteurs auto-gérés</p>
          </div>
          {/* SOM - narrowest */}
          <div className="w-full max-w-xs bg-[#1A3D2E] border border-[#1A3D2E] rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-white/70 mb-1">SOM — Serviceable Obtainable Market</p>
            <p className="text-2xl font-bold text-white">~6-12M€</p>
            <p className="text-xs text-white/70 mt-1">50-100K multi-détenteurs digitalisés, 3-30 biens</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 text-center mt-3">Sources : Septeo, études sectorielles 2025, INSEE, BPCE L&apos;Observatoire, IFOP/Masteos, CECOP/IFOP</p>
      </SectionCard>

      {/* Témoignages */}
      <SectionCard title="Témoignages terrain" icon="��" delay={300}>
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
                    <span className="text-xs font-medium text-[#1A3D2E]">→ {t.note}</span>
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
