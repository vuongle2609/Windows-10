module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkMode: "#00081e",
        lightMode: "#d6e3eb",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
