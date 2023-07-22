const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      _: "0px", // Force property priority by media query
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        display: [...defaultTheme.fontFamily.sans],
        body: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Common
        ...defaultTheme.colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
