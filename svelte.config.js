// use adapter-auto for zero config deployment to Vercel, adapter-static for Github Pages
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({ script: true }),
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "shift",
			holdMode: true,
		},
	},
};

export default config;
