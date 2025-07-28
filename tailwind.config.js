/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./screens/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gold: {
            400: '#D4AF37',
          },
        },
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
        },
      },
    },
    plugins: [],
  }
  