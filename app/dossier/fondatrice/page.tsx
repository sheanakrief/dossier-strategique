"use client"

import {
  Scale, Building2, Shield, Briefcase, Heart, Lightbulb,
  Users, BookOpen, Rocket, Star, ChevronRight, Award,
} from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import TimelineItem from "@/components/dossier/TimelineItem"
import ScrollReveal from "@/components/dossier/ScrollReveal"

/* ─── TIMELINE ─── */
const TIMELINE = [
  {
    period: "2012-2017",
    title: "Licence + Master Droit Privé — Lyon 3",
    description: "Rigueur analytique, méthodologie juridique, bases solides en droit des biens et droit privé.",
    color: "blue",
  },
  {
    period: "2016-2018",
    title: "Secrétaire puis assistante juridique — Cabinets d'avocats",
    description: "Découverte de l'immobilier sous toutes ses coutures : copropriété, transactions, locatif, construction. Immersion dans la mécanique des dossiers et le contentieux propriétaires.",
    color: "blue",
  },
  {
    period: "2019-2020",
    title: "École des Avocats Rhône-Alpes",
    description: "Spécialité droit des biens. Expertise juridique baux, copropriété, construction.",
    color: "blue",
  },
  {
    period: "2019-2020",
    title: "Stage élève-avocat — Lamy Expertise (PPI)",
    description: "6 mois aux côtés d'experts techniques immobiliers. Valeurs vénales et locatives, pathologies bâtiment, sinistres. Rapport professionnel sur les estimations immobilières au-delà des transactions classiques : valorisation patrimoniale, litiges fiscaux, conflits entre associés.",
    color: "blue",
  },
  {
    period: "2020-2021",
    title: "Avocate — Cabinets Tudela, Fuhrmann, Gelly",
    description: "Rédaction de baux, conseil propriétaires, plaidoirie. Spécialisation contentieux construction : suivis de chantier et assurance décennale. Passion pour la partie technique et contentieuse de l'immobilier.",
    color: "green",
  },
  {
    period: "2022-2023",
    title: "Directrice juridique — Cabinet de courtage en assurances",
    description: "Rencontre déterminante avec une entrepreneuse extraordinaire. Conformité, process, PNO/GLI/DO. Apprentissage de la structuration, de la prise de confiance et de l'exigence entrepreneuriale.",
    color: "green",
  },
  {
    period: "2023-2024",
    title: "Associée — Cabinet de courtage (phase développement)",
    description: "Pilotage de croissance, entrepreneuriat, risque réel. 4 ans dans l'univers de l'assurance — un environnement tout aussi réglementaire, impliqué dans la vie des biens et des propriétaires.",
    color: "orange",
  },
  {
    period: "Mi-2024",
    title: "Création de K PAR K CONSEILS (ex Cas par Cas Conseil)",
    description: "Développement d'une clientèle propre : accompagnement d'un dirigeant sur plusieurs structures (marchand de biens, 10+ biens actifs). Bras droit, assistante de direction, exploitante. 2 ans de R&D terrain pour le projet Mon Patrimoine.",
    color: "orange",
  },
  {
    period: "Mars 2026 →",
    title: "Fondatrice — Mon Patrimoine",
    description: "La convergence de tout. Le cockpit numérique du propriétaire immobilier. Un projet mûri par 10 ans d'immersion dans le juridique, l'assurance et l'immobilier.",
    color: "accent",
    isActive: true,
  },
]

/* ─── COMPETENCE TAGS ─── */
const TAGS = [
  { label: "Master Droit Privé Lyon 3", color: "primary" as const },
  { label: "École des Avocats", color: "accent" as const },
  { label: "Lamy Expertise (PPI)", color: "slate" as const },
  { label: "Avocate Droit Immo", color: "primary" as const },
  { label: "Contentieux construction", color: "primary" as const },
  { label: "Assurance décennale", color: "accent" as const },
  { label: "DAF Courtage Assurances", color: "accent" as const },
  { label: "Associée cabinet courtage", color: "slate" as const },
  { label: "Accompagnement MDB", color: "primary" as const },
  { label: "Carte G CCI (en cours)", color: "accent" as const },
]

const TAG_COLORS = {
  primary: "bg-[#1A5276]/10 text-[#1A5276] border-[#1A5276]/20",
  accent: "bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]/20",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
}

/* ─── KEY INSIGHTS ─── */
const CONVICTIONS = [
  {
    icon: Building2,
    title: "Le propriétaire est le rouage de tout",
    text: "Le marché immobilier commence par les propriétaires. Pas par les professionnels. Se placer côté propriétaire est un choix raisonné : c'est là que tout s'articule.",
    color: "#1A5276",
  },
  {
    icon: Scale,
    title: "La phobie administrative est réelle",
    text: "Des Français perdus face à la lourdeur administrative, au flux d'informations et à la multiplicité d'acteurs. Personne ne fera ce travail de tri et d'organisation pour eux.",
    color: "#E67E22",
  },
  {
    icon: Shield,
    title: "Organisons dès la première étape",
    text: "Un bien reste dans un patrimoine des mois, des années, parfois toute une vie. Commençons par le plus simple : savoir où on est assuré, où on paye ses charges, où sont ses documents.",
    color: "#16a34a",
  },
  {
    icon: Users,
    title: "Les pros ont besoin de données propres",
    text: "Comptables, notaires, CGP — tous ces professionnels interviennent à chaque stade du cycle de vie. Donnons-leur accès à des informations claires, synthétiques et précises.",
    color: "#7c3aed",
  },
]

export default function FondatricePage() {
  return (
    <div>
      <PageHeader
        icon="👩‍💼"
        title="La Fondatrice"
        subtitle="Sheana Krief — 10 ans dans les entrailles du droit immobilier"
      />

      {/* ─── BIO BLOCK ─── */}
      <ScrollReveal>
        <div className="bg-gradient-to-br from-[#1A5276]/5 to-[#E67E22]/5 border-l-4 border-[#1A5276] rounded-xl p-6 mb-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-[#1A5276]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-[#1A5276]">SK</span>
            </div>
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-3">
                10 ans dans les entrailles du droit immobilier, de l&apos;expertise technique,
                de l&apos;assurance et de l&apos;entrepreneuriat. Sheana n&apos;a pas imaginé Mon Patrimoine —
                elle en avait <strong className="text-[#1A5276]">besoin</strong>.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Seule personne en France qui comprend à la fois le bail, le sinistre,
                la valeur locative, la rentabilité nette, le pipeline d&apos;acquisition,
                la conformité assurantielle — et qui a décidé d&apos;en faire un logiciel.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Competence badges */}
      <ScrollReveal delay={100}>
        <div className="flex flex-wrap gap-2 mb-8">
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border ${TAG_COLORS[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* ─── LE FIL ROUGE : PARCOURS NARRATIF ─── */}
      <SectionCard title="Le fil rouge : de l'immobilier au logiciel" icon="🧵" delay={150} className="mb-8">
        <div className="space-y-5">
          {/* Chapitre 1 — Découverte */}
          <ScrollReveal delay={100}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#1A5276]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-4.5 h-4.5 text-[#1A5276]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A5276] mb-1">Une passion précoce pour l&apos;immobilier</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  L&apos;immobilier, Sheana l&apos;a découvert très tôt, au travers de stages et d&apos;expériences
                  en tant que secrétaire puis assistante juridique dans des cabinets d&apos;avocats. Elle a vu
                  cet univers sous toutes ses coutures : <strong>copropriété, transactions, locatif, construction</strong>.
                  C&apos;est la partie contentieuse — suivis de chantier et assurance décennale — qui l&apos;a véritablement passionnée.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Chapitre 2 — Le constat */}
          <ScrollReveal delay={150}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#E67E22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Lightbulb className="w-4.5 h-4.5 text-[#E67E22]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#E67E22] mb-1">Le constat qui change tout</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Un marché très concurrentiel, ultra-réglementaire, avec une multiplicité d&apos;acteurs
                  à chaque stade du cycle de vie du patrimoine : conseils juridiques, fiscaux, comptables,
                  experts techniques. Et au milieu de tout ça, des <strong>propriétaires qui n&apos;ont d&apos;autre
                  choix que de faire confiance à leurs interlocuteurs</strong> — souvent sans comprendre
                  les rouages du système.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Chapitre 3 — Méthodologie */}
          <ScrollReveal delay={200}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#16a34a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Scale className="w-4.5 h-4.5 text-[#16a34a]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#16a34a] mb-1">L&apos;héritage du métier d&apos;avocat</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Le parcours chez les avocats a forgé une <strong>méthodologie, une rigueur d&apos;analyse et
                  une capacité à synthétiser</strong> les problèmes juridiques les plus techniques. Le stage
                  chez Lamy Expertise (PPI) — 6 mois aux côtés d&apos;experts techniques immobiliers — a apporté
                  la compréhension des valorisations patrimoniales au-delà des simples transactions :
                  litiges fiscaux, conflits entre associés, valeurs vénales et locatives.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Chapitre 4 — Mentorat */}
          <ScrollReveal delay={250}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#7c3aed]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="w-4.5 h-4.5 text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#7c3aed] mb-1">La rencontre qui accélère tout</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Une entrepreneuse extraordinaire qui a appris à Sheana à <strong>voir plus loin, structurer,
                  prendre confiance et relever des challenges</strong>. D&apos;abord directrice juridique, puis associée
                  dans le courtage en assurances — 4 ans dans un univers tout aussi réglementaire :
                  conformité, process, acteurs multiples, et une proximité directe avec les propriétaires
                  via les PNO, GLI et assurances de prêt. La promesse entre elles : toujours se pousser
                  à aller vers ses aspirations profondes d&apos;entrepreneuse.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Chapitre 5 — K PAR K */}
          <ScrollReveal delay={300}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#E67E22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="w-4.5 h-4.5 text-[#E67E22]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#E67E22] mb-1">2 ans de R&D terrain</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mi-2024 : création de K PAR K CONSEILS. Accompagnement d&apos;un dirigeant marchand de biens
                  sur plusieurs structures — une dizaine de biens actifs en location, en travaux, avec des
                  recherches d&apos;acquisitions poussées. Bras droit, assistante de direction, exploitante.
                  <strong> Deux ans à réorganiser, optimiser, rentabiliser</strong> — et à comprendre dans la chair
                  ce dont les propriétaires ont besoin.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Chapitre 6 — La vision */}
          <ScrollReveal delay={350}>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#1A5276]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Rocket className="w-4.5 h-4.5 text-[#1A5276]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A5276] mb-1">L&apos;évidence de Mon Patrimoine</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  En ce début 2026, tout converge. Le juridique, l&apos;assurance, l&apos;expertise technique,
                  l&apos;accompagnement de terrain — et l&apos;accès à des outils d&apos;intelligence artificielle
                  extraordinaires. <strong>Un projet mûri, ancré dans une réflexion poussée</strong>,
                  avec une volonté — à sa façon — de révolutionner le marché de l&apos;immobilier
                  et de se sentir utile à toutes ces professions en souffrance face à la lourdeur
                  administrative.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionCard>

      {/* ─── CONVICTIONS ─── */}
      <h2 className="font-display text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
        Convictions fondatrices
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {CONVICTIONS.map((c, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}15` }}>
                  <c.icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{c.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.text}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ─── CITATION ─── */}
      <ScrollReveal delay={200}>
        <div className="bg-gradient-to-r from-[#1A5276] to-[#16213e] rounded-xl p-6 mb-8 text-white">
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-[#E67E22] flex-shrink-0 mt-1" />
            <div>
              <p className="text-base leading-relaxed italic mb-3">
                &laquo; Un bien immobilier reste dans un patrimoine plusieurs mois au minimum, voire plusieurs
                années, parfois toute une vie. Organisons-nous dès cette première étape : la gestion
                administrative du bien. Que le propriétaire sache où il est assuré, où il paye son
                électricité, où il paye ses charges. Personne ne fera ce travail pour lui. &raquo;
              </p>
              <p className="text-sm text-slate-300">— Sheana Krief, fondatrice</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ─── WHAT MAKES HER UNIQUE ─── */}
      <SectionCard title="Ce que Sheana apporte au projet" icon="💎" delay={300} className="mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: Scale,
              title: "Vision juridique 360°",
              items: ["Droit des biens, baux, copropriété", "Contentieux construction & décennale", "Conformité réglementaire assurances"],
              color: "#1A5276",
            },
            {
              icon: Award,
              title: "Expertise terrain",
              items: ["6 mois chez Lamy Expertise (PPI)", "2 ans aux côtés d'un MDB actif", "Valeurs vénales, locatives, sinistres"],
              color: "#E67E22",
            },
            {
              icon: Rocket,
              title: "ADN entrepreneurial",
              items: ["Associée en cabinet de courtage", "Création de K PAR K CONSEILS mi-2024", "Structuration, exigence, pilotage"],
              color: "#16a34a",
            },
          ].map((block, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-slate-50 rounded-xl p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <block.icon className="w-5 h-5" style={{ color: block.color }} />
                  <p className="text-sm font-semibold text-slate-800">{block.title}</p>
                </div>
                <ul className="space-y-1.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                      <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: block.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* ─── TIMELINE DÉTAILLÉE ─── */}
      <SectionCard title="Parcours professionnel" icon="📋" delay={400}>
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <TimelineItem
              key={i}
              period={item.period}
              title={item.title}
              description={item.description}
              color={item.color}
              isActive={item.isActive || false}
              isLast={i === TIMELINE.length - 1}
              delay={i * 50}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
