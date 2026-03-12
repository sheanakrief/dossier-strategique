"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import StatCard from "@/components/dossier/StatCard"
import TimelineItem from "@/components/dossier/TimelineItem"
import {
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  Rocket,
  Clock,
  CheckCircle2,
  Zap,
  Users,
  Building2,
  Mail,
  MapPin,
  User,
  DollarSign,
  PieChart,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ─── Données statiques ──────────────────────────────────────────────── */

const UTILISATION_FONDS = [
  {
    label: "Acquisition clients",
    pourcentage: 60,
    montantMin: "18 000",
    montantMax: "30 000",
    detail: "Google Ads, influenceurs immo, marketing de contenu, SEO",
    color: "#E67E22",
  },
  {
    label: "Operations",
    pourcentage: 25,
    montantMin: "7 500",
    montantMax: "12 500",
    detail: "Charge d'affaires GA, outils CRM, formation",
    color: "#1A5276",
  },
  {
    label: "Infrastructure",
    pourcentage: 15,
    montantMin: "4 500",
    montantMax: "7 500",
    detail: "Hebergement cloud, analytics, audit securite",
    color: "#8FAF8A",
  },
]

const DEBLOCAGES: {
  icon: LucideIcon
  titre: string
  items: { label: string; value: string }[]
  gradient: string
}[] = [
  {
    icon: Target,
    titre: "Traction mesurable",
    items: [
      { label: "Inscrits freemium", value: "1 800" },
      { label: "Clients payants", value: "81" },
      { label: "MRR atteint", value: "4 128 €" },
    ],
    gradient: "from-amber-50 to-orange-50",
  },
  {
    icon: BarChart3,
    titre: "Donnees de marche",
    items: [
      { label: "CAC valide", value: "3 canaux" },
      { label: "Taux de conversion", value: "Prouve" },
      { label: "NPS utilisateurs", value: "Mesure" },
    ],
    gradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Shield,
    titre: "Position defendable",
    items: [
      { label: "SEO", value: "Etabli" },
      { label: "Reseau partenaires", value: "Actif" },
      { label: "Base freemium", value: "= Moat" },
    ],
    gradient: "from-green-50 to-emerald-50",
  },
]

const ROI_TIMELINE = [
  {
    period: "M6",
    title: "Investissement entierement deploye",
    description:
      "Canaux d'acquisition actifs, equipe operations en place, infrastructure scalable",
    kpi: "100% du capital deploye",
    color: "blue" as const,
  },
  {
    period: "M12",
    title: "Premiere etape de traction",
    description: "81 clients payants, base freemium de 1 800 utilisateurs",
    kpi: "MRR 4 128 €",
    color: "accent" as const,
  },
  {
    period: "M15-M16",
    title: "Break-even mensuel",
    description:
      "Les revenus recurrents couvrent les charges operationnelles mensuelles",
    kpi: "Rentabilite mensuelle",
    color: "green" as const,
    isActive: true,
  },
  {
    period: "M24",
    title: "Croissance confirmee",
    description: "~200 clients actifs, diversification revenus GA + SaaS",
    kpi: "MRR ~9 500 € | CA run-rate ~115 000 €",
    color: "primary" as const,
  },
  {
    period: "M36",
    title: "Marche installe",
    description:
      "500+ clients, position de leader sur le segment SaaS + accompagnement",
    kpi: "MRR 20 000 €+",
    color: "purple" as const,
  },
]

const POURQUOI_MAINTENANT: { icon: LucideIcon; texte: string }[] = [
  {
    icon: TrendingUp,
    texte:
      "Marche locatif prive en croissance de +5% par an",
  },
  {
    icon: Users,
    texte:
      "70% des bailleurs n'utilisent aucun outil dedie",
  },
  {
    icon: Rocket,
    texte:
      "Les 18-35 ans arrivent massivement dans l'investissement locatif",
  },
  {
    icon: Shield,
    texte:
      "Aucun acteur ne combine SaaS + accompagnement humain + cycle de vie complet",
  },
  {
    icon: Clock,
    texte:
      "Produit pret a scaler : chaque mois perdu = marche laisse aux concurrents",
  },
]

const DEJA_FAIT: string[] = [
  "Produit fonctionnel (38 modeles de documents, 50+ endpoints API)",
  "Client pilote actif (19 biens, multi-structures SCI/nom propre)",
  "Structure juridique en place (SAS, avocat specialise signe)",
  "Domaine reserve (parkimmo.app)",
  "Fondatrice a temps plein sur le projet",
  "10 ans d'expertise immobiliere cumulee (juridique, technique, terrain)",
]

const CONTACT_INFO: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: User, label: "Fondatrice", value: "Sheana Krief" },
  { icon: Building2, label: "Societe", value: "K PAR K CONSEILS SAS" },
  { icon: Mail, label: "Email", value: "sheana@kparkconseils.fr" },
  { icon: MapPin, label: "Localisation", value: "Lyon, France" },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function InvestissementPage() {
  return (
    <div>
      <PageHeader
        icon={TrendingUp}
        title="Proposition d'Investissement"
        subtitle="Accelerer la croissance d'un produit valide sur le terrain"
      />

      <div className="space-y-8">
        {/* ── 1. LE BESOIN ─────────────────────────────────────────── */}
        <ScrollReveal>
          <div className="card-print rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-[#E8E4D4]/30">
            <div className="border-l-4 border-[#E67E22] bg-gradient-to-r from-[#E8E4D4]/60 to-white px-6 py-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#E67E22]" />
                <h3 className="font-display text-xl font-semibold text-slate-800">
                  Le Besoin
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-white/80 rounded-lg p-6 border border-[#E8E4D4]">
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  Le produit existe. Le marche est identifie. Le premier client
                  pilote valide le modele.
                </p>
                <p className="text-base font-semibold text-[#1A3D2E] leading-relaxed">
                  L'investissement ne finance pas le developpement &mdash; il
                  finance l'<span className="text-[#E67E22] uppercase">acquisition</span>{" "}
                  de clients et la structuration de l'accompagnement humain
                  (Gestion Assistee).
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 2. MONTANT & UTILISATION ─────────────────────────────── */}
        <SectionCard
          title="Montant & Utilisation des Fonds"
          subtitle="30 000 € - 50 000 €"
          icon={PieChart}
          delay={100}
        >
          <div className="space-y-5">
            {UTILISATION_FONDS.map((item, idx) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.pourcentage}%
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                    {item.montantMin} € &ndash; {item.montantMax} €
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.pourcentage}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Legende totale */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Total</span>
              <span className="text-lg font-bold text-[#1A3D2E]">
                30 000 € &ndash; 50 000 €
              </span>
            </div>
          </div>
        </SectionCard>

        {/* ── 3. CE QUE L'INVESTISSEMENT DEBLOQUE ──────────────────── */}
        <SectionCard
          title="Ce que l'Investissement Debloque"
          subtitle="Objectifs M12 post-investissement"
          icon={Rocket}
          delay={200}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEBLOCAGES.map((card, idx) => (
              <div
                key={card.titre}
                className={`rounded-xl border border-slate-200 bg-gradient-to-br ${card.gradient} p-5 hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                    <card.icon className="w-4.5 h-4.5 text-[#1A3D2E]" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-slate-800">
                    {card.titre}
                  </h4>
                </div>
                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-500 font-medium">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-[#1A3D2E]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* ── 4. RETOUR SUR INVESTISSEMENT ─────────────────────────── */}
        <SectionCard
          title="Retour sur Investissement"
          subtitle="Trajectoire de croissance M6 - M36"
          icon={TrendingUp}
          delay={300}
        >
          <div className="pl-2">
            {ROI_TIMELINE.map((item, idx) => (
              <TimelineItem
                key={item.period}
                period={item.period}
                title={item.title}
                description={item.description}
                kpi={item.kpi}
                color={item.color}
                isActive={item.isActive || false}
                isLast={idx === ROI_TIMELINE.length - 1}
                delay={idx * 80}
              />
            ))}
          </div>

          {/* KPI highlight row */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Break-even"
              value="M15-M16"
              subtitle="Rentabilite mensuelle"
              color="success"
              icon={CheckCircle2}
              trend="up"
              delay={0}
            />
            <StatCard
              label="MRR M24"
              value="~9 500 €"
              subtitle="~200 clients actifs"
              color="primary"
              icon={DollarSign}
              trend="up"
              delay={100}
            />
            <StatCard
              label="CA run-rate M24"
              value="~115k €"
              subtitle="Annualise"
              color="accent"
              icon={TrendingUp}
              trend="up"
              delay={200}
            />
            <StatCard
              label="MRR M36"
              value="20 000 €+"
              subtitle="500+ clients"
              color="premium"
              icon={Rocket}
              trend="up"
              delay={300}
            />
          </div>
        </SectionCard>

        {/* ── 5. POURQUOI MAINTENANT ───────────────────────────────── */}
        <SectionCard
          title="Pourquoi Maintenant"
          subtitle="La fenetre d'opportunite est ouverte"
          icon={Clock}
          delay={400}
        >
          <div className="space-y-4">
            {POURQUOI_MAINTENANT.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-[#E67E22]/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E67E22]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#E67E22]" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-2">
                    {item.texte}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionCard>

        {/* ── 6. CE QUI EST DEJA FAIT ──────────────────────────────── */}
        <SectionCard
          title="Ce qui est Deja Fait"
          subtitle="Le socle est en place"
          icon={CheckCircle2}
          delay={500}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DEJA_FAIT.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#059669]/5 border border-[#059669]/10">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionCard>

        {/* ── 7. CONTACT ───────────────────────────────────────────── */}
        <ScrollReveal delay={600}>
          <div className="card-print rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-gradient-to-br from-[#1A3D2E] to-[#1A3D2E]/90">
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Discutons de votre participation
                </h3>
                <p className="text-[#8FAF8A] text-sm">
                  Prenons rendez-vous pour echanger sur cette opportunite
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#8FAF8A]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#8FAF8A]/70 font-medium">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-white truncate">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:sheana@kparkconseils.fr?subject=Proposition d'investissement Parkimmo"
                  className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg shadow-[#E67E22]/20"
                >
                  <Mail className="w-4 h-4" />
                  Prendre contact
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
