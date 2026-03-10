"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import TimelineItem from "@/components/dossier/TimelineItem"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const PHASES = [
  {
    period: "S1-S3",
    title: "Test pilotes",
    description: "2 clients (petit 4 biens + moyen 18 biens). Process documentés. Landing page + simulateur SEO.",
    kpi: "2 clients satisfaits. Site indexé.",
    color: "green",
    isActive: true,
  },
  {
    period: "M1-M2",
    title: "Validation",
    description: "20 interviews. 3-5 premiers clients. LinkedIn 3 posts/sem. Démarche carte T+G CCI.",
    kpi: "5 clients. Carte G déposée.",
    color: "green",
  },
  {
    period: "M3",
    title: "Gros client + POE",
    description: "Test 50+ biens. Recrutement POE. Coffre-fort V1 en dev.",
    kpi: "8 clients. Recrue en formation.",
    color: "blue",
  },
  {
    period: "M5-M6",
    title: "Accélération",
    description: "Embauche CDD. Scale GA. Google Ads + influenceurs. Rémunération 800€ net.",
    kpi: "20 clients. MRR > 1 000€.",
    color: "orange",
  },
  {
    period: "M9",
    title: "Écosystème",
    description: "Espace partenaire V1. OCR + IA. 1er comptable connecté.",
    kpi: "30+ clients. MRR > 2 500€.",
    color: "orange",
  },
  {
    period: "M12",
    title: "Machine en marche",
    description: "58 clients. Programme affiliation. Préparer recrue #2.",
    kpi: "MRR 4 255€. Tréso 37 421€.",
    color: "purple",
  },
  {
    period: "M12-M18",
    title: "Expansion",
    description: "Mode Expert MDB. Recrue #2. PWA.",
    kpi: "CA > 100K€. 100+ clients. Équipe 3 pers.",
    color: "purple",
  },
]

export default function DeploiementPage() {
  const currentPhase = 1
  const totalPhases = PHASES.length

  return (
    <div>
      <PageHeader
        icon="📅"
        title="Plan de Déploiement"
        subtitle="De la validation à l'expansion — 18 mois"
      />

      {/* Progress bar */}
      <ScrollReveal>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">
              Phase {currentPhase}/{totalPhases} — Test pilotes
            </span>
            <span className="text-xs text-slate-400">{Math.round((currentPhase / totalPhases) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div className="flex h-full rounded-full overflow-hidden" style={{ width: "100%" }}>
              <div className="bg-[#16a34a] h-full" style={{ width: `${(3 / totalPhases) * 100}%` }} />
              <div className="bg-[#1A5276] h-full" style={{ width: `${(1 / totalPhases) * 100}%` }} />
              <div className="bg-[#E67E22] h-full" style={{ width: `${(2 / totalPhases) * 100}%` }} />
              <div className="bg-[#7c3aed] h-full" style={{ width: `${(1 / totalPhases) * 100}%` }} />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#16a34a] inline-block" /> Lancement</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#1A5276] inline-block" /> Croissance</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#E67E22] inline-block" /> Accélération</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#7c3aed] inline-block" /> Expansion</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <SectionCard title="Phases de déploiement" icon="🗺️" delay={100}>
        <div className="space-y-0">
          {PHASES.map((p, i) => (
            <TimelineItem
              key={i}
              period={p.period}
              title={p.title}
              description={p.description}
              kpi={`KPI : ${p.kpi}`}
              isActive={p.isActive || false}
              color={p.color}
              isLast={i === PHASES.length - 1}
              delay={i * 60}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
