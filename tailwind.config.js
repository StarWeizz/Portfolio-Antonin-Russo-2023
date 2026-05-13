export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#F4500A',
          light: '#fff0e8',
          hover: '#ff6a2a',
        },
      },
    },
  },
  plugins: [],
}
