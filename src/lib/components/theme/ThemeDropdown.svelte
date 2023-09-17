<script>
	import { createDropdownMenu, melt } from "@melt-ui/svelte";
	import { color } from "$lib/stores";
	import { themeColors } from "./theme";
	import { fly } from "svelte/transition";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";

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

	const {
		elements: { menu, item, trigger, arrow },
		states: { open },
	} = createDropdownMenu();
</script>

<button class="i-carbon:color-palette !bg-primary-900 mt-3 h-[40px] w-[40px]" use:melt={$trigger} />
{#if $open}
	<div class="!left-0" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<div class="bg-primary-300 dark-bg-primary-800 flex flex-col gap-1 p-2 rounded-md rounded-t-none">
			{#each themeColors as themeColor}
				<button
					on:click={() => (selectedTheme = themeColor)}
          class:bg-green-500={themeColor === "green"}
          class:bg-pink-500={themeColor === "pink"}
          class:bg-blue-500={themeColor === "blue"}
          class:bg-[#ff7d32]={themeColor === "svelty"}
					class="item h-10 w-10 rounded p-2 text-transparent md:p-2" />
			{/each}
			<DarkModeToggle />
		</div>
	</div>
{/if}
