import type { Config } from "tailwindcss";

import Typography from "@tailwindcss/typography";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				botSpeech: {
					'0%': {
						transform: 'scale(0.8) rotate(0deg)'
					},
					'50%': {
						transform: 'scale(1.2) rotate(360deg)'
					},
					'100%': {
						transform: 'scale(0.8) rotate(720deg)'
					}
				}
			},
			colors: {
				global: '#616cff'
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				rotateSlowly: 'spin 5s linear infinite',
				botSpeech: 'botSpeech 2.5s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-text': 'linear-gradient(44.68786392067387deg, #616CFF 0%, #68A4FF 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [Typography],
};
export default config;
