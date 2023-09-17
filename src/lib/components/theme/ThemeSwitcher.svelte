<script>
	import { color } from "$lib/stores";
	import { themeColors } from "./theme";

	let selectedTheme;

	$: {
		if (selectedTheme) {
			themeColors.forEach((theme) => {
				document.documentElement.classList.remove(theme);
			});
			$color = selectedTheme;
			document.documentElement.classList.add(selectedTheme);
		}
	}
</script>

{#each themeColors as themeColor}
	<button
		on:click={() => (selectedTheme = themeColor)}
		aria-label="theme: {themeColor}"
		class:bg-green-500={themeColor === "green"}
		class:bg-pink-500={themeColor === "pink"}
		class:bg-blue-500={themeColor === "blue"}
		class:bg-[#ff7d32]={themeColor === "svelty"}
		class="mx-2 rounded p-2 text-transparent md:h-10 md:w-10 md:p-2 inline-block" />
{/each}

<style>
</style>
