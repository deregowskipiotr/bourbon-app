/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          background: "#050505",
          neonGreen: "#39FF14",
          neonPink: "#FF3C78",
          textPrimary: "#E0E0E0",
          textSecondary: "#A0A0A0",
        },
        fontFamily: {
          cormorant: ["Cormorant", "serif"],
          raleway: ["Raleway", "sans-serif"],
        },
        boxShadow: {
          neonGreenGlow: "0 0 8px #39FF14, 0 0 20px #39FF14",
          neonPinkGlow: "0 0 8px #FF3C78, 0 0 20px #FF3C78",
        },
      },
    },
  },
  plugins: [],
};
