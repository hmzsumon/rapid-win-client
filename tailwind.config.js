/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
export default withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			black_1: '#0C1119',
			black_2: '#16202D',
		},
		extend: {},
	},
	plugins: [],
});
