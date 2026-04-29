// @ts-check
import { defineConfig } from "wuchale"
import { adapter as svelte } from "@wuchale/svelte"

export default defineConfig({
	locales: ["sv", "en", "jp"],
	adapters: {
		main: svelte({
			loader: "sveltekit",
			url: {
				localize: true,
				patterns: ["/", "/projects"],
			},
			files: {
				include: ["src/**/*.svelte", "src/**/*.svelte.{js,ts}"],
				ignore: ["src/routes/svg/**"],
			},
		}),
	},
})
