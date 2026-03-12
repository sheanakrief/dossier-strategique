"use client"

import { useState } from "react"
import { Monitor } from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import DemoFreemium from "./DemoFreemium"
import DemoEssentiel from "./DemoEssentiel"
import DemoPro from "./DemoPro"
import DemoExpert from "./DemoExpert"
import "./demo.css"

const TABS = [
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

type TabId = (typeof TABS)[number]["id"]

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<TabId>("freemium")

  const activeTabData = TABS.find((t) => t.id === activeTab)!

  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        icon={Monitor}
        title="Démo produit"
        subtitle="Aperçu interactif de l'application Parkimmo pour chaque niveau d'abonnement"
      />

      <ScrollReveal>
        {/* Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5 py-2.5 rounded-lg font-semibold text-sm transition-all
                ${activeTab === tab.id
                  ? "bg-[#1A3D2E] text-white shadow-md"
                  : "bg-white text-[#6B7F72] border border-[#D4D9CD] hover:border-[#8FAF8A] hover:text-[#1A3D2E]"
                }
              `}
            >
              {tab.label}
              <span className={`ml-2 text-xs ${activeTab === tab.id ? "text-[#8FAF8A]" : "text-[#6B7F72]"}`}>
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
          {activeTab === "freemium" && <DemoFreemium />}
          {activeTab === "essentiel" && <DemoEssentiel />}
          {activeTab === "pro" && <DemoPro />}
          {activeTab === "expert" && <DemoExpert />}
        </div>
      </ScrollReveal>
    </div>
  )
}
