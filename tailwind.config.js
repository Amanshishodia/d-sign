/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        background: "#000",
        heading: "#fff",
        paragraph: "#FFFFF7",
        primary: " #000",
      },
    },
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          layout: {
            primary: "#58d5ba",
            hoverOpacity: 0.8, // this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgba(0, 0, 0, 0.02), 0px 2px 10px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgba(0, 0, 0, 0.03), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgba(0, 0, 0, 0.04), 0px 30px 60px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.3)",
            },
          },
        },
        dark: {
          layout: {
            hoverOpacity: 0.9, // this value is applied as opacity-[value] when the component is hovered
            primary: "#58d5ba",
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px 2px 10px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.15)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgba(0, 0, 0, 0.06), 0px 2px 30px 0px rgba(0, 0, 0, 0.22), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.15)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgba(0, 0, 0, 0.07), 0px 30px 60px 0px rgba(0, 0, 0, 0.26), inset 0px 0px 1px 0px rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    }),
  ],
};
