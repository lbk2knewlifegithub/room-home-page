const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        xl: "0rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        mono: ["'Spartan'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--black"),
        "muted-300": withOpacity("--dark-gray"),
        "muted-900": withOpacity("--very-dark-gray"),
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
