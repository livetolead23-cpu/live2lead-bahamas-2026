import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          DEFAULT: "#0A1628",
          mid: "#0F2347",
          light: "#162D55",
          muted: "#1E3A6E",
        },
        orange: {
          DEFAULT: "#F47B20",
          light: "#FF9A3C",
          dark: "#D4620F",
        },
        // Utility
        surface: {
          white: "#FFFFFF",
          gray: "#F4F6F9",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["80px", { lineHeight: "1.03", fontWeight: "800" }],
        "hero-lg": ["64px", { lineHeight: "1.05", fontWeight: "800" }],
        "hero-md": ["48px", { lineHeight: "1.1",  fontWeight: "700" }],
        "section":  ["48px", { lineHeight: "1.1",  fontWeight: "700" }],
        "eyebrow":  ["11px", { lineHeight: "1.4",  letterSpacing: "0.2em", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "96px",
        "section-sm": "64px",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0A1628 0%, #0F2347 50%, #162D55 100%)",
        "gradient-hero-overlay":
          "linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.65) 100%)",
        "gradient-orange-glow":
          "radial-gradient(ellipse at top left, rgba(244,123,32,0.15) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
