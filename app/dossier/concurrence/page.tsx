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
    ownily: "0-9,90€",
    hugo: "33,90€/bien",
    kpk: "19-79€ + GA",
    agence: "6-8% loyers",
  },
  {
    critere: "Gestion locative",
    rentila: "Basique",
    bailfacile: "✅ Baux/quittances",
    smovin: "✅ Cash-flow",
    ownily: "✅ Comptabilité SCI",
    hugo: "✅ Complète",
    kpk: "✅ Complète + cycle de vie",
    agence: "✅ (cher)",
  },
  {
    critere: "Accompagnement humain",
    rentila: "❌",
    bailfacile: "Support 7j/7",
    smovin: "❌",
    ownily: "❌ (self-service)",
    hugo: "Partiel (support)",
    kpk: "✅ GA + chargé d'affaires dédié",
    agence: "✅ (cher)",
  },
  {
    critere: "Coffre-fort docs",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "❌",
    ownily: "Partiel",
    hugo: "❌",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Vision rendement",
    rentila: "Basique",
    bailfacile: "❌",
    smovin: "Cash-flow",
    ownily: "✅ Rendement SCI",
    hugo: "❌",
    kpk: "✅ Complet + scénarios",
    agence: "❌",
  },
  {
    critere: "Multi-SCI / MDB",
    rentila: "Partiel",
    bailfacile: "✅",
    smovin: "✅",
    ownily: "✅ Spécialité SCI",
    hugo: "❌",
    kpk: "✅ 9 SCI testées",
    agence: "✅",
  },
  {
    critere: "Cycle de vie complet",
    rentila: "❌ Locatif",
    bailfacile: "❌ Locatif",
    smovin: "❌ Locatif",
    ownily: "❌ Comptabilité",
    hugo: "❌ Locatif uniquement",
    kpk: "✅ Acquisition → revente",
    agence: "❌",
  },
  {
    critere: "Prélèvement SEPA",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    ownily: "❌",
    hugo: "✅ Unique sur le marché",
    kpk: "❌ (prévu V2)",
    agence: "✅",
  },
  {
    critere: "Juridique intégré",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    ownily: "❌",
    hugo: "✅ 200 juristes (Axa)",
    kpk: "✅ Art. 59 loi 1971",
    agence: "Partiel",
  },
  {
    critere: "Partage partenaires",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    ownily: "Partiel (comptable)",
    hugo: "❌",
    kpk: "✅ Espace Pro (M9)",
    agence: "❌",
  },
  {
    critere: "Hébergement France",
    rentila: "Bulgarie",
    bailfacile: "Non précisé",
    smovin: "Belgique",
    ownily: "Non précisé",
    hugo: "?",
    kpk: "✅ Scaleway Paris",
    agence: "Variable",
  },
  {
    critere: "Carte pro CCI",
    rentila: "❌",
    bailfacile: "❌",
    smovin: "❌",
    ownily: "❌",
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
  const ownilyScore = 3
  const avgScore = 2

  return (
    <div>
      <PageHeader
        icon="⚔️"
        title="Analyse Concurrentielle"
        subtitle="Parkimmo vs le marché existant"
      />

      <SectionCard className="mb-6" delay={0}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium sticky left-0 bg-white min-w-[100px]">Critère</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">Rentila</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">BailFacile</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">Smovin</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">Ownily</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">Mr Hugo</th>
                <th className="text-center py-3 font-bold text-white px-2 text-xs bg-[#1A3D2E] rounded-t-lg">Parkimmo</th>
                <th className="text-center py-3 text-slate-500 font-medium px-2 text-xs">Agence 7%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COMPARATIF.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="py-2.5 font-medium text-slate-700 sticky left-0 bg-white text-xs">{row.critere}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.rentila)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.bailfacile)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.smovin)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.ownily)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.hugo)}</td>
                  <td className="py-2.5 text-center bg-[#1A3D2E]/5 px-2 text-xs">{formatKpkCell(row.kpk)}</td>
                  <td className="py-2.5 text-center text-slate-500 px-2 text-xs">{formatCompetitorCell(row.agence)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Score summary */}
      <ScrollReveal delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-bold mb-2">
              Parkimmo: {kpkScore}/12
            </span>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-[#059669] h-3 rounded-full" style={{ width: `${(kpkScore / 12) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FAF8A]/10 text-[#8FAF8A] text-sm font-bold mb-2">
              Mr Hugo: {hugoScore}/12
            </span>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-[#8FAF8A] h-3 rounded-full" style={{ width: `${(hugoScore / 12) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-bold mb-2">
              Ownily: {ownilyScore}/12
            </span>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-[#7c3aed] h-3 rounded-full" style={{ width: `${(ownilyScore / 12) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-2">
              Autres: ~{avgScore}/12
            </span>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div className="bg-slate-400 h-3 rounded-full" style={{ width: `${(avgScore / 12) * 100}%` }} />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Focus Ownily */}
      <SectionCard title="Focus : Ownily" icon="🔎" delay={150} className="mb-6">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider mb-3">Points forts</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-0.5">{"●"}</span>
                Spécialisé comptabilité SCI (déclarations fiscales, 2072)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-0.5">{"●"}</span>
                Gratuit pour la version de base
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-0.5">{"●"}</span>
                Bonne UX, interface moderne
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7c3aed] mt-0.5">{"●"}</span>
                Vision rendement par bien et par SCI
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-[#1A3D2E] uppercase tracking-wider mb-3">Nos différenciants vs Ownily</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Cycle de vie complet (pas juste comptabilité SCI)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Accompagnement humain dédié (Gestion Assistée)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Coffre-fort documentaire centralisé (Scaleway Paris)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Partage partenaires (comptable, notaire, CGP)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] mt-0.5">{"●"}</span>
                Conseil juridique intégré (Art. 59 loi 1971)
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Focus Mr Hugo */}
      <SectionCard title="Focus : Monsieur Hugo" icon="🔎" delay={200} className="mb-6">
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

      <SectionCard delay={250}>
        <div className="flex items-start gap-3">
          <span className="text-2xl">{"🏆"}</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-[#1A3D2E] mb-2">Positionnement unique</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Parkimmo est le seul acteur à combiner <strong>logiciel + coffre-fort + accompagnement humain dédié +
              conseil juridique + carte CCI + hébergement France + cycle de vie complet</strong>. Ownily se concentre
              sur la comptabilité SCI, Monsieur Hugo sur le locatif — aucun ne couvre l&apos;ensemble du cycle de vie
              patrimonial avec un accompagnement humain intégré.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
