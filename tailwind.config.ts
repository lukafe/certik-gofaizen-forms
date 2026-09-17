import type { Config } from "tailwindcss";

/**
 * Design tokens approximating certik.com's dark design system.
 * The raw CSS custom properties live in styles/tokens.css — adjust there
 * and here together if you re-tune against the live site.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--color-bg)", // page background (near-black)
          raised: "var(--color-bg-raised)", // cards / raised panels
          deep: "var(--color-bg-deep)", // deepest sections (hero, footer)
        },
        fg: {
          DEFAULT: "var(--color-fg)",
          muted: "var(--color-fg-muted)",
          faint: "var(--color-fg-faint)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        line: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        site: "76rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 60s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--marquee-duration, 60s) linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
