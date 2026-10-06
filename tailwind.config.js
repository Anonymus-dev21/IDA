/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { cyan: "var(--brand-cyan)", blue: "var(--brand-blue)", dark: "var(--brand-dark)", deep: "var(--brand-deep)" },
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: { display: ["Urbanist", "sans-serif"] },
    },
  },
  plugins: [],
};
