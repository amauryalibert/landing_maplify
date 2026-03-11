import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        panel: "0 20px 60px rgba(0, 0, 0, 0.35)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
