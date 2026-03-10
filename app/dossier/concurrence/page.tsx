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
    kpk: "9,90-59,90€ + GA",
    agence: "6-8% loyers",
  },
  {
    critere: "Accompagnement humain",
    rentila: "❌",
    bailfacile: "Support 7j/7",
    smovin: "❌",
    kpk: "✅ GA + conseil juridique",
    agence: "✅ (cher)",
  },
  {
    critere: "Coffre-fort docs",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "❌",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Vision rendement",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "Cash-flow",
    kpk: "✅ Complet + scénarios",
    agence: "❌",
  },
  {
    critere: "Multi-SCI",
    rentila: "Partiel",
    bailfacile: "✅",
    smovin: "✅",
    kpk: "✅ 9 SCI testées",
    agence: "✅",
  },
  {
    critere: "Partage partenaires",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    kpk: "✅ Espace Pro (M9)",
    agence: "❌",
  },
  {
    critere: "Hébergement France",
    rentila: "Bulgarie",
    bailfacile: "Non précisé",
    smovin: "Belgique",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Carte pro CCI",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    kpk: "✅ Carte T+G",
    agence: "✅",
  },
  {
    critere: "Conseil juridique",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    kpk: "✅ Art. 59 loi 1971",
    agence: "Partiel",
  },
]

function formatCompetitorCell(value: string) {
  if (value === "❌") return <span className="text-slate-300">❌</span>
  if (value.startsWith("✅")) return <span className="text-green-400">{value}</span>
  return <span>{value}</span>
}

function formatKpkCell(value: string) {
  if (value.startsWith("✅")) return <span className="text-[#16a34a] font-medium">{value}</span>
  return <span className="font-medium text-[#1A5276]">{value}</span>
}

export default function ConcurrencePage() {
  const kpkScore = 9
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
                <th className="text-center py-3 font-bold text-white px-3 bg-[#1A5276] rounded-t-lg">K PAR K</th>
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
                  <td className="py-2.5 text-center bg-[#1A5276]/5 px-3">{formatKpkCell(row.kpk)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-3">{formatCompetitorCell(row.agence)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Score summary */}
      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-sm font-bold">
                K PAR K: {kpkScore}/9 critères
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-[#16a34a] h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(kpkScore / 9) * 100}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">
                Moyenne concurrents: ~{avgScore}/9
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-slate-400 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(avgScore / 9) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <SectionCard delay={200}>
        <div className="flex items-start gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1A5276] mb-2">Positionnement unique</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              K PAR K est le seul acteur à combiner <strong>logiciel + coffre-fort + accompagnement humain +
              conseil juridique + carte CCI + hébergement France</strong>. Aucun concurrent ne couvre ces 6 critères.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
