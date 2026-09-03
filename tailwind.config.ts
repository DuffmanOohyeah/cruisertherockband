/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
	// module.exports = {
	theme: {
		extend: {
			/*
				colors: {
					// Configure your color palette here
					white: '#fff', // #ffffff
					black: '#000', // #000000
					gray: { light: 'rgba(var(--color-gray), 1)' }, // #cccccc
					gold: {
						light: 'rgba(var(--color-gold), 0.75)', // #ffb913bf - hover bg/text
						dark: 'rgba(var(--color-gold), 0.5)', // #ffb91380 - hover bg/text
					},
					red: {
						light: 'rgba(var(--color-red), 1)', // #fe1504 - border/text
						dark: 'rgba(var(--color-red), 0.5)', // #fe150480 - border
					},
				},
			*/
		},
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [],
	// safelist: ['color-gray-light', 'bg-(color-gray-light)'],
};

export default config;
