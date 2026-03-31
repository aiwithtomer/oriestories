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
        bg: "#1A1718",
        surface: "#231E20",
        "surface-2": "#2A2427",
        pink: "#F2B8D4",
        "pink-light": "#F7D0E4",
        "pink-muted": "#C9899F",
        text: "#F2EEF0",
        "text-muted": "#B8A8B0",
        border: "#2A2427",
        "footer-bg": "#110F10",
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
