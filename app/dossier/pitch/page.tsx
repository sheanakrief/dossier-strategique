"use client"

import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import CopyButton from "@/components/dossier/CopyButton"
import HighlightNumber from "@/components/dossier/HighlightNumber"
import { Clock, Building2, User, Mail, MapPin, Wallet, TrendingUp, PiggyBank } from "lucide-react"

const PITCHS = [
  {
    titre: "Pitch Investisseur",
    duree: "1 min",
    icon: "💼",
    headerStyle: "bg-gradient-to-r from-amber-50 to-amber-100/50 border-l-4 border-amber-500",
    contenu: `3,5 millions de propriétaires bailleurs en France gèrent 7,2 millions de logements. 62% gèrent seuls, avec Excel ou sans outil. Les logiciels existants sont des tableurs améliorés — aucun ne combine coffre-fort documentaire, vision patrimoniale et accompagnement humain.

K PAR K Conseils comble ce vide avec Mon Patrimoine : un plateforme de gestion patrimoniale qui centralise les documents, calcule la rentabilité en temps réel, et connecte le propriétaire à ses professionnels.

Notre modèle à 4 couches génère un MRR de 4 000€/mois au M12 avec une marge de 44%. La fondatrice cumule 10 ans d'expertise terrain. Le produit est construit et déployé. Les premiers clients pilotes démarrent cette semaine.`,
    renderParagraph: (para: string, i: number) => {
      if (i === 0) {
        return (
          <p key={i} className="text-sm text-slate-700 leading-relaxed mb-3">
            <HighlightNumber value="3,5 millions" color="primary" /> de propriétaires bailleurs en France gèrent <HighlightNumber value="7,2 millions" color="primary" /> de logements. <HighlightNumber value="62%" color="accent" /> gèrent seuls, avec Excel ou sans outil. Les logiciels existants sont des tableurs améliorés — aucun ne combine coffre-fort documentaire, vision patrimoniale et accompagnement humain.
          </p>
        )
      }
      if (i === 1) {
        return (
          <p key={i} className="text-sm text-slate-700 leading-relaxed mb-3">
            K PAR K Conseils comble ce vide avec Mon Patrimoine : un plateforme de gestion patrimoniale qui centralise les documents, calcule la rentabilité en temps réel, et connecte le propriétaire à ses professionnels.
          </p>
        )
      }
      return (
        <p key={i} className="text-sm text-slate-700 leading-relaxed">
          Notre modèle à 4 couches génère un MRR de <HighlightNumber value="4 000€/mois" color="success" /> au M12 avec une marge de <HighlightNumber value="44%" color="accent" />. La fondatrice cumule 10 ans d'expertise terrain. Le produit est construit et déployé. Les premiers clients pilotes démarrent cette semaine.
        </p>
      )
    },
  },
  {
    titre: "Pitch Partenaire — Comptable/Notaire",
    duree: "30 sec",
    icon: "🤝",
    headerStyle: "bg-gradient-to-r from-blue-50 to-blue-100/50 border-l-4 border-blue-500",
    contenu: `Vos clients investisseurs vous envoient leurs documents par email, un par un, avec des mois de retard.

Mon Patrimoine leur donne un coffre-fort documentaire sécurisé où tout est centralisé. Vous accédez aux documents de vos clients en 1 clic, par lien sécurisé.

C'est gratuit pour vous. En échange, vous recommandez l'outil à vos clients qui en ont besoin.`,
    renderParagraph: null,
  },
  {
    titre: "Pitch Client propriétaire",
    duree: "30 sec",
    icon: "🏠",
    headerStyle: "bg-gradient-to-r from-green-50 to-green-100/50 border-l-4 border-green-500",
    contenu: `Vous gérez vos biens sur Excel, vous perdez du temps à chercher vos documents, et vous ne savez pas vraiment si vos investissements sont rentables.

Mon Patrimoine rassemble tout en un seul endroit : vos biens, vos baux, vos documents, votre rentabilité.

Et si vous voulez déléguer la gestion administrative, on le fait pour vous à partir de 39€/mois. C'est 2 à 5 fois moins cher qu'une agence, et vous gardez la main sur tout.`,
    renderParagraph: null,
  },
]

const SAS_INFO = [
  { icon: Building2, label: "Société", value: "K PAR K CONSEILS — SAS" },
  { icon: User, label: "Présidente", value: "Sheana Krief" },
  { icon: Mail, label: "Email", value: "sheana@kparkconseils.fr" },
  { icon: MapPin, label: "Localisation", value: "Lyon / Villeurbanne" },
  { icon: Wallet, label: "Trésorerie", value: "8 000€ (affectés au projet)" },
  { icon: TrendingUp, label: "CA existant", value: "26 600€/an (PASCAL 1 800€ + LTOA 1 000€)" },
  { icon: PiggyBank, label: "Épargne personnelle", value: "5 000€" },
]

export default function PitchPage() {
  return (
    <div>
      <PageHeader
        icon="🎤"
        title="Pitchs Commerciaux"
        subtitle="3 pitchs adaptés à chaque audience"
      />

      <div className="space-y-6">
        {PITCHS.map((pitch, idx) => (
          <ScrollReveal key={pitch.titre} delay={idx * 100}>
            <div className="card-print bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className={`${pitch.headerStyle} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{pitch.icon}</span>
                    <h3 className="font-display text-xl font-semibold text-slate-800">{pitch.titre}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-600">
                      <Clock className="w-3.5 h-3.5" />
                      {pitch.duree}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-end mb-3">
                  <CopyButton text={pitch.contenu} />
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                  {pitch.renderParagraph
                    ? pitch.contenu.split("\n\n").map((para, i) => pitch.renderParagraph!(para, i))
                    : pitch.contenu.split("\n\n").map((para, i) => (
                        <p key={i} className="text-sm text-slate-700 leading-relaxed mb-3 last:mb-0">
                          {para}
                        </p>
                      ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Informations SAS */}
      <ScrollReveal delay={300}>
        <SectionCard title="Informations SAS" icon="🏢" className="mt-8">
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SAS_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-[#1A3D2E]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-slate-800 truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
      </ScrollReveal>
    </div>
  )
}
