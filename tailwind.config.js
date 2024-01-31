module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#1e1b4b",
        background01: "#E5E5E5",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        1: "4px",
      },
      backgroundImage: {
        homeimage01: "url('../src/assets/homeimage01.jpeg')",
        homeimage02: "url('../src/assets/homeimage02.jpeg')",
      },
    },
  },
};
