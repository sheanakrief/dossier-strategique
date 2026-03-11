interface PageHeaderProps {
  icon: string
  title: string
  subtitle?: string
}

export default function PageHeader({ icon, title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 page-section page-enter">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <h1 className="font-display text-4xl font-bold text-slate-800">{title}</h1>
      </div>
      {subtitle && <p className="text-lg text-slate-500 ml-12">{subtitle}</p>}
      <div className="mt-4 h-0.5 bg-gradient-to-r from-[#1A3D2E] via-[#8FAF8A] to-transparent rounded" />
    </div>
  )
}
