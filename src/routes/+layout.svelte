<script>
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import "@unocss/reset/tailwind.css";

	const routes = [
		{ display: "Home", url: "/" },
		{ display: "Projects", url: "/projects" },
	];
</script>

<nav
	class="shadow-primary-200 dark:shadow-primary-800 relative bg-white dark:bg-primary-950 flex h-14 w-screen max-w-full justify-center items-center gap-12 shadow-lg">
	{#each routes as { url, display }}
		<a class="hover:bg-primary-200 dark:hover:bg-primary-900 bg-white dark:bg-primary-950 text-black dark:text-white rounded bg-white p-2 text-3xl" href={url}>{display}</a>
	{/each}
</nav>
<nav class="absolute right-0 top-0 max-w-full justify-end">
	<LanguagePicker />
</nav>
<slot />

<style></style>
