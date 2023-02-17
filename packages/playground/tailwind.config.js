const colors = require("tailwindcss/colors");

module.exports = {
  content: [`src/**/*.{js,tsx}`],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
