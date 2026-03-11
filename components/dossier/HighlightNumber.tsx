type Color = "success" | "accent" | "primary" | "danger" | "warning"

const COLOR_MAP: Record<Color, string> = {
  success: "bg-[#059669]/10 text-[#059669]",
  accent: "bg-[#8FAF8A]/10 text-[#8FAF8A]",
  primary: "bg-[#1A3D2E]/10 text-[#1A3D2E]",
  danger: "bg-[#dc2626]/10 text-[#dc2626]",
  warning: "bg-[#f59e0b]/10 text-[#f59e0b]",
}

interface HighlightNumberProps {
  value: string
  label?: string
  color?: Color
}

export default function HighlightNumber({ value, label, color = "primary" }: HighlightNumberProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-bold text-sm ${COLOR_MAP[color]}`}>
      {value}
      {label && <span className="font-normal text-xs opacity-75">{label}</span>}
    </span>
  )
}
