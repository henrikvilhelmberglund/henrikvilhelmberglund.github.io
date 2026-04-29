<script context="module">
	export const languages = ["sv", "en", "jp"];
</script>

<script>
	import { page } from "$app/stores";
	import { getLocale } from "../../locales/main.url.js";
	import { localizeUrl, stripLocale } from "../../locales/url-helpers.js";

	let currentLocale = $derived(getLocale($page.url));
	let canonicalPath = $derived(stripLocale($page.url.pathname));
</script>

<div class="flex flex-row absolute gap-4 sm:h-9 left-[calc(100vw-64px)] sm:left-[calc(100vw-160px)] top-2">
	<div class="flex flex-col sm:flex-row rounded bg-slate-100">
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
				class:!bg-blue-200={language === currentLocale}
				class="right-2 rounded-md px-6 py-4 text-4xl"
				hreflang={language}
				href={localizeUrl(canonicalPath, language)}
				data-sveltekit-reload></a>
		{/each}
	</div>
</div>
