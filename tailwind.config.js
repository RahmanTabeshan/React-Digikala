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
            "bgPlus" : "url('/src/Image/bgDigiplus/plus-widget.png')"
        },
        screens : {
            BreakPoint : "1075px",
            mobile : "500px" ,
            sm : "650px" ,
            xs : "551px" ,
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
        animation : {
            fade : "fade 1s linear infinite alternate" ,
            fade2 : "fade 1s .2s linear infinite alternate" ,
            fade3 : "fade 1s .3s linear infinite alternate" ,
        },
        keyframes:{
            fade : {
                "0% , 100%" : {background:"#fff"} ,
                "50%" : {background:"#cbcbcb"} ,
            }
        },
        gridTemplateColumns:{
            "auto" : "repeat(auto-fit,minmax(200px,1fr))"
        }
    },
  },
  plugins: [],
}
