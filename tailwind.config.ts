const colors = {
  buttons: "#337BAE",
  white: "#FFFFFF",
  mainBG: "#FFBEBD",
  cardBG: "#FFD3D3",
  cardBGTransparent: "rgba(255, 211, 211, 0.6)",
  cardBGFormField: "rgba(255, 211, 211, 0.2)",
  seaBlue: "#1A405F",
  disabled: "#717171",
  wrongFormField: "#ff0000",
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
      backgroundImage: {
        "main-gradient": `linear-gradient(to right, ${colors.mainBG} 40%, ${colors.white} 1%)`,
      },
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
