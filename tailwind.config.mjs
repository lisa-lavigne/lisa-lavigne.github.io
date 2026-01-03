/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
		  fontFamily: {
			heading: ['NeueMontereal', 'sans-serif'],
			subheading: ['Poppins', 'sans-serif'],
			body: ['Poppins', 'sans-serif']
		  },
		  letterSpacing: {
			'heading': '-2px'
		  },
		  fontSize: {
			'h1': '120px',
			'h2': '56px',
			'h3': '48px',
			'h4': '40px',
			'h5': '32px',
			'sb1': '24px',
			'body-sm': '14px',
			'body-md': '16px'
		  },
		  colors: {
			primary: {
				DEFAULT: '#ffffff',
				100: '#ffffff'
			},
			secondary: {
				DEFAULT: '#0A0908',
				100: '#E9E9E9',
				200: '#B0AEAC',
				300: '#5E5C5A',
				400: '#32302E',
				500: '#0A0908'
			},
			tertiary: {
				DEFAULT: '#A799EF',
				100: '#E7E2FF',
				200: '#D6CEFE',
				300: '#A799EF'
			},
			accent: {
				DEFAULT: '#6F5AD7',
				100: '#6F5AD7'
			}
		  }
		}
	  },
	plugins: [],
}
