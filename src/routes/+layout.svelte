<script>
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import ThemeDropdown from "$lib/components/theme/ThemeDropdown.svelte";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/components/theme/ThemeSwitcher.svelte";
	import "@unocss/reset/tailwind.css";
	import LanguagePickerDropdown from "$lib/components/LanguagePickerDropdown.svelte";
	import { t } from "$lib/i18n/i18n";
	import Socials from "$lib/components/Socials.svelte";
	import { onMount, setContext } from "svelte";
	import Footer from "$lib/Footer.svelte";

	let loaded = false;

	onMount(() => {
		loaded = true;
	});

	export let data;

	const routes = [
		{ display: "home", url: "/" },
		{ display: "projects", url: "/projects" },
	];
	let currentPage;

	$: if (browser) {
		currentPage = $page.route;
	}

	setContext("locale", data.locale);

	// $: console.log($locale);

	// ? View transitions

	import { onNavigate } from "$app/navigation";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main
	class="bg-gradient-to-b dark:from-primary-950 dark:to-black to-primary-300 from-primary-100 font-quicksand flex min-h-screen w-screen flex-col items-center">
	<header
		class="dark:bg-primary-900 shadow-primary-200 dark:shadow-primary-800 flex w-full justify-center bg-white shadow-lg">
		<nav class="  relative flex h-14 max-w-full items-center justify-center gap-12">
			{#each routes as { url, display }}
				<a
					class:underline={url === currentPage?.id}
					class="hover:bg-primary-200 underline-primary-300 dark:underline-primary-600 dark:hover:bg-primary-950 dark:bg-primary-900 rounded bg-white bg-white p-2 text-3xl text-black decoration-2 underline-offset-4 dark:text-white"
					href={url}>{$t(`nav.${display}`)}</a>
			{/each}
			<Socials />
		</nav>
		<aside class="absolute left-0 top-2 hidden lg:block">
			<ThemeSwitcher />
			<DarkModeToggle />
		</aside>
		<aside class="absolute left-0 md:hidden">
			<ThemeDropdown />
		</aside>
		<aside class="absolute right-0 top-0 hidden max-w-full justify-end md:block">
			<LanguagePicker />
		</aside>
		<aside class="absolute right-0 top-0 max-w-full justify-end md:hidden">
			<LanguagePickerDropdown />
		</aside>
	</header>
	{#if !loaded}
		<div class="fixed flex h-[100vh] w-[100vw] items-center justify-center">
			<span class="i-carbon-sun !text-primary-600 h-32 w-32 animate-spin" />
			<p class="text-2xl">Loading...</p>
		</div>
	{:else}
		<slot />
	{/if}
</main>

<Footer />

<style>
</style>
