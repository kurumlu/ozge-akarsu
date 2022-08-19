module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      screens: {
        // mobile: '475px',
        // => @media (min-width: 475px) { ... }
        // tablet: '640px',
        // => @media (min-width: 640px) { ... }
        // laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        // desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'serif'],
      source: ['"Source Code Pro"', 'serif'],
      playfair: ['"Playfair Display"', 'serif'],
      zilla: ['"Zilla Slab"', 'serif'],
      ibm: ['"IBM Plex Mono"', 'serif'],
    },
    fontSize: {
      xxs: '.5rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
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
