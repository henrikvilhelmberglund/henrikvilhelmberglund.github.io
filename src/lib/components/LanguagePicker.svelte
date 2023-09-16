<script lang="ts">
	import { createRadioGroup, melt } from "@melt-ui/svelte";
	import { t, locales } from "$lib/i18n/i18n";
	import { userPreferredLocale } from "$lib/stores";
	import { getContext } from "svelte";

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked },
	} = createRadioGroup({
		defaultValue: $userPreferredLocale,
		orientation: "horizontal",
	});

	const optionsArr = ["en", "sv", "ja"];

	const locale = getContext("locale");
</script>

<div
	use:melt={$root}
	class="flex flex-col mt-2 gap-3 data-[orientation=horizontal]:flex-row"
	aria-label="View density">
	{#each optionsArr as option}
		<div
			class:outline-orange-500={$isChecked(option)}
			class:outline-solid={$isChecked(option)}
			class:i-openmoji-flag-united-kingdom={option === "en"}
			class:i-openmoji-flag-sweden={option === "sv"}
			class:i-openmoji-flag-japan={option === "ja"}
			class="outline-2 flex h-8 w-12 bg-cover bg-center items-center gap-3 -outline-offset-3">
			<button
				use:melt={$item(option)}
				on:click={() => {
					$userPreferredLocale = option;

					// ? this gives an error but locale is always a store, probably TS issue
					$locale = option;
				}}
				class="grid h-8 w-12 cursor-default place-items-center rounded-full
      "
				id={option}
				aria-labelledby="{option}-label" />
		</div>
	{/each}
</div>
