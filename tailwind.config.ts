import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        global: "#616cff"
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(44.68786392067387deg, #616CFF 0%, #68A4FF 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
