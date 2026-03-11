import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A3D2E",
          light: "rgba(26,61,46,0.06)",
        },
        success: "#059669",
        accent: {
          DEFAULT: "#8FAF8A",
        },
        sage: "#8FAF8A",
        cream: "#E8E4D4",
        forest: "#1A3D2E",
        danger: "#dc2626",
        warning: "#f59e0b",
        premium: "#7c3aed",
        plan: {
          starter: "#64748b",
          solo: "#1A3D2E",
          pro: "#8FAF8A",
          expert: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["Bricolage Grotesque", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulse_dot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(26,61,46,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(26,61,46,0)" },
        },
        "enquete-appear": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "enquete-appear-soft": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "enquete-exit-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
        "enquete-pop-in": {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
        "enquete-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "enquete-insight-slide": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "enquete-confetti-1": {
          "0%": { transform: "translateY(0) rotate(0)" },
          "100%": { transform: "translateY(-60px) rotate(180deg)", opacity: "0" },
        },
        "enquete-confetti-2": {
          "0%": { transform: "translateY(0) rotate(0)" },
          "100%": { transform: "translateY(-45px) rotate(-120deg)", opacity: "0" },
        },
        "enquete-confetti-3": {
          "0%": { transform: "translateY(0) rotate(0)" },
          "100%": { transform: "translateY(-55px) rotate(90deg)", opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
        "enquete-appear": "enquete-appear 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "enquete-exit-up": "enquete-exit-up 0.28s ease both",
        "enquete-pop-in": "enquete-pop-in 0.4s ease both",
        "enquete-fade-in": "enquete-fade-in 0.4s ease both",
        "enquete-insight-slide": "enquete-insight-slide 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
}
export default config
