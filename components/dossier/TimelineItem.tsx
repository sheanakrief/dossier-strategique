"use client"

import ScrollReveal from "./ScrollReveal"

interface TimelineItemProps {
  period: string
  title: string
  description?: string
  kpi?: string
  isActive?: boolean
  color?: string
  isLast?: boolean
  delay?: number
}

const COLORS: Record<string, { dot: string; badge: string; line: string }> = {
  green: { dot: "bg-[#059669] border-[#059669]", badge: "bg-[#059669]/10 text-[#059669]", line: "from-[#059669]" },
  blue: { dot: "bg-[#1A3D2E] border-[#1A3D2E]", badge: "bg-[#1A3D2E]/10 text-[#1A3D2E]", line: "from-[#1A3D2E]" },
  orange: { dot: "bg-[#8FAF8A] border-[#8FAF8A]", badge: "bg-[#8FAF8A]/10 text-[#8FAF8A]", line: "from-[#8FAF8A]" },
  purple: { dot: "bg-[#7c3aed] border-[#7c3aed]", badge: "bg-[#7c3aed]/10 text-[#7c3aed]", line: "from-[#7c3aed]" },
  primary: { dot: "bg-[#1A3D2E] border-[#1A3D2E]", badge: "bg-[#1A3D2E]/10 text-[#1A3D2E]", line: "from-[#1A3D2E]" },
  accent: { dot: "bg-[#8FAF8A] border-[#8FAF8A]", badge: "bg-[#8FAF8A]/10 text-[#8FAF8A]", line: "from-[#8FAF8A]" },
}

export default function TimelineItem({ period, title, description, kpi, isActive = false, color = "primary", isLast = false, delay = 0 }: TimelineItemProps) {
  const c = COLORS[color] || COLORS.primary

  return (
    <ScrollReveal delay={delay}>
      <div className="flex gap-4 relative">
        <div className="flex flex-col items-center">
          <div
            className={`rounded-full border-2 flex-shrink-0 ${c.dot} ${
              isActive ? "w-5 h-5 animate-pulse_dot" : "w-3.5 h-3.5"
            }`}
          />
          {!isLast && <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-300 to-slate-200 min-h-[40px]" />}
        </div>
        <div className="pb-6 flex-1">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 ${c.badge}`}>
            {period}
          </span>
          <p className={`font-medium text-slate-800 ${isActive ? "text-base" : "text-sm"}`}>{title}</p>
          {description && <p className="text-sm text-slate-500 mt-1">{description}</p>}
          {kpi && (
            <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded bg-[#059669]/10 text-[#059669]">
              {kpi}
            </span>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
