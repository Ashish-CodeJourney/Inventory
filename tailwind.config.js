/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "luxury",
      "nord"
    ],
    darkTheme: "dark", // Set the default dark theme
  },
  plugins: [
    require('daisyui'),
  ],
}