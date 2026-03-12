"use client"

import {
  Calendar, Briefcase, GraduationCap, Rocket, Users,
  Target, Code, Megaphone, Scale, Building2, PlaneTakeoff,
  CheckCircle2, Clock, ArrowRight, ClipboardList, AlertTriangle,
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
    focus: "Lancement du projet",
    color: "#059669",
    tasks: [
      { task: "Creation du dossier strategique complet (celui que vous lisez)", category: "Produit", icon: Code },
      { task: "Definition du business plan et des tarifs", category: "Strategie", icon: Target },
      { task: "Signature de l'avocat specialise (IA, propriete intellectuelle, droit des affaires)", category: "Juridique", icon: Scale },
      { task: "Premier client pilote (Dayot, 18 biens) — deja actif", category: "Client", icon: Users },
    ],
    milestone: "Dossier strategique V1 termine + Avocat signe",
  },
  {
    week: "S2",
    dates: "10-16 mars",
    focus: "Consolidation et renforcement",
    color: "#1A3D2E",
    tasks: [
      { task: "Budget de lancement et grille de depenses detaillee", category: "Finance", icon: Briefcase },
      { task: "Forfait LUXE — positionnement haut de gamme", category: "Tarifs", icon: Target },
      { task: "Export PDF adapte a chaque audience (investisseur, partenaire, dev)", category: "Produit", icon: Code },
      { task: "Preparation du pitch pour les premiers investisseurs (entourage)", category: "Investisseur", icon: Megaphone },
      { task: "RDV avocat (mercredi) + RDV investisseur (vendredi)", category: "Strategie", icon: Target },
    ],
  },
  {
    week: "S3",
    dates: "17-23 mars",
    focus: "Visibilite et juridique",
    color: "#8FAF8A",
    tasks: [
      { task: "Simulateur gratuit pour le referencement Google — developpement", category: "Visibilite", icon: Megaphone },
      { task: "Carte professionnelle G — dossier aupres de la CCI", category: "Juridique", icon: Scale },
      { task: "Deuxieme client pilote (4 biens) — prise en main", category: "Client", icon: Users },
      { task: "Detail des couts par fonctionnalite pour les tarifs", category: "Tarifs", icon: Target },
    ],
    milestone: "Simulateur en ligne + 2e client demarre",
  },
  {
    week: "S4-S5",
    dates: "24 mars — 6 avril",
    focus: "Vacances — Formation IA intensive",
    color: "#7c3aed",
    vacation: true,
    tasks: [
      { task: "Formation avancee sur l'IA (prompting, agents automatiques)", category: "Formation", icon: GraduationCap },
      { task: "Automatisation des taches repetitives de Parkimmo avec l'IA", category: "IA", icon: Code },
      { task: "Etude approfondie de la cible et des profils types d'utilisateurs", category: "Strategie", icon: Target },
      { task: "Veille sur les concurrents (forces, faiblesses, positionnement)", category: "Strategie", icon: Building2 },
    ],
  },
  {
    week: "S6",
    dates: "7-13 avril",
    focus: "Reprise — Elargissement clients",
    color: "#059669",
    tasks: [
      { task: "Troisieme client pilote (50+ biens) — gros patrimoine", category: "Client", icon: Users },
      { task: "Mise en conformite vie privee (RGPD)", category: "Juridique", icon: Scale },
      { task: "Page d'accueil marketing + optimisation pour Google", category: "Visibilite", icon: Megaphone },
      { task: "Espace dedie aux partenaires (notaires, conseillers en gestion)", category: "Produit", icon: Building2 },
    ],
    milestone: "3 clients pilotes actifs",
  },
  {
    week: "S7-S8",
    dates: "14-27 avril",
    focus: "Produit V2 et premiers retours",
    color: "#059669",
    tasks: [
      { task: "Coffre-fort numerique V1 + lecture automatique de documents", category: "Produit", icon: Code },
      { task: "Entretiens avec 20 utilisateurs cibles pour valider le produit", category: "Validation", icon: Users },
      { task: "LinkedIn : 3 publications par semaine — routine installee", category: "Visibilite", icon: Megaphone },
      { task: "Premiers retours des investisseurs (entourage proche)", category: "Investisseur", icon: Target },
    ],
  },
  {
    week: "S9-S10",
    dates: "28 avril — 11 mai",
    focus: "Recrutement et organisation",
    color: "#8FAF8A",
    tasks: [
      { task: "Fiche de poste pour la 1ere recrue (via France Travail, formation financee)", category: "RH", icon: Users },
      { task: "Documentation des process internes", category: "Organisation", icon: Code },
      { task: "Carte professionnelle G — suivi du dossier CCI", category: "Juridique", icon: Scale },
      { task: "Objectif : 5 premiers clients payants", category: "Commercial", icon: Target },
    ],
    milestone: "5 clients — Fiche de poste publiee",
  },
  {
    week: "S11-S12",
    dates: "12-25 mai",
    focus: "Acceleration commerciale",
    color: "#8FAF8A",
    tasks: [
      { task: "Google Ads — premiere campagne de publicite en ligne", category: "Visibilite", icon: Megaphone },
      { task: "Entretiens avec les candidats pour la 1ere recrue", category: "RH", icon: Users },
      { task: "Module Finances V1 — suivi des depenses et revenus par bien", category: "Produit", icon: Code },
      { task: "Prospection du premier partenaire comptable", category: "Partenaires", icon: Building2 },
    ],
  },
  {
    week: "S13",
    dates: "26 mai — 1er juin",
    focus: "Bilan a 3 mois",
    color: "#059669",
    tasks: [
      { task: "Bilan complet : indicateurs, chiffre d'affaires, clients en cours", category: "Strategie", icon: Target },
      { task: "Premiere recrue — demarrage de la formation financee", category: "RH", icon: Users },
      { task: "Verification de securite du code — premiere passe", category: "Tech", icon: Code },
      { task: "Objectif : 8 clients, 500 euros de revenus mensuels recurrents", category: "Commercial", icon: Rocket },
    ],
    milestone: "8 clients — 1ere recrue demarree — 500 euros/mois de revenus recurrents",
  },
]

/* ─── CATEGORY COLORS ─── */
const CAT_COLORS: Record<string, string> = {
  Produit: "#1A3D2E",
  Strategie: "#8FAF8A",
  Juridique: "#7c3aed",
  Client: "#059669",
  Finance: "#f59e0b",
  Investisseur: "#dc2626",
  Visibilite: "#059669",
  Tarifs: "#8FAF8A",
  Formation: "#7c3aed",
  IA: "#1A3D2E",
  Validation: "#059669",
  RH: "#f59e0b",
  Organisation: "#64748b",
  Commercial: "#8FAF8A",
  Partenaires: "#1A3D2E",
  Tech: "#1A3D2E",
}

export default function TimelinePage() {
  return (
    <div>
      <PageHeader
        icon={Calendar}
        title="Planning sur 3 mois"
        subtitle="Mars — Juin 2026 · Les grandes etapes semaine par semaine"
      />

      {/* Context bar */}
      <ScrollReveal>
        <div className="bg-gradient-to-r from-[#1A3D2E]/5 to-[#8FAF8A]/5 border-l-4 border-[#1A3D2E] rounded-lg p-4 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#1A3D2E]" />
              <span className="text-slate-600">Demarrage : <strong className="text-slate-800">4 mars 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="w-4 h-4 text-[#7c3aed]" />
              <span className="text-slate-600">Vacances : <strong className="text-slate-800">24 mars — 6 avril</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#8FAF8A]" />
              <span className="text-slate-600">Parkimmo en parallele de l{"'"}emploi <strong className="text-slate-800">(15-25h/sem)</strong></span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Phase overview */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { phase: "Lancement", period: "Mars", color: "#1A3D2E", icon: Rocket, desc: "Structure, premiers clients, juridique" },
          { phase: "Construction", period: "Avril", color: "#059669", icon: Code, desc: "Produit V2, premiers retours, process" },
          { phase: "Acceleration", period: "Mai-Juin", color: "#8FAF8A", icon: Target, desc: "Clients payants, recrutement, revenus" },
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
      <SectionCard title="Semaine par semaine" icon={ClipboardList} delay={200}>
        <p className="text-sm text-slate-500 mb-4">
          Chaque semaine a un objectif precis. Les couleurs des etiquettes indiquent le domaine d{"'"}activite.
        </p>
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
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                      <p className="text-xs font-semibold text-[#059669]">{week.milestone}</p>
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
        <SectionCard title="Contexte et contraintes" icon={AlertTriangle} delay={400}>
          <p className="text-sm text-slate-500 mb-4">
            Ce planning tient compte des contraintes reelles de la fondatrice.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <div className="space-y-2.5">
              <p className="flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Emploi actuel a temps plein (35h/semaine) maintenu en parallele</p>
              <p className="flex items-start gap-2"><Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Transition d{"'"}employeur prevue — l{"'"}emploi salarie continue</p>
              <p className="flex items-start gap-2"><Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Parkimmo developpe le <strong className="text-slate-700">soir et le week-end</strong> (15-25h/sem)</p>
            </div>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2"><PlaneTakeoff className="w-3.5 h-3.5 text-[#7c3aed] mt-0.5 flex-shrink-0" /> Vacances <strong className="text-slate-700">24 mars — 6 avril</strong> : formation intensive sur l{"'"}IA</p>
              <p className="flex items-start gap-2"><Users className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Premiere recrue via une <strong className="text-slate-700">formation financee par France Travail</strong> (juin)</p>
              <p className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" /> Objectif a 3 mois : <strong className="text-[#059669]">8 clients, 500 euros/mois de revenus recurrents, 1ere recrue demarree</strong></p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
