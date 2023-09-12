<script>
	const socials = [
		{ name: "Github", link: "https://github.com/henrikvilhelmberglund" },
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/henrikvilhelmberglund/",
		},
		{ name: "Twitter", link: "https://twitter.com/henrikvberglund" },
	];
</script>

<section class="shadow-primary-200 dark:shadow-primary-800 shadow-lg right-0 top-14 absolute self-baseline gap-3 rounded-t-0 flex rounded-md bg-white dark:bg-primary-950">
	<h2 class="hidden text-center text-2xl">Socials</h2>
	{#each socials as { link, name, icon }}
		<a target="_blank" href={link}>
			<article
				class:i-mdi-twitter={name === "Twitter"}
				class:!text-blue-400={name === "Twitter"}
				class:i-mdi-github={name === "Github"}
				class:i-mdi-linkedin={name === "LinkedIn"}
				class:!text-blue-600={name === "LinkedIn"}
				class="h-12 w-12 text-black dark:text-slate-200" /></a>
	{/each}
</section>

<style>
</style>
