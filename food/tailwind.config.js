/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      'max-sm' : {'max' : '640px'},
      'max-md' : {'max' : '768px'},
      'max-lg' : {'max' : '1280px'},
    },
    extend: {
    },
  },
  plugins: [],
}