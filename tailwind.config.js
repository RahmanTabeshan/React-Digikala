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
            "fresh" : "url('/src/Image/Amazing-Fresh/bg.png')" ,
        },
        screens : {
            mobile : "500px" ,
            m : "960px" ,
        },
        width : {
            "90%" : "90%" ,
            "95%" : "95%" ,
            "98%" : "98%"
        },
        colors:{
            "444" : "#444",
        },
    },
  },
  plugins: [],
}
