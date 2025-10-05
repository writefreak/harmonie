/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        queno: ["Queno"], // matches your useFonts key
        quera: ["Quera"],
        stetica: ["Stetica"],
        steticareg: ["SteticaReg"],
        ztNature: ["ZTNature"],
      },
    },
  },
  plugins: [],
};
