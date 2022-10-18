/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#96B7DA",
        secondary: "#F3F3F3",
        black: "#525252",
      },
      boxShadow: {
        container: "0px 4px 8px rgba(0,0,0,0.10)"
      }
    },
  },
  plugins: [require("daisyui")],
};
