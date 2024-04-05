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
        'text-15': '15px',
        'text-17': '17px',
        'text-21': '21px',
        'text-24': '24px',
        'text-60': '60px',
      },
      colors: {
        'primary-color': '#161C2D',
        'secondary-color': '#473BF0',               
      },
      fontFamily: {        
        'gilroyLight': ['GilroyLight', 'sans-serif'],
        'gilroyExtraBold': ['GilroyExtraBold', 'sans-serif'],
      },
      borderRadius: {
        'border-10': '10px',
        'border-20': '20px',
      },
      fontWeight: {
        'font-400': '400',
        'font-700': '700',
      }    
    },
  },
  plugins: [],
};
export default config;
