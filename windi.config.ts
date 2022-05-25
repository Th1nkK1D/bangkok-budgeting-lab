import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			black: '#000000',
			white: '#ffffff',
			lightgray: '#EEEEEE',
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
						}
					}
				}
			}
		}
	},
	plugins: [require('windicss/plugin/typography')]
});
