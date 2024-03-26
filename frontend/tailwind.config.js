/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "twc-green": "#083F46",
      },
      textColor: {
        "twc-green": "#083F46",
      },
      fontFamily: {
        futurab: ["futura", "sans-serif"],
      },
    },
  },
  plugins: [],
};
