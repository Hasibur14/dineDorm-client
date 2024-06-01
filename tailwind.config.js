/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Lora, serif",
        heading: "Quattrocento Sans, sans-serif",
      },
      colors: {
        neutral: "#EEEEEE",
        primary: "#DC3545",
        secondary: "#34d1bc",
      },
    },
  },
  plugins: [require("daisyui")],
};