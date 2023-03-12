const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*" ,
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily:{
        "inter": ["Inter", "sans-serif"]
      },

      colors:{
        "text-1" : "#212529",
        "primary-color" : "#00754a",
        "bg-color": "#1e3932",
        "banner1": "#edd15b",
        "bg-color2": "#edebe9"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
