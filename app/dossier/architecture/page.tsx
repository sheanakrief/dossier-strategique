"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import TimelineItem from "@/components/dossier/TimelineItem"
import {
  Wrench, Layers, Database, HardDrive, Archive, Globe, Palette, Bot,
  Map, Monitor, Compass, Shield, Zap, Server, Lock, Eye,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ─── STACK SIMPLIFIE ─── */
const STACK: { couche: string; tech: string; explication: string; icon: LucideIcon }[] = [
  {
    couche: "Interface utilisateur",
    tech: "Next.js 16 + React 19 + TypeScript",
    explication: "Ce que vous voyez a l'ecran — les pages se chargent instantanement, meme sur mobile",
    icon: Monitor,
  },
  {
    couche: "Structure des donnees",
    tech: "Prisma (38 modeles)",
    explication: "Organise toutes vos donnees (biens, locataires, charges...) de facon securisee et sans erreur",
    icon: Database,
  },
  {
    couche: "Base de donnees",
    tech: "Turso (datacenter Paris)",
    explication: "Stocke toutes les informations a Paris — temps de reponse inferieur a 10 millisecondes",
    icon: HardDrive,
  },
  {
    couche: "Stockage documents",
    tech: "Scaleway (Paris, compatible S3)",
    explication: "Vos documents (baux, factures, photos) sont stockes en France, proteges par le droit francais",
    icon: Archive,
  },
  {
    couche: "Hebergement web",
    tech: "Vercel Edge Network",
    explication: "Le site est accessible partout dans le monde, avec deploiement automatique a chaque mise a jour",
    icon: Globe,
  },
  {
    couche: "Design",
    tech: "Tailwind CSS + shadcn/ui",
    explication: "Un systeme de design coherent qui garantit une interface professionnelle et homogene",
    icon: Palette,
  },
  {
    couche: "Intelligence artificielle",
    tech: "Claude API (Anthropic) + OCR",
    explication: "Lecture automatique de vos documents : l'IA extrait les infos des baux, factures, avis d'imposition",
    icon: Bot,
  },
]

/* ─── MODULES DONNEES ─── */
const MODELE_DONNEES = [
  { module: "Biens immobiliers", description: "Biens, adresses, parkings, caves, entites juridiques", lien: "Chaque bien appartient a une entite (SCI, nom propre...)" },
  { module: "Location", description: "Baux, locataires, quittances, revisions de loyer, etats des lieux", lien: "Chaque bail est lie a un bien et a un ou plusieurs locataires" },
  { module: "Finances", description: "Encaissements, prets, echeances, assurances emprunteur", lien: "Chaque pret est lie a un bien" },
  { module: "Charges", description: "Charges courantes, assurances, sinistres, taxes foncieres", lien: "Chaque charge est rattachee a un bien" },
  { module: "Travaux", description: "Projets, interventions, devis, postes de depense", lien: "Chaque projet de travaux concerne un bien" },
  { module: "Contacts", description: "Artisans, notaires, comptables, gestionnaires", lien: "Un contact peut etre lie a plusieurs biens" },
  { module: "Alertes", description: "Rappels, echeances, evenements importants", lien: "Chaque alerte est rattachee a un bien" },
]

/* ─── ROADMAP ─── */
const ROADMAP = [
  { phase: "Aujourd'hui (MVP+)", desc: "8 modules fonctionnels, tableau de bord complet, generation de quittances PDF, gestion des baux", color: "blue" as const },
  { phase: "Mois 3-6 (V1)", desc: "Coffre-fort numerique pour vos documents, classement automatique, partage securise avec vos partenaires", color: "orange" as const },
  { phase: "Mois 6-9 (V1.5)", desc: "Espace dedie pour vos comptables et notaires, lecture IA de vos documents, accompagnement a la prise en main", color: "green" as const },
  { phase: "Mois 9-18 (V2)", desc: "Mode expert pour gros patrimoines, simulations de rentabilite avancees, application mobile", color: "purple" as const },
]

/* ─── PILIERS ─── */
const PILLARS = [
  {
    number: "01",
    icon: Eye,
    title: "L'interface",
    bandColor: "bg-[#1A3D2E]",
    subtitle: "Ce que l'utilisateur voit et utilise",
    items: [
      "Pages rapides qui s'affichent en moins d'une seconde",
      "Design adapte a tous les ecrans (ordinateur, tablette, mobile)",
      "Navigation intuitive organisee par modules metier",
      "Export PDF professionnel en un clic",
    ],
  },
  {
    number: "02",
    icon: Shield,
    title: "Le cerveau",
    bandColor: "bg-[#059669]",
    subtitle: "Comment vos donnees sont stockees et protegees",
    items: [
      "38 types de donnees structures (biens, locataires, charges...)",
      "Base de donnees hebergee a Paris (< 10ms de reponse)",
      "Documents stockes en France, sans acces etranger possible",
      "Sauvegardes automatiques et chiffrement des donnees",
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "L'intelligence",
    bandColor: "bg-[#8FAF8A]",
    subtitle: "L'IA qui vous fait gagner du temps",
    items: [
      "Lecture automatique de vos documents (baux, factures, avis)",
      "Classification intelligente des pieces justificatives",
      "Extraction des montants, dates et informations cles",
      "Prevue pour la V1.5 — en cours de developpement",
    ],
  },
]

export default function ArchitecturePage() {
  return (
    <div>
      <PageHeader
        icon={Wrench}
        title="Architecture Technique"
        subtitle="Une technologie moderne, 100% francaise, pensee pour la securite et la vitesse"
      />

      {/* Hero — Message cle */}
      <ScrollReveal delay={50}>
        <div className="bg-gradient-to-br from-[#1A3D2E]/5 to-[#8FAF8A]/5 rounded-xl mb-8 overflow-hidden">
          <div className="border-l-4 border-[#1A3D2E] p-6">
            <p className="text-xs font-bold text-[#1A3D2E] uppercase tracking-wider mb-2">En resume</p>
            <p className="text-lg leading-relaxed text-slate-700">
              Parkimmo est construit avec des <strong className="text-[#1A3D2E]">technologies de pointe</strong>,
              les memes que celles utilisees par les grandes startups tech.
              Toutes vos donnees sont <strong className="text-[#1A3D2E]">hebergees en France</strong>,
              protegees par le droit francais, et accessibles en{" "}
              <strong className="text-[#1A3D2E]">moins de 10 millisecondes</strong>.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Temps de reponse" value="< 10ms" subtitle="Ultra-rapide, depuis Paris" icon={Zap} color="primary" delay={0} />
        <StatCard label="Types de donnees" value="38" subtitle="Structure complete et securisee" icon={Database} color="success" delay={100} />
        <StatCard label="Modules metier" value="8" subtitle="Biens, baux, finances, travaux..." icon={Layers} color="accent" delay={200} />
        <StatCard label="Hebergement" value="France" subtitle="Paris — droit francais, pas de CLOUD Act" icon={Lock} color="premium" delay={300} />
      </div>

      {/* 3 Piliers — Comment ca marche */}
      <ScrollReveal delay={150}>
        <h2 className="font-display text-2xl font-bold text-slate-800 mb-5">Comment ca marche</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {PILLARS.map((pillar, index) => (
          <ScrollReveal key={pillar.title} delay={200 + index * 100}>
            <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className={`h-1 ${pillar.bandColor} rounded-t-xl`} />
              <span className="text-8xl font-display text-slate-100 absolute top-2 right-4 select-none pointer-events-none">
                {pillar.number}
              </span>
              <div className="p-6 relative">
                <pillar.icon className="w-8 h-8 text-[#1A3D2E] mb-3" />
                <h3 className="font-display text-lg font-semibold text-slate-800 mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-400 mb-3">{pillar.subtitle}</p>
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

      {/* Stack technique detaille */}
      <SectionCard title="Les briques technologiques" icon={Layers} delay={0} className="mb-6">
        <p className="text-sm text-slate-500 mb-4">
          Chaque couche a un role precis. Ensemble, elles forment une application rapide, fiable et securisee.
        </p>
        <div className="grid gap-3">
          {STACK.map((row, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-start gap-4 bg-slate-50 rounded-lg p-4 hover:bg-slate-100/80 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  <row.icon className="w-5 h-5 text-[#1A3D2E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-semibold text-[#1A3D2E]">{row.couche}</h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#1A3D2E]/5 text-[#1A3D2E]/60 rounded">
                      {row.tech}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{row.explication}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Organisation des donnees */}
      <SectionCard title="Organisation des donnees" icon={Database} delay={100} className="mb-6">
        <p className="text-sm text-slate-500 mb-4">
          Parkimmo organise vos informations en 7 grands domaines. Tout est relie pour que vous n{"'"}ayez jamais a ressaisir une information.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tl-lg">Domaine</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium">Ce qu{"'"}on gere</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tr-lg">Comment c{"'"}est relie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MODELE_DONNEES.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5 px-3 font-medium text-[#1A3D2E]">{row.module}</td>
                  <td className="py-2.5 px-3 text-slate-600 text-xs">{row.description}</td>
                  <td className="py-2.5 px-3 text-slate-500 text-xs">{row.lien}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Roadmap */}
      <SectionCard title="Feuille de route produit" icon={Map} delay={200}>
        <p className="text-sm text-slate-500 mb-4">
          Les grandes etapes de developpement de Parkimmo, du produit actuel jusqu{"'"}a la version complete.
        </p>
        <div className="space-y-0">
          {ROADMAP.map((item, i) => (
            <TimelineItem
              key={item.phase}
              period={item.phase}
              title={item.desc}
              color={item.color}
              isActive={i === 0}
              isLast={i === ROADMAP.length - 1}
              delay={i * 80}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
