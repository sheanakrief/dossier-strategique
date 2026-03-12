import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  icon: LucideIcon | string
  title: string
  subtitle?: string
}

export default function PageHeader({ icon: Icon, title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 page-section page-enter">
      <div className="flex items-center gap-3 mb-2">
        {typeof Icon === "string" ? (
          <span className="text-3xl">{Icon}</span>
        ) : (
          <div className="w-10 h-10 rounded-lg bg-[#1A3D2E]/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-[#1A3D2E]" />
          </div>
        )}
        <h1 className="font-display text-4xl font-bold text-slate-800">{title}</h1>
      </div>
      {subtitle && <p className="text-lg text-slate-500 ml-[52px]">{subtitle}</p>}
      <div className="mt-4 h-0.5 bg-gradient-to-r from-[#1A3D2E] via-[#8FAF8A] to-transparent rounded" />
    </div>
  )
}
