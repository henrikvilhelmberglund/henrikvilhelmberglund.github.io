<script>
	import H1 from "$lib/components/H1.svelte";
	import { t } from "$lib/i18n/i18n";
</script>

<section class="flex flex-col items-center pt-12">
	<H1>{$t("projects.title")}</H1>
	<!-- TODO refactor into component (make it look the same as / route) -->
	<div
		class="dark:bg-primary-900 mt-24 flex max-w-[50%] flex-col rounded-md bg-white p-12 text-black dark:text-white">
		<p class=" text-lg">{$t("projects.introduction")}</p>
	</div>
</section>

<style>
</style>
