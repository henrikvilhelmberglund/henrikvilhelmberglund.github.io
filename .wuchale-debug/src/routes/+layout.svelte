<script>
	import { page } from "$app/stores";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/components/theme/ThemeSwitcher.svelte";
	import Socials from "$lib/components/Socials.svelte";
	import Footer from "$lib/Footer.svelte";
	import { localizeUrl } from "../locales/url-helpers.js";

	
import {getRuntime as _w_load_, getRuntimeRx as _w_load_rx_} from "../../../src/locales/main.loader.server.svelte.js"

import W_tx_ from "@wuchale/svelte/runtime.svelte"

const _w_runtime_ = $derived(_w_load_rx_('main'));
let { data, children } = $props();

	let currentPage = $derived($page.route);
	let locale = $derived(data.locale);

	// ? View transitions
	import { onNavigate } from "$app/navigation";
	import { cubicOut, linear } from "svelte/easing";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let hueValue = $state(0);
	let lastTime = $state(0);
	let fps = 60;
	const interval = 1000 / fps;

	// function animateHue(now) {
	// 	if (!lastTime) {
	// 		lastTime = now;
	// 	}
	// 	const delta = now - lastTime;
	// 	if (delta > interval) {
	// 		if (hueValue < 360) {
	// 			hueValue += 0.2;
	// 		} else {
	// 			hueValue = 0;
	// 		}
	// 		hueValue = parseFloat(hueValue.toFixed(2));
	// 		lastTime = now;
	// 	}
	// 	requestAnimationFrame(animateHue);
	// }

	// $effect(() => {
		// const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
		// if (!isReduced) {
			// requestAnimationFrame(animateHue);
		// } else {
			// hueValue = Math.random() * 360;
		// }
	// });
</script>

{#if currentPage.id?.startsWith('/svg')}
	{@render children()}
{:else}
	<main
		style="--hue: {hueValue};"
		id="layout-div"
		class="dark:from-random-950 to-random-300 from-random-100 font-quicksand scrollbar-fix flex min-h-screen flex-col items-center bg-gradient-to-b pb-24 md:pb-12 dark:to-black">
		<header
			class="dark:bg-random-900 shadow-random-200 dark:shadow-random-800 flex w-full justify-center bg-white shadow-lg">
			<nav class="relative flex h-14 max-w-full items-center justify-center gap-12">
				<a
					class:underline={currentPage?.id === "/"}
					class="hover:bg-random-200 underline-random-300 dark:underline-random-600 dark:hover:bg-random-950 dark:bg-random-900 rounded bg-white p-2 text-2xl text-black decoration-2 underline-offset-4 md:text-3xl dark:text-white"
					href={localizeUrl("/", locale)}>{_w_runtime_(0)}</a>
				<a
					class:underline={currentPage?.id === "/projects"}
					class="hover:bg-random-200 underline-random-300 dark:underline-random-600 dark:hover:bg-random-950 dark:bg-random-900 rounded bg-white p-2 text-2xl text-black decoration-2 underline-offset-4 md:text-3xl dark:text-white"
					href={localizeUrl("/projects", locale)}>{_w_runtime_(1)}</a>
				<Socials />
			</nav>
			<aside class="absolute left-0 top-2 hidden md:block">
				<ThemeSwitcher />
				<DarkModeToggle />
			</aside>
			<LanguagePicker />
		</header>
		{@render children()}
	</main>

	<Footer />
{/if}

<style>
</style>
