/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import {
  colors as customColors,
  spacing,
  zIndex,
} from "./src/styles/constants";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing,
      zIndex,
    },
    colors: {
      ...colors,
      ...customColors,
    },
  },
  plugins: [],
};
