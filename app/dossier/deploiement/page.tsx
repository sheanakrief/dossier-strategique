"use client"

import {
  CalendarDays,
  Database,
  Globe,
  Monitor,
  Boxes,
  Users,
  Layers,
  Rocket,
  CreditCard,
  Megaphone,
  ChartBar,
  Zap,
  Clock,
  Euro,
  ArrowRight,
  CircleCheck,
  Cpu,
  RefreshCw,
  Smartphone,
  Handshake,
  Star,
  TrendingUp,
} from "lucide-react"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"

const EXISTING_STATS = [
  { label: "Modeles Prisma", value: "38", subtitle: "Schema de donnees complet", icon: Database, color: "primary" as const },
  { label: "Routes API", value: "50+", subtitle: "Endpoints REST fonctionnels", icon: Globe, color: "success" as const },
  { label: "Pages / Ecrans", value: "25+", subtitle: "Interfaces utilisateur", icon: Monitor, color: "accent" as const },
  { label: "Modules core", value: "8", subtitle: "Biens, docs, locataires, fiscalite...", icon: Boxes, color: "premium" as const },
  { label: "Client pilote", value: "1", subtitle: "19 biens actifs en gestion", icon: Users, color: "warning" as const },
  { label: "Stack moderne", value: "2025", subtitle: "Next.js 16, React 19, Prisma 6, Turso, Tailwind 4", icon: Layers, color: "primary" as const },
]

const SPRINTS = [
  {
    id: 1,
    title: "Onboarding simplifie",
    duration: "3-5 jours",
    icon: Rocket,
    color: "#1A3D2E",
    items: [
      "Flow d'inscription et creation de compte",
      "Wizard d'import des premiers biens",
      "Simplification UX parcours initial",
    ],
  },
  {
    id: 2,
    title: "Systeme freemium & paiement",
    duration: "5-7 jours",
    icon: CreditCard,
    color: "#1A5276",
    items: [
      "Limitations par plan (Starter, Solo, Pro, Expert)",
      "Integration Stripe (abonnements + facturation)",
      "Upgrade path et gestion des quotas",
    ],
  },
  {
    id: 3,
    title: "Site marketing & landing pages",
    duration: "3-5 jours",
    icon: Megaphone,
    color: "#E67E22",
    items: [
      "Landing page conversion avec hero + social proof",
      "Page pricing interactive",
      "Fichier Excel SEO + premiers articles blog",
    ],
  },
  {
    id: 4,
    title: "Analytics & polish",
    duration: "3-5 jours",
    icon: ChartBar,
    color: "#8FAF8A",
    items: [
      "Integration Mixpanel / PostHog",
      "Tracking funnel inscription -> activation",
      "Bug fixes, performance, tests finaux",
    ],
  },
]

const TIMELINE_WEEKS = [
  { week: "S1-S2", sprint: 1, label: "Onboarding" },
  { week: "S3", sprint: 1, label: "" },
  { week: "S4-S5", sprint: 2, label: "Freemium" },
  { week: "S6", sprint: 2, label: "" },
  { week: "S7-S8", sprint: 3, label: "Marketing" },
  { week: "S9", sprint: 3, label: "" },
  { week: "S10-S11", sprint: 4, label: "Analytics" },
  { week: "S12", sprint: 4, label: "Lancement" },
]

const COMPARISON_ROWS = [
  { label: "Temps MVP", parkimmo: "~1 semaine", classique: "4-6 mois", parkimmoPercent: 3, classiquePercent: 75 },
  { label: "Cout MVP", parkimmo: "~0\u20AC", classique: "60 000-100 000\u20AC", parkimmoPercent: 1, classiquePercent: 85 },
  { label: "Temps freemium", parkimmo: "2-3 semaines", classique: "+2-3 mois", parkimmoPercent: 8, classiquePercent: 45 },
  { label: "Cout freemium", parkimmo: "< 5 000\u20AC", classique: "+30 000-50 000\u20AC", parkimmoPercent: 5, classiquePercent: 60 },
  { label: "Iteration", parkimmo: "Heures", classique: "Semaines", parkimmoPercent: 2, classiquePercent: 40 },
]

const POST_LAUNCH_ITEMS = [
  { icon: RefreshCw, title: "Iterations produit", desc: "Nouvelles fonctionnalites basees sur les retours utilisateurs" },
  { icon: Boxes, title: "Nouveaux modules", desc: "Comptabilite avancee, declarations fiscales, reporting" },
  { icon: Handshake, title: "API partenaires", desc: "Connexion comptables, notaires, assureurs" },
  { icon: Smartphone, title: "PWA An2", desc: "Application mobile progressive, notifications push" },
]

function getSprintColor(sprintId: number): string {
  const colors: Record<number, string> = { 1: "#1A3D2E", 2: "#1A5276", 3: "#E67E22", 4: "#8FAF8A" }
  return colors[sprintId] || "#1A3D2E"
}

export default function DeploiementPage() {
  return (
    <div>
      <PageHeader
        icon={CalendarDays}
        title="Plan de Developpement"
        subtitle="Du MVP au lancement freemium — Timeline technique & produit"
      />

      {/* 1. FAIT MARQUANT */}
      <ScrollReveal>
        <div className="rounded-2xl bg-[#1A3D2E] text-[#E8E4D4] p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8FAF8A]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E67E22]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#E67E22]/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-[#E67E22]" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">Fait marquant</h2>
                <p className="text-[#8FAF8A] text-sm">Preuve de vitesse d{"'"}execution</p>
              </div>
            </div>

            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>
                L{"'"}integralite du MVP Parkimmo — <span className="text-white font-semibold">38 modeles de donnees</span>,{" "}
                <span className="text-white font-semibold">50+ endpoints API</span>,{" "}
                <span className="text-white font-semibold">25+ ecrans</span>,{" "}
                <span className="text-white font-semibold">8 modules metier</span>,{" "}
                <span className="text-white font-semibold">20 fichiers de tests</span> — a ete developpee{" "}
                <span className="text-[#E67E22] font-bold">en 1 semaine</span> avec Claude Code (IA Anthropic).
              </p>
              <p>
                Le dossier strategique que vous consultez — <span className="text-white font-semibold">15 sections interactives</span>,{" "}
                demo produit avec <span className="text-white font-semibold">4 niveaux d{"'"}abonnement</span>,{" "}
                export PDF multi-audience — a ete produit sur la meme periode.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#8FAF8A]/20">
              <div className="text-center">
                <p className="text-sm text-[#8FAF8A] mb-1">Temps de developpement total</p>
                <p className="text-3xl font-display font-bold text-white">~2 semaines</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8FAF8A] mb-1">Equivalent agence traditionnelle</p>
                <p className="text-3xl font-display font-bold text-white">6-9 mois</p>
                <p className="text-xs text-[#8FAF8A] mt-0.5">80 000 - 120 000{"\u20AC"}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8FAF8A] mb-1">Facteur d{"'"}acceleration</p>
                <p className="text-3xl font-display font-bold text-[#E67E22]">{"\u00D7"}15-20</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. CE QUI EXISTE DEJA */}
      <SectionCard title="Ce qui existe deja" icon={CircleCheck} delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {EXISTING_STATS.map((stat, i) => (
            <StatCard
              key={i}
              label={stat.label}
              value={stat.value}
              subtitle={stat.subtitle}
              icon={stat.icon}
              color={stat.color}
              delay={i * 50}
            />
          ))}
        </div>
        <div className="bg-[#1A3D2E]/5 border border-[#1A3D2E]/10 rounded-xl p-4 mt-2">
          <p className="text-sm text-[#1A3D2E] font-medium text-center">
            2 ans de R&D terrain, construits avec l{"'"}IA (Claude Code) et valides par un usage reel.
          </p>
        </div>
      </SectionCard>

      {/* 3. CE QU'IL RESTE */}
      <SectionCard title="Ce qu'il reste a faire" icon={Zap} delay={200} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPRINTS.map((sprint) => (
            <ScrollReveal key={sprint.id} delay={sprint.id * 80}>
              <div className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ backgroundColor: sprint.color + "10" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: sprint.color + "20" }}
                    >
                      <sprint.icon className="w-4.5 h-4.5" style={{ color: sprint.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: sprint.color }}>
                        Sprint {sprint.id}
                      </p>
                      <p className="font-display font-semibold text-slate-800 text-sm">{sprint.title}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: sprint.color + "15", color: sprint.color }}
                  >
                    {sprint.duration}
                  </span>
                </div>
                <div className="px-5 py-4 space-y-2">
                  {sprint.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-[#E67E22]/10 via-[#E67E22]/5 to-transparent border border-[#E67E22]/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E67E22]/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#E67E22]" />
            </div>
            <div>
              <p className="font-display font-semibold text-slate-800">Total : 2-3 semaines</p>
              <p className="text-sm text-slate-500">Recalibre pour la vitesse IA</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#E67E22] text-white px-5 py-2.5 rounded-full">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-semibold">Lancement freemium cible : Avril 2026</span>
          </div>
        </div>
      </SectionCard>

      {/* 4. TIMELINE VISUELLE */}
      <SectionCard title="Timeline visuelle" icon={CalendarDays} delay={300} className="mt-8">
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[700px]">
            {/* Sprint labels */}
            <div className="flex mb-3">
              {[1, 2, 3, 4].map((sprintId) => {
                const sprint = SPRINTS[sprintId - 1]
                const segmentCount = TIMELINE_WEEKS.filter((w) => w.sprint === sprintId).length
                const widthPercent = (segmentCount / TIMELINE_WEEKS.length) * 100
                return (
                  <div
                    key={sprintId}
                    className="flex items-center justify-center gap-1.5 px-2"
                    style={{ width: `${widthPercent}%` }}
                  >
                    <sprint.icon className="w-3.5 h-3.5" style={{ color: sprint.color }} />
                    <span className="text-xs font-semibold" style={{ color: sprint.color }}>
                      Sprint {sprintId}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Timeline bar */}
            <div className="flex h-12 rounded-xl overflow-hidden shadow-inner border border-slate-200">
              {TIMELINE_WEEKS.map((week, i) => (
                <div
                  key={i}
                  className="flex-1 flex items-center justify-center relative group cursor-default transition-all duration-200"
                  style={{
                    backgroundColor: getSprintColor(week.sprint) + "18",
                    borderRight: i < TIMELINE_WEEKS.length - 1 ? "1px solid rgba(255,255,255,0.6)" : "none",
                  }}
                >
                  <span className="text-xs font-semibold text-slate-600">{week.week}</span>
                  <div
                    className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap"
                    style={{ color: getSprintColor(week.sprint) }}
                  >
                    {week.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Week labels spacer */}
            <div className="h-8" />

            {/* Sprint duration bars */}
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4].map((sprintId) => {
                const sprint = SPRINTS[sprintId - 1]
                const segmentCount = TIMELINE_WEEKS.filter((w) => w.sprint === sprintId).length
                const widthPercent = (segmentCount / TIMELINE_WEEKS.length) * 100
                return (
                  <div
                    key={sprintId}
                    className="h-2 rounded-full"
                    style={{ width: `${widthPercent}%`, backgroundColor: sprint.color }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 5. COUT DE DEVELOPPEMENT */}
      <ScrollReveal delay={400}>
        <div className="mt-8 rounded-2xl border-2 border-[#1A5276]/20 bg-gradient-to-br from-[#1A5276]/5 via-white to-[#8FAF8A]/5 p-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#1A5276]/5 rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#1A5276]/10 flex items-center justify-center">
                <Euro className="w-5.5 h-5.5 text-[#1A5276]" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800">Cout de developpement</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Dev interne avec IA</p>
                <p className="text-4xl font-display font-bold text-[#1A3D2E]">0{"\u20AC"}</p>
                <p className="text-sm text-slate-500 mt-1">masse salariale</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-sm">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Audit securite</p>
                <p className="text-4xl font-display font-bold text-[#1A5276]">3-5k{"\u20AC"}</p>
                <p className="text-sm text-slate-500 mt-1">dev senior freelance</p>
              </div>
              <div className="bg-white rounded-xl border border-[#E67E22]/30 p-5 text-center shadow-sm ring-2 ring-[#E67E22]/20">
                <p className="text-xs uppercase tracking-wider text-[#E67E22] font-semibold mb-2">Total</p>
                <p className="text-4xl font-display font-bold text-[#E67E22]">&lt; 5 000{"\u20AC"}</p>
                <p className="text-sm text-slate-500 mt-1">tout compris</p>
              </div>
            </div>

            <div className="mt-6 bg-[#1A3D2E]/5 border border-[#1A3D2E]/10 rounded-xl p-4">
              <p className="text-sm text-[#1A3D2E] text-center leading-relaxed">
                Un developpement equivalent en agence couterait{" "}
                <span className="font-bold">80 000 - 120 000{"\u20AC"}</span>.{" "}
                L{"'"}utilisation de l{"'"}IA comme co-developpeur divise le cout par{" "}
                <span className="font-bold text-[#E67E22]">20{"\u00D7"}</span>.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 6. COMPARATIF VISUEL */}
      <SectionCard title="Comparatif visuel" icon={ChartBar} delay={500} className="mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-slate-500 font-medium w-1/4" />
                <th className="text-left py-3 px-4 font-display font-semibold text-[#1A3D2E]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Parkimmo (Claude Code)
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-display font-semibold text-slate-400">
                  Dev classique
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : ""}>
                  <td className="py-4 px-4 font-medium text-slate-700">{row.label}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[160px]">
                        <div
                          className="h-5 rounded-full bg-gradient-to-r from-[#1A3D2E] to-[#8FAF8A] transition-all duration-700"
                          style={{ width: `${Math.max(row.parkimmoPercent, 8)}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#1A3D2E] whitespace-nowrap">{row.parkimmo}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[160px]">
                        <div
                          className="h-5 rounded-full bg-gradient-to-r from-slate-300 to-slate-200 transition-all duration-700"
                          style={{ width: `${row.classiquePercent}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{row.classique}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 7. POST-LANCEMENT */}
      <SectionCard title="Post-lancement (M6-M12)" icon={TrendingUp} delay={600} className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {POST_LAUNCH_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#8FAF8A]/40 hover:bg-[#8FAF8A]/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#1A3D2E]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-slate-800 text-sm">{item.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionCard>

      {/* 8. APPROCHE TECHNIQUE DIFFERENCIANTE */}
      <ScrollReveal delay={700}>
        <div className="mt-8 mb-4 rounded-2xl bg-gradient-to-br from-[#1A3D2E] via-[#1A3D2E] to-[#1A5276] text-[#E8E4D4] p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Cpu className="w-5.5 h-5.5 text-[#E67E22]" />
              </div>
              <h3 className="font-display text-xl font-bold">Approche technique differenciante</h3>
            </div>
            <p className="text-[15px] leading-relaxed mb-4">
              Parkimmo est developpe avec <span className="text-white font-semibold">Claude Code (IA Anthropic)</span> comme
              co-developpeur permanent. Cette approche permet une vitesse d{"'"}iteration sans precedent : chaque fonctionnalite,
              chaque correction, chaque amelioration est implementee en heures au lieu de jours.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">
              La fondatrice pilote la vision produit et la strategie metier. L{"'"}IA genere le code, les tests, la documentation
              technique. Le resultat : un produit de qualite professionnelle avec un cout de developpement quasi nul.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Claude Code", "Next.js 16", "React 19", "Prisma 6", "Turso (SQLite)", "Tailwind 4", "TypeScript", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white/90 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
