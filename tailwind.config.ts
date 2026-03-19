import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "navy-dark": "#1A2B4A",
        "brand-teal": "#07AFBB",
        "brand-gold": "#C9A84C",
        charcoal: "#2C2C2C",
        "charcoal-mid": "#4A4A4A",
        "off-white": "#F5F2EC",
        border: "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-roboto)", "sans-serif"],
      },
      maxWidth: {
        "copy-sm": "32rem",
        "copy-md": "36rem",
        "copy-lg": "42rem",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(26, 43, 74, 0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top right, rgba(7, 175, 187, 0.08), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
