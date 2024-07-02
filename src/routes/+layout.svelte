<script lang="ts">
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { i18n } from "$lib/i18n";
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import ThemeDropdown from "$lib/components/theme/ThemeDropdown.svelte";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/components/theme/ThemeSwitcher.svelte";
	import Socials from "$lib/components/Socials.svelte";
	import { onMount, setContext } from "svelte";
	import Footer from "$lib/Footer.svelte";

	import * as m from "$lib/paraglide/messages.js";
	import { languageTag } from "$lib/paraglide/runtime.js";

	// export let data;

	const routes = [
		{ display: "home", url: "/" },
		{ display: "projects", url: "/projects" },
	];
	let currentPage;

	$: if (browser) {
		currentPage = $page.route;
	}

	// ? View transitions

	import { onNavigate } from "$app/navigation";
	import { type Message } from "$lib/types/messageType.js";

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

<ParaglideJS {i18n}>
	<main
		class="dark:from-primary-950 to-primary-300 from-primary-100 font-quicksand flex min-h-screen w-screen flex-col items-center bg-gradient-to-b pb-24 dark:to-black md:pb-12">
		<header
			class="dark:bg-primary-900 shadow-primary-200 dark:shadow-primary-800 flex w-full justify-center bg-white shadow-lg">
			<nav class="relative flex h-14 max-w-full items-center justify-center gap-12">
				{#each routes as { url, display }}
					<a
						class:underline={url === currentPage?.id}
						class="hover:bg-primary-200 underline-primary-300 dark:underline-primary-600 dark:hover:bg-primary-950 dark:bg-primary-900 rounded bg-white bg-white p-2 text-2xl text-black decoration-2 underline-offset-4 dark:text-white md:text-3xl"
						href={url}>{(m as Message)[`${display}`]()}</a>
				{/each}
				<Socials />
			</nav>
			<aside class="absolute left-0 top-2 hidden md:block">
				<ThemeSwitcher />
				<DarkModeToggle />
			</aside>
			<aside class="absolute left-0 md:hidden">
				<ThemeDropdown />
			</aside>
			<LanguagePicker />
		</header>
		<slot />
	</main>

	<Footer />
</ParaglideJS>

<style>
</style>
