module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "serif"],
      kate: ["Kate", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
