"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import StatCard from "@/components/dossier/StatCard"
import DemoFreemium from "../demo/DemoFreemium"
import DemoEssentiel from "../demo/DemoEssentiel"
import DemoPro from "../demo/DemoPro"
import DemoExpert from "../demo/DemoExpert"
import "../demo/demo.css"
import {
  Gift,
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
  Monitor,
  Home,
  FileText,
  Bell,
  BookOpen,
  Video,
  Headphones,
  CheckCircle2,
  Crown,
  Briefcase,
  Sparkles,
  Handshake,
  MessageSquare,
  Database,
  Server,
  Layout,
  UserPlus,
  Eye,
  Wrench,
  Settings,
} from "lucide-react"

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — DEMO DATA
   ═══════════════════════════════════════════════════════════════ */

const DEMO_TABS = [
  {
    id: "freemium",
    label: "Freemium",
    sub: "Gratuit",
    persona: "Marie, 28 ans, vient d'acheter son premier studio à Paris. Elle découvre Parkimmo gratuitement pour suivre son bien et son prêt.",
  },
  {
    id: "essentiel",
    label: "Essentiel",
    sub: "19€/mois",
    persona: "Sophie, 35 ans, possède 3 biens en nom propre. Elle utilise Parkimmo pour suivre ses loyers, ses charges, et ne plus oublier les échéances.",
  },
  {
    id: "pro",
    label: "Pro",
    sub: "39€/mois",
    persona: "Laurent, 40 ans, a créé sa SCI et gère 5 biens. Il a besoin de consolider sa vision patrimoniale et de suivre ses travaux.",
  },
  {
    id: "expert",
    label: "Expert",
    sub: "59€/mois",
    persona: "Thomas, 45 ans, gère 8 biens répartis sur 3 structures (nom propre, SCI, SNC). Il pilote son patrimoine, ses acquisitions et ses travaux depuis un seul tableau de bord.",
  },
] as const

type DemoTabId = (typeof DEMO_TABS)[number]["id"]

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — PRODUIT DATA
   ═══════════════════════════════════════════════════════════════ */

const PLAN_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Tous: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
  "Solo+": { bg: "bg-[#1A3D2E]/10", text: "text-[#1A3D2E]", border: "border-[#1A3D2E]/20" },
  "Pro+": { bg: "bg-[#8FAF8A]/10", text: "text-[#8FAF8A]", border: "border-[#8FAF8A]/20" },
  Expert: { bg: "bg-[#7c3aed]/10", text: "text-[#7c3aed]", border: "border-[#7c3aed]/20" },
}

const MODULES: { icon: LucideIcon; name: string; desc: string; plans: string }[] = [
  { icon: Home, name: "Patrimoine", desc: "Fiches biens, entités SCI/SNC, adresses, parkings", plans: "Tous" },
  { icon: FileText, name: "Locatif", desc: "Baux, locataires, quittances PDF, révisions IRL", plans: "Tous" },
  { icon: CreditCard, name: "Finance", desc: "Encaissements, prêts, rendement, cash-flow", plans: "Solo+" },
  { icon: Bell, name: "Alertes", desc: "Calendrier, rappels, échéances assurance/bail", plans: "Solo+" },
  { icon: Shield, name: "Charges & Assurances", desc: "Charges récurrentes, PNO/GLI/DO, sinistres", plans: "Pro+" },
  { icon: Users, name: "Contacts", desc: "Annuaire, prestataires, association contact→bien", plans: "Pro+" },
  { icon: Wrench, name: "Travaux & Projets", desc: "Pipeline Kanban, budget, postes de dépense", plans: "Expert" },
  { icon: Settings, name: "Outils avancés", desc: "Simulateur, scénarios, exports, API", plans: "Expert" },
]

const JOURNEY = [
  { icon: UserPlus, label: "Inscription" },
  { icon: Home, label: "Paramétrage bien" },
  { icon: FileText, label: "Import docs" },
  { icon: Eye, label: "Vision rendement" },
  { icon: Bell, label: "Alertes auto" },
]

const TERRAIN_EXAMPLES = [
  {
    label: "Coffre-fort documentaire",
    terrain: "Le client perdait systématiquement ses attestations d'assurance au moment des sinistres",
    color: "#1A3D2E",
  },
  {
    label: "Multi-structures (SCI/SNC)",
    terrain: "9 structures juridiques différentes gérées sur 3 tableurs Excel séparés",
    color: "#8FAF8A",
  },
  {
    label: "Pipeline acquisition → revente",
    terrain: "Aucun outil ne suivait un bien de la recherche à la revente en passant par les travaux",
    color: "#059669",
  },
  {
    label: "Partage partenaires",
    terrain: "L'expert-comptable demandait les mêmes documents chaque trimestre — impossible de les retrouver",
    color: "#7c3aed",
  },
]

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — PRICING DATA
   ═══════════════════════════════════════════════════════════════ */

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
    example: "Laurent, 8 biens, Pro 39€ + 8 × 12€ = 135€/mois (vs agence ~480€)",
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

/* ═══════════════════════════════════════════════════════════════
   SECTION 3b — OFFRE DETAILLEE DATA (toggle Petit / Grand)
   ═══════════════════════════════════════════════════════════════ */

const PETIT_AVANTAGES = [
  { icon: Shield, title: "Coffre-fort documentaire", desc: "Tous vos documents au même endroit, accessibles 24/7" },
  { icon: TrendingUp, title: "Rentabilité en temps réel", desc: "Visualisez la performance de chaque bien instantanément" },
  { icon: Bell, title: "Alertes intelligentes", desc: "Échéances, révisions, régularisations — ne ratez plus rien" },
  { icon: FileText, title: "Quittances automatiques", desc: "Générées en 1 clic, envoyées directement au locataire" },
]

const PETIT_PLANS = [
  {
    nom: "Solo",
    prix: 24,
    biens: "≤ 3",
    stockage: "3 Go",
    recommande: true,
    color: "#1A3D2E",
    onboarding: "Guides, tutoriels, FAQ intégrée",
    support: "Email 72h",
    modules: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts"],
  },
  {
    nom: "Pro",
    prix: 49,
    biens: "≤ 15",
    stockage: "15 Go",
    recommande: false,
    color: "#8FAF8A",
    onboarding: "3 visios d'onboarding personnalisées",
    support: "Email prioritaire 48h",
    modules: ["Tous les modules Solo", "Travaux & projets", "Partage partenaires"],
  },
]

const PETIT_FAQ = [
  { q: "Dois-je tout saisir moi-même ?", r: "Oui, mais c'est simple : l'interface vous guide étape par étape. Vous pouvez importer vos documents par glisser-déposer." },
  { q: "Et si j'ai besoin d'aide ?", r: "Le plan Solo inclut guides et FAQ. Le plan Pro offre 3 séances visio pour démarrer avec nous." },
  { q: "Je peux passer en Gestion Assistée plus tard ?", r: "Absolument. À partir de 3 biens, vous pouvez ajouter la Gestion Assistée à tout moment." },
]

const GRAND_AVANTAGES = [
  { icon: Users, title: "Assistante dédiée", desc: "Votre interlocutrice unique gère tout : quittances, relances, suivi" },
  { icon: Building2, title: "Multi-structures", desc: "SCI, SNC, nom propre — tout centralisé dans un seul tableau de bord" },
  { icon: TrendingUp, title: "Reporting investisseur", desc: "Synthèse trimestrielle, performance, alertes — format professionnel" },
  { icon: Shield, title: "Coffre-fort illimité", desc: "Numérisation + classement complet de tous vos documents" },
]

const GA_PALIERS = [
  { palier: "3-5 biens", prix: 89, service: "Quittances, alertes, encaissements, rappels, révisions IRL, MAJ coffre-fort" },
  { palier: "6-10 biens", prix: 129, service: "+ Multi-entités + reporting + dossier partenaire" },
  { palier: "11-20 biens", prix: 189, service: "+ Suivi projets + préparation bilans SCI" },
  { palier: "20+ biens", prix: 259, service: "Tout inclus + priorité support" },
]

const LUXE_SERVICES = [
  { icon: Crown, title: "Accompagnement à domicile", desc: "Déplacement chez vous pour paramétrage, formation et suivi" },
  { icon: Users, title: "Assistante personnelle dédiée", desc: "Gestion locative, admin, relances — un seul contact" },
  { icon: FileText, title: "Paramétrage complet du parc", desc: "Tous vos biens, SCI, copros — on fait tout pour vous" },
  { icon: Shield, title: "Coffre-fort numérique complet", desc: "Numérisation + classement de l'ensemble de vos documents" },
  { icon: Star, title: "OCR & extraction IA", desc: "Extraction automatique des données depuis contrats et factures" },
  { icon: TrendingUp, title: "Bilan patrimonial personnalisé", desc: "Diagnostic complet + recommandations avec CGP partenaire" },
  { icon: Briefcase, title: "Reporting trimestriel premium", desc: "Synthèse patrimoniale et performance — format investisseur" },
  { icon: Headphones, title: "Support prioritaire 24/48h", desc: "Ligne directe Sheana — résolution express" },
]

const LUXE_GOODIES = [
  { title: "Classeur cuir personnalisé", desc: "Reliure en cuir véritable gravée à votre nom, pour ranger vos documents clés" },
  { title: "Intercalaires premium", desc: "Séparateurs thématiques (Biens, SCI, Baux, Fiscalité) en papier épais" },
  { title: "Pochettes sécurisées", desc: "Pochettes en cuir assorties pour actes notariés et documents sensibles" },
  { title: "Carnet de suivi", desc: "Carnet relié cuir pour vos rendez-vous, notes et décisions patrimoniales" },
  { title: "Clé USB sécurisée", desc: "Clé USB chiffrée aux couleurs de votre patrimoine — sauvegarde hors ligne" },
  { title: "Coffret de bienvenue", desc: "Boîte cadeau premium avec stylo gravé, marque-pages et carte personnalisée" },
]

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function OffrePage() {
  const [activeDemo, setActiveDemo] = useState<DemoTabId>("freemium")
  const [mode, setMode] = useState<"petit" | "grand">("petit")

  const activeTabData = DEMO_TABS.find((t) => t.id === activeDemo)!
  const isPetit = mode === "petit"

  return (
    <div>
      <PageHeader
        icon={Gift}
        title="Produit & Offre"
        subtitle="Découvrez l'application, explorez les modules et choisissez votre formule"
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — DÉMO INTERACTIVE (le hook)
          ═══════════════════════════════════════════════════════ */}

      <SectionCard
        title="Découvrez l'application"
        subtitle="Aperçu interactif de Parkimmo pour chaque niveau d'abonnement"
        icon={Monitor}
        delay={0}
        className="mb-10"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Tab buttons */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {DEMO_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id)}
                className={`
                  px-5 py-2.5 rounded-lg font-semibold text-sm transition-all
                  ${activeDemo === tab.id
                    ? "bg-[#1A3D2E] text-white shadow-md"
                    : "bg-white text-[#6B7F72] border border-[#D4D9CD] hover:border-[#8FAF8A] hover:text-[#1A3D2E]"
                  }
                `}
              >
                {tab.label}
                <span className={`ml-2 text-xs ${activeDemo === tab.id ? "text-[#8FAF8A]" : "text-[#6B7F72]"}`}>
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>

          {/* Persona storytelling */}
          <div className="mb-5 px-4 py-3 bg-[#F7F5EF] border border-[#D4D9CD] rounded-lg text-sm text-[#6B7F72] italic leading-relaxed">
            {activeTabData.persona}
          </div>

          {/* Demo container */}
          <div style={{ minHeight: 600 }}>
            {activeDemo === "freemium" && <DemoFreemium />}
            {activeDemo === "essentiel" && <DemoEssentiel />}
            {activeDemo === "pro" && <DemoPro />}
            {activeDemo === "expert" && <DemoExpert />}
          </div>
        </div>
      </SectionCard>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — LE PRODUIT — 8 MODULES
          ═══════════════════════════════════════════════════════ */}

      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-800 mb-2">
          Le Produit — 8 Modules
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          38 modèles Prisma · 50+ routes API · 25+ pages/écrans
        </p>
      </ScrollReveal>

      {/* Product mockup */}
      <ScrollReveal>
        <div className="mb-8 rounded-xl overflow-hidden shadow-xl border border-slate-200">
          <div className="bg-slate-700 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-slate-600 rounded-md px-3 py-1 text-xs text-slate-300 text-center">
                app-parkimmo.vercel.app/direction
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1A3D2E]/5 via-white to-[#8FAF8A]/5 p-8 text-center">
            <p className="text-sm font-medium text-slate-400 mb-2">Interface PARKIMMO</p>
            <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Découvrez l&apos;interface</h3>
            <p className="text-sm text-slate-500">8 modules · Dashboard · Quittances PDF · Gestion locative complète</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Module grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {MODULES.map((mod, i) => {
          const planStyle = PLAN_COLORS[mod.plans] || PLAN_COLORS.Tous
          return (
            <ScrollReveal key={mod.name} delay={i * 80}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                    <mod.icon className="w-6 h-6 text-[#1A3D2E]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-base font-semibold text-slate-800">{mod.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${planStyle.bg} ${planStyle.text} border ${planStyle.border} transition-transform hover:scale-105`}>
                        {mod.plans}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{mod.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* User journey */}
      <ScrollReveal>
        <SectionCard title="Parcours utilisateur" subtitle="De l'inscription aux alertes automatiques">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 py-4">
            {JOURNEY.map((step) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-0 md:flex-col">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A3D2E]/10 to-[#8FAF8A]/10 flex items-center justify-center border-2 border-[#1A3D2E]/20">
                    <step.icon className="w-6 h-6 text-[#1A3D2E]" />
                  </div>
                </div>
                <p className="text-xs font-medium text-slate-600 mt-0 md:mt-2 text-center">{step.label}</p>
              </div>
            ))}
          </div>
          {/* Connecting line for desktop */}
          <div className="hidden md:block relative -mt-[52px] mb-8 mx-7">
            <div className="h-0.5 bg-gradient-to-r from-[#1A3D2E]/30 via-[#8FAF8A]/30 to-[#7c3aed]/30 mx-7" />
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* Conçu à partir du terrain */}
      <ScrollReveal>
        <SectionCard title="Conçu à partir du terrain" icon={Wrench} className="mt-8 mb-6">
          <p className="text-sm text-slate-500 mb-4">
            Parkimmo n&apos;est pas un produit imaginé dans un bureau. Chaque module est né d&apos;un besoin réel,
            observé pendant 2 ans d&apos;accompagnement d&apos;un marchand de biens avec 10+ biens actifs.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {TERRAIN_EXAMPLES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all">
                  <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed italic">&laquo; {item.terrain} &raquo;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 mb-12">
        <StatCard label="Modèles Prisma" value="38" icon={Database} color="primary" delay={0} />
        <StatCard label="Routes API" value="50+" icon={Server} color="accent" delay={100} />
        <StatCard label="Pages / écrans" value="25+" icon={Layout} color="slate" delay={200} />
      </div>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — TARIFS
          ═══════════════════════════════════════════════════════ */}

      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-800 mb-2">
          Tarifs & Formules
        </h2>
        <p className="text-sm text-slate-500 mb-2">
          SaaS seul ou SaaS + accompagnement administratif — choisissez selon votre profil
        </p>
      </ScrollReveal>

      {/* Toggle Petit / Grand patrimoine */}
      <div className="flex justify-center my-6">
        <div className="inline-flex bg-slate-100 rounded-xl p-1.5 shadow-inner">
          <button
            onClick={() => setMode("petit")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isPetit
                ? "bg-white text-[#1A3D2E] shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Home className="w-4 h-4" />
            Petit Patrimoine
          </button>
          <button
            onClick={() => setMode("grand")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              !isPetit
                ? "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-[#daa520] shadow-md"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Grand Patrimoine
          </button>
        </div>
      </div>

      {/* ─── VUE PETIT PATRIMOINE ─── */}
      {isPetit && (
        <div key="petit" className="page-enter">
          {/* Hero */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1A3D2E]/5 to-blue-50 rounded-2xl p-6 md:p-8 mb-8 border border-[#1A3D2E]/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#1A3D2E]/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#1A3D2E]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-800">1 à 5 biens</h2>
                  <p className="text-sm text-slate-500">Particuliers, premiers investisseurs</p>
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-2xl">
                Vous gérez vos biens seul, avec Excel ou sans outil.{" "}
                <span className="font-semibold text-[#1A3D2E]">PARKIMMO</span> centralise tout en un seul endroit : biens, baux, documents, rentabilité.{" "}
                <span className="font-semibold text-[#059669]">Autonomie totale, prix accessible.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Avantages */}
          <ScrollReveal delay={50}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {PETIT_AVANTAGES.map((av, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all text-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A3D2E]/10 flex items-center justify-center mx-auto mb-3">
                    <av.icon className="w-5 h-5 text-[#1A3D2E]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{av.title}</p>
                  <p className="text-xs text-slate-500">{av.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* SaaS seul — 4 plans */}
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-800 mb-1">
              Forfait SaaS — Autonomie totale
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Vous gérez votre patrimoine seul avec l&apos;outil. Sans engagement, résiliation à tout moment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {SAAS_PLANS.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 80}>
                <div
                  className={`relative rounded-xl p-5 transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                    plan.highlight
                      ? `border-2 ${plan.borderColor} ${plan.bgColor} shadow-md scale-[1.02]`
                      : `bg-white border border-slate-200`
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E67E22] text-white rounded-full px-4 py-1 text-xs font-bold whitespace-nowrap shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3" /> Recommandé
                    </span>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: plan.color }}
                    />
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-800">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400 font-normal ml-1">{plan.period}</span>
                  </div>

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

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      {plan.persona}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mention GA */}
          <ScrollReveal delay={150}>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#059669]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-[#059669]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">Votre patrimoine grandit ?</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    À partir de 3 biens, débloquez la{" "}
                    <span className="font-semibold text-[#059669]">Gestion Assistée</span>
                    {" "}: on s&apos;occupe des quittances, relances, révisions et encaissements pour vous. Dès{" "}
                    <span className="font-semibold">89€/mois</span>
                    {" "}— 2 à 5 fois moins cher qu&apos;une agence.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <SectionCard title="Questions fréquentes" icon={MessageSquare} delay={200} className="mb-8">
            <div className="space-y-4">
              {PETIT_FAQ.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.r}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ─── VUE GRAND PATRIMOINE ─── */}
      {!isPetit && (
        <div key="grand" className="page-enter">
          {/* Hero */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b]" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#daa520]/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#daa520]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white">6+ biens · Multi-structures</h2>
                  <p className="text-sm text-slate-400">Investisseurs, MDB, SCI, family offices</p>
                </div>
              </div>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Votre patrimoine mérite un accompagnement à la hauteur.{" "}
                <span className="font-semibold text-[#daa520]">PARKIMMO</span>
                {" "}vous offre une assistante dédiée, un tableau de bord multi-structures et des services premium — pour que vous vous concentriez sur vos acquisitions.
              </p>
            </div>
          </ScrollReveal>

          {/* Avantages */}
          <ScrollReveal delay={50}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {GRAND_AVANTAGES.map((av, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all text-center">
                  <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center mx-auto mb-3">
                    <av.icon className="w-5 h-5 text-[#7c3aed]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{av.title}</p>
                  <p className="text-xs text-slate-500">{av.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* SaaS — Plan Expert */}
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-800 mb-1">
              Forfait SaaS — Plan Expert
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Tous les modules, biens illimités, support prioritaire.
            </p>
          </ScrollReveal>

          <SectionCard title="Plan Expert — Tous les modules" icon={Sparkles} delay={100} className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#7c3aed]" />
                  <h3 className="font-display text-xl font-bold text-slate-800">Expert</h3>
                </div>
                <p className="text-3xl font-bold text-[#7c3aed]">
                  59€
                  <span className="text-sm text-slate-400 font-normal">/mois</span>
                </p>
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <p><span className="text-slate-400">Biens :</span> Illimité</p>
                  <p><span className="text-slate-400">Stockage :</span> 50 Go</p>
                  <p><span className="text-slate-400">Support :</span> Prioritaire 24h + visio</p>
                  <p><span className="text-slate-400">Onboarding :</span> Offert</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Tous les modules</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts",
                    "Travaux & projets", "Partage partenaires", "Multi-structures", "Pipeline acquisition",
                    "Scénarios", "Export comptable", "API",
                  ].map((m) => (
                    <span key={m} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 text-[10px] text-[#7c3aed] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* SaaS + Accompagnement */}
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-800 mb-1">
              SaaS + Accompagnement administratif
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Déléguez toute l&apos;administration locative. 2 à 5 fois moins cher qu&apos;une agence, et vous gardez la main sur tout.
            </p>
          </ScrollReveal>

          <SectionCard title="Gestion Assistée — À partir de 3 biens" icon={Handshake} delay={150} className="mb-6">
            <div className="grid md:grid-cols-2 gap-3">
              {GA_PALIERS.map((g, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100 hover:border-[#1A3D2E]/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#1A3D2E] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{g.prix}€</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{g.palier}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{g.service}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-36 shrink-0">Agence classique</span>
                <div className="flex-1 bg-red-100 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full w-full flex items-center justify-end pr-2">
                    <span className="text-[10px] font-bold text-white">~450€/mois</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-500 w-36 shrink-0">PARKIMMO</span>
                <div className="flex-1 bg-green-50 rounded-full h-4">
                  <div className="bg-[#059669] h-4 rounded-full flex items-center justify-end pr-2" style={{ width: "15%" }}>
                    <span className="text-[10px] font-bold text-white whitespace-nowrap ml-2">89€/mois</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Forfait LUXE */}
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden mb-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b]" />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✦</span>
                <h2 className="font-display text-2xl font-bold text-[#daa520]">Forfait LUXE</h2>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                Accompagnement premium à domicile pour les patrimoines d&apos;exception.
              </p>

              {/* Pricing */}
              <div className="flex flex-wrap items-end gap-6 mb-6">
                <div>
                  <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Setup initial</p>
                  <p className="text-3xl font-bold text-white">Sur devis</p>
                  <p className="text-xs text-slate-400 mt-1">À partir de 1 500€ — selon taille du parc</p>
                </div>
                <div>
                  <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Accompagnement mensuel</p>
                  <p className="text-3xl font-bold text-white">299€<span className="text-sm text-slate-400 font-normal">/mois</span></p>
                </div>
              </div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {LUXE_SERVICES.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-[#daa520]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{s.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cibles */}
              <div className="flex flex-wrap gap-2 text-xs">
                {["Marchands de biens", "Chefs d'entreprise", "Multi-propriétaires 10+", "Family offices"].map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#daa520]/20 text-[#daa520] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Goodies LUXE */}
          <SectionCard title="Kit de Bienvenue Premium" icon={Gift} delay={250} className="mb-8">
            <p className="text-sm text-slate-500 mb-4">
              Chaque client LUXE reçoit un kit de bienvenue personnalisé — cuir véritable, gravé à son nom, aux couleurs de son patrimoine.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {LUXE_GOODIES.map((g, i) => (
                <div key={i} className="bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-200/50 p-4 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#daa520]/10 flex items-center justify-center mb-3">
                    <Gift className="w-4 h-4 text-[#daa520]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{g.title}</p>
                  <p className="text-xs text-slate-500">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Tous les éléments sont personnalisables : couleurs, logo, gravure. Fabrication artisanale française.
              </p>
            </div>
          </SectionCard>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — VUE INVESTISSEUR (toujours visible)
          ═══════════════════════════════════════════════════════ */}

      <ScrollReveal>
        <div className="mt-4 mb-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Vue Investisseur
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Accompagnement — 3 niveaux */}
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

                {level.pricing && (
                  <p className="text-2xl font-bold mb-4" style={{ color: level.color }}>
                    {level.pricing}
                    <span className="text-sm text-slate-400 font-normal ml-1">inclus</span>
                  </p>
                )}

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

                <ul className="space-y-2 flex-1">
                  {level.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: level.color }} />
                      {detail}
                    </li>
                  ))}
                </ul>

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

      {/* Parcours de monétisation */}
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

      {/* Modèle économique — Vue investisseur */}
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
          <StatCard label="ARPU max" value="350€+" color="accent" delay={250} />
          <StatCard label="LTV max" value="4 200€+" color="primary" delay={300} />
          <StatCard label="LTV/CAC max" value=">50x" color="success" trend="up" delay={350} />
          <StatCard label="Churn min" value="2%" color="warning" trend="down" delay={400} />
        </div>
      </SectionCard>

      {/* Comparaison agence classique */}
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
                <td className="py-3 text-center text-slate-500 text-xs">8 000€ × 7%</td>
                <td className="py-3 text-center text-slate-500 text-xs">Expert 59€ + 8 000€ × 4%</td>
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

      {/* Carte G */}
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
