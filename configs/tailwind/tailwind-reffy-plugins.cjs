const plugin = require('tailwindcss/plugin');
const { transparent } = require('tailwindcss/colors');

module.exports = {
  plugins: [
    plugin(({ addComponents, e, theme }) => {
      const userTheme = theme('link', {});

      const defaultTheme = {
        colors: {
          default: theme('colors.slate.700'),
          hover: theme('colors.slate.900'),
          active: theme('colors.slate.900'),
        },
        background: {
          default: transparent,
          hover: theme('colors.slate.200'),
        },
        underline: {
          gradientOverride: '',
          gradient: {
            default: {
              from: 'rgb(51 65 85 / 0.7)',
              to: 'rgb(51 65 85 / 0.5)',
            },
            hover: {
              from: 'rgb(29 78 216 / 0.5)',
              to: 'rgb(29 78 216 / 0.7)',
            },
          },
        },
        padding: `${theme('padding.1', '.25rem')} ${theme('padding.2', '.5rem')}`,
        borderRadius: theme('borderRadius.md', '.375em'),
      };

      // Plugin Theme
      const ptm = { ...defaultTheme, ...userTheme };

      const linkPlugin = {
        '.link': {
          color: ptm.colors.default,
          '&:hover': {
            color: ptm.colors.hover,
          },
          '&:active': {
            color: ptm.colors.active,
          },
          '&--box': {
            display: 'inline-block',
            padding: ptm.padding,
            borderRadius: ptm.borderRadius,
            background: ptm.background.default,
            '&:hover': {
              background: ptm.background.hover,
            },
          },
          '&--underline': {
            display: 'inline',
            textDecoration: 'none',
            paddingBottom: '2px',
            background: ptm.underline.gradientOverride
              ? ptm.underline.gradientOverride
              : `linear-gradient(
                to right,
                ${ptm.underline.gradient.hover.from} 0%,
                ${ptm.underline.gradient.hover.to} 50%,
                ${ptm.underline.gradient.default.from} 50%,
                ${ptm.underline.gradient.default.to} 100%
              )`,
            backgroundSize: '200% 1px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            transition: 'all 250ms linear',
            '&:hover': {
              backgroundSize: '200% 3px',
              backgroundPosition: 'left bottom',
            },
          },
        },
      };

      addComponents(linkPlugin);
    }),
  ],
};
