<script lang="ts">
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";

	import * as m from "$lib/paraglide/messages.js";
	import { languageTag } from "$lib/paraglide/runtime.js";
	import { syncAnims } from "$lib/utils";

	// let color = "blue";
  
  // used previously when using CSS animations
	// let page: Element;
	// $effect(() => {
	// 	// not yet mounted
	// 	if (!page) return;
	// 	queueMicrotask(() => {
	// 		syncAnims({
	// 			animName: "hue-anim",
	// 			fromElementName: "#page-section",
	// 			toElementName: "#layout-div",
	// 		});
	// 	});
	// });
</script>

<svelte:head>
	<title>{m.SEOtitle()}</title>
	<meta name="description" content={m.SEOdescription()} />
</svelte:head>

<section bind:this={page} id="page-section" class="flex flex-col items-center pt-20">
	<H1>{m.greeting()}</H1>
	<WhiteTextBox>
		<p class="text-lg">{m.introduction()}</p>
		<p class="py-6 text-lg">{m.purpose()}</p>
		<a
			href="/projects"
			class="hover:bg-random-200 hover:dark:bg-random-400 bg-random-100 dark:bg-random-700 shadow-random-300 dark:shadow-random-500 dark:text-random-200 self-center rounded-2xl p-2 text-4xl shadow-xl"
			>{m.cta()}</a>
	</WhiteTextBox>
</section>

<style>
</style>
