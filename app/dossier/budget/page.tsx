"use client"

import { useState } from "react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip,
  ResponsiveContainer, Cell, PieChart, Pie,
} from "recharts"
import {
  Scale, Cpu, Megaphone, Users, Building2, Briefcase,
  Calculator, TrendingDown, TrendingUp, Wallet, Clock, FileText,
} from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const COLORS = ["#1A3D2E", "#8FAF8A", "#059669", "#7c3aed", "#dc2626", "#f59e0b"]

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n)
}

/* ─── BUDGET DATA ─── */

interface BudgetItem {
  poste: string
  detail: string
  montant: number
  type: "one-off" | "monthly" | "yearly"
  note?: string
  startMonth?: number
}

interface BudgetCategory {
  category: string
  icon: typeof Scale
  color: string
  items: BudgetItem[]
}

const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    category: "Juridique & Conformité",
    icon: Scale,
    color: "#1A3D2E",
    items: [
      { poste: "Avocat IA / droit des affaires / PI", detail: "180€ TTC/h × provision 5h", montant: 900, type: "one-off" as const },
      { poste: "Création SAS K PAR K CONSEILS", detail: "Frais Legalstart + CFE + greffe", montant: 350, type: "one-off" as const },
      { poste: "Carte G — CCI", detail: "Frais inscription + formation si requise", montant: 500, type: "one-off" as const },
      { poste: "RGPD / DPO", detail: "Conformité données personnelles — prestataire", montant: 400, type: "one-off" as const },
      { poste: "CGU / CGV / Mentions légales", detail: "Rédaction par avocat", montant: 0, type: "one-off" as const, note: "Inclus provision avocat" },
    ],
  },
  {
    category: "Outils & Infrastructure Tech",
    icon: Cpu,
    color: "#8FAF8A",
    items: [
      { poste: "Claude Pro (Anthropic)", detail: "Abonnement mensuel IA", montant: 20, type: "monthly" as const },
      { poste: "Claude Code + Chrome UX", detail: "Extensions et outils dev", montant: 80, type: "monthly" as const },
      { poste: "Vercel Pro", detail: "Hébergement Next.js + domaine", montant: 20, type: "monthly" as const },
      { poste: "Supabase Pro", detail: "Base de données + auth + stockage", montant: 25, type: "monthly" as const },
      { poste: "Domaine monpatrimoine.fr", detail: "Nom de domaine annuel", montant: 15, type: "yearly" as const },
      { poste: "SendGrid / Resend", detail: "Emails transactionnels", montant: 0, type: "monthly" as const, note: "Gratuit < 100 emails/jour" },
      { poste: "OCR / IA documents", detail: "Extraction automatique (Google Vision / Mindee)", montant: 30, type: "monthly" as const },
      { poste: "Stripe", detail: "Paiement en ligne — 1.4% + 0.25€/tx", montant: 0, type: "monthly" as const, note: "Commission sur CA" },
    ],
  },
  {
    category: "Marketing & Acquisition",
    icon: Megaphone,
    color: "#059669",
    items: [
      { poste: "Google Ads", detail: "Budget pub mensuel à partir M3", montant: 200, type: "monthly" as const },
      { poste: "LinkedIn Premium", detail: "Prospection + contenu", montant: 50, type: "monthly" as const },
      { poste: "Canva Pro", detail: "Design posts + supports", montant: 12, type: "monthly" as const },
      { poste: "Calendly", detail: "Prise de RDV clients", montant: 0, type: "monthly" as const, note: "Version gratuite" },
      { poste: "Simulateur SEO (dev)", detail: "Outil d'acquisition organique — one-shot", montant: 0, type: "one-off" as const, note: "Dev interne" },
    ],
  },
  {
    category: "Recrutement & RH",
    icon: Users,
    color: "#7c3aed",
    items: [
      { poste: "Recrue #1 — POE/CDD", detail: "À partir M3 — coût entreprise ~1 800€/mois (après aides)", montant: 1800, type: "monthly" as const, startMonth: 3 },
      { poste: "Formation recrue", detail: "2 semaines onboarding + process", montant: 500, type: "one-off" as const },
      { poste: "Mutuelle / prévoyance", detail: "Obligations employeur", montant: 50, type: "monthly" as const, startMonth: 3 },
    ],
  },
  {
    category: "Fonctionnement & Divers",
    icon: Building2,
    color: "#f59e0b",
    items: [
      { poste: "Assurance RC Pro", detail: "Responsabilité civile professionnelle", montant: 300, type: "yearly" as const },
      { poste: "Comptabilité", detail: "Expert-comptable en ligne", montant: 80, type: "monthly" as const },
      { poste: "Banque Pro", detail: "Qonto / Shine — compte pro", montant: 15, type: "monthly" as const },
      { poste: "Téléphonie / internet pro", detail: "Forfait dédié", montant: 30, type: "monthly" as const },
    ],
  },
]

/* Calculate totals */
function calcTotals() {
  let oneOff = 0
  let monthlyM1M3 = 0
  let monthlyM4M12 = 0

  for (const cat of BUDGET_CATEGORIES) {
    for (const item of cat.items) {
      if (item.type === "one-off") {
        oneOff += item.montant
      } else if (item.type === "yearly") {
        oneOff += item.montant // counted once
      } else if (item.type === "monthly") {
        const start = item.startMonth || 1
        if (start <= 3) {
          monthlyM1M3 += item.montant
        }
        if (start <= 4) {
          monthlyM4M12 += item.montant
        }
      }
    }
  }

  return {
    oneOff,
    monthlyM1M3,
    monthlyM4M12,
    totalYear1: oneOff + (monthlyM1M3 * 3) + (monthlyM4M12 * 9),
  }
}

const totals = calcTotals()

/* Chart data — monthly burn rate by category */
const categoryTotals = BUDGET_CATEGORIES.map((cat) => ({
  name: cat.category.split(" ")[0],
  total: cat.items.reduce((s, i) => {
    if (i.type === "one-off") return s + i.montant
    if (i.type === "yearly") return s + i.montant
    return s + i.montant * 12
  }, 0),
  color: cat.color,
}))

const pieData = categoryTotals.map((c) => ({ name: c.name, value: c.total }))

export default function BudgetPage() {
  const [expandedCat, setExpandedCat] = useState<number | null>(0)

  return (
    <div>
      <PageHeader
        icon={Wallet}
        title="Budget Lancement"
        subtitle="Grille de postes de dépenses — An1"
      />

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Investissement initial" value={`${fmt(totals.oneOff)}€`} subtitle="One-off + annuels" color="primary" icon={Wallet} delay={0} />
        <StatCard label="Charges M1-M3" value={`${fmt(totals.monthlyM1M3)}€/mois`} subtitle="Avant recrue" color="accent" icon={TrendingDown} delay={100} />
        <StatCard label="Charges M4-M12" value={`${fmt(totals.monthlyM4M12)}€/mois`} subtitle="Avec recrue #1" color="premium" icon={TrendingUp} delay={200} />
        <StatCard label="Budget total An1" value={`${fmt(totals.totalYear1)}€`} subtitle="Estimé" color="success" icon={Calculator} delay={300} />
      </div>

      {/* Budget by category — Accordion */}
      <h2 className="font-display text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
        Détail par poste
      </h2>

      <div className="space-y-3 mb-8">
        {BUDGET_CATEGORIES.map((cat, catIdx) => {
          const isOpen = expandedCat === catIdx
          const catTotal = cat.items.reduce((s, i) => {
            if (i.type === "one-off" || i.type === "yearly") return s + i.montant
            return s + i.montant * 12
          }, 0)
          const Icon = cat.icon

          return (
            <ScrollReveal key={catIdx} delay={catIdx * 60}>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-sm">
                {/* Category header */}
                <button
                  onClick={() => setExpandedCat(isOpen ? null : catIdx)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors print-keep"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${cat.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-700">{cat.category}</p>
                      <p className="text-xs text-slate-400">{cat.items.length} postes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold" style={{ color: cat.color }}>{fmt(catTotal)}€</p>
                    <p className="text-xs text-slate-400">/ an estimé</p>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="border-t border-slate-100 px-4 pb-4">
                    <table className="w-full text-sm mt-3">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="text-left py-2 text-slate-400 font-medium text-xs">Poste</th>
                          <th className="text-left py-2 text-slate-400 font-medium text-xs">Détail</th>
                          <th className="text-right py-2 text-slate-400 font-medium text-xs">Montant</th>
                          <th className="text-right py-2 text-slate-400 font-medium text-xs">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {cat.items.map((item, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                            <td className="py-2.5 font-medium text-slate-700">{item.poste}</td>
                            <td className="py-2.5 text-xs text-slate-500">{item.detail}</td>
                            <td className="py-2.5 text-right font-bold" style={{ color: item.montant === 0 ? "#059669" : cat.color }}>
                              {item.montant === 0 ? (
                                <span className="text-xs">{item.note || "Gratuit"}</span>
                              ) : (
                                `${fmt(item.montant)}€`
                              )}
                            </td>
                            <td className="py-2.5 text-right">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                item.type === "one-off"
                                  ? "bg-[#1A3D2E]/10 text-[#1A3D2E]"
                                  : item.type === "yearly"
                                  ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                                  : "bg-[#8FAF8A]/10 text-[#8FAF8A]"
                              }`}>
                                {item.type === "one-off" ? "Unique" : item.type === "yearly" ? "Annuel" : "Mensuel"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <SectionCard title="Répartition du budget An1" delay={200}>
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
              {categoryTotals.map((c, i) => {
                const total = categoryTotals.reduce((s, d) => s + d.total, 0)
                const pct = total > 0 ? Math.round((c.total / total) * 100) : 0
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: c.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-700">{c.name}</p>
                      <p className="text-xs text-slate-400">{fmt(c.total)}€</p>
                    </div>
                    <span className="text-sm font-bold text-slate-600">{pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Budget mensuel par catégorie" delay={300}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryTotals}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <RTooltip formatter={(v: number) => `${fmt(v)}€`} />
              <Bar dataKey="total" name="Total An1" radius={[4, 4, 0, 0]}>
                {categoryTotals.map((c, i) => (
                  <Cell key={i} fill={c.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Temps de travail */}
      <SectionCard title="Temps de travail — Répartition hebdomadaire" icon={Clock} delay={400} className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Mars-Avril (Phase lancement)</p>
            <div className="space-y-2">
              {[
                { label: "LTOA (emploi actuel)", hours: "35h/sem", pct: 60, color: "#64748b" },
                { label: "Parkimmo", hours: "15-20h/sem", pct: 30, color: "#1A3D2E" },
                { label: "Formation IA (vacances)", hours: "40h sur 2 sem", pct: 10, color: "#8FAF8A" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-40 shrink-0">{t.label}</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-4">
                    <div className="h-4 rounded-full flex items-center justify-end pr-2" style={{ width: `${t.pct}%`, background: t.color }}>
                      <span className="text-[10px] font-bold text-white whitespace-nowrap">{t.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Mai-Juin (Phase accélération)</p>
            <div className="space-y-2">
              {[
                { label: "PASCAL / LTOA", hours: "35h/sem", pct: 55, color: "#64748b" },
                { label: "Parkimmo", hours: "20-25h/sem", pct: 40, color: "#1A3D2E" },
                { label: "Recrue #1 (POE)", hours: "35h/sem", pct: 5, color: "#059669", note: "Démarrage" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 w-40 shrink-0">{t.label}</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-4">
                    <div className="h-4 rounded-full flex items-center justify-end pr-2" style={{ width: `${t.pct}%`, background: t.color }}>
                      <span className="text-[10px] font-bold text-white whitespace-nowrap">{t.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Notes */}
      <SectionCard title="Hypothèses & Notes" icon={FileText} delay={500}>
        <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
          <div className="space-y-2">
            <p className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Projet démarré le <strong className="text-slate-700">4 mars 2026</strong></p>
            <p className="flex items-start gap-2"><Scale className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Avocat signé : spécialiste IA, droit des affaires, PI — <strong className="text-slate-700">180€ TTC/h</strong>, provision 5h</p>
            <p className="flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Budget outils : <strong className="text-slate-700">~100€/mois</strong> (Claude + Chrome UX)</p>
          </div>
          <div className="space-y-2">
            <p className="flex items-start gap-2"><Users className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Recrue #1 via POE France Travail à partir de M3</p>
            <p className="flex items-start gap-2"><TrendingUp className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Vacances fin mars / début avril : formation IA intensive</p>
            <p className="flex items-start gap-2"><Building2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Stripe : commission sur CA (pas de fixe)</p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
