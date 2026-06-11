/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgSecondary:"#0F172B",
        bgPrimary: "#FEA116",
        bgTertiary: "#ffffff"
      },
      fontFamily:{
        Nunito:["Nunito", "open sans"],
        pacifico:['pacifico', 'open sans']
      },
      animation: {
        'spin-smooth': 'spinSmooth 50s linear infinite',  // Adjust duration for a slower rotation
      },
      keyframes: {
        spinSmooth: {
          '0%': {
            transform: 'rotate(0deg)', // Initial state
          },
          '100%': {
            transform: 'rotate(360deg)', // Final state
          },
        },
      },
    },
  },
  plugins: [],
}