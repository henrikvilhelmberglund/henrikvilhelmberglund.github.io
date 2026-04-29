<script>
	
import {getRuntime as _w_load_, getRuntimeRx as _w_load_rx_} from "../../../../src/locales/main.loader.server.svelte.js"

import W_tx_ from "@wuchale/svelte/runtime.svelte"

const _w_runtime_ = $derived(_w_load_rx_('main'));
const socials = $derived([
		{ name: _w_runtime_(8), link: "https://github.com/henrikvilhelmberglund" },
		{
			name: _w_runtime_(9),
			link: "https://www.linkedin.com/in/henrikvilhelmberglund/",
		},
		{ name: _w_runtime_(10), link: "https://twitter.com/henrikvberglund" },
	]);
</script>

<section
	class="shadow-random-200 dark:shadow-random-800 dark:bg-random-900 absolute top-14 flex gap-2 self-baseline rounded-b-3xl bg-white shadow-lg">
	<h2 class="hidden text-center text-2xl">{_w_runtime_(11)}</h2>
	{#each socials as { link, name, icon }}
		<a class="hover:dark:bg-random-950 hover:bg-random-200 rounded-2xl group" href={link}>
			<article
				aria-label={name}
				class:i-mdi-twitter={name === "Twitter"}
				class:!text-blue-400={name === "Twitter"}
				class:i-mdi-github?mask={name === "Github"}
				class:i-mdi-linkedin={name === "LinkedIn"}
				class:!text-blue-600={name === "LinkedIn"}
				class="h-12 w-12 text-black dark:text-slate-200 "></article></a>
	{/each}
</section>

<style>
</style>
