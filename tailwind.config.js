module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      screens: {},
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'serif'],
      kate: ['Kate', 'serif'],
      playfair: ['"Playfair Display"', 'serif'],
      zilla: ['"Zilla Slab"', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/*tailwind default  container	None	width: 100%;
sm (640px)	max-width: 640px;
md (768px)	max-width: 768px;
lg (1024px)	max-width: 1024px;
xl (1280px)	max-width: 1280px;
2xl (1536px)	max-width: 1536px; */
