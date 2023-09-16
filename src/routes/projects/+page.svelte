<script>
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
  import { t } from "$lib/i18n/i18n";
  import { sanitize } from "isomorphic-dompurify";
  import { marked } from "marked";

	export let data;
	$: projects = data.projects;
</script>


<section class="flex w-full flex-col items-center pt-20">
	<H1>{@html sanitize(marked.parse($t("projects.title")))}</H1>
	<WhiteTextBox>
		<p class="text-lg">{@html sanitize(marked.parse($t("projects.introduction")))}</p>
	</WhiteTextBox>
	<div class="mt-8 flex w-full flex-wrap">
		{#each Object.entries(projects) as [key, { url, github, hostedOn }]}
			<article
				class="dark:bg-primary-900 m-4 mx-auto flex w-[90vw] flex-col rounded rounded-t-xl bg-white dark:text-white md:m-2 md:h-fit md:w-[500px]">
				<div class="relative [&>*]:rounded-t-xl">
					<h2 class="p-2 text-center text-4xl">{key}</h2>
					<div
						class="bg-primary-900/15 mask-bg-hero-diagonal-stripes dark:bg-primary-100/5 absolute left-0 top-0 h-full w-full" />
				</div>
				<div class="flex flex-1 flex-col gap-4 p-4">
					<p class="markdown flex-1 break-words">
						{@html sanitize(marked.parse($t(`projects.${key}.desc`)))}
					</p>
					<div class="md:mt-6">
						<span
							class="text-2xl"
							class:i-devicon-vercel-wordmark={hostedOn === "Vercel"}
							class:i-devicon-github-wordmark={hostedOn === "Github Pages"} />
						<!-- TODO add the rest of the sites -->
						<a class="break-words align-middle text-blue-600 dark:text-blue-300" href={url}
							>{url}</a>
					</div>
					<div>
						<span class="i-devicon-github text-2xl" />
						<a class="break-words align-middle text-blue-600 dark:text-blue-300" href={github}
							>{github}</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	/* for links inside i18n .json */
	:global(.markdown a) {
		@apply dark-text-blue-300 text-blue-600;
	}
</style>
