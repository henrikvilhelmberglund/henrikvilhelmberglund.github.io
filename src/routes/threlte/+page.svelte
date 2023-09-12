<script>
	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";
	import { browser } from "$app/environment";
</script>

<div class="h-screen w-screen">
	<div class="absolute" />
	<Canvas>
		{#if browser}
			<Scene />
		{/if}
	</Canvas>
</div>

<style>
</style>
