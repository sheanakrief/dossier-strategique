"use client"

interface KPICardProps {
  label: string
  value: string
  sub?: string
  color?: string
}

export default function KPICard({ label, value, sub, color = "primary" }: KPICardProps) {
  const colorMap: Record<string, string> = {
    primary: "border-primary/20 text-primary",
    success: "border-success/20 text-success",
    accent: "border-accent/20 text-accent",
    premium: "border-premium/20 text-premium",
    danger: "border-danger/20 text-danger",
  }

  return (
    <div className={`card-print bg-white rounded-xl border ${colorMap[color] || colorMap.primary} p-5 kpi-animate`}>
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold ${colorMap[color]?.split(" ")[1] || "text-primary"}`}>{value}</p>
      {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
    </div>
  )
}
