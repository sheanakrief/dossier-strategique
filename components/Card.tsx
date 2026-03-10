interface CardProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export default function Card({ children, title, className = "" }: CardProps) {
  return (
    <div className={`card-print bg-white rounded-xl border border-slate-200 shadow-sm p-6 page-section ${className}`}>
      {title && <h3 className="font-display text-lg font-semibold text-slate-700 mb-4">{title}</h3>}
      {children}
    </div>
  )
}
