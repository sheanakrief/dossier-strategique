"use client"

import {
  Calendar, Briefcase, GraduationCap, Rocket, Users,
  Target, Code, Megaphone, Scale, Building2, PlaneTakeoff,
  CheckCircle2, Clock, ArrowRight,
} from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

/* ─── TIMELINE DATA ─── */

interface WeekData {
  week: string
  dates: string
  focus: string
  color: string
  tasks: { task: string; category: string; icon: typeof Calendar }[]
  milestone?: string
  vacation?: boolean
}

const TIMELINE: WeekData[] = [
  {
    week: "S1",
    dates: "4-9 mars",
    focus: "Lancement projet",
    color: "#1A5276",
    tasks: [
      { task: "Création dossier stratégique complet", category: "Produit", icon: Code },
      { task: "Structuration business plan + pricing", category: "Stratégie", icon: Target },
      { task: "Signature avocat IA / PI / droit des affaires", category: "Juridique", icon: Scale },
      { task: "Client A (Dayot, 18 biens) — pilote actif", category: "Client", icon: Users },
    ],
    milestone: "Dossier stratégique V1 + Avocat signé",
  },
  {
    week: "S2",
    dates: "10-16 mars",
    focus: "Consolidation & Produit",
    color: "#1A5276",
    tasks: [
      { task: "Budget lancement + grille de dépenses", category: "Finance", icon: Briefcase },
      { task: "Forfait LUXE — positionnement premium", category: "Pricing", icon: Target },
      { task: "PDF export multi-audience", category: "Produit", icon: Code },
      { task: "Pitch investisseur — préparation entourage", category: "Investisseur", icon: Megaphone },
    ],
  },
  {
    week: "S3",
    dates: "17-23 mars",
    focus: "Acquisition & Juridique",
    color: "#E67E22",
    tasks: [
      { task: "Simulateur SEO gratuit — développement", category: "Acquisition", icon: Megaphone },
      { task: "Carte G — dossier CCI", category: "Juridique", icon: Scale },
      { task: "Client B (4 biens) — onboarding", category: "Client", icon: Users },
      { task: "Décomposition pricing par process", category: "Pricing", icon: Target },
    ],
    milestone: "Simulateur SEO live + Client B onboardé",
  },
  {
    week: "S4-S5",
    dates: "24 mars — 6 avril",
    focus: "Vacances — Formation IA intensive",
    color: "#7c3aed",
    vacation: true,
    tasks: [
      { task: "Formation Claude avancée (prompting, agents)", category: "Formation", icon: GraduationCap },
      { task: "Automatisations IA pour process Mon Patrimoine", category: "IA", icon: Code },
      { task: "Étude approfondie cible + personas", category: "Stratégie", icon: Target },
      { task: "Veille concurrentielle approfondie", category: "Stratégie", icon: Building2 },
    ],
  },
  {
    week: "S6",
    dates: "7-13 avril",
    focus: "Reprise — Scale clients",
    color: "#16a34a",
    tasks: [
      { task: "Client C (50+ biens) — onboarding MDB", category: "Client", icon: Users },
      { task: "RGPD compliance — mise en conformité", category: "Juridique", icon: Scale },
      { task: "Landing page optimisée + SEO on-page", category: "Acquisition", icon: Megaphone },
      { task: "Espace partenaire V1 (notaires/CGP)", category: "Produit", icon: Building2 },
    ],
    milestone: "3 clients pilotes actifs",
  },
  {
    week: "S7-S8",
    dates: "14-27 avril",
    focus: "Produit V2 & Traction",
    color: "#16a34a",
    tasks: [
      { task: "Module Coffre-fort V1 + OCR documents", category: "Produit", icon: Code },
      { task: "Interviews utilisateurs (20 cibles)", category: "Validation", icon: Users },
      { task: "LinkedIn 3 posts/semaine — routine installée", category: "Acquisition", icon: Megaphone },
      { task: "Premiers retours investisseurs entourage", category: "Investisseur", icon: Target },
    ],
  },
  {
    week: "S9-S10",
    dates: "28 avril — 11 mai",
    focus: "Recrutement & Process",
    color: "#E67E22",
    tasks: [
      { task: "Fiche de poste recrue #1 — France Travail / POE", category: "RH", icon: Users },
      { task: "Documentation process internes", category: "Process", icon: Code },
      { task: "Carte G — suivi dossier CCI", category: "Juridique", icon: Scale },
      { task: "5 premiers clients payants visés", category: "Commercial", icon: Target },
    ],
    milestone: "5 clients — Fiche de poste publiée",
  },
  {
    week: "S11-S12",
    dates: "12-25 mai",
    focus: "Accélération commerciale",
    color: "#E67E22",
    tasks: [
      { task: "Google Ads — première campagne test", category: "Acquisition", icon: Megaphone },
      { task: "Entretiens recrue #1", category: "RH", icon: Users },
      { task: "Module Finance V1 — suivi dépenses/revenus", category: "Produit", icon: Code },
      { task: "Partenariat comptable #1 — prospection", category: "Partenaires", icon: Building2 },
    ],
  },
  {
    week: "S13",
    dates: "26 mai — 1er juin",
    focus: "Milestone M3",
    color: "#16a34a",
    tasks: [
      { task: "Bilan M3 — KPIs, CA, pipeline", category: "Stratégie", icon: Target },
      { task: "Recrue #1 — démarrage POE", category: "RH", icon: Users },
      { task: "Audit sécurité code — première passe", category: "Tech", icon: Code },
      { task: "Objectif : 8 clients + MRR > 500€", category: "Commercial", icon: Rocket },
    ],
    milestone: "8 clients — Recrue #1 démarrée — MRR 500€+",
  },
]

/* ─── CATEGORY COLORS ─── */
const CAT_COLORS: Record<string, string> = {
  Produit: "#1A5276",
  Stratégie: "#E67E22",
  Juridique: "#7c3aed",
  Client: "#16a34a",
  Finance: "#f59e0b",
  Investisseur: "#dc2626",
  Acquisition: "#16a34a",
  Pricing: "#E67E22",
  Formation: "#7c3aed",
  IA: "#1A5276",
  Validation: "#16a34a",
  RH: "#f59e0b",
  Process: "#64748b",
  Commercial: "#E67E22",
  Partenaires: "#1A5276",
  Tech: "#1A5276",
}

export default function TimelinePage() {
  return (
    <div>
      <PageHeader
        icon="🗓️"
        title="Timeline 3 Mois"
        subtitle="Mars — Juin 2026 · Planning détaillé LTOA / PASCAL / Mon Patrimoine"
      />

      {/* Context bar */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#1A5276]/5 to-[#E67E22]/5 border-l-4 border-[#1A5276] rounded-lg p-4 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#1A5276]" />
              <span className="text-slate-600">Démarrage : <strong className="text-slate-800">4 mars 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="w-4 h-4 text-[#7c3aed]" />
              <span className="text-slate-600">Vacances : <strong className="text-slate-800">24 mars — 6 avril</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#E67E22]" />
              <span className="text-slate-600">Emploi : <strong className="text-slate-800">LTOA → PASCAL</strong></span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Phase overview */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { phase: "Lancement", period: "Mars", color: "#1A5276", icon: Rocket, desc: "Structure + pilotes + juridique" },
          { phase: "Construction", period: "Avril", color: "#16a34a", icon: Code, desc: "Produit V2 + traction + process" },
          { phase: "Accélération", period: "Mai-Juin", color: "#E67E22", icon: Target, desc: "Scale + recrue + MRR" },
        ].map((p, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all text-center">
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ background: `${p.color}15` }}>
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.phase}</p>
              <p className="text-lg font-display font-bold text-slate-800 mt-1">{p.period}</p>
              <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Detailed timeline */}
      <SectionCard title="Planning semaine par semaine" icon="📋" delay={200}>
        <div className="space-y-0">
          {TIMELINE.map((week, idx) => (
            <ScrollReveal key={idx} delay={idx * 40}>
              <div className={`relative pl-8 pb-6 ${idx < TIMELINE.length - 1 ? "border-l-2 border-slate-200 ml-3" : "ml-3"}`}>
                {/* Timeline dot */}
                <div
                  className="absolute left-0 -translate-x-[calc(50%+1px)] w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ background: week.color, top: "2px" }}
                >
                  {week.week.replace("S", "")}
                </div>

                {/* Card */}
                <div className={`bg-white rounded-xl border p-4 ml-4 transition-all hover:shadow-sm ${
                  week.vacation ? "border-[#7c3aed]/30 bg-[#7c3aed]/[0.02]" : "border-slate-200"
                }`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: week.color }}>
                        {week.week}
                      </span>
                      <span className="text-xs text-slate-400">{week.dates}</span>
                      {week.vacation && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] flex items-center gap-1">
                          <PlaneTakeoff className="w-3 h-3" /> Vacances
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{week.focus}</p>
                  </div>

                  {/* Tasks */}
                  <div className="grid md:grid-cols-2 gap-2 mt-3">
                    {week.tasks.map((t, i) => {
                      const catColor = CAT_COLORS[t.category] || "#64748b"
                      return (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <t.icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: catColor }} />
                          <div>
                            <p className="text-slate-700">{t.task}</p>
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded mt-0.5 inline-block" style={{ background: `${catColor}10`, color: catColor }}>
                              {t.category}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Milestone */}
                  {week.milestone && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                      <p className="text-xs font-semibold text-[#16a34a]">{week.milestone}</p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Contraintes */}
      <div className="mt-8">
        <SectionCard title="Contraintes & Hypothèses" icon="⚠️" delay={400}>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <div className="space-y-2.5">
              <p className="flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> <strong className="text-slate-700">LTOA</strong> : emploi actuel 35h/sem jusqu&apos;à transition PASCAL</p>
              <p className="flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> <strong className="text-slate-700">PASCAL</strong> : client/employeur suivant — emploi maintenu en parallèle</p>
              <p className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Mon Patrimoine travaillé le <strong className="text-slate-700">soir + week-end</strong> (15-25h/sem)</p>
            </div>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2"><PlaneTakeoff className="w-3.5 h-3.5 text-[#7c3aed] mt-0.5 flex-shrink-0" /> Vacances <strong className="text-slate-700">24 mars — 6 avril</strong> : apprentissage IA intensif</p>
              <p className="flex items-start gap-2"><Users className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Recrue #1 via <strong className="text-slate-700">POE France Travail</strong> dès M3 (juin)</p>
              <p className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Objectif M3 : <strong className="text-[#16a34a]">8 clients · MRR 500€+ · Recrue démarrée</strong></p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
