const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        white: {
          DEFAULT: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
        },
        dark: {
          DEFAULT: "#000000",
          hover: "#3A3A3A",
          active: "#181818",
        },
        grey: {
          light: "#F5F5F5",
          DEFAULT: "#EBEBEB",
          dark: "#D6D6D6",
        },
        // Global
        primary: {
          // hover: "#111827",
          DEFAULT: "#000000",
          // active: "#D4314C",
          // disabled: "#F69BA9",
        },
        secondary: {
          hover: "#F5F5F5",
          DEFAULT: "#EBEBEB",
          active: "#D6D6D6",
          disabled: "#F4F4F4",
        },
        // States
        danger: {
          DEFAULT: "#EB3F45",
          disabled: "#F59FA2",
          surface: "#FDECEC",
        },
        header: {
          bg: "#161617",
        },
        navbar: {
          bg: "#18181B",
        },
        sidebar: {
          bg: "#121212",
        },
        modal: {
          bg: "#121212",
        },
        input: {
          bg: "#121212",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
