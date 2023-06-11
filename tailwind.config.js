/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5A6E6F",
        secondary: "#BE8779",
        tertiary: "#D5B5A6",
        textDark: "#2C3842",
        textLight: "#BFCDCB",
        dark: "#0f172a",
      },
    },
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
};
