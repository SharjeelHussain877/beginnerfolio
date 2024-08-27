const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clubbed: ['clubbed', 'sans-serif'],
      },
      colors: { // whole theme color can be change from here and some can be change by global css
        custom: {
          DEFAULT: "#1a1625",
          100: "#2f2b3a", 
          200: "#46424f", 
          300: "#5e5a66", 
          400: "#76737e",
          500: "#908d96",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
module.exports = withMT(config);
