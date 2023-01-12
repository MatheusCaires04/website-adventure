/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyDark: "#10221b",
        green: "#219150",
        greyLight: "#aaa",
      },
      boxShadow: {
        box: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
        boxAbout: "1.5rem 1.5rem 0 rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};
