"use client"

import { Rocket, Search, Video, Users, Target, Handshake, Mail, ArrowRight, TrendingUp, DollarSign, Percent, CreditCard, UserPlus, BarChart3, Calendar, CheckCircle2 } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import StatCard from "@/components/dossier/StatCard"

/* ─────────────────────── DATA ─────────────────────── */

const FUNNEL_STEPS = [
  {
    label: "Trafic",
    detail: "SEO + Ads + Social + Influenceurs + Courrier SCIs",
    value: "~45 000 visiteurs/an",
    color: "#1A3D2E",
    lightBg: "bg-[#1A3D2E]/10",
  },
  {
    label: "Inscrits freemium",
    detail: "8-12% de conversion visiteur",
    value: "~3 600 - 5 400",
    color: "#8FAF8A",
    lightBg: "bg-[#8FAF8A]/15",
  },
  {
    label: "Utilisateurs actifs",
    detail: "40% des inscrits",
    value: "~1 800",
    color: "#1A5276",
    lightBg: "bg-[#1A5276]/10",
  },
  {
    label: "Clients payants",
    detail: "10% des actifs (= 4% total)",
    value: "~81",
    color: "#E67E22",
    lightBg: "bg-[#E67E22]/10",
  },
  {
    label: "Clients GA",
    detail: "17% des payants",
    value: "~14",
    color: "#7c3aed",
    lightBg: "bg-[#7c3aed]/10",
  },
]

const CONVERSION_RATES = [
  { from: "Visiteur", to: "Inscrit", rate: "8-12%" },
  { from: "Inscrit", to: "Actif", rate: "40%" },
  { from: "Actif", to: "Payant", rate: "10%" },
  { from: "Visiteur", to: "Payant", rate: "4% total" },
  { from: "Payant", to: "GA", rate: "17%" },
]

interface PilierData {
  id: number
  title: string
  icon: typeof Search
  color: string
  description: string
  details: string[]
  cost: string
  impact: string
  timeline: string
}

const PILIERS: PilierData[] = [
  {
    id: 1,
    title: "SEO & Lead Magnet",
    icon: Search,
    color: "#1A3D2E",
    description: "Fichier Excel \"gestion patrimoine immobilier\" gratuit en echange d'email. Blog SEO optimise sur les requetes de gestion locative.",
    details: [
      "Mots-cles cibles : \"tableau excel gestion locative gratuit\", \"fichier excel suivi loyers\", \"modele excel revenus fonciers\"",
      "Lead magnet : fichier Excel complet telechargeable → capture email → nurturing vers freemium",
      "Blog SEO : 2-3 articles/mois, guides pratiques, comparatifs outils, conseils fiscaux",
      "Strategie longue traine : centaines de requetes specifiques a faible concurrence",
    ],
    cost: "~0€ (temps fondatrice)",
    impact: "40% du trafic a M12",
    timeline: "M1 → M4-M6 (croissance cumulative)",
  },
  {
    id: 2,
    title: "YouTube & Contenu video",
    icon: Video,
    color: "#059669",
    description: "Chaine positionnee \"avocate immobilier devenue entrepreneuse tech\". Tutos pratiques 5-10 min sur la gestion locative.",
    details: [
      "Positionnement unique : expertise juridique + tech + immobilier",
      "Format : tutos 5-10 min, reponses aux questions courantes des proprietaires",
      "Sujets : declarations fiscales, gestion des litiges, transition Excel → app, cas pratiques SCI",
      "Cross-promotion : chaque video renvoie vers le lead magnet Excel ou le freemium",
    ],
    cost: "~0€ (smartphone + logiciel gratuit)",
    impact: "20% du trafic a M12",
    timeline: "1ere video M1, rythme 2/mois",
  },
  {
    id: 3,
    title: "Influenceurs tech/immo",
    icon: Users,
    color: "#8FAF8A",
    description: "Partenariats avec des YouTubers patrimoine (10k-100k abonnes), communautes Finary, micro-influenceurs comptables et CGP LinkedIn.",
    details: [
      "Cible : YouTubers patrimoine/investissement 10k-100k abonnes",
      "Communautes : Finary, forums immo, groupes Facebook proprietaires",
      "Micro-influenceurs LinkedIn : comptables, CGP, experts patrimoine",
      "Deal : acces Pro gratuit + code promo affilies. Quelques placements payes 1 000-2 000€",
    ],
    cost: "5 000€ An1",
    impact: "15% du trafic a M12",
    timeline: "Contacts M2, 1eres collabs M4-M5",
  },
  {
    id: 4,
    title: "Google Ads",
    icon: Target,
    color: "#E67E22",
    description: "Search cible uniquement, pas de display au debut. Requetes a forte intention d'achat sur les alternatives aux outils existants.",
    details: [
      "Requetes ciblees : \"logiciel gestion locative\", \"alternative Rentila\", \"outil gestion SCI\"",
      "Search only au debut — pas de Display (trop de gaspillage en early stage)",
      "Landing pages dediees par intent : SCI, multi-biens, primo-bailleur",
      "A/B testing continu : titres, descriptions, pages d'atterrissage",
    ],
    cost: "500€/mois M3-M6 → 1 000€/mois M7-M12",
    impact: "15% du trafic",
    timeline: "Lancement M3, montee progressive",
  },
  {
    id: 5,
    title: "Reseau partenaires pros",
    icon: Handshake,
    color: "#1A5276",
    description: "Comptables, CGP, notaires. Espace Partenaire gratuit avec tableau de bord clients = recommandation naturelle.",
    details: [
      "Cible : comptables (relation trimestrielle avec proprietaires), CGP, notaires",
      "Outil : Espace Partenaire gratuit — vue consolidee de leurs clients proprietaires",
      "Valeur ajoutee : moins de relance documentaire, documents deja organises",
      "Objectif An1 : 10 partenaires actifs qui recommandent naturellement",
    ],
    cost: "~0€ (outils integres)",
    impact: "10% des clients, meilleure retention",
    timeline: "Prospection M1 → 1ers partenaires M4",
  },
  {
    id: 6,
    title: "Courrier Direct SCIs",
    icon: Mail,
    color: "#7c3aed",
    description: "Courrier massif ciblant les gerants de SCIs. Accroche : \"Marre de gerer les papiers de la SCI ?\" Format carte A5 avec QR code.",
    details: [
      "Base cible : donnees publiques Infogreffe/Pappers (gerants SCIs)",
      "Format : carte A5 premium, QR code vers landing /sci dediee",
      "Taux d'ouverture courrier : ~90% vs ~20% email — 5x plus d'attention",
      "Profil premium : SCIs = multi-biens = ARPU eleve (forfait Pro/Expert ou GA)",
      "Test initial : 1 000 envois = ~1 000€, conversion attendue 2-3%",
      "3 vagues : M4 (test), M7 (post Carte G = Expert GA), M10 (affinement)",
    ],
    cost: "3-5 000€ An1",
    impact: "5-8% des clients, profil premium",
    timeline: "Vague 1 M4, Vague 2 M7, Vague 3 M10",
  },
]

interface TimelineMonth {
  month: string
  actions: string[]
  color: string
  highlight?: boolean
}

const TIMELINE_DATA: TimelineMonth[] = [
  {
    month: "M1",
    actions: ["SEO + blog", "1ere video YouTube", "Prospection partenaires"],
    color: "#1A3D2E",
  },
  {
    month: "M3",
    actions: ["Google Ads lance", "Freemium live"],
    color: "#059669",
  },
  {
    month: "M4",
    actions: ["1ere vague courrier SCIs", "1eres collabs influenceurs"],
    color: "#8FAF8A",
    highlight: true,
  },
  {
    month: "M6",
    actions: ["Analyse CAC tous canaux", "Optimisation budget"],
    color: "#E67E22",
  },
  {
    month: "M7",
    actions: ["2eme vague courrier", "Carte G → Expert GA"],
    color: "#1A5276",
    highlight: true,
  },
  {
    month: "M9",
    actions: ["Recrutement charge d'affaires"],
    color: "#7c3aed",
  },
  {
    month: "M10",
    actions: ["3eme vague courrier affine"],
    color: "#7c3aed",
  },
  {
    month: "M12",
    actions: ["1 800 inscrits", "81 payants", "MRR 4 128€"],
    color: "#1A3D2E",
    highlight: true,
  },
]

const METRICS = [
  { label: "CAC moyen", value: "25-40€", subtitle: "Tous canaux confondus", icon: DollarSign, color: "primary" as const, trend: "down" as const },
  { label: "LTV / CAC", value: ">10×", subtitle: "Ratio sain > 3×", icon: TrendingUp, color: "success" as const, trend: "up" as const },
  { label: "Conversion free→paid", value: "4%", subtitle: "Visiteur → client payant", icon: Percent, color: "accent" as const },
  { label: "Budget An1", value: "~20 000€", subtitle: "Ads + influenceurs + courrier", icon: CreditCard, color: "premium" as const },
  { label: "Cout / inscrit", value: "5-8€", subtitle: "Canaux payants uniquement", icon: UserPlus, color: "primary" as const },
  { label: "Courrier SCIs CAC", value: "35-50€", subtitle: "Mais ARPU 3× superieur", icon: Mail, color: "premium" as const },
]

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function AcquisitionPage() {
  return (
    <div>
      <PageHeader
        icon={Rocket}
        title="Strategie d'Acquisition"
        subtitle="6 piliers pour une croissance organique + payante"
      />

      {/* ── SECTION 1 : FUNNEL DE CONVERSION ── */}
      <SectionCard title="Funnel de conversion" icon={BarChart3} className="mb-8" delay={0}>
        {/* Funnel visual */}
        <div className="space-y-3 mb-8">
          {FUNNEL_STEPS.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 80}>
              <div className="flex items-stretch gap-0">
                {/* Arrow / connector */}
                {i > 0 && (
                  <div className="flex items-center -mt-3 mb-0">
                    <div className="w-full" />
                  </div>
                )}
                <div
                  className="flex-1 rounded-xl p-4 border transition-all duration-300 hover:shadow-md relative overflow-hidden"
                  style={{
                    borderColor: `${step.color}30`,
                    background: `linear-gradient(135deg, ${step.color}08 0%, ${step.color}03 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        {i + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="font-display font-bold text-slate-800">{step.label}</p>
                        <p className="text-xs text-slate-500 truncate">{step.detail}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-display font-bold text-lg" style={{ color: step.color }}>
                        {step.value}
                      </p>
                    </div>
                  </div>
                  {/* Decorative bar */}
                  <div
                    className="absolute bottom-0 left-0 h-1 rounded-b-xl"
                    style={{
                      backgroundColor: step.color,
                      width: `${100 - i * 18}%`,
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>
              {/* Arrow between steps */}
              {i < FUNNEL_STEPS.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Conversion rates */}
        <ScrollReveal delay={500}>
          <div className="bg-[#E8E4D4]/30 rounded-xl p-5 border border-[#E8E4D4]/50">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Taux de conversion par etape</p>
            <div className="flex flex-wrap gap-3">
              {CONVERSION_RATES.map((cr) => (
                <div key={`${cr.from}-${cr.to}`} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-slate-100 shadow-sm">
                  <span className="text-xs text-slate-500">{cr.from}</span>
                  <ArrowRight className="w-3 h-3 text-[#E67E22]" />
                  <span className="text-xs text-slate-500">{cr.to}</span>
                  <span className="text-sm font-bold text-[#1A3D2E] ml-1">{cr.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionCard>

      {/* ── SECTION 2 : 6 PILIERS ── */}
      <div className="mb-8">
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-[#1A3D2E]" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-800">Les 6 piliers d&apos;acquisition</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {PILIERS.map((pilier, i) => {
            const IconComp = pilier.icon
            return (
              <SectionCard
                key={pilier.id}
                title={`Pilier ${pilier.id} — ${pilier.title}`}
                icon={IconComp}
                delay={i * 100}
                className=""
              >
                <div className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">{pilier.description}</p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {pilier.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pilier.color }} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* KPIs row */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: `${pilier.color}10` }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Cout</p>
                      <p className="text-sm font-bold" style={{ color: pilier.color }}>{pilier.cost}</p>
                    </div>
                    <div
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: `${pilier.color}10` }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Impact</p>
                      <p className="text-sm font-bold" style={{ color: pilier.color }}>{pilier.impact}</p>
                    </div>
                    <div
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: `${pilier.color}10` }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Timeline</p>
                      <p className="text-sm font-bold" style={{ color: pilier.color }}>{pilier.timeline}</p>
                    </div>
                  </div>
                </div>
              </SectionCard>
            )
          })}
        </div>
      </div>

      {/* ── SECTION 3 : TIMELINE VISUELLE ── */}
      <SectionCard title="Timeline d'activation M1 → M12" icon={Calendar} className="mb-8" delay={100}>
        {/* Horizontal scrollable timeline */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-0 min-w-[900px]">
            {TIMELINE_DATA.map((item, i) => (
              <ScrollReveal key={item.month} delay={i * 80} className="flex-1 min-w-[110px]">
                <div className="relative flex flex-col items-center">
                  {/* Month badge */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mb-3 shadow-md ${
                      item.highlight ? "ring-4 ring-offset-2 ring-[#E67E22]/40" : ""
                    }`}
                    style={{ backgroundColor: item.color }}
                  >
                    {item.month}
                  </div>

                  {/* Connector line */}
                  {i < TIMELINE_DATA.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-slate-200" />
                  )}

                  {/* Actions */}
                  <div
                    className="w-full rounded-lg p-3 text-center border"
                    style={{
                      borderColor: `${item.color}30`,
                      backgroundColor: `${item.color}06`,
                    }}
                  >
                    {item.actions.map((action, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-xs text-slate-600 mb-1 last:mb-0 text-left">
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* ── SECTION 4 : METRIQUES D'ACQUISITION ── */}
      <ScrollReveal delay={0}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-[#1A3D2E]" />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-800">Metriques d&apos;acquisition</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {METRICS.map((m, i) => (
          <StatCard
            key={m.label}
            label={m.label}
            value={m.value}
            subtitle={m.subtitle}
            icon={m.icon}
            color={m.color}
            trend={m.trend}
            delay={i * 80}
          />
        ))}
      </div>

      {/* ── SECTION 5 : POURQUOI CA MARCHE ── */}
      <ScrollReveal delay={200}>
        <div className="bg-[#E8E4D4]/40 rounded-xl border border-[#E8E4D4] p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A3D2E]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-[#1A3D2E]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-800 mb-3">Pourquoi ca marche</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                76% des proprietaires trouvent la gestion locative trop compliquee (IFOP/Masteos). Parkimmo cible
                cette frustration avec une approche multi-canal ou chaque pilier se renforce mutuellement :
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">SEO + YouTube</strong> = trafic gratuit et recurrent (60% du total)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">Lead magnet Excel</strong> = conversion naturelle du gratuit vers le SaaS
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">Courrier SCIs</strong> = canal sous-exploite avec un profil premium (multi-biens)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-800">Partenaires pros</strong> = referral a cout quasi nul, meilleure retention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
