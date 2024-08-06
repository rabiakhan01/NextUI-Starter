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
      colors: {
        'greenColor': greenColor,
        'grayColor': grayColor
      }
    },
  },
  plugins: [nextui()],
}

