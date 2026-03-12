"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const ROLE_MESSAGES: Record<string, { title: string; subtitle: string }> = {
  investisseur: {
    title: "Espace Investisseur",
    subtitle: "Accédez au dossier stratégique complet",
  },
  partenaire: {
    title: "Espace Partenaire",
    subtitle: "Comptables, notaires, CGP — découvrez notre offre",
  },
  admin: {
    title: "Administration",
    subtitle: "Accès complet au dossier",
  },
  dev: {
    title: "Espace Développeur",
    subtitle: "Architecture technique et déploiement",
  },
}

function LoginForm() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || ""
  const roleInfo = ROLE_MESSAGES[role]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      const data = await res.json()
      // Redirect to first content page based on role
      const ROLE_DEST: Record<string, string> = {
        investisseur: "/dossier/marche",
        partenaire: "/dossier/vision",
        dev: "/dossier/produit",
        admin: "/dossier/vision",
      }
      const dest = ROLE_DEST[data.role] || "/dossier/marche"
      router.push(dest)
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-[28%] bg-[#1A3D2E] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
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
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}>
              <span className="text-[#1A3D2E]">PARK</span><span className="text-[#8FAF8A]">IMMO</span>
            </h1>
          </div>
          {roleInfo ? (
            <>
              <p className="text-slate-700 font-medium text-sm">{roleInfo.title}</p>
              <p className="text-slate-400 text-xs mt-1">{roleInfo.subtitle}</p>
            </>
          ) : (
            <p className="text-slate-500 text-sm">Dossier Stratégique — K PAR K CONSEILS</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
              placeholder="Entrez le mot de passe"
              autoFocus
            />
          </div>
          {error && (
            <p className="text-danger text-sm">Mot de passe incorrect.</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50"
          >
            {loading ? "Vérification..." : "Accéder au dossier"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/dossier" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
            ← Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-slate-400">Chargement...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
