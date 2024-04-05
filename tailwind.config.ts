import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {			
			colors: {
				"primary-color": "#161C2D",
				"secondary-color": "#473BF0",
				"tertiary-color": "#111827",
				"quaternary-color": "#D1D5DB",
        "quinary-color": "#292F41",
			},
			fontFamily: {
				gilroyLight: ["GilroyLight", "sans-serif"],
				gilroyExtraBold: ["GilroyExtraBold", "sans-serif"],
			},		
			fontWeight: {
				"font-400": "400",
				"font-700": "700",
			},
		},
	},
	plugins: [],
};
export default config;
