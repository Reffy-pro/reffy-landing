const defaultColors = require('tailwindcss/colors');
const cVar = require('@mertasan/tailwindcss-variables/colorVariable');
const twVariables = require('@mertasan/tailwindcss-variables');

const colors = pick(defaultColors, [
  'inherit',
  'current',
  'transparent',
  'black',
  'white',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]);

module.exports = {
  theme: {
    variables: {
      DEFAULT: {
        colors: {
          ...colors,
          accent: {
            main: {
              light: '#fff',
              dark: '#2563EB',
            },
            lateral: {
              light: '#94A3B8',
              dark: '#0F172A',
            },
          },
          reffy: {
            logo: 'var(--colors-black)',
            'logo-on-dark': 'var(--colors-white)',
          },
          lnkdn: {
            brand: {
              DEFAULT: '#0A66C2',
              active: '#004182',
              alt: 'var(--colors-black)',
              'alt-active': 'var(--colors-black)',
              'on-dark': 'var(--colors-white)',
              'on-dark-active': 'var(--colors-white)',
            },
          },
        },
      },
    },
    extend: {
      colors: {
        accent: {
          main: {
            light: cVar('var(--colors-accent-main-light)'),
            dark: cVar('var(--colors-accent-main-dark)'),
          },
          lateral: {
            light: cVar('var(--colors-accent-lateral-light)'),
            dark: cVar('var(--colors-accent-lateral-dark)'),
          },
        },
        reffy: {
          logo: {
            DEFAULT: cVar('var(--colors-reffy-logo)', true),
            'on-dark': cVar('var(--colors-reffy-logo-on-dark)', true),
          },
        },
        lnkdn: {
          brand: {
            DEFAULT: cVar('var(--colors-lnkdn-brand)', true),
            active: cVar('var(--colors-lnkdn-brand-active)', true),
            alt: cVar('var(--colors-lnkdn-brand-alt)', true),
            'alt-active': cVar('var(--colors-lnkdn-brand-alt-active)', true),
            'on-dark': cVar('var(--colors-lnkdn-brand-on-dark)', true),
            'on-dark-active': cVar('var(--colors-lnkdn-brand-on-dark-active)', true),
          },
        },
      },
    },
  },
  plugins: [
    twVariables({
      colorVariables: true,
      forceRGB: true,
    }),
  ],
};

function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
