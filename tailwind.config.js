/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        firstColor: "#069C54",
        firstColorAlt: "#048654",
        titleColor: " #393939",
        textColor: "#707070",
        bodyColor: " #FBFEFD",
        containerColor: "#FFFFFF",
      },
      screens: {
        // When the screen is wider than it is taller
        widescreen: { raw: "(min-aspect-ratio : 3/2)" },
        // When the screen is taller than wider
        tallscreen: { raw: "(min-aspect-ratio : 1/2)" },
      },
    },
  },
  plugins: [],
};
