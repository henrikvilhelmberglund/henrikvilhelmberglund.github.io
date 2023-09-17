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

<section
	class="shadow-primary-200 dark:shadow-primary-800 dark:bg-primary-900 absolute top-14 flex gap-2 self-baseline bg-white p-1 shadow-lg rounded-b-3xl">
	<h2 class="hidden text-center text-2xl">Socials</h2>
	{#each socials as { link, name, icon }}
		<a class="hover:dark:bg-primary-950 hover:bg-primary-200 rounded-md" href={link}>
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
