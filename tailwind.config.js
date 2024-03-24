/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import { colors as customColors, spacing } from "./src/styles/constants";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing,
    },
    colors: {
      ...colors,
      ...customColors,
    },
  },
  plugins: [],
};
