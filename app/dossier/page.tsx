"use client"

import Link from "next/link"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const SPACE_CARDS = [
  {
    icon: "💼",
    title: "INVESTISSEURS",
    description: "Accédez au dossier stratégique complet : marché, simulation financière, pricing, juridique.",
    href: "/login?role=investisseur",
    buttonLabel: "Accéder au dossier",
    borderColor: "border-[#E67E22]",
    hoverBg: "hover:bg-[#E67E22]/5",
    btnColor: "bg-[#1A5276] hover:bg-[#1A5276]/90",
  },
  {
    icon: "🤝",
    title: "PARTENAIRES",
    description: "Comptables, notaires, CGP — découvrez comment connecter vos clients à la plateforme.",
    href: "/login?role=partenaire",
    buttonLabel: "Accéder à l'espace",
    borderColor: "border-[#1A5276]",
    hoverBg: "hover:bg-[#1A5276]/5",
    btnColor: "bg-[#1A5276] hover:bg-[#1A5276]/90",
  },
  {
    icon: "👩‍💼",
    title: "LA FONDATRICE",
    description: "Sheana Krief — 10 ans d'immobilier, de droit et d'entrepreneuriat au service des propriétaires.",
    href: "/dossier/fondatrice",
    buttonLabel: "Découvrir son parcours",
    borderColor: "border-[#7c3aed]",
    hoverBg: "hover:bg-[#7c3aed]/5",
    btnColor: "bg-[#7c3aed] hover:bg-[#7c3aed]/90",
  },
]

export default function DossierHomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Hero */}
      <ScrollReveal>
        <div className="text-center mb-12 pt-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A5276] mb-3">
            Mon Patrimoine
          </h1>
          <p className="text-lg text-slate-500 font-medium mb-6">K PAR K CONSEILS SAS</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              70% des propriétaires bailleurs gèrent seuls, sans outil adapté.
              Nous avons construit la solution : un logiciel de gestion patrimoniale immobilière
              complet — du premier achat à la revente — avec un accompagnement humain à chaque étape.
            </p>
          </div>
          <div className="mt-6 h-0.5 w-32 mx-auto bg-gradient-to-r from-[#1A5276] to-[#E67E22] rounded" />
        </div>
      </ScrollReveal>

      {/* Enquête — mise en avant */}
      <ScrollReveal delay={100}>
        <div className="max-w-4xl mx-auto w-full mb-8 px-4">
          <Link href="/enquete" className="block">
            <div className="bg-gradient-to-r from-[#16a34a]/5 to-[#16a34a]/10 rounded-xl border-2 border-[#16a34a] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="text-5xl">🏠</div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display text-xl font-bold text-slate-800 mb-2">DÉCOUVREZ LA SOLUTION</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bientôt disponible — Curieux ? Répondez à notre enquête pour nous aider à construire l&apos;outil idéal.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#16a34a] hover:bg-[#16a34a]/90 transition-all whitespace-nowrap">
                  Répondre à notre enquête →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </ScrollReveal>

      {/* 3 espaces */}
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto w-full mb-16 px-4">
        {SPACE_CARDS.map((card, i) => (
          <ScrollReveal key={card.title} delay={200 + i * 100}>
            <div className={`bg-white rounded-xl border-2 ${card.borderColor} shadow-sm ${card.hoverBg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 h-full flex flex-col`}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="font-display text-lg font-bold text-slate-800 mb-2">{card.title}</h2>
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{card.description}</p>
              <Link
                href={card.href}
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all ${card.btnColor}`}
              >
                {card.buttonLabel}
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Pied de page */}
      <div className="mt-auto pb-8 text-center space-y-3">
        <Link
          href="/login?role=admin"
          className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          Accès administration
        </Link>
        <p className="text-xs text-slate-300">K PAR K CONSEILS SAS — Lyon</p>
      </div>
    </div>
  )
}
