/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'bungee-shade': ['Bungee Shade', 'sans-serif'],
      },
      fontSize: {
        '22': '22px',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "red-quit" : "#EC1A1A",
        "green-next" : "#1AEC23",
        "light-dark" : "#2C273A",
        "galaxy-yellow" : "#D6C954",
        "bg-code" : "#31363F"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};