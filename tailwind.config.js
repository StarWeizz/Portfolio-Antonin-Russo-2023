/** @type {import('tailwindcss').Config} */
const rawColors = require('tailwindcss/colors');
const deprecatedColors = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'];
const colors = Object.fromEntries(
  Object.keys(rawColors)
    .filter((key) => !deprecatedColors.includes(key))
    .map((key) => [key, rawColors[key]])
);
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      primary: colors.violet,
      secondary: colors.sky,
      neutral: colors.slate,

      white: colors.white,
      rose: colors.rose,
      ...colors
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
