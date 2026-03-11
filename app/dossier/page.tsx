"use client"

import Link from "next/link"
import ScrollReveal from "@/components/dossier/ScrollReveal"

export default function DossierHomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <ScrollReveal>
        <div className="text-center px-6">
          <div className="w-16 h-16 rounded-[28%] bg-[#1A3D2E] flex items-center justify-center mx-auto mb-8">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}>
            <span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span>
          </h1>
          <p className="text-sm text-slate-400 mb-10">Dossier Stratégique</p>
          <Link href="/enquete" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#059669]/90 transition-all mb-4">
            Participer à l&apos;enquête
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link href="/login?role=investisseur" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white bg-[#1A3D2E] hover:bg-[#1A3D2E]/90 transition-all">
              Espace Investisseur
            </Link>
            <Link href="/login?role=partenaire" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-[#1A3D2E] border border-[#1A3D2E]/20 hover:bg-[#1A3D2E]/5 transition-all">
              Espace Partenaire
            </Link>
          </div>
          <Link href="/dossier/fondatrice" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
            La Fondatrice
          </Link>
        </div>
      </ScrollReveal>
      <div className="mt-auto pb-8 text-center space-y-3">
        <Link href="/login?role=admin" className="text-xs text-slate-300 hover:text-slate-500 transition-colors">
          Administration
        </Link>
        <p className="text-xs text-slate-300">K PAR K CONSEILS SAS</p>
      </div>
    </div>
  )
}
