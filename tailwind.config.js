/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#dc2626',

					secondary: '#ef4444',

					accent: '#ef4444',

					neutral: '#2a323c',

					'base-100': '#1d232a',

					info: '#3abff8',

					success: '#22c55e',

					warning: '#fbbd23',

					error: '#f87272',
				},
			},
		],
	},

	plugins: [require('daisyui')],
}
