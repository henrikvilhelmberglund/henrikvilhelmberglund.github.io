<script>
	import Footer from "$lib/Footer.svelte";
	import H1 from "$lib/components/H1.svelte";
	import { t } from "$lib/i18n/i18n";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;
</script>

<section class="flex flex-col items-center pt-12">
	<H1>{$t("common.greeting")}</H1>
	<div
		class="dark:bg-primary-900 mt-12 flex max-w-[90%] flex-col rounded-md bg-white p-4 text-black dark:text-white md:mt-12 md:max-w-[50%] md:p-12">
		<p class=" text-lg">{$t("common.introduction")}</p>
		<p class="py-6 text-lg">{$t("common.purpose")}</p>
		<a
			href="/projects"
			class="hover:bg-primary-200 hover:dark:bg-primary-400 bg-primary-100 dark:bg-primary-700 shadow-primary-300 dark:shadow-primary-500 dark:text-primary-200 self-center rounded-2xl p-2 text-4xl shadow-xl transition-all"
			>{$t("nav.cta")}</a>
	</div>
</section>

<Footer />

<style>
</style>
