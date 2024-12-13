/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        gummy: ["Sour Gummy", "sans-serif"],
        bokor: ["Bokor", "system-ui"],
      }
    },
  },
  plugins: [],
}