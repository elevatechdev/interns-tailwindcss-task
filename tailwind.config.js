/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#0b2a6b",
        "navy-dark": "#091f52",
        blue: "#4a7cf7",
        yellow: "#f5c842",
        "placeholder-bg": "#c5daf5",
        "placeholder-border": "#a3c2e8",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
