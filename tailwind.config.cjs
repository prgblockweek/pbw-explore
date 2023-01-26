/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "pbw": {
          "red": "#ff1616",
          "yellow": "#ffde59",
          "white": "#ffffff",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    },
    {
      pattern: /col-start-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    },
  ]
};
