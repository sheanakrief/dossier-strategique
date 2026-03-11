import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enquête Propriétaires — Mon Patrimoine",
  description: "Aidez-nous à construire la plateforme de gestion patrimoniale immobilière",
}

export default function EnqueteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
