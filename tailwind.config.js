const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: {
        400: "#4771DB",
        200: "#C2D3FF",
        100: "#F2F6FF",
      },
      red: "#FF5263",
      black: "#151F29",
      gray: "#969696",
    },
    fontFamily: {
      sans: ["Libre Franklin", defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
};
