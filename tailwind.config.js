/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E89F71",
          green_accent: "#2EC1AC",
          red_accent: "#E97171",
          gray: "#F9F1E7",
        }
      }
    },
  },
  plugins: [],
}

