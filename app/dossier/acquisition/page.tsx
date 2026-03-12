"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Rocket, Radio, BarChart3 } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const CANAUX = [
  { canal: "Google Ads", budget: "5 400€", leads: "~350", cpl: "15€", clients: "~17", cac: "318€", phase: "M1→M12" },
  { canal: "SEO (contenu IA)", budget: "400€", leads: "~400", cpl: "1€", clients: "~20", cac: "20€", phase: "M1→cumulatif" },
  { canal: "LinkedIn organique", budget: "0€", leads: "~150", cpl: "0€", clients: "~8", cac: "0€", phase: "M1→2-4 sem" },
  { canal: "Influenceurs", budget: "5 000€", leads: "~120", cpl: "42€", clients: "~6", cac: "833€", phase: "M3→M12" },
  { canal: "Partenaires pros", budget: "1 000€", leads: "~50", cpl: "20€", clients: "~7", cac: "143€", phase: "M6→réseau" },
]

const TOTAL = { budget: "11 800€", leads: "~1 070", cpl: "11€ moy.", clients: "~58", cac: "203€" }

const LEADS_M12 = [
  { canal: "SEO", leads: 100, pct: "45%" },
  { canal: "Google Ads", leads: 48, pct: "21%" },
  { canal: "LinkedIn", leads: 28, pct: "13%" },
  { canal: "Influenceurs", leads: 28, pct: "13%" },
  { canal: "Partenaires", leads: 20, pct: "9%" },
]

const BAR_COLORS = ["#27AE60", "#1A3D2E", "#8FAF8A", "#8E44AD", "#E74C3C"]

function formatCPL(cpl: string) {
  if (cpl === "1€") {
    return <span className="bg-[#059669]/10 text-[#059669] px-1 rounded font-bold">{cpl}</span>
  }
  return <span>{cpl}</span>
}

export default function AcquisitionPage() {
  return (
    <div>
      <PageHeader
        icon={Rocket}
        title="Stratégie d'Acquisition"
        subtitle="5 canaux — Budget An1 : 11 800€"
      />

      <SectionCard title="5 canaux d'acquisition" icon={Radio} className="mb-6" delay={0}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                {["Canal", "Budget An1", "Leads", "CPL", "Clients", "CAC", "Phase"].map((h) => (
                  <th key={h} className="text-left py-3 text-slate-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CANAUX.map((row, i) => (
                <tr key={i} className={`border-b border-slate-100 hover:bg-slate-50 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                  <td className="py-2.5 font-medium text-slate-700">{row.canal}</td>
                  <td className="py-2.5 text-slate-600">{row.budget}</td>
                  <td className="py-2.5 text-slate-600">{row.leads}</td>
                  <td className="py-2.5 text-slate-600">{formatCPL(row.cpl)}</td>
                  <td className="py-2.5 text-slate-600">{row.clients}</td>
                  <td className="py-2.5 text-slate-600">{row.cac}</td>
                  <td className="py-2.5 text-xs text-slate-400">{row.phase}</td>
                </tr>
              ))}
              <tr className="bg-[#1A3D2E]/10 font-bold text-lg">
                <td className="py-3 text-[#1A3D2E]">TOTAL</td>
                <td className="py-3 text-[#1A3D2E]">{TOTAL.budget}</td>
                <td className="py-3 text-[#1A3D2E]">{TOTAL.leads}</td>
                <td className="py-3 text-[#1A3D2E]">{TOTAL.cpl}</td>
                <td className="py-3 text-[#1A3D2E]">{TOTAL.clients}</td>
                <td className="py-3 text-[#1A3D2E]">{TOTAL.cac}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="Répartition leads M12" icon={BarChart3} delay={200}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={LEADS_M12} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="canal" tick={{ fontSize: 12 }} width={100} />
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Tooltip formatter={(v: any, _: any, p: any) => [`${v} leads/mois (${p?.payload?.pct || ""})`, ""]} />
            <Bar dataKey="leads" radius={[0, 4, 4, 0]}>
              {LEADS_M12.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>
    </div>
  )
}
