"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"

const DECISIONS = [
  {
    id: 1,
    question: "Intégrer les baux commerciaux ?",
    context: "Position actuelle : interface simplifiée possible avec renvoi vers gestionnaire partenaire pour les cas complexes. À valider avec la carte G.",
    color: "#1A5276",
  },
  {
    id: 2,
    question: "Pricing définitif validé par le marché ?",
    context: "Nouveau pricing en 3 plans : Solo 24€ / Pro 49€ / Expert 79€ + GA par paliers. À tester avec les 3 pilotes.",
    color: "#E67E22",
  },
  {
    id: 3,
    question: "Canal d’acquisition prioritaire ?",
    context: "SEO simulateur gratuit vs communautés investisseurs (Reddit, forums). Budget limité, besoin de traction rapide.",
    color: "#16a34a",
  },
  {
    id: 4,
    question: "Jusqu’où aller sur la gestion locative sans la loi Hoguet ?",
    context: "Risque juridique : la gestion pour compte de tiers nécessite la carte G. Délimiter précisément le périmètre SaaS vs service.",
    color: "#7c3aed",
  },
  {
    id: 5,
    question: "Audit sécurité et code : quand et par qui ?",
    context: "Nécessaire avant mise en production avec données réelles. Budget à prévoir. Besoin d’un développeur senior externe.",
    color: "#f59e0b",
  },
]

function DecisionCard({ decision }: { decision: typeof DECISIONS[0] }) {
  const [value, setValue] = useState("")
  const [saved, setSaved] = useState(false)
  const [showInput, setShowInput] = useState(false)

  const handleSave = () => {
    if (!value.trim()) return
    setSaved(true)
  }

  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 p-4 ${
        saved ? "border-[#16a34a] bg-[#16a34a]/[0.02]" : "border-slate-200 hover:border-[#1A5276] hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: decision.color }}
        >
          {decision.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-700 mb-1">{decision.question}</p>
          <p className="text-xs text-slate-400 leading-relaxed mb-2">{decision.context}</p>
          {!saved && (
            <button
              onClick={() => setShowInput(!showInput)}
              className="text-xs text-[#1A5276] font-medium flex items-center gap-1 hover:underline"
            >
              {showInput ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showInput ? "Masquer" : "Noter ma décision"}
            </button>
          )}
          {showInput && !saved && (
            <div className="mt-2">
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:border-[#1A5276] focus:outline-none resize-none transition-colors"
                rows={2}
                placeholder="Votre décision..."
              />
              <button
                onClick={handleSave}
                className="mt-1.5 px-3 py-1.5 bg-[#1A5276] text-white text-xs font-semibold rounded-lg hover:bg-[#15425e] transition-colors"
              >
                Enregistrer
              </button>
            </div>
          )}
          {saved && (
            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#16a34a]">
              <Check className="w-3.5 h-3.5" />
              Décision notée
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DecisionsPage() {
  return (
    <div>
      <PageHeader
        icon="❓"
        title="Décisions en suspens"
        subtitle="Questions stratégiques à trancher"
      />

      <SectionCard delay={0}>
        <p className="text-xs text-slate-400 mb-4">Cliquez sur chaque carte pour noter votre décision</p>
        <div className="grid md:grid-cols-2 gap-3">
          {DECISIONS.map((d) => (
            <DecisionCard key={d.id} decision={d} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
