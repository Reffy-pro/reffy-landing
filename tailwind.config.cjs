/* eslint-disable global-require, import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	presets: [
		require('./configs/tailwind/tailwind-base.cjs'),
		require('./configs/tailwind/tailwind-variables.cjs'),
		require('./configs/tailwind/tailwind-colors.cjs'),
		require('./configs/tailwind/tailwind-plugins.cjs'),
		require('./configs/tailwind/tailwind-reffy-plugins.cjs'),
	],
}
