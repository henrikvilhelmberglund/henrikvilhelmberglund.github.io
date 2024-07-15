import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { colors } from "@unocss/preset-mini";
import { createSafeList } from "./safelist.js";
import { themes } from "./src/lib/components/theme/theme.js";
import presetTheme from "unocss-preset-theme";

export const reloadMe = true;

export default defineConfig({
  rules: [
    [/^scrollbar-fix$/, ([,]) => ({ "padding-left": "calc(100vw - 100%)" })],
  ],
	variants: [],
	shortcuts: {
		"btn-primary":
			"bg-random-400 outline-random-500 outline-2 text-base-100 dark:bg-random-700 dark:hover:active:(bg-random-500 translate-y-1) transition-transform hover:active:(bg-random-100 translate-y-1) dark:hover:bg-random-600 hover:bg-random-300 p-2 rounded-lg shadow-md",
		"btn-secondary":
			"bg-secondary-400 outline-secondary-500 outline-2 text-base-100 dark:bg-secondary-700 dark:hover:active:(bg-secondary-500 translate-y-1)  transition-transform hover:active:(bg-secondary-100 translate-y-1)  dark:hover:bg-secondary-600 hover:bg-secondary-300 p-2 rounded-lg shadow-md",
	},
	safelist: [
		...Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i)).map(
			(char) => `font-${char}`
		),
		...createSafeList(),
		`font-thin font-extralight font-light font-normal font-medium font-semibold font-bold font-extrabold font-black
        btn-primary btn-secondary`,
	],
	theme: {
		animation: {
			// keyframes: {
			// 	hue: "{0% {var(--hue):0} 50% {var(--hue):360} 100% {var(--hue):0}",
			// },
			// durations: {
			// 	hue: "2s",
			// },
			// counts: {
			// 	hue: "infinite",
			// },
		},
		colors: {
			random: {
				50: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 30%, oklch(100% 0 360))",
				100: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 80%, oklch(100% 0 360))",
				200: "oklch(90% 0.12 var(--hue))",
				300: "oklch(85% 0.20 var(--hue))",
				400: "oklch(74% 0.20 var(--hue))",
				500: "oklch(62% 0.20 var(--hue))",
				600: "oklch(54% 0.23 var(--hue))",
				700: "oklch(49% 0.21 var(--hue))",
				800: "oklch(42% 0.17 var(--hue))",
				900: "oklch(37% 0.14 var(--hue))",
				950: "oklch(29% 0.09 var(--hue))",
				960: "oklch(23% 0.09 var(--hue))",
				970: "oklch(17% 0.09 var(--hue))",
				980: "oklch(11% 0.09 var(--hue))",
				990: "oklch(6% 0.09 var(--hue))",
			},
		},
	},
	presets: [
		presetUno({ dark: "class" }),
		presetForms(),
		presetTheme({
			theme: themes,
		}),
		presetHeroPatterns(),
		presetWebFonts({
			provider: "google", // default provider
			fonts: {
				// these will extend the default theme
				sans: "Roboto",
				mono: ["Fira Code", "Fira Mono:400,700"],
				// custom ones
				lobster: "Lobster",
				lato: [
					{
						name: "Lato",
						weights: ["400", "700"],
						italic: true,
					},
					{
						name: "sans-serif",
						provider: "none",
					},
				],
				a: "Playfair Display",
				b: "Lora",
				quicksand: "Quicksand",
			},
		}),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				// "vertical-align": "middle",
				// ...
			},
		}),
	],
});
