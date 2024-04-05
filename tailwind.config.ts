import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				"font-size-15": "15px",
				"font-size-17": "17px",
				"font-size-19": "19px",
				"font-size-21": "21px",
				"font-size-24": "24px",
				"font-size-30": "30px",
				"font-size-60": "60px",
			},
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
			borderRadius: {
				"border-10": "10px",
				"border-20": "20px",
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
