const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        info: {
          DEFAULT: colors.blue[700],
          active: colors.blue[800],
        },
        success: {
          DEFAULT: colors.emerald[700],
          active: colors.emerald[800],
        },
        danger: {
          DEFAULT: colors.red[700],
          active: colors.red[800],
        },
        attention: {
          DEFAULT: colors.amber[700],
          active: colors.amber[800],
        },

        control: {
          focus: {
            DEFAULT: colors.amber[500],
            border: colors.amber[500],
          },
          primary: {
            DEFAULT: colors.sky[700],
            active: colors.sky[800],
          },
          secondary: {
            DEFAULT: colors.slate[200],
            active: colors.slate[300],
          },
        },
      },
    },
  },
};
