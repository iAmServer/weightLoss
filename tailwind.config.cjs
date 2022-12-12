/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B66FF",
        secondary: "#C3FF4D",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
  },
  darkMode: "media",
  plugins: [require("flowbite/plugin")],
};
