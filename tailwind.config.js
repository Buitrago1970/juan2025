/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-gray": "#0E0E0E",
        "gray-items": "#262626",
        "orange-p": "#FF6B00",
        "green-page": "#8FFF44",
      },
    },
  },
  plugins: [],
}

