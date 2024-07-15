<script context="module">
	import { page } from "$app/stores";
	import { i18n } from "$lib/i18n";
  
	export const languages = ["sv", "en", "jp"];
  import { languageTag } from '$lib/paraglide/runtime.js'
</script>
<!-- TODO make mobile dropdown version -->

<div class="flex flex-row absolute gap-4 h-9 left-[calc(100vw-160px)] top-2">
	<div class="flex flex-row rounded bg-slate-100">
		{#each languages as language}
			<a
				aria-label="{language === 'sv'
					? 'Swedish'
					: language === 'en'
						? 'English'
						: language === 'jp'
							? 'Japanese'
							: 'unknown'} flag"
				class:i-twemoji-flag-sweden={language === "sv"}
				class:i-twemoji-flag-united-kingdom={language === "en"}
				class:i-twemoji-flag-japan={language === "jp"}
				class:!bg-blue-200={language === languageTag()}
				class="right-2 rounded-md px-6 text-4xl"
				hreflang={language}
				href={i18n.route($page.url.pathname)}></a>
		{/each}
	</div>
</div>
