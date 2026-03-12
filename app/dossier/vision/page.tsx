"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import TimelineItem from "@/components/dossier/TimelineItem"
import ScrollReveal from "@/components/dossier/ScrollReveal"

export default function VisionPage() {
  const pillars = [
    {
      number: "01",
      icon: "🧭",
      title: "Un parcours intuitif",
      bandColor: "bg-[#1A3D2E]",
      items: [
        "Le logiciel suit le cycle de vie du bien",
        "Acquisition → financement → travaux → location → gestion → revente",
        "Chaque étape est guidée, pas un tableur vide",
        "Ergonomie pensée pour le propriétaire, pas le comptable",
      ],
    },
    {
      number: "02",
      icon: "\uD83E\uDD1D",
      title: "Un accompagnement humain systématique",
      bandColor: "bg-[#059669]",
      items: [
        "Onboarding personnalisé avec chargé d’affaires dédié",
        "Support illimité pendant 1 mois",
        "Ce n’est pas une option, c’est inclus",
        "Pas un mur SaaS : une relation de confiance",
      ],
    },
    {
      number: "03",
      icon: "\uD83C\uDF10",
      title: "Un écosystème connecté",
      bandColor: "bg-[#8FAF8A]",
      items: [
        "Comptables, notaires, courtiers, CGP accèdent aux données clients",
        "Le propriétaire reste maître de ses données",
        "Les professionnels travaillent mieux, plus vite",
        "Effet réseau : le pro recommande → acquisition gratuite",
      ],
    },
  ]

  const timeline = [
    {
      period: "3 semaines",
      title: "2 clients pilotes déployés. Landing page + simulateur SEO en ligne.",
      color: "green" as const,
      isActive: true,
    },
    {
      period: "3 mois",
      title: "8 clients. Test gros patrimoine (50+ biens). Recrue en POE. Coffre-fort V1.",
      color: "blue" as const,
    },
    {
      period: "12 mois",
      title: "58 clients. MRR 4 255€. Équipe 2 pers. Espace partenaires.",
      color: "orange" as const,
    },
    {
      period: "3-5 ans",
      title: "Référence nationale en gestion patrimoniale immobilière. 8-12 personnes. CA récurrent 300-500K€/an. Possibilité de connecter des partenaires sur un modèle freemium / apport d’affaires. Potentiel d’intérêt pour des acteurs déjà implantés (proptech, gestionnaires de patrimoine).",
      color: "purple" as const,
      isLast: true,
    },
  ]

  return (
    <div>
      <PageHeader
        icon={"\uD83C\uDFAF"}
        title="Vision & Positionnement"
        subtitle="La plateforme de gestion patrimoniale immobilière complète"
      />

      {/* Bloc d'accroche problème → solution */}
      <ScrollReveal delay={100}>
        <div className="bg-gradient-to-br from-[#1A3D2E]/5 to-[#8FAF8A]/5 rounded-xl mb-8 overflow-hidden">
          {/* Le problème */}
          <div className="border-l-4 border-[#dc2626] p-6 pb-4">
            <p className="text-xs font-bold text-[#dc2626] uppercase tracking-wider mb-2">Le problème</p>
            <p className="text-lg leading-relaxed text-slate-700">
              <strong className="text-[#dc2626]">76%</strong> des Français trouvent l&apos;investissement locatif
              &laquo; trop compliqué &raquo;. Les propriétaires gèrent avec Excel, perdent leurs documents,
              et ne connaissent pas leur rentabilité réelle.
            </p>
          </div>
          {/* Notre réponse */}
          <div className="border-l-4 border-[#059669] p-6 pt-4">
            <p className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Notre réponse</p>
            <p className="text-lg leading-relaxed text-slate-700">
              <strong className="text-[#1A3D2E]">Parkimmo</strong> suit le cycle de vie complet du bien immobilier
              — de l&apos;acquisition à la revente. Un logiciel intuitif + un accompagnement humain systématique.
              <strong className="text-[#1A3D2E]"> Pas une option : un engagement.</strong>
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <h2 className="font-display text-2xl font-bold text-slate-800 mb-5">Les 3 piliers</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {pillars.map((pillar, index) => (
          <ScrollReveal key={pillar.title} delay={200 + index * 100}>
            <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className={`h-1 ${pillar.bandColor} rounded-t-xl`} />
              <span className="text-8xl font-display text-slate-100 absolute top-2 right-4 select-none pointer-events-none">
                {pillar.number}
              </span>
              <div className="p-6 relative">
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="font-display text-lg font-semibold text-slate-800 mb-3">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-[#059669] mt-0.5">{"●"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <SectionCard title="Timeline Vision" icon={"\uD83D\uDCC5"} delay={500}>
        <div className="space-y-0">
          {timeline.map((step, index) => (
            <TimelineItem
              key={step.period}
              period={step.period}
              title={step.title}
              color={step.color}
              isActive={step.isActive ?? false}
              isLast={step.isLast ?? false}
              delay={600 + index * 150}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
