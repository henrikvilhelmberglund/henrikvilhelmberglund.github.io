<script>
    const { data} = $props();

    const pugTemplate = $derived(data.pugHTML);
    let sliderValue = $state(0);


</script>

  
{@html pugTemplate.split("\n").slice(0, sliderValue + 1).join("\n")}
<main>
  
  <nav class="">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Portfolio</a>
    <a href="#">Team</a>
    <a href="#">Contact</a>
  </nav>
</main>

  <article class="svg-preview w-full h-[500px]">
  </article>
  <aside class="flex flex-col items-center">
    <input class="w-96 h-20" id="slider" type="range" min="0" max={pugTemplate.split("\n").length-1} bind:value={sliderValue} />
    <label for="slider">{pugTemplate.split("\n").slice(sliderValue, sliderValue + 1).join("\n")}</label>
  </aside>


<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins:900&display=swap');

@property --hov {
	syntax: '<number>';
	initial-value: 0;
	inherits: true
}

/* html, main, nav { display: grid } */

/* main { height: 100% } */

main {
	place-content: center;
	margin: 0;
	background: #121212;
	font: 900 6.5em/ 1.5 poppins, sans-serif;
	font-size: clamp(2em, 18vw, 9em)
}

svg[aria-hidden='true'] { position: fixed }

nav {
	grid-template-rows: repeat(5, .8lh);
	overflow: hidden
}

a {
	--hov: 0;
	--g: calc((1 + var(--hov))*50%);
	overflow: hidden;
	padding: 0 .5em;
	background: rgb(0%, var(--g), 0%);
	color: rgba(0%, var(--g), 100%, var(--hov));
	-webkit-text-stroke: clamp(2px, .015em, 6px) 
		rgba(100%, var(--g), 0%, var(--a));
	text-decoration: none;
	isolation: isolate;
	filter: url(#shadow);
	transition: --hov .35s ease-out;
	
	&:hover, &:focus { --hov: 1 }
	
	&:focus { outline: none }
}
</style>