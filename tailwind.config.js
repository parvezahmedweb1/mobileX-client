/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#E3FFE6",
        secondary: "#0F172A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
