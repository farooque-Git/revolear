/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: "#E37FDE", // purple-500
        primaryGradientEnd: "#7E87F1", // blue-300
      },
    },
  },
  plugins: [],
};
