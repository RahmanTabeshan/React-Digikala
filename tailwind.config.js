/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        backgroundImage:{
            "logo" : "url('/src/Image/logo.svg')"
        },
        screens : {
            mobile : "500px"
        }
    },
  },
  plugins: [],
}
