import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";
import { wuchale } from "wuchale/vite";

import { defineConfig } from "vite";
export default defineConfig({
	plugins: [
		UnoCSS({
      injectReset: "@unocss/reset/tailwind.css",
		}),
		wuchale(),
		sveltekit(),
	],
});
