"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import StatCard from "@/components/dossier/StatCard"
import {
  CreditCard,
  Check,
  X,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Scale,
  ChevronRight,
} from "lucide-react"

/* ─────────────────────────────────────────────
   SECTION 1 — SaaS Plans
   ───────────────────────────────────────────── */

interface SaaSPlan {
  name: string
  price: string
  period: string
  biens: string
  modules: string[]
  stockage: string
  support: string
  onboarding: string
  persona: string
  highlight: boolean
  color: string
  borderColor: string
  bgColor: string
}

const SAAS_PLANS: SaaSPlan[] = [
  {
    name: "Découverte",
    price: "0€",
    period: "gratuit",
    biens: "1 bien",
    modules: ["Patrimoine", "Prêts (basique)"],
    stockage: "500 Mo",
    support: "FAQ",
    onboarding: "—",
    persona: "Marie, 28 ans, premier studio",
    highlight: false,
    color: "#1A3D2E",
    borderColor: "border-[#1A3D2E]/30",
    bgColor: "bg-[#1A3D2E]/5",
  },
  {
    name: "Essentiel",
    price: "19€",
    period: "/mois",
    biens: "≤ 3 biens",
    modules: ["Patrimoine", "Prêts", "Locatif", "Finance", "Alertes", "Charges", "Documents"],
    stockage: "3 Go",
    support: "Email 72h",
    onboarding: "99€",
    persona: "Sophie, 35 ans, 3 biens en nom propre",
    highlight: false,
    color: "#1A5276",
    borderColor: "border-[#1A5276]/30",
    bgColor: "bg-[#1A5276]/5",
  },
  {
    name: "Pro",
    price: "39€",
    period: "/mois",
    biens: "≤ 15 biens",
    modules: [
      "Patrimoine", "Prêts", "Locatif", "Finance", "Alertes", "Charges", "Documents",
      "Coffre-fort", "Contacts", "Travaux", "Partage partenaires",
    ],
    stockage: "15 Go",
    support: "Email prio 48h",
    onboarding: "49€",
    persona: "Laurent, 40 ans, SCI avec 8 biens",
    highlight: false,
    color: "#8FAF8A",
    borderColor: "border-[#8FAF8A]/50",
    bgColor: "bg-[#8FAF8A]/5",
  },
  {
    name: "Expert",
    price: "59€",
    period: "/mois",
    biens: "Illimité",
    modules: [
      "Patrimoine", "Prêts", "Locatif", "Finance", "Alertes", "Charges", "Documents",
      "Coffre-fort", "Contacts", "Travaux", "Partage partenaires",
      "Multi-structures", "Pipeline", "Scénarios", "Export comptable",
    ],
    stockage: "50 Go",
    support: "Prio 24h + visio",
    onboarding: "Offert",
    persona: "Thomas, 45 ans, 20+ biens multi-structures",
    highlight: true,
    color: "#E67E22",
    borderColor: "border-[#E67E22]",
    bgColor: "bg-[#E67E22]/5",
  },
]

/* ─────────────────────────────────────────────
   SECTION 2 — Accompagnement
   ───────────────────────────────────────────── */

interface AccompagnementLevel {
  niveau: number
  title: string
  subtitle: string
  eligibility: string
  pricing: string | null
  details: string[]
  example: string | null
  color: string
  icon: typeof Shield
}

const ACCOMPAGNEMENT: AccompagnementLevel[] = [
  {
    niveau: 1,
    title: "Autonomie totale",
    subtitle: "L'outil remplace l'agence",
    eligibility: "Inclus dans tous les plans",
    pricing: "0€",
    details: [
      "Le propriétaire gère tout seul grâce à l'outil",
      "Quittances, alertes, documents automatisés",
      "Pas besoin de professionnel",
    ],
    example: null,
    color: "#1A3D2E",
    icon: Shield,
  },
  {
    niveau: 2,
    title: "Support Juridique & Gestionnaire",
    subtitle: "Conseil sans mandat de gestion",
    eligibility: "Plans Pro + Expert",
    pricing: null,
    details: [
      "Conseil juridique locatif",
      "Aide à la rédaction de bail",
      "Révision IRL automatisée",
      "Accompagnement sinistre",
      "Réseau de professionnels partenaires",
      "Pas de carte G requise",
    ],
    example: "Laurent, 8 biens, Pro 39€ + 8 x 12€ = 135€/mois (vs agence ~480€)",
    color: "#1A5276",
    icon: Users,
  },
  {
    niveau: 3,
    title: "Gestion Locative Carte G",
    subtitle: "Mandat de gestion complet",
    eligibility: "Plan Expert uniquement",
    pricing: null,
    details: [
      "Mandat de gestion locative",
      "Encaissement des loyers",
      "Quittances et relances",
      "Entrées / sorties des lieux",
      "Disponible juillet 2026",
    ],
    example: "Thomas, 20 biens, 9 000€ loyers, Expert 59€ + 360€ = 419€/mois (vs agence 630€ = -33%)",
    color: "#E67E22",
    icon: Building2,
  },
]

const SUPPORT_PRICING = [
  { range: "1-3 biens", price: "15€/bien" },
  { range: "4-10 biens", price: "12€/bien" },
  { range: "11+ biens", price: "10€/bien" },
]

const GESTION_PRICING = [
  { range: "≤ 20 biens", price: "4% HT des loyers" },
  { range: "> 20 biens", price: "3,5% HT des loyers" },
  { range: "Minimum", price: "200€/mois" },
]

/* ─────────────────────────────────────────────
   SECTION 4 — Modèle économique
   ───────────────────────────────────────────── */

const ECO_MODEL = [
  {
    label: "SaaS seul",
    arpu: "38€",
    ltv: "456€",
    cac: "25-40€",
    ltvCac: ">10x",
    churn: "5%",
    marge: ">90%",
  },
  {
    label: "SaaS + Support",
    arpu: "95€",
    ltv: "1 140€",
    cac: "25-40€",
    ltvCac: ">25x",
    churn: "3%",
    marge: ">80%",
  },
  {
    label: "SaaS + Gestion",
    arpu: "350€+",
    ltv: "4 200€+",
    cac: "50-80€",
    ltvCac: ">50x",
    churn: "2%",
    marge: ">60%",
  },
]

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        icon={CreditCard}
        title="Pricing"
        subtitle="Du gratuit à la gestion complète — le propriétaire progresse naturellement"
      />

      {/* ═══════════════════════════════════════
          SECTION 1 — SaaS (4 plans)
          ═══════════════════════════════════════ */}
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-800 mb-2">
          SaaS — 4 plans, sans engagement
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Le propriétaire choisit le plan adapté à son patrimoine. Évolution libre, résiliation à tout moment.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {SAAS_PLANS.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 80}>
            <div
              className={`relative rounded-xl p-5 transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                plan.highlight
                  ? `border-2 ${plan.borderColor} ${plan.bgColor} shadow-md scale-[1.02]`
                  : `bg-white border border-slate-200`
              }`}
            >
              {/* Recommended badge */}
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E67E22] text-white rounded-full px-4 py-1 text-xs font-bold whitespace-nowrap shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3" /> Recommandé
                </span>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: plan.color }}
                />
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-800">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-sm text-slate-400 font-normal ml-1">{plan.period}</span>
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                <p>
                  <span className="text-slate-400 text-xs uppercase tracking-wide">Biens :</span>{" "}
                  <span className="font-medium">{plan.biens}</span>
                </p>
                <p>
                  <span className="text-slate-400 text-xs uppercase tracking-wide">Stockage :</span>{" "}
                  <span className="font-medium">{plan.stockage}</span>
                </p>
                <p>
                  <span className="text-slate-400 text-xs uppercase tracking-wide">Support :</span>{" "}
                  <span className="font-medium">{plan.support}</span>
                </p>
                <p>
                  <span className="text-slate-400 text-xs uppercase tracking-wide">Onboarding :</span>{" "}
                  <span className="font-medium">{plan.onboarding}</span>
                </p>
              </div>

              {/* Modules */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Modules</p>
                <ul className="space-y-1.5">
                  {plan.modules.map((mod) => (
                    <li key={mod} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plan.color }} />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persona */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-400 italic leading-relaxed">
                  {plan.persona}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ═══════════════════════════════════════
          SECTION 2 — Accompagnement (3 niveaux)
          ═══════════════════════════════════════ */}
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-800 mb-2">
          Accompagnement — 3 niveaux progressifs
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Le propriétaire choisit son degré d&apos;autonomie. De la gestion 100% seul à la délégation complète.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {ACCOMPAGNEMENT.map((level, i) => {
          const IconComp = level.icon
          return (
            <ScrollReveal key={level.niveau} delay={i * 100}>
              <div className="relative rounded-xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Niveau badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white mb-4 self-start"
                  style={{ backgroundColor: level.color }}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  NIVEAU {level.niveau}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-800 mb-1">
                  {level.title}
                </h3>
                <p className="text-sm text-slate-500 mb-1">{level.subtitle}</p>
                <p className="text-xs font-medium mb-4" style={{ color: level.color }}>
                  {level.eligibility}
                </p>

                {/* Pricing for level 1 */}
                {level.pricing && (
                  <p className="text-2xl font-bold mb-4" style={{ color: level.color }}>
                    {level.pricing}
                    <span className="text-sm text-slate-400 font-normal ml-1">inclus</span>
                  </p>
                )}

                {/* Pricing grids for levels 2 and 3 */}
                {level.niveau === 2 && (
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tarification</p>
                    {SUPPORT_PRICING.map((tier) => (
                      <div key={tier.range} className="flex justify-between text-sm py-1">
                        <span className="text-slate-600">{tier.range}</span>
                        <span className="font-semibold" style={{ color: level.color }}>{tier.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {level.niveau === 3 && (
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tarification</p>
                    {GESTION_PRICING.map((tier) => (
                      <div key={tier.range} className="flex justify-between text-sm py-1">
                        <span className="text-slate-600">{tier.range}</span>
                        <span className="font-semibold" style={{ color: level.color }}>{tier.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Details */}
                <ul className="space-y-2 flex-1">
                  {level.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: level.color }} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Example */}
                {level.example && (
                  <div
                    className="mt-4 pt-3 border-t border-slate-100 rounded-lg p-3"
                    style={{ backgroundColor: `${level.color}08` }}
                  >
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Exemple</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{level.example}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* ═══════════════════════════════════════
          SECTION 3 — Parcours de monétisation
          ═══════════════════════════════════════ */}
      <SectionCard
        title="Parcours de monétisation"
        subtitle="Le propriétaire progresse naturellement vers les offres supérieures"
        icon={TrendingUp}
        delay={100}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 py-4">
          {[
            { label: "Découverte", sub: "0€ — Freemium", color: "#1A3D2E" },
            { label: "Essentiel", sub: "19€/mois", color: "#1A5276" },
            { label: "Pro", sub: "39€/mois", color: "#8FAF8A" },
            { label: "Expert", sub: "59€/mois", color: "#E67E22" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="flex flex-col items-center text-center flex-1">
                <div
                  className="w-full max-w-[140px] rounded-xl px-4 py-3 text-white font-semibold text-sm shadow-sm"
                  style={{ backgroundColor: step.color }}
                >
                  {step.label}
                </div>
                <p className="text-xs text-slate-500 mt-1.5">{step.sub}</p>
              </div>
              {i < 3 && (
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500 text-center">
            Chaque palier apporte plus de modules, plus de biens, plus de support.
            Le propriétaire monte naturellement quand son patrimoine grandit.
          </p>
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════
          SECTION 4 — Modèle économique (investisseur)
          ═══════════════════════════════════════ */}
      <SectionCard
        title="Modèle économique — Vue investisseur"
        icon={TrendingUp}
        delay={200}
        className="mb-8"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium">Métrique</th>
                {ECO_MODEL.map((col) => (
                  <th key={col.label} className="text-center py-3 text-slate-700 font-semibold px-4">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { key: "ARPU", field: "arpu" as const },
                { key: "LTV (12 mois)", field: "ltv" as const },
                { key: "CAC", field: "cac" as const },
                { key: "LTV / CAC", field: "ltvCac" as const },
                { key: "Churn mensuel", field: "churn" as const },
                { key: "Marge brute", field: "marge" as const },
              ].map((row) => (
                <tr key={row.key} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 text-slate-700 font-medium">{row.key}</td>
                  {ECO_MODEL.map((col) => (
                    <td key={col.label} className="py-3 text-center font-semibold text-slate-800">
                      {col[row.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* KPI highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
          <StatCard label="ARPU max" value="350€+" color="accent" delay={250} />
          <StatCard label="LTV max" value="4 200€+" color="primary" delay={300} />
          <StatCard label="LTV/CAC max" value=">50x" color="success" trend="up" delay={350} />
          <StatCard label="Churn min" value="2%" color="warning" trend="down" delay={400} />
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════
          SECTION 5 — Comparaison agence classique
          ═══════════════════════════════════════ */}
      <SectionCard
        title="Comparaison agence classique"
        subtitle="10 biens, loyer moyen 800€/mois"
        icon={Scale}
        delay={300}
        className="mb-8"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 text-slate-500 font-medium">Critère</th>
                <th className="text-center py-3 text-slate-700 font-semibold px-4">Agence classique</th>
                <th className="text-center py-3 font-semibold px-4 text-[#E67E22]">Parkimmo Expert + Gestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 text-slate-700">Honoraires gestion</td>
                <td className="py-3 text-center text-slate-600">7% des loyers</td>
                <td className="py-3 text-center font-semibold text-[#E67E22]">4% HT des loyers</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 text-slate-700">Coût mensuel</td>
                <td className="py-3 text-center text-red-600 font-semibold">560€/mois</td>
                <td className="py-3 text-center text-[#059669] font-semibold">379€/mois</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 text-slate-700">Détail</td>
                <td className="py-3 text-center text-slate-500 text-xs">8 000€ x 7%</td>
                <td className="py-3 text-center text-slate-500 text-xs">Expert 59€ + 8 000€ x 4%</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 text-slate-700">Outil de suivi</td>
                <td className="py-3 text-center">
                  <X className="w-4 h-4 text-red-400 mx-auto" />
                </td>
                <td className="py-3 text-center">
                  <Check className="w-4 h-4 text-[#059669] mx-auto" />
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 text-slate-700">Visibilité temps réel</td>
                <td className="py-3 text-center">
                  <X className="w-4 h-4 text-red-400 mx-auto" />
                </td>
                <td className="py-3 text-center">
                  <Check className="w-4 h-4 text-[#059669] mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Savings highlight */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="bg-[#059669]/10 rounded-xl px-6 py-4 text-center">
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-wider mb-1">Économie mensuelle</p>
            <p className="text-2xl font-bold text-[#059669]">-32%</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 hidden sm:block" />
          <div className="bg-[#059669]/10 rounded-xl px-6 py-4 text-center">
            <p className="text-xs font-semibold text-[#059669] uppercase tracking-wider mb-1">Économie annuelle</p>
            <p className="text-2xl font-bold text-[#059669]">2 172€/an</p>
          </div>
        </div>

        {/* Bar comparison */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-44 shrink-0 text-right">Agence classique</span>
              <div className="flex-1 bg-red-50 rounded-full h-6 relative">
                <div className="bg-red-500 h-6 rounded-full w-full flex items-center justify-end pr-3">
                  <span className="text-xs font-bold text-white">560€/mois</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 w-44 shrink-0 text-right">Parkimmo Expert + Gestion</span>
              <div className="flex-1 bg-green-50 rounded-full h-6 relative">
                <div
                  className="bg-[#059669] h-6 rounded-full flex items-center justify-end pr-3"
                  style={{ width: "67%" }}
                >
                  <span className="text-xs font-bold text-white whitespace-nowrap">379€/mois</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════
          SECTION 6 — Carte G
          ═══════════════════════════════════════ */}
      <ScrollReveal delay={400}>
        <div className="bg-[#E8E4D4]/40 border border-[#E8E4D4] rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E67E22]/10 flex items-center justify-center flex-shrink-0">
              <Scale className="w-6 h-6 text-[#E67E22]" />
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-800 mb-3">
                Carte G : un atout réglementaire
              </h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  La <strong className="text-slate-800">carte professionnelle G (Gestion immobilière)</strong> est
                  délivrée par la CCI et permet d&apos;exercer légalement l&apos;activité de gestion locative
                  pour compte de tiers, conformément à la <strong className="text-slate-800">loi Hoguet</strong> (loi
                  n°70-9 du 2 janvier 1970).
                </p>
                <p>
                  L&apos;obtention de la carte G est prévue pour <strong className="text-[#E67E22]">juillet 2026</strong>.
                  Elle permettra de proposer le Niveau 3 d&apos;accompagnement (Gestion Locative) avec encaissement
                  des loyers, mandats de gestion et toutes les opérations réglementées.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-[#E8E4D4]">
                    <p className="text-xs font-bold text-[#1A5276] uppercase tracking-wider mb-2">
                      Pour le client
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Garantie de conformité réglementaire
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Assurance RCP obligatoire
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Garantie financière pour les fonds détenus
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Cadre légal protecteur (loi Hoguet)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-[#E8E4D4]">
                    <p className="text-xs font-bold text-[#E67E22] uppercase tracking-wider mb-2">
                      Pour l&apos;investisseur
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Barrière à l&apos;entrée réglementaire
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Revenus récurrents haute rétention (churn 2%)
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        ARPU x10 vs SaaS seul
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                        Moat concurrentiel fort
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
