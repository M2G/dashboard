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
    colors: {
      transparent: 'transparent',
      'semi-10': 'hsla(0, 0%, 0%, 0.1)',
      'semi-20': 'hsla(0, 0%, 0%, 0.2)',
      'semi-25': 'hsla(0, 0%, 0%, 0.25)',
      'semi-30': 'hsla(0, 0%, 0%, 0.3)',
      'semi-40': 'hsla(0, 0%, 0%, 0.4)',
      'semi-50': 'hsla(0, 0%, 0%, 0.5)',
      'semi-60': 'hsla(0, 0%, 0%, 0.6)',
      'semi-70': 'hsla(0, 0%, 0%, 0.7)',
      'semi-75': 'hsla(0, 0%, 0%, 0.75)',
      'semi-80': 'hsla(0, 0%, 0%, 0.8)',
      'semi-90': 'hsla(0, 0%, 0%, 0.9)',
      'semi-95': 'hsla(0, 0%, 0%, 0.95)',

      'semi-10-contrast': 'hsla(0, 0%, 100%, 0.1)',
      'l1': 'hsl(0, 0%, 90%)',
      'l2': 'hsl(0, 0%, 80%)',
      'l3': 'hsl(0, 0%, 70%)',
      'l4': 'hsl(0, 0%, 60%)',
      'l5': 'hsl(0, 0%, 50%)',
      'l6': 'hsl(0, 0%, 40%)',
      'l7': 'hsl(0, 0%, 30%)',
      'l8': 'hsl(0, 0%, 20%)',
      'l9': 'hsl(0, 0%, 10%)',

      'grey-dark': 'hsl(240, 4%, 46%)',




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
          // dark: "#D6D6D6",
        },
        // Global
        primary: {
          // hover: "#111827",
          DEFAULT: "#000000",
          // active: "#D4314C",
          // disabled: "#F69BA9",
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
