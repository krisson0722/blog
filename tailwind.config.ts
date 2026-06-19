import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f2ecd9",
        ink: "#161514",
        "ink-muted": "#5c5850",
        rule: "#2c2924"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["var(--font-news-body)", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        print: "0 18px 60px rgba(20, 18, 14, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
