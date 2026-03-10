"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import TimelineItem from "@/components/dossier/TimelineItem"
import ScrollReveal from "@/components/dossier/ScrollReveal"

export default function VisionPage() {
  const pillars = [
    {
      number: "01",
      icon: "🔒",
      title: "Coffre-fort documentaire",
      bandColor: "bg-[#1A5276]",
      items: [
        "Source de vérité unique",
        "Docs classés par bien et cycle de vie",
        "Partage sécurisé par lien temporisé",
        "OCR + IA extraction",
        "Hébergé en France (Scaleway Paris)",
      ],
    },
    {
      number: "02",
      icon: "📊",
      title: "Vision patrimoniale",
      bandColor: "bg-[#16a34a]",
      items: [
        "Rendement brut/net, cash-flow, effort d'épargne",
        "Vision consolidée par entité",
        "Scénarios revente vs location",
        "Proposition de valeur n°1",
      ],
    },
    {
      number: "03",
      icon: "🤝",
      title: "Écosystème partenaires",
      bandColor: "bg-[#E67E22]",
      items: [
        "Comptable, notaire, courtier connectés",
        "Espace pro sécurisé",
        "Effet réseau : le pro recommande",
        "Acquisition gratuite + rétention",
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
      title: "Référence nationale cockpit patrimonial. 8-12 personnes. CA récurrent 300-500K€/an.",
      color: "purple" as const,
      isLast: true,
    },
  ]

  return (
    <div>
      <PageHeader
        icon="🎯"
        title="Vision & Positionnement"
        subtitle="Le cockpit administratif du propriétaire immobilier"
      />

      <ScrollReveal delay={100}>
        <blockquote className="bg-gradient-to-br from-[#1A5276]/5 to-[#E67E22]/5 border-l-4 border-[#E67E22] text-xl leading-relaxed italic p-8 rounded-xl mb-8 text-slate-700">
          Tous vos documents, vos échéances et votre rentabilité au même endroit. Un outil + un accompagnement humain, sans remplacer vos professionnels : on les connecte.
        </blockquote>
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
                      <span className="text-[#16a34a] mt-0.5">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <SectionCard title="Timeline Vision" icon="🗓️" delay={500}>
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
