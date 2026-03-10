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
          DEFAULT: "#1A5276",
          light: "rgba(26,82,118,0.06)",
        },
        success: "#16a34a",
        accent: {
          DEFAULT: "#E67E22",
        },
        danger: "#dc2626",
        warning: "#f59e0b",
        premium: "#7c3aed",
        plan: {
          starter: "#64748b",
          solo: "#1a5276",
          pro: "#e67e22",
          expert: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Playfair Display", "serif"],
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(26,82,118,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(26,82,118,0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
