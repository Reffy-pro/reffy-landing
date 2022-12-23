const twAspectRatio = require('@tailwindcss/aspect-ratio');
const twTypography = require('@tailwindcss/typography');
const twVariables = require('@mertasan/tailwindcss-variables');
const twForms = require('@tailwindcss/forms');

module.exports = {
  plugins: [
    twTypography,
    twAspectRatio,
    twForms,
    twVariables({
      colorVariables: true,
      forceRGB: true,
    }),
  ],
};
