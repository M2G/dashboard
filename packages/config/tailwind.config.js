const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  extend: {
      colors: {
        // Common
        ...defaultTheme.colors,
        black: {
          DEFAULT: "#000000",
        },
        // States
        danger: {
          DEFAULT: "#EB3F45",
          disabled: "#F59FA2",
          surface: "#FDECEC",
        },
        dark: {
          DEFAULT: "#000000",
          active: "#181818",
          hover: "#3A3A3A",
        },
        grey: {
          DEFAULT: "#EBEBEB",
          light: "#F5F5F5",
          // dark: "#D6D6D6",
        },
        header: {
          bg: "#161617",
        },
        input: {
          bg: "#121212",
        },
        modal: {
          bg: "#121212",
        },
        navbar: {
          bg: "#18181B",
        },
        // Global
        primary: {
          // hover: "#111827",
          DEFAULT: "#000000",
          // active: "#D4314C",
          // disabled: "#F69BA9",
        },
        sidebar: {
          bg: "#121212",
        },
        white: {
          DEFAULT: "#FFFFFF",
        }
      },
      fontFamily: {
        body: [...defaultTheme.fontFamily.sans],
        display: [...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  theme: {
    colors: {
      "black-dark": 'hsl(0, 0%, 7%)',
      'grey-dark': 'hsl(240, 4%, 46%)',
      'l1': 'hsl(0, 0%, 90%)',
      'l2': 'hsl(0, 0%, 80%)',
      'l3': 'hsl(0, 0%, 70%)',
      'l4': 'hsl(0, 0%, 60%)',
      'l5': 'hsl(0, 0%, 50%)',
      'l6': 'hsl(0, 0%, 40%)',
      'l7': 'hsl(0, 0%, 30%)',
      'l8': 'hsl(0, 0%, 20%)',
      'l9': 'hsl(0, 0%, 10%)',
      'semi-10': 'hsla(0, 0%, 0%, 0.1)',
      'semi-10-contrast': 'hsla(0, 0%, 100%, 0.1)',

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
      transparent: 'transparent',
    },
    margin: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        'auto': 'auto',
        'px': '1px',
      },
      /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */

      negativeMargin: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        'px': '1px',
      },


      /*
      |-----------------------------------------------------------------------------
      | Margin                                  https://tailwindcss.com/docs/margin
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your margin utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default we
      | provide a sensible rem based numeric scale plus a couple other
      | common use-cases like "1px". You can, of course, modify these
      | values as needed.
      |
      | Class name: .m{side?}-{size}
      | CSS property: margin
      |
      */

      padding: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        'px': '1px',
      },


      /*
      |-----------------------------------------------------------------------------
      | Negative margin                https://tailwindcss.com/docs/negative-margin
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your negative margin utility sizes. These can
      | be percentage based, pixels, rems, or any other units. By default we
      | provide matching values to the padding scale since these utilities
      | generally get used together. You can, of course, modify these
      | values as needed.
      |
      | Class name: .-m{side?}-{size}
      | CSS property: margin
      |
      */

      screens: {
      _: "0px", // Force property priority by media query
      ...defaultTheme.screens,
    },
    },
  variants: {
    extend: {},
  },
};
