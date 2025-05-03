/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: "#FB658D", // purple-500
        primaryGradientEnd: "#439999", // blue-300
      },
      fontFamily: {
        gloock: ["Gloock", "serif"],
      },
    },
  },
  plugins: [],
};
