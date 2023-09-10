<script>
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import "@unocss/reset/tailwind.css";

	const routes = {
		home: { display: "Home", url: "/" },
		projects: { display: "Projects", url: "/projects" },
	};
</script>

<nav class="shadow-primary-200 relative flex h-14 max-w-full w-screen shadow-lg">Home</nav>
<nav class="absolute right-0  max-w-full top-0 justify-end">
	<LanguagePicker />
</nav>
<slot />

<style></style>
