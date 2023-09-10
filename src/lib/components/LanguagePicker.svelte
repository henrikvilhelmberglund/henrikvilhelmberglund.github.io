<script lang="ts">
	import { createRadioGroup, melt } from "@melt-ui/svelte";
	import { t, locale, locales } from "$lib/i18n/i18n";

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
	} = createRadioGroup({
		defaultValue: "en",
		orientation: "horizontal",
	});

	const optionsArr = ["en", "sv", "ja"];
</script>

<div
	use:melt={$root}
	class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row"
	aria-label="View density">
	{#each optionsArr as option}
		<div
			class:i-openmoji-flag-united-kingdom={option === "en"}
			class:i-openmoji-flag-sweden={option === "sv"}
			class:i-openmoji-flag-japan={option === "ja"}
			class="flex h-12 w-12 items-center gap-3">
			<button
				use:melt={$item(option)}
				on:click={() => ($locale = option)}
				class="grid h-12 w-12 cursor-default place-items-center rounded-full
      shadow-sm"
				id={option}
				aria-labelledby="{option}-label">
				{#if $isChecked(option)}
					<div class="h-[30px] w-[46px] rounded-sm border-2 border-orange-500" />
				{/if}
			</button>
		</div>
	{/each}
</div>
