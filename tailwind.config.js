/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ciber-negro': '#050505',
        'ciber-gris': '#1A1A1A',
        'ciber-verde': '#00FF41', 
        'ciber-neon': '#008F11',  
        'ciber-rosa': '#FF0055',    
        'ciber-cian': '#00E5FF',
      },
      fontFamily: {
        'mono': ['"Courier New"', 'monospace'], 
        'sans': ['Inter', 'sans-serif'],           
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.ciber-verde"), 0 0 20px theme("colors.ciber-verde")',
        'neon-rosa': '0 0 5px theme("colors.ciber-rosa"), 0 0 20px theme("colors.ciber-rosa")',
      }
    },
  },
  plugins: [],
}
