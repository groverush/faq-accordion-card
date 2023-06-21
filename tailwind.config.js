/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-pattern": "url('./src/assets/images/bg-pattern-desktop.svg')"
      }
    }
  },
  plugins: []
}
