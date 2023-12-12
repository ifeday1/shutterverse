/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#6D5000",
        green: "#095A38",
        peach: "#BD9292",
        per: "#7BB2AB",
        grey: "#E2E5F2",
      },
    },
  },
  plugins: [],
};
