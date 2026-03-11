"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const COMPARATIF = [
  {
    critere: "Prix/mois",
    rentila: "0-9,90€",
    bailfacile: "9,90-29€",
    smovin: "0-29€",
    hugo: "33,90€/bien",
    kpk: "24-79€ + GA",
    agence: "6-8% loyers",
  },
  {
    critere: "Gestion locative",
    rentila: "Basique",
    bailfacile: "✅ Baux/quittances",
    smovin: "✅ Cash-flow",
    hugo: "✅ Complète",
    kpk: "✅ Complète + cycle de vie",
    agence: "✅ (cher)",
  },
  {
    critere: "Accompagnement humain",
    rentila: "❌",
    bailfacile: "Support 7j/7",
    smovin: "❌",
    hugo: "Partiel (support)",
    kpk: "✅ GA + chargé d’affaires dédié",
    agence: "✅ (cher)",
  },
  {
    critere: "Coffre-fort docs",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "❌",
    hugo: "❌",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Vision rendement",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "Cash-flow",
    hugo: "❌",
    kpk: "✅ Complet + scénarios",
    agence: "❌",
  },
  {
    critere: "Multi-SCI / MDB",
    rentila: "Partiel",
    bailfacile: "✅",
    smovin: "✅",
    hugo: "❌",
    kpk: "✅ 9 SCI testées",
    agence: "✅",
  },
  {
    critere: "Cycle de vie complet",
    rentila: "❌ Locatif",
    bailfacile: "❌ Locatif",
    smovin: "❌ Locatif",
    hugo: "❌ Locatif uniquement",
    kpk: "✅ Acquisition → revente",
    agence: "❌",
  },
  {
    critere: "Prélèvement SEPA",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    hugo: "✅ Unique sur le marché",
    kpk: "❌ (prévu V2)",
    agence: "✅",
  },
  {
    critere: "Juridique intégré",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    hugo: "✅ 200 juristes (Axa)",
    kpk: "✅ Art. 59 loi 1971",
    agence: "Partiel",
  },
  {
    critere: "Partage partenaires",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    hugo: "❌",
    kpk: "✅ Espace Pro (M9)",
    agence: "❌",
  },
  {
    critere: "Hébergement France",
    rentila: "Bulgarie",
    bailfacile: "Non précisé",
    smovin: "Belgique",
    hugo: "?",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Carte pro CCI",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    hugo: "❌",
    kpk: "✅ Carte T+G",
    agence: "✅",
  },
]

function formatCompetitorCell(value: string) {
  if (value === "❌") return <span className="text-slate-300">{"❌"}</span>
  if (value.startsWith("✅")) return <span className="text-green-400">{value}</span>
  return <span>{value}</span>
}

function formatKpkCell(value: string) {
  if (value.startsWith("✅")) return <span className="text-[#059669] font-medium">{value}</span>
  return <span className="font-medium text-[#1A3D2E]">{value}</span>
}

export default function ConcurrencePage() {
  const kpkScore = 10
  const hugoScore = 4
  const avgScore = 3

  return (
    <div>
      <PageHeader
        icon="⚔️"
        title="Analyse Concurrentielle"
        subtitle="K PAR K vs le marché existant"
      />

      <SectionCard className="mb-6" delay={0}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium sticky left-0 bg-white">Critère</th>
                <th className="text-center py-3 text-slate-500 font-medium px-3">Rentila</th>
                <th className="text-center py-3 text-slate-500 font-medium px-3">BailFacile</th>
                <th className="text-center py-3 text-slate-500 font-medium px-3">Smovin</th>
                <th className="text-center py-3 text-slate-500 font-medium px-3">Mr Hugo</th>
                <th className="text-center py-3 font-bold text-white px-3 bg-[#1A3D2E] rounded-t-lg">K PAR K</th>
                <th className="text-center py-3 text-slate-500 font-medium px-3">Agence 7%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARATIF.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="py-2.5 font-medium text-slate-700 sticky left-0 bg-white">{row.critere}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.rentila)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.bailfacile)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.smovin)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.hugo)}</td>
                  <td className="py-2.5 text-center bg-[#1A3D2E]/5 px-3">{formatKpkCell(row.kpk)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.agence)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Score summary */}
      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-bold">
                K PAR K: {kpkScore}/12 critères
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-[#059669] h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(kpkScore / 12) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FAF8A]/10 text-[#8FAF8A] text-sm font-bold">
                Mr Hugo: {hugoScore}/12
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-[#8FAF8A] h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(hugoScore / 12) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">
                Moyenne autres: ~{avgScore}/12
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-slate-400 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(avgScore / 12) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Focus Monsieur Hugo */}
      <SectionCard title="Focus : Monsieur Hugo" icon="��" delay={150} className="mb-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-bold text-[#8FAF8A] uppercase tracking-wider mb-3">Points forts</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                Prélèvement SEPA automatique (unique sur le marché)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                Garanties juridiques via Axa (200 juristes)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                Réseau de 4 900 artisans pour le dépannage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FAF8A] mt-0.5">{"●"}</span>
                Bon NPS (4.7/5 sur Trustpilot)
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-[#1A3D2E] uppercase tracking-wider mb-3">Nos différenciants vs Hugo</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Cycle de vie complet (pas juste locatif)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Multi-structures (SCI, SNC, MDB, nom propre)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Coffre-fort documentaire centralisé
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Chargé d&apos;affaires dédié (pas juste du support)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Vision patrimoniale consolidée (rendement, charges, rentabilité)
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard delay={200}>
        <div className="flex items-start gap-3">
          <span className="text-2xl">{"��"}</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1A3D2E] mb-2">Positionnement unique</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              K PAR K est le seul acteur à combiner <strong>logiciel + coffre-fort + accompagnement humain dédié +
              conseil juridique + carte CCI + hébergement France + cycle de vie complet</strong>. Monsieur Hugo
              est le concurrent le plus proche mais reste limité au locatif et ne propose pas de vision
              patrimoniale consolidée.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
