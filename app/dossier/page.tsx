"use client"

import Link from "next/link"
import { TrendingUp, Users, UserCheck, Wallet, CheckCircle2, Circle, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import StatCard from "@/components/dossier/StatCard"
import SectionCard from "@/components/dossier/SectionCard"
import { OBJECTIFS, INVESTISSEMENT } from "@/data/projet"

const MILESTONES = [
  { label: "R&D produit (2 ans)", done: true },
  { label: "Client pilote actif (19 biens)", done: true },
  { label: "Structure juridique (SAS + avocat)", done: true },
  { label: "Lancement freemium (Avril 2026)", done: false },
  { label: "Campagne acquisition", done: false },
  { label: "Premier charge d'affaires", done: false },
] as const

export default function DossierHomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Hero / Brand Header */}
      <ScrollReveal>
        <div className="text-center px-6 pt-10 pb-6">
          <div className="w-16 h-16 rounded-[28%] bg-[#1A3D2E] flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <rect x="6" y="6" width="28" height="28" rx="5" fill="#E8E4D4"/>
              <rect x="38" y="6" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.5"/>
              <rect x="58" y="6" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.3"/>
              <rect x="6" y="38" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.4"/>
              <rect x="26" y="38" width="16" height="16" rx="4" fill="#8FAF8A"/>
              <rect x="46" y="26" width="28" height="28" rx="5" fill="#E8E4D4"/>
              <rect x="6" y="58" width="28" height="16" rx="4" fill="#E8E4D4" opacity="0.2"/>
              <rect x="38" y="58" width="16" height="16" rx="4" fill="#E8E4D4" opacity="0.35"/>
              <rect x="58" y="58" width="16" height="16" rx="4" fill="#8FAF8A" opacity="0.4"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}>
            <span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span>
          </h1>
          <p className="text-sm text-slate-400 mb-2">Dossier Strategique</p>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Plateforme SaaS de gestion patrimoniale immobiliere pour proprietaires multi-biens
          </p>
        </div>
      </ScrollReveal>

      {/* KPI Cards */}
      <div className="px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="MRR cible M12"
            value={`${OBJECTIFS.an1.mrrM12.toLocaleString("fr-FR")} €`}
            subtitle="Revenu mensuel recurrent"
            icon={TrendingUp}
            color="primary"
            delay={0}
          />
          <StatCard
            label="Clients payants M12"
            value={String(OBJECTIFS.an1.clientsPayants)}
            subtitle="SaaS + accompagnement"
            icon={UserCheck}
            color="success"
            delay={100}
          />
          <StatCard
            label="Inscrits freemium M12"
            value={OBJECTIFS.an1.inscritsFree.toLocaleString("fr-FR")}
            subtitle="Base utilisateurs gratuits"
            icon={Users}
            color="accent"
            delay={200}
          />
          <StatCard
            label="Investissement recherche"
            value={`${(INVESTISSEMENT.montantMin / 1000).toFixed(0)}-${(INVESTISSEMENT.montantMax / 1000).toFixed(0)}k €`}
            subtitle="Leve de fonds visee"
            icon={Wallet}
            color="premium"
            delay={300}
          />
        </div>

        {/* Milestones + CTA Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SectionCard title="Avancement" icon={CheckCircle2} delay={400}>
              <div className="grid sm:grid-cols-2 gap-3">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {m.done ? (
                      <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${m.done ? "text-slate-700 font-medium" : "text-slate-400"}`}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* CTA Investissement */}
          <ScrollReveal delay={500}>
            <div className="bg-[#1A3D2E] rounded-xl p-6 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Rejoindre l&apos;aventure</h3>
                <p className="text-sm text-white/70 mb-6">
                  Decouvrez notre proposition d&apos;investissement, la repartition des fonds et le retour attendu.
                </p>
              </div>
              <Link
                href="/dossier/investissement"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-semibold bg-white text-[#1A3D2E] hover:bg-white/90 transition-all"
              >
                Proposition investisseur
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Navigation links */}
        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link href="/enquete" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#059669]/90 transition-all">
              Participer a l&apos;enquete
            </Link>
            <Link href="/login?role=investisseur" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-[#1A3D2E] border border-[#1A3D2E]/20 hover:bg-[#1A3D2E]/5 transition-all">
              Espace Investisseur
            </Link>
            <Link href="/login?role=partenaire" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-[#1A3D2E] border border-[#1A3D2E]/20 hover:bg-[#1A3D2E]/5 transition-all">
              Espace Partenaire
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-auto pb-8 text-center space-y-3">
        <Link href="/login?role=admin" className="text-xs text-slate-300 hover:text-slate-500 transition-colors">
          Administration
        </Link>
        <p className="text-xs text-slate-300">K PAR K CONSEILS SAS</p>
      </div>
    </div>
  )
}
