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
  green: { dot: "bg-[#16a34a] border-[#16a34a]", badge: "bg-[#16a34a]/10 text-[#16a34a]", line: "from-[#16a34a]" },
  blue: { dot: "bg-[#1A5276] border-[#1A5276]", badge: "bg-[#1A5276]/10 text-[#1A5276]", line: "from-[#1A5276]" },
  orange: { dot: "bg-[#E67E22] border-[#E67E22]", badge: "bg-[#E67E22]/10 text-[#E67E22]", line: "from-[#E67E22]" },
  purple: { dot: "bg-[#7c3aed] border-[#7c3aed]", badge: "bg-[#7c3aed]/10 text-[#7c3aed]", line: "from-[#7c3aed]" },
  primary: { dot: "bg-[#1A5276] border-[#1A5276]", badge: "bg-[#1A5276]/10 text-[#1A5276]", line: "from-[#1A5276]" },
  accent: { dot: "bg-[#E67E22] border-[#E67E22]", badge: "bg-[#E67E22]/10 text-[#E67E22]", line: "from-[#E67E22]" },
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
            <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded bg-[#16a34a]/10 text-[#16a34a]">
              {kpi}
            </span>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
