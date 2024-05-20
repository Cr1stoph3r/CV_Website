export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ffffff',
				primaryDark: '#414853',
				secondary: '#949ead94',
				secondaryHover: '#ffffff',
				textPrimary: '#4f5f76',
				textSecondary: '#FFFFFF80',
				textGray: '#4f5f7690',
				textBlue: '#2b6cb0',
			},
		},
	},
	variants: {
		extend: {
		  margin: ['marker'], 
		},
	  },
	plugins: [],
}
