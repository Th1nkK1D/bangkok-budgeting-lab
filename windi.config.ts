import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			black: '#000000',
			white: '#ffffff',
			lightgray: '#EEEEEE',
			darkgray: '#C6C6C6',
			blue: '#3972BD',
			purple: '#B73877',
			yellow: '#F2C759'
		},
		fontFamily: {
			display: ['Chonburi', 'cursive'],
			sans: ['Pridi', 'sans-serif']
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							'font-family': 'Chonburi, cursive'
						},
						h2: {
							'font-family': 'Chonburi, cursive'
						},
						a: {
							color: '#3182ce',
							'&:hover': {
								color: '#2c5282'
							}
						}
					}
				}
			}
		}
	},
	plugins: [require('windicss/plugin/typography')]
});
