"use client"

import { useState } from "react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import {
  Home, Building2, Shield, FileText, TrendingUp, Bell,
  BookOpen, Video, Headphones, CheckCircle2, Users,
  Crown, Star, Briefcase, Gift,
} from "lucide-react"

/* ═══════════════════════════════════════════════════════════════
   DONNEES — PETIT PATRIMOINE
   ═══════════════════════════════════════════════════════════════ */

const PETIT_AVANTAGES = [
  { icon: Shield, title: "Coffre-fort documentaire", desc: "Tous vos documents au m\u00eame endroit, accessibles 24/7" },
  { icon: TrendingUp, title: "Rentabilit\u00e9 en temps r\u00e9el", desc: "Visualisez la performance de chaque bien instantan\u00e9ment" },
  { icon: Bell, title: "Alertes intelligentes", desc: "\u00c9ch\u00e9ances, r\u00e9visions, r\u00e9gularisations \u2014 ne ratez plus rien" },
  { icon: FileText, title: "Quittances automatiques", desc: "G\u00e9n\u00e9r\u00e9es en 1 clic, envoy\u00e9es directement au locataire" },
]

const PETIT_PLANS = [
  {
    nom: "Solo",
    prix: 24,
    biens: "\u2264 3",
    stockage: "3 Go",
    recommande: true,
    color: "#1a5276",
    onboarding: "Guides, tutoriels, FAQ int\u00e9gr\u00e9e",
    support: "Email 72h",
    modules: ["Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts"],
  },
  {
    nom: "Pro",
    prix: 49,
    biens: "\u2264 15",
    stockage: "15 Go",
    recommande: false,
    color: "#e67e22",
    onboarding: "3 visios d\u2019onboarding personnalis\u00e9es",
    support: "Email prioritaire 48h",
    modules: ["Tous les modules Solo", "Travaux & projets", "Partage partenaires"],
  },
]

const PETIT_FAQ = [
  { q: "Dois-je tout saisir moi-m\u00eame ?", r: "Oui, mais c\u2019est simple : l\u2019interface vous guide \u00e9tape par \u00e9tape. Vous pouvez importer vos documents par glisser-d\u00e9poser." },
  { q: "Et si j\u2019ai besoin d\u2019aide ?", r: "Le plan Solo inclut guides et FAQ. Le plan Pro offre 3 s\u00e9ances visio pour d\u00e9marrer avec nous." },
  { q: "Je peux passer en Gestion Assist\u00e9e plus tard ?", r: "Absolument. \u00c0 partir de 3 biens, vous pouvez ajouter la Gestion Assist\u00e9e \u00e0 tout moment." },
]

/* ═══════════════════════════════════════════════════════════════
   DONNEES — GRAND PATRIMOINE
   ═══════════════════════════════════════════════════════════════ */

const GRAND_AVANTAGES = [
  { icon: Users, title: "Assistante d\u00e9di\u00e9e", desc: "Votre interlocutrice unique g\u00e8re tout : quittances, relances, suivi" },
  { icon: Building2, title: "Multi-structures", desc: "SCI, SNC, nom propre \u2014 tout centralis\u00e9 dans un seul cockpit" },
  { icon: TrendingUp, title: "Reporting investisseur", desc: "Synth\u00e8se trimestrielle, performance, alertes \u2014 format professionnel" },
  { icon: Shield, title: "Coffre-fort illimit\u00e9", desc: "Num\u00e9risation + classement complet de tous vos documents" },
]

const GA_PALIERS = [
  { palier: "3-5 biens", prix: 89, service: "Quittances, alertes, encaissements, rappels, r\u00e9visions IRL, MAJ coffre-fort" },
  { palier: "6-10 biens", prix: 129, service: "+ Multi-entit\u00e9s + reporting + dossier partenaire" },
  { palier: "11-20 biens", prix: 189, service: "+ Suivi projets + pr\u00e9paration bilans SCI" },
  { palier: "20+ biens", prix: 259, service: "Tout inclus + priorit\u00e9 support" },
]

const LUXE_SERVICES = [
  { icon: Crown, title: "Accompagnement \u00e0 domicile", desc: "D\u00e9placement chez vous pour param\u00e9trage, formation et suivi" },
  { icon: Users, title: "Assistante personnelle d\u00e9di\u00e9e", desc: "Gestion locative, admin, relances \u2014 un seul contact" },
  { icon: FileText, title: "Param\u00e9trage complet du parc", desc: "Tous vos biens, SCI, copros \u2014 on fait tout pour vous" },
  { icon: Shield, title: "Coffre-fort num\u00e9rique complet", desc: "Num\u00e9risation + classement de l\u2019ensemble de vos documents" },
  { icon: Star, title: "OCR & extraction IA", desc: "Extraction automatique des donn\u00e9es depuis contrats et factures" },
  { icon: TrendingUp, title: "Bilan patrimonial personnalis\u00e9", desc: "Diagnostic complet + recommandations avec CGP partenaire" },
  { icon: Briefcase, title: "Reporting trimestriel premium", desc: "Synth\u00e8se patrimoniale et performance \u2014 format investisseur" },
  { icon: Headphones, title: "Support prioritaire 24/48h", desc: "Ligne directe Sheana \u2014 r\u00e9solution express" },
]

const LUXE_GOODIES = [
  { title: "Classeur cuir personnalis\u00e9", desc: "Reliure en cuir v\u00e9ritable grav\u00e9e \u00e0 votre nom, pour ranger vos documents cl\u00e9s" },
  { title: "Intercalaires premium", desc: "S\u00e9parateurs th\u00e9matiques (Biens, SCI, Baux, Fiscalit\u00e9) en papier \u00e9pais" },
  { title: "Pochettes s\u00e9curis\u00e9es", desc: "Pochettes en cuir assorties pour actes notari\u00e9s et documents sensibles" },
  { title: "Carnet de suivi", desc: "Carnet reli\u00e9 cuir pour vos rendez-vous, notes et d\u00e9cisions patrimoniales" },
  { title: "Cl\u00e9 USB s\u00e9curis\u00e9e", desc: "Cl\u00e9 USB chiffr\u00e9e aux couleurs de votre patrimoine \u2014 sauvegarde hors ligne" },
  { title: "Coffret de bienvenue", desc: "Bo\u00eete cadeau premium avec stylo grav\u00e9, marque-pages et carte personnalis\u00e9e" },
]

/* ═══════════════════════════════════════════════════════════════
   COMPOSANT PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function OffrePage() {
  const [mode, setMode] = useState<"petit" | "grand">("petit")
  const isPetit = mode === "petit"

  return (
    <div>
      <PageHeader
        icon={"\ud83c\udf81"}
        title="Notre Offre"
        subtitle={"Adaptez la pr\u00e9sentation \u00e0 votre audience"}
      />

      {/* TOGGLE SWITCH */}
      <ScrollReveal>
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-100 rounded-xl p-1.5 shadow-inner">
            <button
              onClick={() => setMode("petit")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isPetit
                  ? "bg-white text-[#1A5276] shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Home className="w-4 h-4" />
              Petit Patrimoine
            </button>
            <button
              onClick={() => setMode("grand")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isPetit
                  ? "bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-[#daa520] shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Grand Patrimoine
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
         VUE PETIT PATRIMOINE
         ═══════════════════════════════════════════════════════════ */}
      {isPetit && (
        <div key="petit" className="page-enter">
          {/* Hero */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1A5276]/5 to-blue-50 rounded-2xl p-6 md:p-8 mb-8 border border-[#1A5276]/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#1A5276]/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#1A5276]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-800">{"1 \u00e0 5 biens"}</h2>
                  <p className="text-sm text-slate-500">Particuliers, premiers investisseurs</p>
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-2xl">
                {"Vous g\u00e9rez vos biens seul, avec Excel ou sans outil. "}
                <span className="font-semibold text-[#1A5276]">Mon Patrimoine</span>{" centralise tout en un seul endroit : biens, baux, documents, rentabilit\u00e9. "}
                <span className="font-semibold text-[#16a34a]">{"Autonomie totale, prix accessible."}</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Avantages */}
          <ScrollReveal delay={50}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {PETIT_AVANTAGES.map((av, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all text-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A5276]/10 flex items-center justify-center mx-auto mb-3">
                    <av.icon className="w-5 h-5 text-[#1A5276]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{av.title}</p>
                  <p className="text-xs text-slate-500">{av.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Plans */}
          <SectionCard title={"Votre plan SaaS"} icon={"\ud83d\udcb6"} delay={100} className="mb-8">
            <div className="grid md:grid-cols-2 gap-5">
              {PETIT_PLANS.map((plan) => (
                <div
                  key={plan.nom}
                  className={`rounded-xl p-5 transition-all ${
                    plan.recommande
                      ? "border-2 border-[#E67E22] bg-[#E67E22]/5 shadow-md relative"
                      : "border border-slate-200 bg-white"
                  }`}
                >
                  {plan.recommande && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E67E22] text-white rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-sm">
                      {"Recommand\u00e9"}
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: plan.color }} />
                    <h3 className="font-display text-lg font-bold text-slate-800">{plan.nom}</h3>
                  </div>
                  <p className="text-2xl font-bold" style={{ color: plan.color }}>
                    {plan.prix}{"€"}
                    <span className="text-sm text-slate-400 font-normal">/mois</span>
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p><span className="text-slate-400">Biens :</span> {plan.biens}</p>
                    <p><span className="text-slate-400">Stockage :</span> {plan.stockage}</p>
                    <p><span className="text-slate-400">Support :</span> {plan.support}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Onboarding</p>
                    <div className="flex items-center gap-2">
                      {plan.recommande ? <BookOpen className="w-4 h-4 text-[#1a5276]" /> : <Video className="w-4 h-4 text-[#e67e22]" />}
                      <p className="text-xs text-slate-600">{plan.onboarding}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-slate-500 mb-1">Modules inclus :</p>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.modules.map((m) => (
                        <span key={m} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-[#16a34a]" />
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Mention GA */}
          <ScrollReveal delay={150}>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#16a34a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-[#16a34a]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{"Votre patrimoine grandit ?"}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {"\u00c0 partir de 3 biens, d\u00e9bloquez la "}
                    <span className="font-semibold text-[#16a34a]">{"Gestion Assist\u00e9e"}</span>
                    {" : on s\u2019occupe des quittances, relances, r\u00e9visions et encaissements pour vous. D\u00e8s "}
                    <span className="font-semibold">{"89\u20ac/mois"}</span>
                    {" \u2014 2 \u00e0 5 fois moins cher qu\u2019une agence."}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <SectionCard title={"Questions fr\u00e9quentes"} icon={"\ud83d\udcac"} delay={200}>
            <div className="space-y-4">
              {PETIT_FAQ.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.r}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
         VUE GRAND PATRIMOINE
         ═══════════════════════════════════════════════════════════ */}
      {!isPetit && (
        <div key="grand" className="page-enter">
          {/* Hero */}
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b]" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#daa520]/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#daa520]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white">{"6+ biens \u00b7 Multi-structures"}</h2>
                  <p className="text-sm text-slate-400">Investisseurs, MDB, SCI, family offices</p>
                </div>
              </div>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {"Votre patrimoine m\u00e9rite un accompagnement \u00e0 la hauteur. "}
                <span className="font-semibold text-[#daa520]">Mon Patrimoine</span>
                {" vous offre une assistante d\u00e9di\u00e9e, un cockpit multi-structures et des services premium \u2014 pour que vous vous concentriez sur vos acquisitions."}
              </p>
            </div>
          </ScrollReveal>

          {/* Avantages */}
          <ScrollReveal delay={50}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {GRAND_AVANTAGES.map((av, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all text-center">
                  <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center mx-auto mb-3">
                    <av.icon className="w-5 h-5 text-[#7c3aed]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{av.title}</p>
                  <p className="text-xs text-slate-500">{av.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Plan Expert */}
          <SectionCard title={"Plan Expert \u2014 Tous les modules"} icon={"\ud83d\udd2e"} delay={100} className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#7c3aed]" />
                  <h3 className="font-display text-xl font-bold text-slate-800">Expert</h3>
                </div>
                <p className="text-3xl font-bold text-[#7c3aed]">
                  {"79\u20ac"}
                  <span className="text-sm text-slate-400 font-normal">/mois</span>
                </p>
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <p><span className="text-slate-400">Biens :</span> {" Illimit\u00e9"}</p>
                  <p><span className="text-slate-400">Stockage :</span> 50 Go</p>
                  <p><span className="text-slate-400">Support :</span> {"Prioritaire 24h + visio"}</p>
                  <p><span className="text-slate-400">Onboarding :</span> {"Visios illimit\u00e9es"}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Tous les modules</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Patrimoine", "Locatif", "Finance", "Alertes", "Charges", "Coffre-fort", "Contacts",
                    "Travaux & projets", "Partage partenaires", "Multi-structures", "Pipeline acquisition",
                    "Sc\u00e9narios", "Export comptable", "API",
                  ].map((m) => (
                    <span key={m} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 text-[10px] text-[#7c3aed] font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Gestion Assistee */}
          <SectionCard title={"Gestion Assist\u00e9e \u2014 \u00c0 partir de 3 biens"} icon={"\ud83e\udd1d"} delay={150} className="mb-6">
            <p className="text-sm text-slate-500 mb-4">
              {"D\u00e9l\u00e9guez toute l\u2019administration locative. 2 \u00e0 5 fois moins cher qu\u2019une agence, et vous gardez la main sur tout."}
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {GA_PALIERS.map((g, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100 hover:border-[#1A5276]/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#1A5276] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{g.prix}{"€"}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{g.palier}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{g.service}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-36 shrink-0">Agence classique</span>
                <div className="flex-1 bg-red-100 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full w-full flex items-center justify-end pr-2">
                    <span className="text-[10px] font-bold text-white">{"~450\u20ac/mois"}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-slate-500 w-36 shrink-0">Mon Patrimoine</span>
                <div className="flex-1 bg-green-50 rounded-full h-4">
                  <div className="bg-[#16a34a] h-4 rounded-full flex items-center justify-end pr-2" style={{ width: "15%" }}>
                    <span className="text-[10px] font-bold text-white whitespace-nowrap ml-2">{"89\u20ac/mois"}</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* FORFAIT LUXE */}
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden mb-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b]" />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{"\u2726"}</span>
                <h2 className="font-display text-2xl font-bold text-[#daa520]">Forfait LUXE</h2>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                {"Accompagnement premium \u00e0 domicile pour les patrimoines d\u2019exception."}
              </p>

              {/* Pricing */}
              <div className="flex flex-wrap items-end gap-6 mb-6">
                <div>
                  <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Setup initial</p>
                  <p className="text-3xl font-bold text-white">Sur devis</p>
                  <p className="text-xs text-slate-400 mt-1">{"\u00c0 partir de 1 500\u20ac \u2014 selon taille du parc"}</p>
                </div>
                <div>
                  <p className="text-xs text-[#daa520] font-semibold uppercase tracking-wider mb-1">Accompagnement mensuel</p>
                  <p className="text-3xl font-bold text-white">{"299\u20ac"}<span className="text-sm text-slate-400 font-normal">/mois</span></p>
                </div>
              </div>

              {/* Services grid */}
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {LUXE_SERVICES.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-[#daa520]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{s.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cibles */}
              <div className="flex flex-wrap gap-2 text-xs">
                {["Marchands de biens", "Chefs d\u2019entreprise", "Multi-propri\u00e9taires 10+", "Family offices"].map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#daa520]/20 text-[#daa520] font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* GOODIES LUXE */}
          <SectionCard title={"Kit de Bienvenue Premium"} icon={"\ud83c\udf81"} delay={250}>
            <p className="text-sm text-slate-500 mb-4">
              {"Chaque client LUXE re\u00e7oit un kit de bienvenue personnalis\u00e9 \u2014 cuir v\u00e9ritable, grav\u00e9 \u00e0 son nom, aux couleurs de son patrimoine."}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {LUXE_GOODIES.map((g, i) => (
                <div key={i} className="bg-gradient-to-b from-amber-50/50 to-white rounded-xl border border-amber-200/50 p-4 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#daa520]/10 flex items-center justify-center mb-3">
                    <Gift className="w-4 h-4 text-[#daa520]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{g.title}</p>
                  <p className="text-xs text-slate-500">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                {"Tous les \u00e9l\u00e9ments sont personnalisables : couleurs, logo, gravure. Fabrication artisanale fran\u00e7aise."}
              </p>
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  )
}
