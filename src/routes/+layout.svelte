<script>
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import ThemeDropdown from "$lib/components/theme/ThemeDropdown.svelte";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/components/theme/ThemeSwitcher.svelte";
	import "@unocss/reset/tailwind.css";
	import LanguagePickerDropdown from "$lib/components/LanguagePickerDropdown.svelte";
	import { t, locale } from "$lib/i18n/i18n";
	import Socials from "$lib/components/Socials.svelte";

	const routes = [
		{ display: "home", url: "/" },
		{ display: "projects", url: "/projects" },
	];
	let currentPage;

	$: if (browser) {
		currentPage = $page.route;
	}

	// $: console.log($locale);
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 font-quicksand flex min-h-screen w-screen max-w-full flex-col items-center">
	<header class="flex">
		<nav
			class="shadow-primary-200 dark:shadow-primary-800 dark:bg-primary-950 relative flex h-14 w-screen max-w-full items-center justify-center gap-12 bg-white shadow-lg">
			{#each routes as { url, display }}
				<a
					class:shadow-inner={url === currentPage?.id}
					class="hover:bg-primary-200 dark:hover:bg-primary-900 dark:bg-primary-950 rounded bg-white bg-white p-2 text-3xl text-black dark:text-white"
					href={url}>{$t(`nav.${display}`)}</a>
			{/each}
			<Socials />
		</nav>
		<aside class="absolute left-0 top-2 hidden lg:block">
			<ThemeSwitcher />
			<DarkModeToggle />
		</aside>
		<aside class="absolute md:hidden">
			<ThemeDropdown />
		</aside>
		<aside class="absolute right-0 top-0 hidden max-w-full justify-end md:block">
			<LanguagePicker />
		</aside>
		<aside class="absolute right-0 top-0 max-w-full justify-end md:hidden">
			<LanguagePickerDropdown />
		</aside>
	</header>
	<slot />
</main>

<style>
</style>
