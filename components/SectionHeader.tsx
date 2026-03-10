interface SectionHeaderProps {
  icon: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 page-section">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h1 className="font-display text-3xl font-bold text-slate-800">{title}</h1>
      </div>
      {subtitle && <p className="text-slate-500 ml-10">{subtitle}</p>}
      <div className="mt-4 h-0.5 bg-gradient-to-r from-primary/30 to-transparent rounded" />
    </div>
  )
}
