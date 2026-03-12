"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react"
import { Users, Mail, Clock, Calendar, ClipboardList, PieChart as PieChartIcon, UsersRound, MessageSquareText, Download } from "lucide-react"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import PageHeader from "@/components/dossier/PageHeader"
import SectionCard from "@/components/dossier/SectionCard"
import StatCard from "@/components/dossier/StatCard"
import ScrollReveal from "@/components/dossier/ScrollReveal"
import CopyButton from "@/components/dossier/CopyButton"

/* ════ TYPES ════ */
interface SurveyResponse {
  id: string
  profile: string
  age: string | null
  profession: string | null
  answers: Record<string, string | string[] | number>
  email: string | null
  freeText: string | null
  createdAt: string
  userAgent: string | null
  duration: number | null
}

/* ════ CONSTANTS ════ */
const PROFILE_LABELS: Record<string, string> = {
  A: "Futur proprio",
  B: "1-3 biens",
  C: "4+ biens",
  D: "Pro",
}

const PROFILE_COLORS: Record<string, string> = {
  A: "#8B5CF6",
  B: "#1A3D2E",
  C: "#8FAF8A",
  D: "#059669",
}

/* ════ Question definitions for aggregation ════ */
interface QDef {
  id: string
  title: string
  bloc: string
  opts?: string[]
  type: string
  profiles: string[]
}

const AGE_OPTIONS = ["18-25", "26-35", "36-45", "46-55", "56-65", "65+"]
const PROFESSION_OPTIONS = ["Salarié cadre", "Salarié non-cadre", "Profession libérale", "Chef d\u2019entreprise", "Fonctionnaire", "Retraité", "Étudiant", "Autre"]

const ALL_QUESTIONS: QDef[] = [
  { id: "demo_age", title: "Tranche d\u2019âge", bloc: "Démographie", opts: AGE_OPTIONS, type: "single", profiles: ["A", "B", "C", "D"] },
  { id: "demo_job", title: "Situation professionnelle", bloc: "Démographie", opts: PROFESSION_OPTIONS, type: "single", profiles: ["A", "B", "C", "D"] },
  { id: "q0", title: "Situation actuelle", bloc: "Aiguillage", opts: ["Je ne suis pas (encore) propriétaire", "J\u2019ai 1 à 3 biens, je gère moi-même", "J\u2019ai 4 biens ou plus, ou des structures (SCI, SNC\u2026)", "Je suis investisseur / marchand de biens", "Je suis professionnel de l\u2019immobilier (agent, gestionnaire, CGP\u2026)"], type: "single", profiles: ["A", "B", "C", "D"] },
  // Profile A
  { id: "a1", title: "Investir dans l'immobilier ?", bloc: "Votre projet", opts: ["Oui, dans les 12 prochains mois", "Oui, dans 1-3 ans", "C\u2019est une idee mais rien de concret", "Non, pas du tout"], type: "single", profiles: ["A"] },
  { id: "a2", title: "Freins principaux", bloc: "Vos freins", type: "multi", profiles: ["A"], opts: ["Le prix des biens a l\u2019achat", "La peur des loyers impayes", "La complexite administrative", "La fiscalite, trop opaque", "Le cout des travaux de renovation energetique", "Les taux d\u2019interet", "Je ne sais pas par ou commencer"] },
  { id: "a3", title: "Connaissance DPE", bloc: "Vos connaissances", opts: ["Oui, et je sais ce que ca implique", "J\u2019en ai entendu parler, vaguement", "Non, pas du tout"], type: "single", profiles: ["A"] },
  { id: "a4", title: "Interet outil A-Z", bloc: "Votre interet", opts: ["Oui, clairement", "Peut-etre, ca depend du prix", "Non, je prefere me former seul(e)", "J\u2019ai deja un conseiller pour ca"], type: "single", profiles: ["A"] },
  { id: "a5", title: "Budget mensuel", bloc: "Votre budget", opts: ["Moins de 10 \u20ac", "10-20 \u20ac", "20-40 \u20ac", "Plus si c\u2019est vraiment complet", "Rien, ca devrait etre gratuit"], type: "single", profiles: ["A"] },
  { id: "a6", title: "Sources d'info", bloc: "Vos sources", type: "multi", profiles: ["A"], opts: ["YouTube / podcasts", "Reseaux sociaux (Instagram, TikTok)", "Forums (Finary, Reddit\u2026)", "Mon entourage", "Un CGP ou conseiller", "Presse specialisee", "Je ne m\u2019informe pas vraiment"] },
  // Profile B
  { id: "b1", title: "Nombre de biens", bloc: "Votre patrimoine", opts: ["1", "2", "3"], type: "single", profiles: ["B"] },
  { id: "b2", title: "Types de biens", bloc: "Votre patrimoine", type: "multi", profiles: ["B"], opts: ["Appartement", "Maison", "Parking / cave", "Terrain", "Autre"] },
  { id: "b3", title: "En location ?", bloc: "Votre patrimoine", opts: ["Oui, longue duree", "Oui, saisonnier", "Non, residence principale/secondaire", "En travaux", "Un mix"], type: "single", profiles: ["B"] },
  { id: "b4", title: "Mode de detention", bloc: "Votre patrimoine", opts: ["En nom propre", "Via une SCI", "Je ne suis pas sur(e)"], type: "single", profiles: ["B"] },
  { id: "b5", title: "Outils utilises", bloc: "Votre quotidien", type: "multi", profiles: ["B"], opts: ["Excel / Google Sheets", "Un logiciel (Rentila, BailFacile\u2026)", "Papier / classeur", "Mon telephone", "Mon comptable", "Rien, tout dans ma tete"] },
  { id: "b6", title: "Taches chronophages", bloc: "Votre quotidien", type: "multi", profiles: ["B"], opts: ["Chercher un document", "Quittances et relances", "Declaration fiscale 2044", "Suivi des travaux", "Relation locataires", "Comprendre ma rentabilite", "Sinistres / assurances"] },
  { id: "b7", title: "Poids admin (1-5)", bloc: "Votre quotidien", type: "scale", profiles: ["B"] },
  { id: "b8", title: "Echeances ratees", bloc: "Votre quotidien", opts: ["Jamais", "Une fois", "Plusieurs fois", "Je prefere ne pas en parler"], type: "single", profiles: ["B"] },
  { id: "b9", title: "Fonctionnalite #1", bloc: "Ce qui vous manque", opts: ["Centraliser mes documents", "Calculer ma rentabilite reelle", "Generer mes quittances", "M\u2019alerter sur les echeances", "M\u2019aider pour la 2044", "Voir tout mon patrimoine"], type: "single", profiles: ["B"] },
  { id: "b10", title: "Autonomie vs accompagnement", bloc: "Ce qui vous manque", opts: ["100% autonome", "Outil + accompagnement si besoin", "Quelqu\u2019un qui gere pour moi"], type: "single", profiles: ["B"] },
  { id: "b11", title: "Logiciel teste ?", bloc: "Ce qui vous manque", opts: ["Oui, je l\u2019utilise encore", "Oui, j\u2019ai arrete", "Non, jamais trouve", "Non, je savais pas que ca existait"], type: "single", profiles: ["B"] },
  { id: "b12", title: "Budget mensuel", bloc: "Le budget", opts: ["Moins de 10 \u20ac", "10-20 \u20ac", "20-35 \u20ac", "35-60 \u20ac", "60\u20ac+ si vraiment complet"], type: "single", profiles: ["B"] },
  { id: "b13", title: "DPE connu ?", bloc: "Le budget", opts: ["Oui, tous", "Certains", "Non, aucun", "C\u2019est quoi le DPE ?"], type: "single", profiles: ["B"] },
  // Profile C
  { id: "c1", title: "Nombre de biens", bloc: "Votre patrimoine", opts: ["4-5", "6-10", "11-20", "Plus de 20"], type: "single", profiles: ["C"] },
  { id: "c1b", title: "MDB / investisseur pro ?", bloc: "Votre activité", opts: ["Oui, c\u2019est mon activité principale", "Oui, en complément", "Non, uniquement patrimoine personnel"], type: "single", profiles: ["C"] },
  { id: "c2", title: "Mode de détention", bloc: "Votre patrimoine", opts: ["Tout en nom propre", "Une ou plusieurs SCI", "SNC ou autre société", "Un mix de structures", "Holding / montage complexe"], type: "single", profiles: ["C"] },
  { id: "c2b", title: "Vision perso/pro", bloc: "Votre vision", opts: ["100 % perso (patrimoine familial)", "Perso + activité pro (MDB, investisseur)", "Principalement pro (société, fonds)", "Un mix complexe des deux"], type: "single", profiles: ["C"] },
  { id: "c3", title: "Qui gere ?", bloc: "Votre gestion", opts: ["Moi, tout seul(e)", "Moi + comptable", "Un gestionnaire", "Une agence", "Un(e) assistant(e)", "C\u2019est eclate entre plusieurs personnes"], type: "single", profiles: ["C"] },
  { id: "c4", title: "Budget gestion/mois", bloc: "Votre gestion", opts: ["Moins de 100 \u20ac", "100-300 \u20ac", "300-500 \u20ac", "500-1 000 \u20ac", "Plus de 1 000 \u20ac", "Je ne sais pas"], type: "single", profiles: ["C"] },
  { id: "c5", title: "Problemes gestion", bloc: "Votre gestion", type: "multi", profiles: ["C"], opts: ["Vision consolidee inexistante", "Documents eparpilles", "Comptabilite SCI complexe", "Rentabilite floue par bien", "Coordination entre intervenants", "Fiscalite multi-entites", "Travaux / renovation DPE", "Impayes et relances"] },
  { id: "c6", title: "Interet accompagnement", bloc: "Accompagnement", opts: ["Oui, c\u2019est exactement ce qu\u2019il me faut", "Peut-etre, ca depend du prix", "Non, je veux juste un outil", "J\u2019ai deja quelqu\u2019un pour ca"], type: "single", profiles: ["C"] },
  { id: "c7", title: "Budget mensuel", bloc: "Le budget", opts: ["Moins de 50 \u20ac", "50-100 \u20ac", "100-200 \u20ac", "200-500 \u20ac", "500 \u20ac+ si le service est complet"], type: "single", profiles: ["C"] },
  { id: "c8", title: "Conformite DPE", bloc: "Conformite", opts: ["Oui, tous au-dessus de F", "Certains sont F ou G", "Je ne sais pas", "J\u2019ai des travaux en cours"], type: "single", profiles: ["C"] },
  { id: "c9", title: "Impayes recents", bloc: "Conformite", opts: ["Non, jamais", "Un retard ponctuel", "Impayes recurrents", "Procedure en cours"], type: "single", profiles: ["C"] },
  // Profile D
  { id: "d1", title: "Metier", bloc: "Votre activite", opts: ["Marchand de biens", "Gestionnaire / admin de biens", "Agent immobilier", "CGP / conseiller patrimonial", "Comptable / expert-comptable", "Courtier (credit ou assurance)", "Autre"], type: "single", profiles: ["D"] },
  { id: "d2", title: "Biens/clients geres", bloc: "Votre activite", opts: ["Moins de 10", "10-50", "50-200", "Plus de 200"], type: "single", profiles: ["D"] },
  { id: "d3", title: "Outils utilises", bloc: "Vos outils", type: "multi", profiles: ["D"], opts: ["Logiciel metier (Loja, Powimo\u2026)", "Excel / tableurs", "CRM classique", "Outils comptables (Sage, Cegid\u2026)", "Rien de specifique"] },
  { id: "d4", title: "Problemes relation proprios", bloc: "Relation clients", type: "multi", profiles: ["D"], opts: ["Documents incomplets ou manquants", "Proprietaires qui ne connaissent pas leur patrimoine", "Manque de donnees fiables", "Communication difficile", "Suivi des echeances decale", "Pas de vision consolidee"] },
  { id: "d4b", title: "Transparence clients", bloc: "Relation clients", opts: ["Oui, ils demandent de plus en plus de visibilité", "Un peu, mais ça se gère", "Non, la relation est fluide", "C\u2019est le nerf de la guerre"], type: "single", profiles: ["D"] },
  { id: "d5", title: "Espace centralisé utile ?", bloc: "Parkimmo", opts: ["Oui, radicalement", "Oui, ça aiderait", "Bof, pas vraiment", "Non, mes outils suffisent"], type: "single", profiles: ["D"] },
  { id: "d6", title: "Acces partenaire gratuit ?", bloc: "Parkimmo", opts: ["Oui, tres interesse(e)", "Peut-etre, j\u2019aimerais en savoir plus", "Non merci"], type: "single", profiles: ["D"] },
  { id: "d7", title: "Recommanderiez-vous ?", bloc: "Parkimmo", opts: ["Oui, spontanement", "Oui, si l\u2019outil est bon", "Non, ca compliquerait les choses", "Je voudrais le tester d\u2019abord"], type: "single", profiles: ["D"] },
  // Common
  { id: "f1", title: "Interet Parkimmo", bloc: "Contact", opts: ["Oui, tenez-moi informe(e)", "Oui, je veux tester en avant-premiere", "Envoyez-moi un mail le jour J", "Non merci"], type: "single", profiles: ["A", "B", "C", "D"] },
]

/* ════ HELPERS ════ */
function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return "A l'instant"
  if (mins < 60) return `Il y a ${mins}min`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `Il y a ${hours}h`
  const days = Math.floor(hours / 24)
  return `Il y a ${days}j`
}

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}min ${s < 10 ? "0" : ""}${s}s`
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function EnqueteAdminPage() {
  const [responses, setResponses] = useState<SurveyResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/enquete/results")
      const data = await res.json()
      if (data.responses) setResponses(data.responses)
    } catch (e) {
      console.error("Failed to load results:", e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const filtered = useMemo(() => {
    if (filter === "all") return responses
    return responses.filter((r) => r.profile === filter)
  }, [responses, filter])

  const profileCounts = useMemo(() => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 }
    responses.forEach((r) => {
      if (counts[r.profile] !== undefined) counts[r.profile]++
    })
    return counts
  }, [responses])

  const pieData = useMemo(() => {
    return Object.entries(profileCounts)
      .filter(([, v]) => v > 0)
      .map(([k, v]) => ({ name: PROFILE_LABELS[k], value: v, color: PROFILE_COLORS[k] }))
  }, [profileCounts])

  const emailRate = useMemo(() => {
    if (!responses.length) return "0%"
    const withEmail = responses.filter((r) => r.email).length
    return `${Math.round((withEmail / responses.length) * 100)}%`
  }, [responses])

  const avgDuration = useMemo(() => {
    const withDuration = responses.filter((r) => r.duration)
    if (!withDuration.length) return "—"
    const avg = Math.round(withDuration.reduce((s, r) => s + (r.duration || 0), 0) / withDuration.length)
    return formatDuration(avg)
  }, [responses])

  const lastResponse = useMemo(() => {
    if (!responses.length) return "—"
    return timeAgo(responses[0].createdAt)
  }, [responses])

  const emails = useMemo(() => {
    return responses.filter((r) => r.email).map((r) => ({ email: r.email!, profile: r.profile, date: r.createdAt }))
  }, [responses])

  const freeTexts = useMemo(() => {
    return filtered.filter((r) => r.freeText).map((r) => ({ text: r.freeText!, profile: r.profile, date: r.createdAt }))
  }, [filtered])

  /* ════ Aggregated answers per question ════ */
  const questionCharts = useMemo(() => {
    const visibleQs = ALL_QUESTIONS.filter((q) => {
      if (filter === "all") return true
      return q.profiles.includes(filter)
    })
    const blocs: Record<string, { title: string; questions: { qDef: QDef; data: { name: string; count: number }[] }[] }> = {}

    visibleQs.forEach((qDef) => {
      if (qDef.type === "scale") return
      const relevant = filter === "all" ? responses : responses.filter((r) => r.profile === filter)
      if (!relevant.length) return

      const counts: Record<string, number> = {}
      relevant.forEach((r) => {
        const val = r.answers[qDef.id]
        if (!val) return
        if (Array.isArray(val)) {
          val.forEach((v) => { counts[v] = (counts[v] || 0) + 1 })
        } else {
          const sv = String(val)
          counts[sv] = (counts[sv] || 0) + 1
        }
      })

      if (Object.keys(counts).length === 0) return

      const data = (qDef.opts || Object.keys(counts)).map((opt) => ({
        name: opt.length > 40 ? opt.slice(0, 37) + "..." : opt,
        count: counts[opt] || 0,
      })).filter((d) => d.count > 0)

      if (!blocs[qDef.bloc]) blocs[qDef.bloc] = { title: qDef.bloc, questions: [] }
      blocs[qDef.bloc].questions.push({ qDef, data })
    })

    return Object.values(blocs)
  }, [responses, filter])

  const exportCsv = useCallback(async () => {
    const res = await fetch("/api/enquete/export")
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `enquete-parkimmo-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const purgeAll = useCallback(async () => {
    if (!window.confirm("Supprimer TOUTES les reponses ? Cette action est irreversible.")) return
    try {
      const res = await fetch("/api/enquete/results", {
        method: "DELETE",
      })
      const data = await res.json()
      if (data.success) {
        setResponses([])
        alert(`${data.deleted} reponse(s) supprimee(s).`)
      }
    } catch (e) {
      console.error("Purge failed:", e)
    }
  }, [])

  /* ════ DASHBOARD ════ */
  return (
    <div>
      <PageHeader icon={ClipboardList} title="Resultats Enquete" subtitle="Dashboard prive" />

      {loading && <p className="text-center text-slate-400 py-8">Chargement...</p>}

      {!loading && (
        <>
          {/* ═══ FILTER BAR ═══ */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { key: "all", label: "Tous", count: responses.length },
                { key: "A", label: "Profil A", count: profileCounts.A },
                { key: "B", label: "Profil B", count: profileCounts.B },
                { key: "C", label: "Profil C", count: profileCounts.C },
                { key: "D", label: "Profil D", count: profileCounts.D },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f.key
                      ? "bg-[#1A3D2E] text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-[#1A3D2E] hover:text-[#1A3D2E]"
                  }`}
                >
                  {f.label}
                  <span className={`ml-1.5 text-xs ${filter === f.key ? "text-white/70" : "text-slate-400"}`}>
                    ({f.count})
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* ═══ KPIs ═══ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total reponses" value={String(responses.length)} icon={Users} color="primary" />
            <StatCard label="Taux email" value={emailRate} icon={Mail} color="success" />
            <StatCard label="Duree moyenne" value={avgDuration} icon={Clock} color="accent" />
            <StatCard label="Derniere reponse" value={lastResponse} icon={Calendar} color="slate" />
          </div>

          {/* ═══ PIE CHART ═══ */}
          {pieData.length > 0 && (
            <SectionCard title="Repartition par profil" icon={PieChartIcon} delay={100}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        innerRadius={45}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, idx) => (
                          <Cell key={idx} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-2">
                  {Object.entries(PROFILE_LABELS).map(([k, label]) => (
                    <div key={k} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: PROFILE_COLORS[k] }} />
                      <span className="text-sm text-slate-600">
                        {label} ({k}) : <strong>{profileCounts[k]}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          )}

          {/* ═══ DEMOGRAPHICS ═══ */}
          {responses.length > 0 && (
            <SectionCard title="Profil des répondants" icon={UsersRound} delay={120} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Age distribution */}
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">Répartition par âge</p>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={AGE_OPTIONS.map(age => ({
                          name: age,
                          count: filtered.filter(r => (r.age || r.answers?.demo_age) === age).length,
                        })).filter(d => d.count > 0)}
                        layout="vertical"
                        margin={{ left: 50, right: 20, top: 5, bottom: 5 }}
                      >
                        <XAxis type="number" allowDecimals={false} fontSize={11} />
                        <YAxis type="category" dataKey="name" width={50} fontSize={11} tick={{ fill: "#5A6B7D" }} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#1A3D2E" radius={[0, 4, 4, 0]} barSize={18} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {/* Profession distribution */}
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">Répartition par profession</p>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={PROFESSION_OPTIONS.map(prof => ({
                          name: prof.length > 20 ? prof.slice(0, 17) + "..." : prof,
                          count: filtered.filter(r => (r.profession || r.answers?.demo_job) === prof).length,
                        })).filter(d => d.count > 0)}
                        layout="vertical"
                        margin={{ left: 100, right: 20, top: 5, bottom: 5 }}
                      >
                        <XAxis type="number" allowDecimals={false} fontSize={11} />
                        <YAxis type="category" dataKey="name" width={100} fontSize={11} tick={{ fill: "#5A6B7D" }} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8FAF8A" radius={[0, 4, 4, 0]} barSize={18} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          {/* ═══ QUESTION CHARTS ═══ */}
          {questionCharts.map((bloc) => (
            <SectionCard key={bloc.title} title={bloc.title} delay={150} className="mt-6">
              <div className="space-y-8">
                {bloc.questions.map(({ qDef, data }) => (
                  <div key={qDef.id}>
                    <p className="text-sm font-medium text-slate-700 mb-3">{qDef.title}</p>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ left: 120, right: 20, top: 5, bottom: 5 }}>
                          <XAxis type="number" allowDecimals={false} fontSize={11} />
                          <YAxis type="category" dataKey="name" width={120} fontSize={11} tick={{ fill: "#5A6B7D" }} />
                          <Tooltip />
                          <Bar dataKey="count" fill="#1A3D2E" radius={[0, 4, 4, 0]} barSize={18} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          ))}

          {/* ═══ EMAILS ═══ */}
          {emails.length > 0 && (
            <SectionCard title="Emails collectes" icon={Mail} delay={200} className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-500">{emails.length} email{emails.length > 1 ? "s" : ""}</p>
                <CopyButton text={emails.map((e) => e.email).join(", ")} />
              </div>
              <div className="space-y-2">
                {emails.map((e, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 rounded-lg">
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                      style={{ background: PROFILE_COLORS[e.profile] }}
                    >
                      {e.profile}
                    </span>
                    <span className="text-sm text-slate-700 flex-1">{e.email}</span>
                    <span className="text-xs text-slate-400">{new Date(e.date).toLocaleDateString("fr-FR")}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* ═══ FREE TEXT ═══ */}
          {freeTexts.length > 0 && (
            <SectionCard title="Champs libres" icon={MessageSquareText} delay={250} className="mt-6">
              <div className="space-y-3">
                {freeTexts.map((ft, i) => (
                  <div key={i} className="px-4 py-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                        style={{ background: PROFILE_COLORS[ft.profile] }}
                      >
                        {ft.profile}
                      </span>
                      <span className="text-xs text-slate-400">{new Date(ft.date).toLocaleDateString("fr-FR")}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{ft.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* ═══ EXPORT ═══ */}
          <SectionCard title="Export" icon={Download} delay={300} className="mt-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={exportCsv}
                className="px-5 py-2.5 bg-gradient-to-r from-[#1A3D2E] to-[#1F4D38] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
              >
                Exporter CSV complet
              </button>
              {emails.length > 0 && (
                <CopyButton text={emails.map((e) => e.email).join(", ")} />
              )}
              <button
                onClick={purgeAll}
                className="px-5 py-2.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-all"
              >
                Purger toutes les reponses
              </button>
            </div>
          </SectionCard>

          {/* ═══ RAW DATA TABLE ═══ */}
          <SectionCard title="Donnees brutes" icon={ClipboardList} delay={350} className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Profil</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Âge</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Profession</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => {
                    const isExpanded = expandedRow === r.id
                    return (
                      <React.Fragment key={r.id}>
                        <tr
                          className={`border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${isExpanded ? "bg-slate-50" : ""}`}
                          onClick={() => setExpandedRow(isExpanded ? null : r.id)}
                        >
                          <td className="py-3 px-3 text-slate-600 whitespace-nowrap text-xs">
                            {new Date(r.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white" style={{ background: PROFILE_COLORS[r.profile] }}>
                              {r.profile}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-600 text-xs">{r.age || (r.answers?.demo_age as string) || "—"}</td>
                          <td className="py-3 px-3 text-slate-600 text-xs">{r.profession || (r.answers?.demo_job as string) || "—"}</td>
                          <td className="py-3 px-3 text-slate-600 text-xs">{r.email || "—"}</td>
                          <td className="py-3 px-3 text-slate-600 text-xs whitespace-nowrap">{r.duration ? formatDuration(r.duration) : "—"}</td>
                        </tr>
                        {isExpanded && (
                          <tr className="bg-slate-50/60">
                            <td colSpan={6} className="py-3 px-6">
                              <div className="space-y-1">
                                {Object.entries(r.answers).map(([k, v]) => (
                                  <div key={k} className="text-xs">
                                    <span className="font-medium text-slate-500">{k}:</span>{" "}
                                    <span className="text-slate-700">{Array.isArray(v) ? v.join(", ") : String(v)}</span>
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <p className="text-center text-slate-400 py-8">Aucune reponse pour ce filtre</p>
              )}
            </div>
          </SectionCard>
        </>
      )}
    </div>
  )
}
