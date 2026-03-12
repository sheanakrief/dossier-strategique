"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import { Mic, AlertTriangle, Lightbulb, Layers, Globe, Swords, CircleDollarSign, Megaphone, BarChart3, Users, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Slide {
  number: number
  title: string
  icon: LucideIcon
  body: string
  accent: string
  bgTint: string
  numberBg: string
  numberText: string
}

const SLIDES: Slide[] = [
  {
    number: 1,
    title: "Le probleme",
    icon: AlertTriangle,
    body: "3,5 millions de menages bailleurs en France. 70% gerent sur Excel ou papier. 76% trouvent ca trop complique. Aucun outil ne couvre le cycle de vie complet (acquisition \u2192 location \u2192 revente) avec accompagnement humain.",
    accent: "#E67E22",
    bgTint: "bg-gradient-to-br from-orange-50/80 to-amber-50/40",
    numberBg: "bg-[#E67E22]",
    numberText: "text-white",
  },
  {
    number: 2,
    title: "La solution",
    icon: Lightbulb,
    body: "Parkimmo : la plateforme de pilotage patrimonial du proprietaire. SaaS intuitif couvrant tout le cycle de vie + Gestion Assistee avec charge d\u2019affaires dedie. Pas une agence, pas un tableur \u2014 l\u2019interface entre les deux.",
    accent: "#1A3D2E",
    bgTint: "bg-gradient-to-br from-emerald-50/80 to-green-50/40",
    numberBg: "bg-[#1A3D2E]",
    numberText: "text-white",
  },
  {
    number: 3,
    title: "Le produit",
    icon: Layers,
    body: "8 modules, 38 modeles de donnees, 50+ API. Construit en 2 ans sur le terrain, pas dans un incubateur. Valide avec un client pilote a 19 biens en multi-structures.",
    accent: "#1A5276",
    bgTint: "bg-gradient-to-br from-blue-50/80 to-sky-50/40",
    numberBg: "bg-[#1A5276]",
    numberText: "text-white",
  },
  {
    number: 4,
    title: "Le marche",
    icon: Globe,
    body: "TAM ~420M\u20AC. SAM ~60M\u20AC. SOM ~6-12M\u20AC. Marche logiciel gestion immo FR: 718M\u20AC, +5%/an. 64% deployements en SaaS.",
    accent: "#8FAF8A",
    bgTint: "bg-gradient-to-br from-green-50/80 to-lime-50/40",
    numberBg: "bg-[#8FAF8A]",
    numberText: "text-[#1A3D2E]",
  },
  {
    number: 5,
    title: "La concurrence",
    icon: Swords,
    body: "Score Parkimmo: 10/12 criteres. Meilleur concurrent: 4/12. Aucun acteur ne combine logiciel + accompagnement humain + cycle de vie complet + hebergement France.",
    accent: "#E67E22",
    bgTint: "bg-gradient-to-br from-amber-50/80 to-orange-50/40",
    numberBg: "bg-[#E67E22]",
    numberText: "text-white",
  },
  {
    number: 6,
    title: "Le business model",
    icon: CircleDollarSign,
    body: "SaaS freemium: 0\u20AC (decouverte) \u2192 19-79\u20AC/mois (payant). Gestion Assistee: +forfait/bien ou +% loyers. ARPU moyen: 38\u20AC SaaS + 75\u20AC GA. LTV/CAC >10\u00D7.",
    accent: "#1A3D2E",
    bgTint: "bg-gradient-to-br from-emerald-50/80 to-teal-50/40",
    numberBg: "bg-[#1A3D2E]",
    numberText: "text-white",
  },
  {
    number: 7,
    title: "La strategie d\u2019acquisition",
    icon: Megaphone,
    body: "6 piliers: SEO (fichier Excel lead magnet), YouTube (expertise avocate \u00D7 tech), Influenceurs immo/tech, Google Ads cible, Reseau partenaires pros, Courrier direct SCIs. Objectif An1: 1800 inscrits, 81 payants.",
    accent: "#1A5276",
    bgTint: "bg-gradient-to-br from-sky-50/80 to-blue-50/40",
    numberBg: "bg-[#1A5276]",
    numberText: "text-white",
  },
  {
    number: 8,
    title: "Les chiffres",
    icon: BarChart3,
    body: "An1: CA ~17 500\u20AC (phase investissement). An2: CA ~85 000\u20AC. MRR M12: 4 128\u20AC. MRR M24: ~9 500\u20AC. Break-even: M15-M16.",
    accent: "#8FAF8A",
    bgTint: "bg-gradient-to-br from-lime-50/80 to-green-50/40",
    numberBg: "bg-[#8FAF8A]",
    numberText: "text-[#1A3D2E]",
  },
  {
    number: 9,
    title: "L\u2019equipe",
    icon: Users,
    body: "Sheana Krief \u2014 10 ans dans l\u2019immobilier sous 5 angles: juridique, expertise technique, barreau, assurance, entrepreneuriat. La seule personne qui comprend le bail, le sinistre, la valeur locative, la rentabilite nette, et le pipeline d\u2019acquisition \u2014 et qui en a fait un logiciel.",
    accent: "#E67E22",
    bgTint: "bg-gradient-to-br from-orange-50/80 to-yellow-50/40",
    numberBg: "bg-[#E67E22]",
    numberText: "text-white",
  },
  {
    number: 10,
    title: "La demande",
    icon: Rocket,
    body: "30 000-50 000\u20AC pour financer l\u2019acquisition (60%), les operations GA (25%), et l\u2019infrastructure (15%). Le produit existe. Le marche est la. L\u2019investissement accelere, il ne cree pas.",
    accent: "#1A3D2E",
    bgTint: "bg-gradient-to-br from-emerald-50/80 to-green-50/40",
    numberBg: "bg-[#1A3D2E]",
    numberText: "text-white",
  },
]

function SlideCard({ slide, index }: { slide: Slide; index: number }) {
  const Icon = slide.icon

  return (
    <ScrollReveal delay={index * 80}>
      <div
        className={`card-print group relative rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden ${slide.bgTint}`}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: slide.accent }}
        />

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-5">
            {/* Large slide number */}
            <div className="flex-shrink-0">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${slide.numberBg} ${slide.numberText} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
              >
                <span className="font-display text-3xl sm:text-4xl font-bold leading-none">
                  {slide.number < 10 ? `0${slide.number}` : slide.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Title row */}
              <div className="flex items-center gap-2.5 mb-3">
                <Icon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: slide.accent }}
                />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800">
                  {slide.title}
                </h3>
              </div>

              {/* Body text */}
              <p className="text-[15px] leading-relaxed text-slate-700">
                {slide.body}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom subtle line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </ScrollReveal>
  )
}

export default function PitchPage() {
  return (
    <div>
      <PageHeader
        icon={Mic}
        title="Pitch Investisseur"
        subtitle="10 slides pour convaincre"
      />

      {/* Intro context */}
      <ScrollReveal delay={0}>
        <div className="mb-8 rounded-xl bg-gradient-to-r from-[#1A3D2E] to-[#1A5276] p-6 sm:p-8 text-white shadow-lg">
          <p className="text-lg sm:text-xl font-display font-semibold mb-2">
            Parkimmo — Pitch Deck
          </p>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Presentation synthetique du projet a destination des investisseurs.
            Chaque slide condense un axe strategique cle du dossier.
          </p>
        </div>
      </ScrollReveal>

      {/* Slide grid */}
      <div className="space-y-5">
        {SLIDES.map((slide, idx) => (
          <SlideCard key={slide.number} slide={slide} index={idx} />
        ))}
      </div>

      {/* Closing CTA */}
      <ScrollReveal delay={200}>
        <div className="mt-10 rounded-2xl border-2 border-dashed border-[#E67E22]/40 bg-gradient-to-br from-amber-50/60 to-orange-50/30 p-8 text-center">
          <p className="font-display text-2xl font-bold text-slate-800 mb-2">
            Pret a en discuter ?
          </p>
          <p className="text-slate-600 text-base mb-4">
            Contact direct : sheana@kparkconseils.fr
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1A3D2E] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md">
            <Mic className="w-4 h-4" />
            Demander un pitch en visio
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
