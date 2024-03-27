/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkmode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "13xl": "13rem",
        "14xl": "14rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
      backgroundImage: {
        "custom-background": 'url("/images/Fundo-contatos.png")',
      },
      colors: {
        lightmode: {
          100: "#F4F1F1",
          200: "#C0C0C0",
          300: "#6A6A6A",
          500: "#4A4747",
        },
        darkmode: {
          100: "#F8F8F8",
          200: "#3C3B3B",
          300: "#292929",
          500: "#D3E97A",
        },
      },
    },
    plugins: [],
  },
};
