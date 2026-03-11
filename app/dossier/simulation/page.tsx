"use client"

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend, ReferenceLine,
} from "recharts"
import { TrendingUp, PiggyBank, Repeat, Wallet } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { calculerSimulation, getSyntheseAn1 } from "@/data/simulation"

const COLORS = ["#059669", "#1A3D2E", "#8FAF8A", "#7c3aed"]

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n)
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-3 text-sm">
      <p className="font-medium text-slate-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-slate-500">{p.name} :</span>
          <span className="font-semibold text-slate-800">{fmt(p.value)}€</span>
        </p>
      ))}
    </div>
  )
}

export default function SimulationPage() {
  const sim = calculerSimulation()
  const syn = getSyntheseAn1(sim)

  const pieData = [
    { name: "Gestion Assistée", value: syn.decompositionCA.ga },
    { name: "SaaS", value: syn.decompositionCA.saas },
    { name: "Clients existants", value: syn.decompositionCA.existant },
  ]

  const mrrData = sim.map((m) => ({
    label: m.label,
    mrr: m.mrrGA + m.mrrSaaS,
  }))

  return (
    <div className="page-enter">
      <PageHeader
        icon="💰"
        title="Simulation Financière"
        subtitle="Projection An1 — Scénario modéré"
      />

      {/* KPI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Clients M12" value={`${syn.clientsCumul}`} subtitle={`dont ${syn.clientsGACumul} en GA`} color="primary" icon={TrendingUp} delay={0} />
        <StatCard label="MRR M12" value={`${fmt(syn.mrrRecurrent)}€`} subtitle="GA + SaaS récurrent" color="success" icon={Repeat} delay={100} />
        <StatCard label="CA mensuel M12" value={`${fmt(syn.caMensuelM12)}€`} subtitle="Mensuel" color="accent" icon={PiggyBank} delay={200} />
        <StatCard label="Trésorerie M12" value={`${fmt(syn.tresorerieM12)}€`} subtitle="Solde fin M12" color="premium" icon={Wallet} delay={300} />
      </div>

      {/* Hypothèses */}
      <ScrollReveal>
        <SectionCard title="Hypothèses clés" icon="📐" className="mb-6">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              ["PASCAL", "1 800€/mois (toute l'année)"],
              ["LTOA", "1 000€/mois M1-M5, sortie M6 (0€ ensuite)"],
              ["Trésorerie départ", "8 000€"],
              ["Nouveaux clients", "1/mois (M1-M6), 2/mois (M7-M12)"],
              ["Clients GA", "10 en fin d'année (GA à partir de 3 biens)"],
              ["GA moyenne", "~150€/mois par client"],
              ["SaaS moyen", "~30€/mois par client"],
              ["Rémunération Sheana", "800€/mois à partir de M7"],
              ["Charges", "Infra ~175€ + Marketing 250-450€ + Admin 150€"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">{k}</span>
                <span className="font-medium text-slate-700">{v}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* CA vs Charges */}
        <SectionCard title="CA total vs Charges SAS (M1-M12)" delay={100}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sim}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <RTooltip content={<CustomTooltip />} />
              <ReferenceLine x="M4" stroke="#f59e0b" strokeDasharray="5 5" label={{ value: "Break-even", position: "top", fontSize: 11, fill: "#f59e0b" }} />
              <Area type="monotone" dataKey="caTotal" name="CA" stroke="#1A3D2E" fill="#1A3D2E" fillOpacity={0.12} strokeWidth={2.5} />
              <Area type="monotone" dataKey="chargesTotal" name="Charges" stroke="#dc2626" fill="#dc2626" fillOpacity={0.08} strokeWidth={2} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>

        {/* Trésorerie */}
        <SectionCard title="Trésorerie (M1-M12)" delay={200}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sim}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <RTooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="tresorerie" name="Trésorerie" stroke="#059669" fill="#059669" fillOpacity={0.12} strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Pie CA */}
        <SectionCard title="Décomposition CA An1" delay={300}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <RTooltip formatter={(v: number) => `${fmt(v)}€`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3 w-full">
              {pieData.map((item, i) => {
                const total = pieData.reduce((s, d) => s + d.value, 0)
                const pct = Math.round((item.value / total) * 100)
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-700">{item.name}</p>
                      <p className="text-xs text-slate-400">{fmt(item.value)}€</p>
                    </div>
                    <span className="text-sm font-bold text-slate-600">{pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>

        {/* MRR */}
        <SectionCard title="MRR récurrent par mois" delay={400}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={mrrData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`} />
              <RTooltip content={<CustomTooltip />} />
              <Bar dataKey="mrr" name="MRR" fill="#1A3D2E" radius={[4, 4, 0, 0]} label={{ position: "top", fontSize: 10, fill: "#64748b" }} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Tableau détaillé */}
      <SectionCard title="Tableau mensuel détaillé" icon="📊" delay={500} className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50">
                {["Mois", "Nvx clients", "Clients cumul", "GA cumul", "MRR GA", "MRR SaaS", "CA total", "Charges", "Résultat", "Trésorerie"].map((h, i) => (
                  <th key={h} className={`py-3 text-slate-500 font-medium px-2 ${i === 0 ? "text-left rounded-tl-lg" : "text-right"} ${i === 9 ? "rounded-tr-lg" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sim.map((m) => (
                <tr key={m.month} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-1.5 px-2 font-medium text-[#1A3D2E]">{m.label}</td>
                  <td className="py-1.5 px-2 text-right">{m.nouveauxClients}</td>
                  <td className="py-1.5 px-2 text-right">{m.clientsCumul}</td>
                  <td className="py-1.5 px-2 text-right">{m.clientsGACumul}</td>
                  <td className="py-1.5 px-2 text-right">{fmt(m.mrrGA)}€</td>
                  <td className="py-1.5 px-2 text-right">{fmt(m.mrrSaaS)}€</td>
                  <td className="py-1.5 px-2 text-right font-medium">{fmt(m.caTotal)}€</td>
                  <td className="py-1.5 px-2 text-right text-[#dc2626]">{fmt(m.chargesTotal)}€</td>
                  <td className={`py-1.5 px-2 text-right font-medium ${m.resultat >= 0 ? "text-[#059669]" : "text-[#dc2626]"}`}>{fmt(m.resultat)}€</td>
                  <td className="py-1.5 px-2 text-right font-medium">{fmt(m.tresorerie)}€</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Synthèse An1 vs An2 */}
      <SectionCard title="Synthèse An1 vs An2" icon="📈" delay={600}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tl-lg">Indicateur</th>
                <th className="text-right py-3 px-3 text-slate-500 font-medium">Année 1</th>
                <th className="text-right py-3 px-3 text-slate-500 font-medium">Année 2</th>
                <th className="text-right py-3 px-3 text-slate-500 font-medium rounded-tr-lg">Évolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { label: "CA total", v1: `~${fmt(syn.caTotal)}€`, v2: "~80 000€", evo: "+136%" },
                { label: "Résultat net avant IS", v1: `~${fmt(syn.resultatNet)}€ (marge ${syn.marge}%)`, v2: "~60 000€", evo: "+133%" },
                { label: "Trésorerie fin d'année", v1: `~${fmt(syn.tresorerieM12)}€`, v2: "~90 000€", evo: "+132%" },
                { label: "MRR récurrent", v1: `${fmt(syn.mrrRecurrent)}€/mois`, v2: "~3 000€/mois", evo: "+243%" },
                { label: "Clients Mon Patrimoine", v1: `${syn.clientsCumul}`, v2: "~50", evo: "+178%" },
                { label: "Équipe", v1: "Sheana + aide familiale", v2: "Sheana + 1 recrue", evo: "+1" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-medium text-slate-700">{row.label}</td>
                  <td className="py-3 px-3 text-right text-slate-600">{row.v1}</td>
                  <td className="py-3 px-3 text-right font-semibold text-[#059669]">{row.v2}</td>
                  <td className="py-3 px-3 text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-[#059669]/10 text-[#059669]">
                      {row.evo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  )
}
