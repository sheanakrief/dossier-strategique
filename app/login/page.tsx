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
      router.push("/dossier")
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
          <h1 className="text-3xl font-display font-bold text-primary mb-2">Mon Patrimoine</h1>
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
