import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mon Patrimoine — Dossier Stratégique",
  description: "Cockpit patrimonial pour propriétaires immobiliers — K PAR K CONSEILS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
