/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color:{
        lightPurple: "#f5f2ff",
        lightOrange: "#fff3ec",
        lightBlue: "#ecfbff",
    },
    },
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      Jost:["Jost", "sans-serif"],
      Lobster:[ "Lobster", "sans-serif"],
      Lora:["Lora", 'serif'],
      verila:["Varela", "sans-serif"],
      poppins:['Poppins', "sans-serif"],
      segeo:['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"],
      Gill:['Gill Sans', 'Gill Sans MT', "Calibri", 'Trebuchet MS', "sans-serif"]
    },
    

  },
  plugins: [],
};
