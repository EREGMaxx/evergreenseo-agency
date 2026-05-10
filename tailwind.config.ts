import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0d0d14",
        "surface-2": "#13131e",
        border: "#1e1e2e",
        "border-light": "#2a2a3e",
        green: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          glow: "#22c55e",
        },
        amber: {
          cta: "oklch(78% 0.16 78)",
          "cta-hover": "oklch(82% 0.14 78)",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" },
          to: { boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 197, 94, 0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
