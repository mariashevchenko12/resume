const colors = {
  buttons: "#FF583C",
  white: "#C6CE9E",
  mainBG: "#FFBEBD",
  cardBG: "#A1BA94",
  cardBGTransparent: "rgba(45, 17, 43, 0.4)",
  cardBGFormField: "rgba(161, 186, 148, 0.4)",
  seaBlue: "#2D112B",
  disabled: "#717171",
  wrongFormField: "#ff0000",
  parallaxSection: "#FF583C",
}

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: colors,
    screens: {
      xs: "470px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1440px",
      "3xl": "1950px",
    },
    extend: {
      objectPosition: {
        "center-top": "50% 20%",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
}
