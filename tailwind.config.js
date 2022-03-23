module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signIn: ["sans-serif", "M PLUS 2"],
        Manrope: ["Montserrat", "sans-serif"],
      },
    },

    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
    animation: {
      wiggle: "wiggle 200ms ease-in-out",
    },
  },

  plugins: [],
};
