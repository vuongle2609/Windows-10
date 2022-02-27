module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkMode: "#00081e",
        lightMode: "#d6e3eb",
        filterWhite: "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
