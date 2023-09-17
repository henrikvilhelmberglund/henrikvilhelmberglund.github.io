<script>
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
	import { t } from "$lib/i18n/i18n";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;
</script>

<svelte:head>
  <title>{$t("common.SEOtitle")}</title>
</svelte:head>

<section class="flex flex-col items-center pt-20">
	<H1>{$t("common.greeting")}</H1>
	<WhiteTextBox>
		<p class=" text-lg">{$t("common.introduction")}</p>
		<p class="py-6 text-lg">{$t("common.purpose")}</p>
		<a
			href="/projects"
			class="hover:bg-primary-200 hover:dark:bg-primary-400 bg-primary-100 dark:bg-primary-700 shadow-primary-300 dark:shadow-primary-500 dark:text-primary-200 self-center rounded-2xl p-2 text-4xl shadow-xl transition-all"
			>{$t("nav.cta")}</a>
	</WhiteTextBox>
</section>


<style>
</style>
