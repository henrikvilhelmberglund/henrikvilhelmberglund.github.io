<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { browser } from "$app/environment";
	import { color } from "$lib/stores";
	import H1 from "$lib/components/H1.svelte";
	import { t } from "$lib/i18n/i18n";
	import H2 from "$lib/components/H2.svelte";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 w-screen max-w-full flex min-h-screen flex-col items-center [&>*]:my-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>

	<H1>{$t("common.name")}</H1>
	<H2>Welcome to my profile page!</H2>
	<p class="text-primary-900 dark:text-primary-100">This is the {$color} theme.</p>
	<button class="btn-primary">A {$color} button</button>
	<button class="btn-secondary">A {$color} secondary button</button>
</main>

<Footer />

<style>
</style>
