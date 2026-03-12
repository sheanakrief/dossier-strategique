"use client"

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend,
} from "recharts"
import { TrendingUp, PiggyBank, Repeat, Wallet, Users, AlertTriangle, Ruler, BarChart3, Lightbulb, Target, Shield, Rocket } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { calculerSimulation, getSyntheseAn1, HYPOTHESES, PROJECTION_AN2 } from "@/data/simulation"

// ─── COLORS ──────────────────────────────────────────────────
const FOREST = "#1A3D2E"
const SAGE = "#8FAF8A"
const CREAM = "#E8E4D4"
const PRIMARY = "#1A5276"
const ACCENT = "#E67E22"
const SUCCESS = "#059669"
const DANGER = "#dc2626"
const PIE_COLORS = [PRIMARY, SUCCESS]

// ─── FORMAT ──────────────────────────────────────────────────
function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR").format(Math.round(n))
}

function fmtK(v: number) {
  return `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k`
}

// ─── CUSTOM TOOLTIP ──────────────────────────────────────────
function CustomTooltip({ active, payload, label }: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-3 text-sm">
      <p className="font-medium text-slate-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-slate-500">{p.name} :</span>
          <span className="font-semibold text-slate-800">{fmt(p.value)}&nbsp;€</span>
        </p>
      ))}
    </div>
  )
}

// ─── HYPOTHESES DISPLAY DATA ─────────────────────────────────
function getHypothesesCards() {
  return [
    { label: "Trésorerie de départ", value: `${fmt(HYPOTHESES.tresorerieDepart)} €` },
    { label: "Investissement M6", value: `${fmt(HYPOTHESES.investissement)} €` },
    { label: "ARPU SaaS", value: `${HYPOTHESES.arpuSaaS} €/mois` },
    { label: "ARPU GA", value: `${HYPOTHESES.arpuGA} €/mois` },
    { label: "Conversion Free → Payant", value: `${(HYPOTHESES.conversionFreePaid * 100).toFixed(0)}%` },
    { label: "Conversion Payant → GA", value: `${(HYPOTHESES.conversionPaidGA * 100).toFixed(0)}%` },
    { label: "Churn SaaS", value: `${(HYPOTHESES.churnSaaS * 100).toFixed(0)}%/mois` },
    { label: "Churn GA", value: `${(HYPOTHESES.churnGA * 100).toFixed(0)}%/mois` },
    { label: "CAC moyen", value: `${HYPOTHESES.cacMoyen} €` },
    { label: "LTV SaaS", value: `${fmt(HYPOTHESES.ltvSaaS)} €` },
    { label: "LTV SaaS + Support", value: `${fmt(HYPOTHESES.ltvSaaSSupport)} €` },
    { label: "LTV SaaS + Gestion", value: `${fmt(HYPOTHESES.ltvSaaSGestion)} €` },
  ]
}

// ─── "CE QUE PROUVE CE MODÈLE" ──────────────────────────────
const PREUVES = [
  {
    icon: Target,
    title: "Unit economics solides",
    text: "LTV/CAC > 10x dès la 1re année. Le modèle freemium génère un pipeline organique à faible coût d'acquisition.",
  },
  {
    icon: Rocket,
    title: "Croissance récurrente",
    text: "Le MRR progresse chaque mois grâce à la rétention (churn < 5%) et l'upsell naturel SaaS → Gestion Assistée.",
  },
  {
    icon: Shield,
    title: "Risque maîtrisé",
    text: "Investissement limité (30-50k€), breakeven mensuel en M15-M16, trésorerie toujours positive grâce à l'injection M6.",
  },
  {
    icon: Lightbulb,
    title: "Scalabilité prouvée",
    text: "Passage de 81 à 200 clients An2 sans recrutement massif. La technologie absorbe la croissance, pas la masse salariale.",
  },
]

// ─── PAGE ────────────────────────────────────────────────────
export default function SimulationPage() {
  const sim = calculerSimulation()
  const syn = getSyntheseAn1(sim)

  // Pie chart data — SaaS vs GA only, NO existing clients
  const pieData = [
    { name: "SaaS", value: syn.decompositionCA.saas },
    { name: "Gestion Assistée", value: syn.decompositionCA.ga },
  ]

  // MRR stacked data
  const mrrData = sim.map((m) => ({
    label: m.label,
    mrrSaaS: m.mrrSaaS,
    mrrGA: m.mrrGA,
  }))

  return (
    <div className="page-enter">
      {/* ═══ HEADER ═══ */}
      <PageHeader
        icon={PiggyBank}
        title="Simulation Financière"
        subtitle="Scénario investisseur — Modèle de croissance Parkimmo"
      />

      {/* Badge + Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#1A5276]/10 text-[#1A5276]">
              Scénario investisseur
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Projection basée sur un lancement freemium M3, une montée en charge progressive,
            et un investissement de 30-50k€ à partir de M6.
          </p>
        </div>
      </div>

      {/* ═══ KPI CARDS ═══ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Inscrits Free M12"
          value={fmt(syn.inscritsFree)}
          subtitle="Utilisateurs gratuits cumulés"
          color="primary"
          icon={Users}
          delay={0}
        />
        <StatCard
          label="Clients Payants M12"
          value={`${syn.clientsPayants}`}
          subtitle={`dont ${syn.clientsGA} en GA`}
          color="success"
          icon={TrendingUp}
          delay={100}
        />
        <StatCard
          label="MRR M12"
          value={`${fmt(syn.mrrRecurrent)} €/mois`}
          subtitle="Récurrent SaaS + GA"
          color="accent"
          icon={Repeat}
          delay={200}
        />
        <StatCard
          label="Trésorerie M12"
          value={`${fmt(syn.tresorerieM12)} €`}
          subtitle="Solde fin de période"
          color="premium"
          icon={Wallet}
          delay={300}
        />
      </div>

      {/* ═══ HYPOTHÈSES CLÉS ═══ */}
      <ScrollReveal>
        <SectionCard title="Hypothèses clés" icon={Ruler} className="mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {getHypothesesCards().map((h) => (
              <div
                key={h.label}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-4 py-3"
              >
                <span className="text-sm text-slate-500">{h.label}</span>
                <span className="text-sm font-semibold text-slate-800 ml-3 whitespace-nowrap">{h.value}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ═══ CHARTS ROW 1 — CA vs Charges + Trésorerie ═══ */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* CA total vs Charges */}
        <SectionCard title="CA total vs Charges (M1-M12)" delay={100}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sim}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => fmtK(v)} />
              <RTooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="caTotal"
                name="CA total"
                stroke={FOREST}
                fill={FOREST}
                fillOpacity={0.12}
                strokeWidth={2.5}
              />
              <Area
                type="monotone"
                dataKey="chargesTotal"
                name="Charges"
                stroke={DANGER}
                fill={DANGER}
                fillOpacity={0.08}
                strokeWidth={2}
              />
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
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => fmtK(v)} />
              <RTooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="tresorerie"
                name="Trésorerie"
                stroke={SUCCESS}
                fill={SUCCESS}
                fillOpacity={0.15}
                strokeWidth={2.5}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* ═══ CHARTS ROW 2 — MRR stacked + Pie CA ═══ */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* MRR récurrent par mois — Stacked Bar */}
        <SectionCard title="MRR récurrent par mois" delay={300}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={mrrData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => fmtK(v)} />
              <RTooltip content={<CustomTooltip />} />
              <Bar
                dataKey="mrrSaaS"
                name="MRR SaaS"
                stackId="mrr"
                fill={PRIMARY}
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="mrrGA"
                name="MRR GA"
                stackId="mrr"
                fill={SUCCESS}
                radius={[4, 4, 0, 0]}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        {/* Décomposition CA An1 — Pie SaaS vs GA */}
        <SectionCard title="Décomposition CA An1" delay={400}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i]} />
                    ))}
                  </Pie>
                  <RTooltip formatter={(v: number) => `${fmt(v)} €`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-4 w-full">
              {pieData.map((item, i) => {
                const total = pieData.reduce((s, d) => s + d.value, 0)
                const pct = total > 0 ? Math.round((item.value / total) * 100) : 0
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ background: PIE_COLORS[i] }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-700">{item.name}</p>
                      <p className="text-xs text-slate-400">{fmt(item.value)} €</p>
                    </div>
                    <span className="text-lg font-bold text-slate-700">{pct}%</span>
                  </div>
                )
              })}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">CA total An1</span>
                  <span className="text-sm font-bold text-slate-800">{fmt(syn.caTotal)} €</span>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* ═══ MONTHLY TABLE ═══ */}
      <SectionCard title="Tableau mensuel détaillé" icon={BarChart3} delay={500} className="mb-6">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-xs min-w-[900px]">
            <thead>
              <tr className="bg-slate-50">
                {[
                  "Mois",
                  "Inscrits Free",
                  "Nvx Payants",
                  "Payants cumul",
                  "GA cumul",
                  "MRR SaaS",
                  "MRR GA",
                  "CA total",
                  "Infra",
                  "Marketing",
                  "Admin",
                  "Outils",
                  "Contenu",
                  "Chargé aff.",
                  "Charges",
                  "Résultat",
                  "Trésorerie",
                ].map((h, i, arr) => (
                  <th
                    key={h}
                    className={`py-3 text-slate-500 font-medium px-2 whitespace-nowrap ${
                      i === 0 ? "text-left rounded-tl-lg" : "text-right"
                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sim.map((m) => (
                <tr key={m.month} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2 px-2 font-semibold text-[#1A3D2E]">{m.label}</td>
                  <td className="py-2 px-2 text-right">{fmt(m.inscritsFree)}</td>
                  <td className="py-2 px-2 text-right">{m.nouveauxPayants}</td>
                  <td className="py-2 px-2 text-right">{m.clientsPayantsCumul}</td>
                  <td className="py-2 px-2 text-right">{m.clientsGACumul}</td>
                  <td className="py-2 px-2 text-right">{fmt(m.mrrSaaS)} €</td>
                  <td className="py-2 px-2 text-right">{fmt(m.mrrGA)} €</td>
                  <td className="py-2 px-2 text-right font-semibold">{fmt(m.caTotal)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.infra)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.marketing)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.admin)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.outils)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.contenu)} €</td>
                  <td className="py-2 px-2 text-right text-slate-400">{fmt(m.chargeAffaires)} €</td>
                  <td className="py-2 px-2 text-right text-[#dc2626]">{fmt(m.chargesTotal)} €</td>
                  <td
                    className={`py-2 px-2 text-right font-semibold ${
                      m.resultat >= 0 ? "text-[#059669]" : "text-[#dc2626]"
                    }`}
                  >
                    {m.resultat >= 0 ? "+" : ""}
                    {fmt(m.resultat)} €
                  </td>
                  <td className="py-2 px-2 text-right font-semibold">{fmt(m.tresorerie)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ═══ SYNTHÈSE AN1 vs AN2 ═══ */}
      <ScrollReveal delay={100}>
        <SectionCard title="Synthèse An1 vs An2" icon={TrendingUp} className="mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium rounded-tl-lg">Indicateur</th>
                  <th className="text-right py-3 px-4 text-slate-500 font-medium">Année 1</th>
                  <th className="text-right py-3 px-4 text-slate-500 font-medium rounded-tr-lg">Année 2 (proj.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    label: "CA total",
                    v1: `~${fmt(syn.caTotal)} €`,
                    v2: `~${fmt(PROJECTION_AN2.caAn2)} €`,
                  },
                  {
                    label: "Résultat net",
                    v1: `${fmt(syn.resultatNet)} €`,
                    v2: "~35 000 €",
                  },
                  {
                    label: "Trésorerie fin d'année",
                    v1: `~${fmt(syn.tresorerieM12)} €`,
                    v2: `~${fmt(PROJECTION_AN2.tresorerieFinAn2)} €`,
                  },
                  {
                    label: "MRR récurrent",
                    v1: `${fmt(syn.mrrRecurrent)} €/mois`,
                    v2: `~${fmt(PROJECTION_AN2.mrrM24)} €/mois`,
                  },
                  {
                    label: "Clients payants",
                    v1: `${syn.clientsPayants}`,
                    v2: `~${PROJECTION_AN2.clientsPayantsM24}`,
                  },
                  {
                    label: "Inscrits free",
                    v1: `${fmt(syn.inscritsFree)}`,
                    v2: "~5 000",
                  },
                  {
                    label: "Équipe",
                    v1: "Sheana + chargé d'affaires",
                    v2: "Sheana + 2 recrues",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-700">{row.label}</td>
                    <td className="py-3 px-4 text-right text-slate-600">{row.v1}</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#059669]">{row.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>
              Breakeven mensuel estimé : {PROJECTION_AN2.breakEvenMensuel}
            </span>
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ═══ CE QUE PROUVE CE MODÈLE ═══ */}
      <ScrollReveal delay={200}>
        <SectionCard title="Ce que prouve ce modèle" icon={Lightbulb} className="mb-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {PREUVES.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1A5276]/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4.5 h-4.5 text-[#1A5276]" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-slate-800">{p.title}</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>
    </div>
  )
}
