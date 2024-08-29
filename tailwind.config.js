const { nextui } = require("@nextui-org/react");
import { grayColor, greenColor } from "./src/utils/styles/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'greenColor': greenColor,
        'grayColor': grayColor
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [nextui()],
}

