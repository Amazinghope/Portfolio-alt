// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css"
  ],
  theme: {
    extend: {
     
      fontFamily:{
        fredoka:['Fredoka', 'sans-serif']
      },
    },
  },
  plugins: [],
}
