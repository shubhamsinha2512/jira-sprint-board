/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c5acc",
        secondary: "#00b5de",
        success: "#00945e",
        warning: "#ff9d00",
        danger: "#e30000",
        muted: "#a6aaba",
        dark: "#130f42",
      },
    },
  },
  plugins: [],
};
