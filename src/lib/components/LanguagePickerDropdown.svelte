<script>
	import { createDropdownMenu, melt } from "@melt-ui/svelte";
	import { fly } from "svelte/transition";
	import { t, locale, locales } from "$lib/i18n/i18n";

	const optionsArr = ["en", "sv", "ja"];

	const {
		elements: { menu, item, trigger, arrow },
		states: { open },
	} = createDropdownMenu();
</script>

<button
	class:i-openmoji-flag-united-kingdom={$locale === "en"}
	class:i-openmoji-flag-sweden={$locale === "sv"}
	class:i-openmoji-flag-japan={$locale === "ja"}
	class="mt-3 h-[40px] w-[40px]"
	use:melt={$trigger} />
{#if $open}
	<div class="" use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<div
			class="bg-primary-300 dark-bg-primary-800 flex flex-col gap-1 rounded-md rounded-t-none p-2">
			{#each optionsArr as option}
				<div class="flex h-12 w-12 items-center gap-3">
					<button
						class:i-openmoji-flag-united-kingdom={option === "en"}
						class:i-openmoji-flag-sweden={option === "sv"}
						class:i-openmoji-flag-japan={option === "ja"}
						on:click={() => ($locale = option)}
						class="grid h-12 w-12 cursor-default place-items-center rounded-full
        shadow-sm"
						id={option}
						aria-label="{option} flag" />
				</div>
			{/each}
		</div>
	</div>
{/if}
