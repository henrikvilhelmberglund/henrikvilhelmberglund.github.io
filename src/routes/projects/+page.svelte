<script>
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
	import { t } from "$lib/i18n/i18n";
	export let data;
	$: projects = data.projects;
</script>

<section class="flex flex-col items-center pt-12">
	<H1>{$t("projects.title")}</H1>
	<WhiteTextBox>
		<p class=" text-lg">{$t("projects.introduction")}</p>
	</WhiteTextBox>
	{#each Object.entries(projects) as [key, { url, github }]}
		<article class="m-2 rounded bg-white p-4">
			<h2 class="text-4xl">{key}</h2>
			<p>{$t(`projects.${key}.desc`)}</p>
			Link:<a class="text-blue-600" href={url}>{url}</a>
			Github: <a class="text-blue-600" href={github}>{github}</a>
		</article>
	{/each}
</section>

<style>
</style>
