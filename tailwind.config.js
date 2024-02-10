/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'tableBoxShadow': 'rgba(0, 0, 0, 0.05) 0px 1px 4px 2px, rgba(0, 0, 0, 0.03) 0px 2px 1px 0px',
      }
    },
  },
  plugins: [],
}

