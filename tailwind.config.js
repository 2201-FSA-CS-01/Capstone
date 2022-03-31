const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mPlus: ["sans-serif", "M PLUS 2"],
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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      red: colors.red,
      violet: colors.violet,
      cyan: colors.cyan,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      physical: "#F4812F",
      mental: "#42AAC3",
      emotional: "#AC54F1",
    },
  },
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },

  plugins: [],
};
