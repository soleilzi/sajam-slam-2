/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clem: {
          100: '#fb923c',
          200: '#f57b16'
        },
        slamBlue: {
          50: '#1E69F9',
          100: '#0659f9'
        }
      }
    },
  },
  plugins: [],
}

