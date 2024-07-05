<script lang="ts">
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { i18n } from "$lib/i18n";
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import ThemeDropdown from "$lib/components/theme/ThemeDropdown.svelte";
	import DarkModeToggle from "$lib/components/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/components/theme/ThemeSwitcher.svelte";
	import Socials from "$lib/components/Socials.svelte";
	import { onMount, setContext } from "svelte";
	import Footer from "$lib/Footer.svelte";

	import * as m from "$lib/paraglide/messages.js";
	import { languageTag } from "$lib/paraglide/runtime.js";
	import { tweened } from "svelte/motion";
	// export let data;

	const routes = [
		{ display: "home", url: "/" },
		{ display: "projects", url: "/projects" },
	];

	let currentPage = $derived($page.route);

	let { data } = $props();

	// ? View transitions

	import { onNavigate } from "$app/navigation";
	import { type Message } from "$lib/types/messageType.js";
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

	function animateHue(now: DOMHighResTimeStamp) {
		if (!lastTime) {
			lastTime = now;
		}
		const delta = now - lastTime;
		if (delta > interval) {
			if (hueValue < 360) {
				hueValue += 0.5;
			} else {
				hueValue = 0;
			}
			lastTime = now;
		}
		requestAnimationFrame(animateHue);
	}

	$effect(() => {
		const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
		if (!isReduced) {
			requestAnimationFrame(animateHue);
		} else {
			hueValue = Math.random() * 360;
		}
	});
</script>

<ParaglideJS {i18n}>
	<!-- color test -->
	<!-- <div class="flex">
		<div class="size-40 bg-random-50"></div>
		<div class="size-40 bg-random-100"></div>
		<div class="size-40 bg-random-200"></div>
		<div class="size-40 bg-random-300"></div>
		<div class="size-40 bg-random-400"></div>
		<div class="size-40 bg-random-500"></div>
		<div class="size-40 bg-random-600"></div>
		<div class="size-40 bg-random-700"></div>
		<div class="size-40 bg-random-800"></div>
		<div class="size-40 bg-random-900"></div>
		<div class="size-40 bg-random-950"></div>
	</div>
	<div class="flex">
		<div class="size-40 bg-randomy-50"></div>
		<div class="size-40 bg-randomy-100"></div>
		<div class="size-40 bg-randomy-200"></div>
		<div class="size-40 bg-randomy-300"></div>
		<div class="size-40 bg-randomy-400"></div>
		<div class="size-40 bg-randomy-500"></div>
		<div class="size-40 bg-randomy-600"></div>
		<div class="size-40 bg-randomy-700"></div>
		<div class="size-40 bg-randomy-800"></div>
		<div class="size-40 bg-randomy-900"></div>
		<div class="size-40 bg-randomy-950"></div>
	</div> -->

	<!-- <div class="flex">
		<div class="size-40 bg-blue-50"></div>
		<div class="size-40 bg-blue-100"></div>
		<div class="size-40 bg-blue-200"></div>
		<div class="size-40 bg-blue-300"></div>
		<div class="size-40 bg-blue-400"></div>
		<div class="size-40 bg-blue-500"></div>
		<div class="size-40 bg-blue-600"></div>
		<div class="size-40 bg-blue-700"></div>
		<div class="size-40 bg-blue-800"></div>
		<div class="size-40 bg-blue-900"></div>
		<div class="size-40 bg-blue-950"></div>
	</div> -->
	<!-- style="animation: hue-anim 2s infinite;" -->

	<main
		style="--hue: {hueValue}"
		id="layout-div"
		class="dark:from-random-950 to-random-300 from-random-100 font-quicksand flex min-h-screen w-screen flex-col items-center bg-gradient-to-b pb-24 dark:to-black md:pb-12">
		<header
			class="dark:bg-random-900 shadow-random-200 dark:shadow-random-800 flex w-full justify-center bg-white shadow-lg">
			<nav class="relative flex h-14 max-w-full items-center justify-center gap-12">
				{#each routes as { url, display }}
					<a
						class:underline={url === currentPage?.id}
						class="hover:bg-random-200 underline-random-300 dark:underline-random-600 dark:hover:bg-random-950 dark:bg-random-900 rounded bg-white p-2 text-2xl text-black decoration-2 underline-offset-4 dark:text-white md:text-3xl"
						href={url}>{(m as Message)[`${display}`]()}</a>
				{/each}
				<Socials />
			</nav>
			<aside class="absolute left-0 top-2 hidden md:block">
				<ThemeSwitcher />
				<DarkModeToggle />
			</aside>
			<aside class="absolute left-0 md:hidden">
				<ThemeDropdown />
			</aside>
			<LanguagePicker />
		</header>
		<slot />
	</main>

	<Footer />
</ParaglideJS>

<style>
	/* TODO calculate random color variables here  */

	/* :root {
		--random-color-50: color-mix(in srgb, oklch(95% 0.10 var(--hue)) 30%, oklch(100% 0 360));
		--random-color-100: color-mix(in srgb, oklch(95% 0.10 var(--hue)) 80%, oklch(100% 0 360));
		--random-color-200: oklch(90% 0.12 var(--hue));
		--random-color-300: oklch(85% 0.20 var(--hue));
		--random-color-400: oklch(74% 0.20 var(--hue));
		--random-color-500: oklch(62% 0.20 var(--hue));
		--random-color-600: oklch(54% 0.23 var(--hue));
		--random-color-700: oklch(49% 0.21 var(--hue));
		--random-color-800: oklch(42% 0.17 var(--hue));
		--random-color-900: oklch(37% 0.14 var(--hue));
		--random-color-950: oklch(29% 0.09 var(--hue));
	} */

	/* :root {
		--hue: 50;
	} */

	/* @property --hue {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
} */
	/* 
	@keyframes -global-hue-anim {
		0% {
			--hue: 0;
		}
		50% {
			--hue: 360;
		}
		100% {
			--hue: 0;
		}
	} */

	/* :global(*) {
		animation: hue-anim 60s infinite linear;
	} */
	/* #layout-div {
		animation: hue-anim 60s infinite linear;
	} */
</style>
