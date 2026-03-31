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
        bg: "#0C0C0C",
        surface: "#161616",
        "surface-2": "#1F1F1F",
        pink: "#E8396B",
        "pink-light": "#FF6B95",
        "pink-muted": "#8B1A3C",
        text: "#F2F2F2",
        "text-muted": "#9A9A9A",
        border: "#2A2A2A",
        "footer-bg": "#080808",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
