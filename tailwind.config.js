/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik-Regular", "san-serif"],
        "rubik-bold": [ "Rubik-Bold", "san-serif"],
        "rubik-extrabold": [ "Rubik-ExtraBold", "san-serif"],
        "rubik-light": [ "Rubik-Light", "san-serif"],
        "rubik-medium": [ "Rubik-Medium", "san-serif"],
        "rubik-regular": [ "Rubik-Regular", "san-serif"],
        "rubik-semibold": [ "Rubik-SemiBold", "san-serif"]
      },
      colors: {
          "primary":{
            100: '#0061FF0A',
            200: '#0061FF1A',
            300: '#0061FF'
          },
          "accent":{
            100: '#FBFBFD'
          },
          "black":{
            100: "#8C8E98",
            200: "#666876",
            300: "#191D31",
            "default": "#000000"
          },
          "danger": '#F75555'
      }
    },
  },
  plugins: [],
}