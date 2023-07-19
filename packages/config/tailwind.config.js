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
        display: ["Canal", ...defaultTheme.fontFamily.sans],
        body: ["Hind", ...defaultTheme.fontFamily.sans],
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
          DEFAULT: "#242424",
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
          hover: "#EE4A65",
          DEFAULT: "#EC3654",
          active: "#D4314C",
          disabled: "#F69BA9",
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
        warning: {
          DEFAULT: "#F6A805",
          disabled: "#FBD382",
          surface: "#FEF6E6",
        },
        success: {
          DEFAULT: "#0CC17B",
          disabled: "#86E0BD",
          surface: "#E7F9F2",
        },
        info: {
          DEFAULT: "#10B7FF",
          disabled: "#87DBFF",
          surface: "#E7F8FF",
        },
        // Text
        variants: {
          DEFAULT: "#000000",
          80: "#333333",
          50: "#808080",
          30: "#B3B3B3",
          10: "#E5E5E5",
        },
        // Border
        border: {
          DEFAULT: "#EBEBEB",
          alt: "#D6D6D6",
          active: "#000000",
        },
      },
      boxShadow: {
        main: "0 0 6px --tw-shadow-color",
      },
    },
    fontSize: {
      sm: ["14px", "28px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["24px", "28px"],
      "2xl": ["32px", "36px"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
