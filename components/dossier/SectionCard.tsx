"use client"

import ScrollReveal from "./ScrollReveal"

interface SectionCardProps {
  title?: string
  subtitle?: string
  icon?: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function SectionCard({ title, subtitle, icon, children, className = "", delay = 0 }: SectionCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`card-print bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden page-section ${className}`}>
        {title && (
          <div className="border-l-4 border-[#1A5276] bg-gradient-to-r from-slate-50 to-white px-6 py-4">
            <div className="flex items-center gap-2">
              {icon && <span className="text-lg">{icon}</span>}
              <h3 className="font-display text-xl font-semibold text-slate-800">{title}</h3>
            </div>
            {subtitle && <p className="text-sm text-slate-500 mt-0.5 ml-0">{subtitle}</p>}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </ScrollReveal>
  )
}
