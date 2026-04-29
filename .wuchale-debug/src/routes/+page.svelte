<script>
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
	import { localizeUrl } from "../locales/url-helpers.js";

	
import {getRuntime as _w_load_, getRuntimeRx as _w_load_rx_} from "../../../src/locales/main.loader.server.svelte.js"

import W_tx_ from "@wuchale/svelte/runtime.svelte"

const _w_runtime_ = $derived(_w_load_rx_('main'));
let { data } = $props();
	let locale = $derived(data.locale);
</script>

<svelte:head>
	<title>{_w_runtime_(3)}</title>
	<meta
		name="description"
		content={_w_runtime_(4)} />
</svelte:head>

<section id="page-section" class="flex flex-col items-center pt-20">
	<H1>{_w_runtime_(5)}</H1>
	<WhiteTextBox>
		<p class="text-lg">
			{_w_runtime_(6)}
		</p>
		<p class="py-6 text-lg">
			{_w_runtime_(7)}
		</p>
		<a
			href={localizeUrl("/projects", locale)}
			class="hover:bg-random-200 hover:dark:bg-random-400 bg-random-100 dark:bg-random-700 shadow-random-300 dark:shadow-random-500 dark:text-random-200 self-center rounded-2xl p-2 text-4xl shadow-xl"
			>{_w_runtime_(1)}</a>
	</WhiteTextBox>
</section>

<style>
</style>
