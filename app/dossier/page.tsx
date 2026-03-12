"use client"

import Link from "next/link"
import { ArrowRight, Briefcase, Handshake, Code, Shield } from "lucide-react"
import ScrollReveal from "@/components/dossier/ScrollReveal"

export default function DossierHomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Hero / Brand Header */}
      <ScrollReveal>
        <div className="text-center px-6 pt-16 pb-10">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}>
            <span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span>
          </h1>
        </div>
      </ScrollReveal>

      {/* Enquête CTA */}
      <div className="px-6 max-w-md mx-auto w-full mb-12">
        <ScrollReveal delay={100}>
          <Link
            href="/enquete"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#059669] hover:bg-[#059669]/90 transition-all shadow-md"
          >
            Participer à l&apos;enquête
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Espaces sécurisés */}
      <div className="px-6 max-w-2xl mx-auto w-full mb-12">
        <ScrollReveal delay={200}>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Espaces sécurisés
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-4">
          <ScrollReveal delay={250}>
            <Link
              href="/login?role=investisseur"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-[#1A3D2E]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1A5276]/10 flex items-center justify-center group-hover:bg-[#1A5276]/20 transition-colors">
                <Briefcase className="w-5 h-5 text-[#1A5276]" />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#1A5276] transition-colors">
                Espace Investisseur
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <Link
              href="/login?role=partenaire"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-[#1A3D2E]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#8FAF8A]/10 flex items-center justify-center group-hover:bg-[#8FAF8A]/20 transition-colors">
                <Handshake className="w-5 h-5 text-[#8FAF8A]" />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#1A3D2E] transition-colors">
                Espace Partenaire
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <Link
              href="/login?role=dev"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-[#1A3D2E]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#E67E22]/10 flex items-center justify-center group-hover:bg-[#E67E22]/20 transition-colors">
                <Code className="w-5 h-5 text-[#E67E22]" />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#E67E22] transition-colors">
                Espace Dev
              </span>
            </Link>
          </ScrollReveal>
        </div>
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
