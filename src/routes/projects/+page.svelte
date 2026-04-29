<script>
	import H1 from "$lib/components/H1.svelte";
	import WhiteTextBox from "$lib/components/WhiteTextBox.svelte";
	import DOMPurify from "isomorphic-dompurify";
	import { marked } from "marked";
	import { syncAnims } from "$lib/utils";

	$effect(() => {
		syncAnims({
			animName: "hue-anim",
			fromElementName: "#projects-section",
			toElementName: "#layout-div",
		});
	});

	const projects = $derived([
		{
			displayName: "Nejime",
			url: "https://nejime.henrikvilhelmberglund.com/",
			github: "https://github.com/henrikvilhelmberglund/nejime",
			hostedOn: "Cloudflare Pages",
			description:
				/* @wc-include */ "**Nejime** är en musiktracker för att skapa musik i en browser inspirerad av LSDj. Man kan sedan få en länk till sin sång som man kan dela med andra.",
		},
		{
			displayName: "Keyboard",
			url: "https://keyboard.henrikvilhelmberglund.com/",
			github: "https://github.com/henrikvilhelmberglund/keyboard",
			hostedOn: "Vercel",
			description:
				/* @wc-include */ '**Keyboard** är ett enkelt virtuellt instrument som du kan spela med ditt tangentbord, mus eller mobil. Det använder [smplr](https://github.com/danigb/smplr "smplr is a collection of sampled instruments for Web Audio API ready to be used with no setup required.") för ljudsamples.',
		},
		{
			displayName: "Learned",
			url: "https://learned.henrikvilhelmberglund.com/",
			github: "https://github.com/henrikvilhelmberglund/learned",
			hostedOn: "Vercel",
			description:
				/* @wc-include */ "**Learned** är en sida som jag skapade för att visa vad jag lärde mig (eller kom ihåg) en viss dag. \nJag använder Obsidian för att lagra små godbitar av information som jag sedan importerar med Vite och visar med mdsvex i ett SvelteKit-projekt.",
		},
		{
			displayName: "Branschdag-2023-03",
			url: "https://henrikvilhelmberglund.com/branschdag-2023-03/",
			github: "https://github.com/henrikvilhelmberglund/branschdag-2023-03",
			hostedOn: "Github Pages",
			description:
				/* @wc-include */ "**Branschdag-23-03** är en app som jag gjort för att göra det enklare att hitta företagen på Nackademins branschdag-evenemang. Du kan klicka på klassrummen för att se vilka företag som finns där, filtrera efter ditt ämne för att bara se företag som är intressanta för dig och klicka på företagens namn för att se deras information.",
		},
		{
			displayName: "Branschdag-2023-10",
			url: "https://henrikvilhelmberglund.com/branschdag-2023-10/",
			github: "https://github.com/henrikvilhelmberglund/branschdag-2023-10",
			hostedOn: "Github Pages",
			description:
				/* @wc-include */ "**Branschdag-23-10** är en uppdaterad version av Branschdag-23-03. \nDen viktigaste nya funktionen är att istället för att kopiera och klistra in data skrev jag ett scraper-skript som använder Puppeteer för att hämta data från eventwebbplatsen och exportera data till .js-filer vilket gör uppdatering/kontroll av datat mycket enklare.",
		},
		{
			displayName: "Branschdag-2024-03",
			url: "https://henrikvilhelmberglund.com/branschdag-2024-03/",
			github: "https://github.com/henrikvilhelmberglund/branschdag-2024-03",
			hostedOn: "Github Pages",
			description:
				/* @wc-include */ "**Branschdag-24-03** är en uppdaterad version av Branschdag-23-10 där jag uppdaterade datat och lade till tester.",
		},
		{
			displayName: "Grafikverktyg2022",
			url: "https://grafikverktyg2022.henrikvilhelmberglund.com",
			github: "https://github.com/henrikvilhelmberglund/Grafikverktyg2022",
			hostedOn: "Vercel",
			description:
				/* @wc-include */ "**Grafikverktyg2022** är en app jag gjort för att skapa färgpaletter som sedan enkelt kan importeras inne i Figma. Den låter dig också skicka färgerna till [uicolors.app](https://uicolors.app/).",
		},
		{
			displayName: "Tutorials",
			url: "https://tutorials.henrikvilhelmberglund.com",
			github: "https://github.com/henrikvilhelmberglund/Tutorials",
			hostedOn: "Cloudflare Pages",
			description:
				/* @wc-include */ "**Tutorials** är en blogg där jag lägger upp saker som jag vill referera till senare. Den innehåller inlägg där jag lärde mig Svelte från en Svelte-kurs gjord av Li Hau Tan som fanns på freecodecamp youtube-kanalen samt workflowförbättringar för VSCode.",
		},
		{
			displayName: "henrikvilhelmberglund.github.io",
			url: "https://henrikvilhelmberglund.github.io",
			github: "https://github.com/henrikvilhelmberglund/henrikvilhelmberglund.github.io",
			hostedOn: "Github Pages",
			description:
				/* @wc-include */ "**henrikvilhelmberglund.github.io** är min portfoliowebbsida och sidan du läser just nu. Jag använder en anpassad domän så webbadressen är något annorlunda. På den här sidan listar jag några av mina projekt och länkar till mina sociala medier. Det här projektet var den första gången jag använde \"riktig\" i18n med [sveltekit-i18n](https://github.com/sveltekit-i18n/lib) och VSCode-extensionen [i18n-ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally). Sedan dess har jag använt [Inlang's ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) och numera [wuchale](https://wuchale.dev/).",
		},
	]);
</script>

<svelte:head>
	<title>Henrik Berglunds projekt</title>
	<meta
		name="description"
		content="Det här är Henrik Berglunds projekt som är hostade på diverse plattformar." />
</svelte:head>

<section id="projects-section" class="flex w-full flex-col items-center pt-20">
	<H1>Projekt</H1>
	<WhiteTextBox>
		<div class="text-lg">
			<p>
				Här är några av mina projekt. De är hostade på olika plattformar som <strong
					>Github Pages</strong>, <strong>Vercel</strong> och <strong>Cloudflare Pages</strong>.
			</p>
		</div>
	</WhiteTextBox>
	<div class="mt-8 flex w-full flex-wrap md:w-[60vw] md:justify-center md:gap-8 md:pb-24">
		{#each projects as { displayName, url, github, hostedOn, description }}
			<article
				class="dark:bg-random-970 m-4 mx-auto flex w-[90vw] flex-col rounded rounded-t-xl bg-white dark:text-white md:m-2 md:h-fit md:w-[530px]">
				<div class="relative [&>*]:rounded-t-xl">
					<h2
						class="break-words p-2 text-center text-4xl text-random-800 dark:text-random-300 md:break-normal">
						<a class="" href={url}>{displayName}</a>
					</h2>
					<div
						class="bg-random-200/15 mask-bg-hero-diagonal-stripes dark:bg-random-900/5 pointer-events-none absolute left-0 top-0 h-full w-full">
					</div>
				</div>
				<div class="flex flex-1 flex-col gap-4 p-4">
					<div class="markdown flex-1 break-words">
						{@html DOMPurify.sanitize(marked.parse(description))}
					</div>
					<div class="md:mt-6">
						<span
							class="text-2xl align-bottom"
							title={hostedOn}
							class:i-devicon-vercel-wordmark={hostedOn === "Vercel"}
							class:i-devicon-cloudflare-wordmark={hostedOn === "Cloudflare Pages"}
							class:i-devicon-github-wordmark={hostedOn === "Github Pages"}></span>
						<a class="break-words text-blue-600 dark:text-blue-300" href={url}> {url}</a>
					</div>
					<div>
						<span class="i-devicon-github text-2xl align-bottom"></span>
						<a class="break-words text-blue-600 dark:text-blue-300" href={github}> {github}</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	/* for links inside markdown-rendered descriptions */
	:global(.markdown a) {
		color: rgb(37 99 235); /* text-blue-600 */
	}
	:global(.dark .markdown a) {
		color: rgb(147 197 253); /* text-blue-300 */
	}
</style>
