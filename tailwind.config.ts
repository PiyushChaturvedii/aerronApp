
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#7E69AB",
        tertiary: "#6E59A5",
        dark: "#1A1F2C",
        light: "#D6BCFA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "transparent",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
