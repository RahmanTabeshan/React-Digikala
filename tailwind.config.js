/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        backgroundSize:{
            "96px" : "96px"
        },
        backgroundImage:{
            "logo" : "url('/src/Image/logo.svg')" ,
            "digi" : "url('/src/Image/digi.svg')" ,
        },
        screens : {
            mobile : "500px"
        },
        width : {
            "90%" : "90%"
        }
    },
  },
  plugins: [],
}
