"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Users, AlertTriangle, Building2, Target, TrendingUp, Clock } from "lucide-react"

const DONNEES_TERRAIN = [
  {
    quote: "La gestion c'est chronophage.",
    author: "Orpheo, Finary Community — propriétaire bailleur Lyon",
    insight: "Propriétaire qui gère seul → notre cible directe",
    color: "#1A3D2E",
  },
  {
    quote: "La tech ne sait pas répondre à ça.",
    author: "Henry8, Finary Community",
    insight: "C'est exactement pourquoi on propose l'accompagnement HUMAIN",
    color: "#8FAF8A",
  },
  {
    quote: "Les équipes au support sont détestables.",
    author: "Utilisateur Rentila, Trustpilot",
    insight: "Notre différenciation : la relation humaine et le chargé d'affaires dédié",
    color: "#059669",
  },
  {
    quote: "Mon expert-comptable me demande les mêmes documents chaque trimestre — et je ne sais plus où ils sont.",
    author: "Client terrain — multi-propriétaire 8 biens",
    insight: "Le coffre-fort documentaire + partage partenaire résout exactement ça",
    color: "#7c3aed",
  },
]

export default function MarchePage() {
  return (
    <div>
      <PageHeader
        icon="📈"
        title="Le marché — Opportunité & timing"
        subtitle="Données INSEE / SDES / BPCE / IFOP / OCDE 2024-2025"
      />

      {/* KPI Hero */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Ménages bailleurs" value="3,5M" subtitle="En France — BPCE" color="primary" icon={Users} delay={0} />
        <StatCard label="Sans outil dédié" value="70%" subtitle="Gèrent sur Excel ou papier" color="accent" icon={AlertTriangle} delay={100} />
        <StatCard label="Phobie administrative" value="76%" subtitle="IFOP/Masteos 2025" color="success" icon={Clock} delay={200} />
        <StatCard label="SCI en France" value="2,1M" subtitle="Structures à gérer" color="premium" icon={Building2} delay={300} />
      </div>

      {/* Pourquoi maintenant */}
      <SectionCard title="Pourquoi maintenant ?" icon="⏰" className="mb-6" delay={0}>
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
              <p className="text-xs font-bold text-[#8FAF8A] uppercase tracking-wider mb-3">Transition digitale</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  18-35 ans s&apos;ouvrent à l&apos;investissement locatif via réseaux sociaux et influenceurs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  <strong>64%</strong> des déploiements logiciels immobiliers sont en SaaS — la tendance est claire
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                  Aucun acteur ne propose logiciel + accompagnement humain + coffre-fort + cycle de vie complet
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionCard>

      {/* Deux segments */}
      <SectionCard title="Deux segments, un même besoin" icon="🎯" className="mb-6" delay={50}>
        <div className="grid md:grid-cols-2 gap-5">
          <ScrollReveal delay={80}>
            <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3D2E]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#1A3D2E]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Le propriétaire novice</p>
                  <p className="text-xs text-slate-400">25-45 ans · 1-3 biens</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                S&apos;ouvre à l&apos;investissement, cherche un outil intuitif et rassurant.
                A besoin d&apos;être guidé pas à pas — du premier achat à la première mise en location.
                Veut comprendre sa rentabilité et avoir ses documents en ordre.
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
                  <p className="text-sm font-bold text-slate-800">Le propriétaire expérimenté / professionnel</p>
                  <p className="text-xs text-slate-400">MDB, multi-biens, SCI · 5-50+ biens</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Possède déjà plusieurs biens, gère sur Excel ou via agence.
                A besoin de visibilité consolidée multi-structures (SCI, SNC, nom propre)
                et de professionnels connectés. Veut gagner du temps et déléguer l&apos;administratif.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionCard>

      {/* Marché logiciel */}
      <SectionCard title="Marché du logiciel de gestion immobilière" icon="💻" className="mb-6" delay={150}>
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

      {/* TAM SAM SOM */}
      <SectionCard title="TAM / SAM / SOM" icon="🔍" className="mb-6" delay={200}>
        <div className="flex flex-col items-center gap-2 py-4">
          <div className="w-full max-w-xl bg-[#1A3D2E]/10 border border-[#1A3D2E]/20 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A3D2E]/60 mb-1">TAM — Total Addressable Market</p>
            <p className="text-2xl font-bold text-[#1A3D2E]">~420M€</p>
            <p className="text-xs text-slate-500 mt-1">3,5M ménages bailleurs × 10€/mois moyen</p>
          </div>
          <div className="w-full max-w-md bg-[#1A3D2E]/20 border border-[#1A3D2E]/30 rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-[#1A3D2E]/70 mb-1">SAM — Serviceable Addressable Market</p>
            <p className="text-2xl font-bold text-[#1A3D2E]">~60M€</p>
            <p className="text-xs text-slate-500 mt-1">~500K multi-détenteurs auto-gérés</p>
          </div>
          <div className="w-full max-w-xs bg-[#1A3D2E] border border-[#1A3D2E] rounded-lg p-4 text-center">
            <p className="text-xs font-bold text-white/70 mb-1">SOM — Serviceable Obtainable Market</p>
            <p className="text-2xl font-bold text-white">~6-12M€</p>
            <p className="text-xs text-white/70 mt-1">50-100K multi-détenteurs digitalisés, 3-30 biens</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 text-center mt-3">Sources : Septeo, études sectorielles 2025, INSEE, BPCE L&apos;Observatoire, IFOP/Masteos, CECOP/IFOP</p>
      </SectionCard>

      {/* Données terrain */}
      <SectionCard title="Ce qu'on entend sur le terrain" icon="🎙️" delay={300}>
        <div className="grid md:grid-cols-2 gap-4">
          {DONNEES_TERRAIN.map((t, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="relative border-l-4 bg-white rounded-lg border border-slate-200 p-5 overflow-hidden" style={{ borderLeftColor: t.color }}>
                <span className="text-6xl text-slate-200 absolute -top-2 -left-1 leading-none select-none">&ldquo;</span>
                <div className="relative z-10">
                  <p className="text-slate-700 italic mb-3 pl-4">&laquo; {t.quote} &raquo;</p>
                  <p className="text-xs text-slate-400 mb-3">— {t.author}</p>
                  <p className="text-xs font-medium" style={{ color: t.color }}>→ {t.insight}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
