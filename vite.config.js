import { paraglide } from '@inlang/paraglide-sveltekit/vite'
import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";

import { defineConfig } from "vite";
export default defineConfig({
	plugins: [paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
		UnoCSS({
			injectReset: "@unocss/reset/tailwind.css",
		}),
		sveltekit(),
	],
});
