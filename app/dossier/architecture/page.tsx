"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import TimelineItem from "@/components/dossier/TimelineItem"

const STACK = [
  { couche: "Frontend", tech: "Next.js 16 (App Router) + React 19 + TypeScript", justif: "SSR/SSG, SEO-friendly, Edge", icon: "⚛️" },
  { couche: "ORM", tech: "Prisma + 38 modèles", justif: "Type-safe, migrations versionnées", icon: "🗄️" },
  { couche: "Base de données", tech: "Turso (LibSQL/SQLite distribué)", justif: "Edge, datacenter Paris \"cdg\", < 10ms", icon: "💾" },
  { couche: "Stockage docs", tech: "Scaleway Object Storage (Paris, S3-compatible)", justif: "Français, pas de CLOUD Act", icon: "📦" },
  { couche: "Hébergement", tech: "Vercel Edge Network", justif: "Auto-deploy GitHub, HTTPS, CDN", icon: "🌍" },
  { couche: "UI/CSS", tech: "Tailwind CSS + shadcn/ui", justif: "Design system cohérent", icon: "🎨" },
  { couche: "IA (V1.5)", tech: "Claude API (Anthropic) + OCR", justif: "Extraction docs, classification", icon: "🤖" },
]

const MODELE_DONNEES = [
  { module: "Mon Patrimoine", entites: "Bien, Entite, Adresse, ParkingLot, CaveLot", relations: "Bien → Entite (N:1)" },
  { module: "Locatif", entites: "Bail, Locataire, Quittance, RevisionLoyer, EtatDesLieux", relations: "Bail → Bien (N:1), Bail → Locataire (N:N)" },
  { module: "Finance", entites: "Encaissement, Pret, EcheancePret, Transaction, AssuranceEmprunteur", relations: "Pret → Bien (N:1)" },
  { module: "Charges", entites: "Charge, Assurance, Sinistre, TaxeFonciere", relations: "Charge → Bien (N:1)" },
  { module: "Travaux", entites: "Projet, Intervention, DevisTravaux, PosteDepense", relations: "Projet → Bien (N:1)" },
  { module: "Contacts", entites: "Contact, BienContact", relations: "Contact → Bien (N:N)" },
  { module: "Alertes", entites: "Evenement", relations: "Evenement → Bien (N:1)" },
]

const ROADMAP = [
  { phase: "MVP+ (actuel)", desc: "8 modules, 38 modèles, dashboard, quittances PDF", color: "blue" as const },
  { phase: "V1 (M3-M6)", desc: "Coffre-fort documentaire, upload/tags, partage lien sécurisé", color: "orange" as const },
  { phase: "V1.5 (M6-M9)", desc: "Espace Partenaire (RBAC), OCR+IA extraction, onboarding guidé", color: "green" as const },
  { phase: "V2 (M9-M18)", desc: "Mode Expert MDB, scénarios TRI, multi-structures, API, PWA", color: "purple" as const },
]

export default function ArchitecturePage() {
  return (
    <div>
      <PageHeader
        icon="🔧"
        title="Architecture Technique"
        subtitle="Stack moderne, hébergée en France, < 10ms latence"
      />

      {/* Stack technique */}
      <SectionCard title="Stack technique" icon="🧱" delay={0} className="mb-6">
        <div className="grid gap-3">
          {STACK.map((row, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex items-start gap-4 bg-slate-50 rounded-lg p-4 hover:bg-slate-100/80 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  {row.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-semibold text-[#1A5276]">{row.couche}</h4>
                  </div>
                  <p className="text-sm font-mono text-slate-700">{row.tech}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{row.justif}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* Modèle de données */}
      <SectionCard title="Modèle de données" icon="🗃️" delay={100} className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tl-lg">Module</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium">Entités principales</th>
                <th className="text-left py-3 px-3 text-slate-500 font-medium rounded-tr-lg">Relations clés</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MODELE_DONNEES.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5 px-3 font-medium text-[#1A5276]">{row.module}</td>
                  <td className="py-2.5 px-3 text-slate-600 font-mono text-xs">{row.entites}</td>
                  <td className="py-2.5 px-3 text-slate-500 text-xs">{row.relations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Roadmap */}
      <SectionCard title="Roadmap produit" icon="🗺️" delay={200}>
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
