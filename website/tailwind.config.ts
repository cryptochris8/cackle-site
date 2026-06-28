import type { Config } from "tailwindcss";

/**
 * Cackle design tokens — mirrors the AppalachAI Studios house style:
 *   forest deep #081710 · forest mid #1F4D3A · peak teal #43ECD6
 *   teal deep #149486 · sunrise gold #F2A640 · off-white #F1FFFB
 * (Same palette + system as appalachaistudios.com — re-skin the colors here if
 *  you ever want a punchier comedy palette; everything else flows from these.)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#050D09",
          900: "#081710",
          800: "#0B1F17",
          700: "#11271C",
          600: "#163C2C",
          500: "#1F4D3A",
        },
        peak: {
          teal: "#43ECD6",
          deep: "#149486",
        },
        gold: {
          DEFAULT: "#F2A640",
          soft: "#F6C173",
        },
        cream: "#F1FFFB",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        studios: "0.42em",
      },
      maxWidth: {
        shell: "1200px",
      },
      boxShadow: {
        teal: "0 0 40px -8px rgba(67,236,214,0.45)",
        "teal-lg": "0 0 90px -10px rgba(67,236,214,0.5)",
        gold: "0 0 40px -8px rgba(242,166,64,0.5)",
        card: "0 24px 60px -28px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "ridge-fade":
          "linear-gradient(to bottom, rgba(5,13,9,0) 0%, rgba(5,13,9,0.55) 55%, #050D09 100%)",
        "gold-teal":
          "linear-gradient(110deg, #F2A640 0%, #F6C173 35%, #43ECD6 100%)",
      },
      keyframes: {
        "star-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(0.92)" },
        },
        "mist-drift": {
          "0%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(2%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "star-pulse": "star-pulse 4.5s ease-in-out infinite",
        "mist-drift": "mist-drift 26s ease-in-out infinite alternate",
        float: "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
