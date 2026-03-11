"use client"

import { useState } from "react"
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend, ReferenceLine,
} from "recharts"
import {
  TrendingUp, PiggyBank, Repeat, Users,
  Compass, Rocket, Target, Building2, FileText, Handshake, Megaphone,
  AlertTriangle, HelpCircle, Check, ChevronDown, ChevronUp,
} from "lucide-react"
import StatCard from "@/components/dossier/StatCard"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { calculerSimulation, getSyntheseAn1 } from "@/data/simulation"

const COLORS = ["#16a34a", "#1A5276", "#E67E22", "#7c3aed"]

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

/* ─── CHANTIERS DATA ─── */
const CHANTIERS = [
  { icon: Rocket, name: "Développement produit", detail: "Sprint 2 Locatif & Sprint 3 Finance en cours", status: "orange" as const, badge: "En cours" },
  { icon: Users, name: "Pilotes clients", detail: "Client A (Dayot, 18 biens) actif · Client B (4 biens) & C (50+ biens) en onboarding", status: "green" as const, badge: "1/3 actif" },
  { icon: Megaphone, name: "Pitch investisseur", detail: "Dossier stratégique en cours — cible entourage de confiance", status: "orange" as const, badge: "En cours" },
  { icon: FileText, name: "Cartes G & T", detail: "Démarches CCI en cours — couverture juridique activité", status: "orange" as const, badge: "En cours" },
  { icon: Handshake, name: "Réseau partenaires", detail: "Identification des premiers comptables/notaires cibles", status: "red" as const, badge: "À lancer" },
]

const STATUS_COLORS = {
  green: { bg: "bg-[#16a34a]/10", text: "text-[#16a34a]", dot: "bg-[#16a34a]" },
  orange: { bg: "bg-[#E67E22]/10", text: "text-[#E67E22]", dot: "bg-[#E67E22]" },
  red: { bg: "bg-[#dc2626]/10", text: "text-[#dc2626]", dot: "bg-[#dc2626]" },
}

/* ─── DECISIONS DATA ─── */
const DECISIONS = [
  {
    id: 1,
    question: "Intégrer les baux commerciaux ?",
    context: "Position actuelle : interface simplifiée possible avec renvoi vers gestionnaire partenaire pour les cas complexes. À valider avec la carte G.",
    color: "#1A5276",
  },
  {
    id: 2,
    question: "Pricing définitif validé par le marché ?",
    context: "Nouveau pricing en 3 plans : Solo 24€ / Pro 49€ / Expert 79€ + GA par paliers. À tester avec les 3 pilotes.",
    color: "#E67E22",
  },
  {
    id: 3,
    question: "Canal d'acquisition prioritaire ?",
    context: "SEO simulateur gratuit vs communautés investisseurs (Reddit, forums). Budget limité, besoin de traction rapide.",
    color: "#16a34a",
  },
  {
    id: 4,
    question: "Jusqu'où aller sur la gestion locative sans la loi Hoguet ?",
    context: "Risque juridique : la gestion pour compte de tiers nécessite la carte G. Délimiter précisément le périmètre SaaS vs service.",
    color: "#7c3aed",
  },
  {
    id: 5,
    question: "Audit sécurité et code : quand et par qui ?",
    context: "Nécessaire avant mise en production avec données réelles. Budget à prévoir. Besoin d'un développeur senior externe.",
    color: "#f59e0b",
  },
]

/* ─── DECISION CARD COMPONENT ─── */
function DecisionCard({ decision }: { decision: typeof DECISIONS[0] }) {
  const [value, setValue] = useState("")
  const [saved, setSaved] = useState(false)
  const [showInput, setShowInput] = useState(false)

  const handleSave = () => {
    if (!value.trim()) return
    setSaved(true)
  }

  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 p-4 ${
        saved ? "border-[#16a34a] bg-[#16a34a]/[0.02]" : "border-slate-200 hover:border-[#1A5276] hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: decision.color }}
        >
          {decision.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-700 mb-1">{decision.question}</p>
          <p className="text-xs text-slate-400 leading-relaxed mb-2">{decision.context}</p>
          {!saved && (
            <button
              onClick={() => setShowInput(!showInput)}
              className="text-xs text-[#1A5276] font-medium flex items-center gap-1 hover:underline"
            >
              {showInput ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showInput ? "Masquer" : "Noter ma décision"}
            </button>
          )}
          {showInput && !saved && (
            <div className="mt-2">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:border-[#1A5276] focus:outline-none resize-none transition-colors"
                rows={2}
                placeholder="Votre décision..."
              />
              <button
                onClick={handleSave}
                className="mt-1.5 px-3 py-1.5 bg-[#1A5276] text-white text-xs font-semibold rounded-lg hover:bg-[#15425e] transition-colors"
              >
                Enregistrer
              </button>
            </div>
          )}
          {saved && (
            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#16a34a]">
              <Check className="w-3.5 h-3.5" />
              Décision notée
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN DASHBOARD ─── */
export default function DashboardPage() {
  const sim = calculerSimulation()
  const syn = getSyntheseAn1(sim)

  const pieData = [
    { name: "Gestion Assistée", value: syn.decompositionCA.ga },
    { name: "SaaS", value: syn.decompositionCA.saas },
    { name: "Clients existants", value: syn.decompositionCA.existant },
  ]

  const leadsData = [
    { canal: "SEO", leads: 100, fill: "#16a34a" },
    { canal: "Google Ads", leads: 48, fill: "#1A5276" },
    { canal: "LinkedIn", leads: 28, fill: "#E67E22" },
    { canal: "Influenceurs", leads: 28, fill: "#7c3aed" },
    { canal: "Partenaires", leads: 20, fill: "#dc2626" },
  ]

  const today = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div className="page-enter">
      {/* Context bar */}
      <div className="bg-slate-50 rounded-lg px-4 py-3 mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">Dossier Stratégique — <span className="font-medium text-slate-700">K PAR K CONSEILS SAS</span></p>
        <p className="text-xs text-slate-400">Mis à jour : {today}</p>
      </div>

      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-slate-800 mb-1">Dossier Stratégique</h1>
        <p className="text-lg text-slate-500">Mon Patrimoine — K PAR K CONSEILS SAS</p>
        <div className="mt-3 h-0.5 bg-gradient-to-r from-[#1A5276] via-[#E67E22] to-transparent rounded" />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BLOC 1 — CAP & POSITIONNEMENT */}
      {/* ═══════════════════════════════════════════════════════ */}
      <SectionCard title="Cap & Positionnement" icon="🧭" delay={0} className="mb-6">
        {/* Statement */}
        <div className="bg-gradient-to-br from-[#1A5276]/5 to-[#E67E22]/5 border-l-4 border-[#1A5276] rounded-lg p-4 mb-5">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#1A5276]">Mon Patrimoine</strong> est l&apos;interface numérique du propriétaire immobilier
            sur tout le cycle de vie du bien — acquisition, financement, travaux, location, revente.
            Ni un tableur, ni une agence : un <strong className="text-[#1A5276]">cockpit patrimonial</strong> avec accompagnement humain en option.
          </p>
        </div>

        {/* 3 differentiants */}
        <div className="grid md:grid-cols-3 gap-3 mb-5">
          {[
            { icon: Compass, title: "Cycle de vie complet", desc: "Ergonomie pensée par étape du bien, pas comme un tableur", color: "#1A5276" },
            { icon: Handshake, title: "Accompagnement humain", desc: "Paramétrage, onboarding, support — en option, pas un mur SaaS", color: "#E67E22" },
            { icon: Building2, title: "Réseau partenaires", desc: "Pros (notaires, CGP, comptables) accèdent gratuitement aux docs clients", color: "#16a34a" },
          ].map((d) => (
            <ScrollReveal key={d.title} delay={100}>
              <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${d.color}15` }}>
                  <d.icon className="w-5 h-5" style={{ color: d.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{d.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{d.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cible prioritaire */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm font-medium text-slate-500">Cible prioritaire :</span>
          <span className="inline-flex items-center gap-2 bg-[#1A5276] text-white rounded-full px-4 py-1.5 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            Multi-propriétaire actif · 3-15 biens · SCI ou mixte · gère seul
          </span>
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BLOC 2 — CHANTIERS ACTIFS */}
      {/* ═══════════════════════════════════════════════════════ */}
      <SectionCard title="Chantiers actifs" icon="🚧" delay={100} className="mb-6">
        <div className="divide-y divide-slate-100">
          {CHANTIERS.map((ch, i) => {
            const sc = STATUS_COLORS[ch.status]
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-center justify-between py-3.5">
                  <div className="flex items-start gap-3">
                    <ch.icon className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">{ch.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{ch.detail}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${sc.bg} ${sc.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                    {ch.badge}
                  </span>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BLOC 3 — METRIQUES (KPIs financières + opérationnelles) */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="print-break-before" />
      <h2 className="font-display text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
        📊 Métriques clés
      </h2>
      <p className="text-sm text-slate-400 mb-4">Financier An1 + Opérationnel temps réel</p>

      {/* Métriques opérationnelles */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
        <StatCard label="Biens gérés en prod" value="18" subtitle="Client A (Dayot)" color="primary" icon={Building2} delay={0} />
        <StatCard label="Clients pilotes" value="1 → 3" subtitle="2 en onboarding" color="success" icon={Users} delay={50} />
        <StatCard label="MRR actuel" value="0€" subtitle="Phase test gratuite" color="accent" icon={PiggyBank} delay={100} />
        <StatCard label="TAM" value="198M€" subtitle="SAM : 67M€/an" color="premium" icon={TrendingUp} delay={150} />
        <div className="bg-gradient-to-br from-[#f59e0b]/5 to-[#dc2626]/5 border border-[#f59e0b]/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
          <AlertTriangle className="w-5 h-5 text-[#f59e0b] mb-2" />
          <p className="text-[0.65rem] font-medium text-slate-400 uppercase tracking-wider mb-1">Deadline critique</p>
          <p className="text-sm font-bold text-[#dc2626]">Contrat pilote Client A</p>
          <p className="text-xs text-slate-500 mt-0.5">Formaliser la relation</p>
        </div>
      </div>

      {/* KPI financières An1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="CA An1" value={`${fmt(syn.caTotal)}€`} subtitle="Chiffre d'affaires total" color="primary" icon={TrendingUp} trend="up" delay={0} />
        <StatCard label="Résultat Net" value={`${fmt(syn.resultatNet)}€`} subtitle={`Marge ${syn.marge}%`} color="success" icon={PiggyBank} trend="up" delay={100} />
        <StatCard label="MRR M12" value={`${fmt(syn.mrrRecurrent)}€`} subtitle="Récurrent mensuel" color="accent" icon={Repeat} trend="up" delay={200} />
        <StatCard label="Clients M12" value={`${syn.clientsCumul}`} subtitle={`dont ${syn.clientsGACumul} en GA`} color="slate" icon={Users} delay={300} />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* GRAPHIQUES */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="print-break-before" />
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <SectionCard title="CA vs Charges (M1-M12)" delay={100}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sim}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <RTooltip content={<CustomTooltip />} />
              <ReferenceLine x="M4" stroke="#f59e0b" strokeDasharray="5 5" label={{ value: "Break-even", position: "top", fontSize: 11, fill: "#f59e0b" }} />
              <Area type="monotone" dataKey="caTotal" name="CA" stroke="#1A5276" fill="#1A5276" fillOpacity={0.12} strokeWidth={2.5} />
              <Area type="monotone" dataKey="chargesTotal" name="Charges" stroke="#dc2626" fill="#dc2626" fillOpacity={0.08} strokeWidth={2} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="Trésorerie (M1-M12)" delay={200}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sim}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <RTooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="tresorerie" name="Trésorerie" stroke="#16a34a" fill="#16a34a" fillOpacity={0.12} strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
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

        <SectionCard title="Leads par canal (M12)" delay={400}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={leadsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="canal" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <RTooltip content={<CustomTooltip />} />
              <Bar dataKey="leads" name="Leads/mois" radius={[4, 4, 0, 0]} label={{ position: "top", fontSize: 11, fill: "#64748b" }}>
                {leadsData.map((d, i) => (
                  <Cell key={i} fill={d.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SYNTHESE AN1 VS AN2 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="print-break-before" />
      <SectionCard title="Synthèse An1 vs An2" delay={500} className="mb-6">
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
                <tr key={i}>
                  <td className="py-3 px-3 font-medium text-slate-700">{row.label}</td>
                  <td className="py-3 px-3 text-right text-slate-600">{row.v1}</td>
                  <td className="py-3 px-3 text-right font-semibold text-[#16a34a]">{row.v2}</td>
                  <td className="py-3 px-3 text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-[#16a34a]/10 text-[#16a34a]">
                      {row.evo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BLOC 4 — DECISIONS EN SUSPENS */}
      {/* ═══════════════════════════════════════════════════════ */}
      <SectionCard title="Décisions en suspens" icon="❓" delay={600}>
        <p className="text-xs text-slate-400 mb-4">Cliquez sur chaque carte pour noter votre décision</p>
        <div className="grid md:grid-cols-2 gap-3">
          {DECISIONS.map((d) => (
            <DecisionCard key={d.id} decision={d} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
