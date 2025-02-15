/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotBGimg 3s linear infinite",
      },
      keyframes: {
        rotBGimg: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    
      colors: {
        primary: '#3490dc', // Exemple de couleur primaire
      },
    },
  },
  plugins: [],
};
