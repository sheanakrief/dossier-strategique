"use client"

import type { LucideIcon } from "lucide-react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

type Color = "primary" | "success" | "accent" | "slate" | "premium" | "warning" | "danger"
type Trend = "up" | "down" | "neutral"

interface StatCardProps {
  label: string
  value: string
  subtitle?: string
  trend?: Trend
  color?: Color
  icon?: LucideIcon
  delay?: number
}

const COLOR_MAP: Record<Color, { bg: string; text: string; iconBg: string }> = {
  primary: { bg: "bg-[#1A3D2E]/10", text: "text-[#1A3D2E]", iconBg: "bg-[#1A3D2E]/10" },
  success: { bg: "bg-[#059669]/10", text: "text-[#059669]", iconBg: "bg-[#059669]/10" },
  accent: { bg: "bg-[#8FAF8A]/10", text: "text-[#8FAF8A]", iconBg: "bg-[#8FAF8A]/10" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", iconBg: "bg-slate-100" },
  premium: { bg: "bg-[#7c3aed]/10", text: "text-[#7c3aed]", iconBg: "bg-[#7c3aed]/10" },
  warning: { bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]", iconBg: "bg-[#f59e0b]/10" },
  danger: { bg: "bg-[#dc2626]/10", text: "text-[#dc2626]", iconBg: "bg-[#dc2626]/10" },
}

const TREND_ICONS: Record<Trend, { Icon: LucideIcon; color: string }> = {
  up: { Icon: TrendingUp, color: "text-[#16a34a]" },
  down: { Icon: TrendingDown, color: "text-[#dc2626]" },
  neutral: { Icon: Minus, color: "text-slate-400" },
}

export default function StatCard({ label, value, subtitle, trend, color = "primary", icon: IconComp, delay = 0 }: StatCardProps) {
  const c = COLOR_MAP[color]
  const t = trend ? TREND_ICONS[trend] : null

  return (
    <ScrollReveal delay={delay}>
      <div className="card-print bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 relative overflow-hidden">
        <div className="flex items-start justify-between mb-3">
          {IconComp && (
            <div className={`w-10 h-10 rounded-full ${c.iconBg} flex items-center justify-center`}>
              <IconComp className={`w-5 h-5 ${c.text}`} />
            </div>
          )}
          {t && <t.Icon className={`w-4 h-4 ${t.color}`} />}
        </div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-3xl font-display font-bold text-slate-800">{value}</p>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
    </ScrollReveal>
  )
}
