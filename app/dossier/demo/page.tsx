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
  { id: "freemium", label: "Freemium", sub: "Gratuit" },
  { id: "essentiel", label: "Essentiel", sub: "19€/mois" },
  { id: "pro", label: "Pro", sub: "39€/mois" },
  { id: "expert", label: "Expert", sub: "59€/mois" },
] as const

type TabId = (typeof TABS)[number]["id"]

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<TabId>("freemium")

  return (
    <div className="max-w-[1400px] mx-auto">
      <PageHeader
        icon={Monitor}
        title="Démo produit"
        subtitle="Aperçu interactif de l'application Parkimmo pour chaque niveau d'abonnement"
      />

      <ScrollReveal>
        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
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
