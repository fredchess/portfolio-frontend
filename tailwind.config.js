/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        important: '#64ffda',
        appgray: '#CCD6F6'
      }
    },
  },
  plugins: [],
}