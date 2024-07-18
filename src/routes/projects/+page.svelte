<script lang="ts">
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
	import DOMPurify from "isomorphic-dompurify";
	import { marked } from "marked";

	import * as m from "$lib/paraglide/messages.js";
	import { languageTag } from "$lib/paraglide/runtime.js";
	import { syncAnims } from "$lib/utils";

	$effect(() => {
		syncAnims({
			animName: "hue-anim",
			fromElementName: "#projects-section",
			toElementName: "#layout-div",
		});
	});
	const { data } = $props();
	const projects = $derived(data.projects);

  type Message = Record<string, Function>;
</script>

<svelte:head>
	<title>{m.projects_SEOtitle()}</title>
	<meta name="description" content={m.projects_SEOdescription()} />
</svelte:head>

<section id="projects-section" class="flex w-full flex-col items-center pt-20">
	<H1>{@html DOMPurify.sanitize(marked.parse(m.projects_title()))}</H1>
	<WhiteTextBox>
		<div class="text-lg">
			{@html DOMPurify.sanitize(marked.parse(m.projects_introduction()))}
		</div>
	</WhiteTextBox>
	<div class="mt-8 flex w-full flex-wrap md:w-[60vw] md:justify-center md:gap-8 md:pb-24">
		{#each Object.entries(projects) as [key, { url, github, hostedOn }]}
			<article
				class="dark:bg-random-970 m-4 mx-auto flex w-[90vw] flex-col rounded rounded-t-xl bg-white dark:text-white md:m-2 md:h-fit md:w-[530px]">
				<div class="relative [&>*]:rounded-t-xl">
					<h2
						class="break-words p-2 text-center text-4xl text-random-800 dark:text-random-300 md:break-normal">
						<a class="" href={url}>{key}</a>
					</h2>
					<div
						class="bg-random-200/15 mask-bg-hero-diagonal-stripes dark:bg-random-900/5 pointer-events-none absolute left-0 top-0 h-full w-full">
					</div>
				</div>
				<div class="flex flex-1 flex-col gap-4 p-4">
					<div class="markdown flex-1 break-words">
						{#if key}
							{@const text = (m as Message)[`${key.replaceAll(".", "_").replaceAll("-", "_")}`]?.()}
              {#if text}                
							{@html DOMPurify.sanitize(marked.parse(text))}
              {:else}
              <p>{key} missing</p>
              {/if}
						{/if}
					</div>
					<div class="md:mt-6">
						<span
							class="text-2xl align-bottom"
							title={hostedOn}
							class:i-devicon-vercel-wordmark={hostedOn === "Vercel"}
							class:i-devicon-cloudflare-wordmark={hostedOn === "Cloudflare Pages"}
							class:i-devicon-github-wordmark={hostedOn === "Github Pages"}></span>
						<a class="break-words text-blue-600 dark:text-blue-300" href={url}> {url}</a>
					</div>
					<div>
						<span class="i-devicon-github text-2xl align-bottom"></span>
						<a class="break-words text-blue-600 dark:text-blue-300" href={github}> {github}</a>
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
