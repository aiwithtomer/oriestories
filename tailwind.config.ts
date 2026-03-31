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
        cream: "#FDF8F0",
        "cream-dark": "#F5EDE0",
        forest: "#2D4A3E",
        "forest-light": "#3D6B5A",
        gold: "#C8A96E",
        "gold-light": "#E8D5A8",
        charcoal: "#2C2C2C",
        slate: "#6B7280",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
