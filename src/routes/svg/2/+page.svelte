<script lang="ts">
	import { SvgFilterBuilder } from "../svgFilterBuilder";
	let boundElement;

	//- alpha and relative base displacement values
	let a = 0.5;
	let d = 0.05;

	//- get RGB values in proper format for feColorMatrix
	function toDec(num) {
		return +(num / 255).toFixed(2);
	}

	//- mixin to reduce repetition when creating offset copies
	function offset(rgb, f = 1, i) {
		let [r, g, b] = rgb.map((c) => toDec(c));
		return new SvgFilterBuilder()
			.feColorMatrix({
				in: i,
				values: `0 0 0 0 ${r} 
  0 0 0 0 ${g} 
  0 0 0 0 ${b} 
  0 0 0 1   0`,
			})
			.feBlend({ in: "contline" })
			.feDisplacementMap({ in2: "basedmap", scale: f * d, xChannelSelector: "R", yChannelSelector: "G", result: `lyr${f}text` });
	}

	$effect(() => {
		// pass the alpha to the CSS as a custom property
		new SvgFilterBuilder("shadow", { "color-interpolation-filters": "sRGB", primitiveUnits: "objectBoundingBox" })

			// extract displacement map & limit it to
			// original filter input element height
			.feColorMatrix({
				values: `0 -1 0 0 1
			                      0  1 0 0 0
														0  0 0 0 0 
														0  0 0 1 0`,
				y: "0",
				height: "1",
			})
			// extend it across the entire filter area around
			// to get the displacement map
			.feTile({ result: "basedmap" })
			// extract text stroke
			.feColorMatrix({
				in: "SourceGraphic",
				values: `0 0 0 0 1 
														0 0 0 0 1 
														0 0 0 0 1 
														${1 / a} 0 0 0 0`,
				result: "baseline",
			})
			// get contrasting black stroke of offset copies
			.feColorMatrix({
				in: "SourceGraphic",
				values: `0 0 0 0 0 
                    0 0 0 0 0 
														0 0 0 0 0 
														${1 / a} 2 0 0 -2`,
				result: "contline",
			})
			// extract base text fill
			.feColorMatrix({
				in: "SourceGraphic",
				values: `0 0 0 0 1 
                    0 0 0 0 1 
														0 0 0 0 1 
														0 0 ${1 / (1 - a)} 0 0`,
				result: "basetext",
			})
			// create the two offset copies given fill RGB values
			.addFilter(()=> offset([210, 20, 202]))
			.addFilter(()=> offset([20, 178, 193], 2, "basetext"))
			// put the two copies together
			.feBlend({ in2: "lyr1text" })
			// with original outline
			.feBlend({ in2: "baseline" })
			// and conditional on hover fill too
			.feBlend({ in2: "basetext" })
      .appendTo("svg")
	});
</script>

<main style={`--a: ${a}`}>
  <article bind:this={boundElement}>
    <svg id="mySVG"></svg>
  </article>
	<nav>
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Portfolio</a>
		<a href="#">Team</a>
		<a href="#">Contact</a>
	</nav>
</main>

<style>
	@import url("https://fonts.googleapis.com/css?family=Poppins:900&display=swap");

	@property --hov {
		syntax: "<number>";
		initial-value: 0;
		inherits: true;
	}

	main,
	nav {
		display: grid;
	}

	main {
		height: 100%;
	}

	main {
		place-content: center;
		margin: 0;
		background: #121212;
		font:
			900 6.5em/ 1.5 poppins,
			sans-serif;
		font-size: clamp(2em, 18vw, 9em);
	}

	svg {
		position: fixed;
	}

	nav {
		grid-template-rows: repeat(5, 0.8lh);
		overflow: hidden;
	}

	a {
		--hov: 0;
		--g: calc((1 + var(--hov)) * 50%);
		overflow: hidden;
		padding: 0 0.5em;
		background: rgb(0%, var(--g), 0%);
		color: rgba(0%, var(--g), 100%, var(--hov));
		-webkit-text-stroke: clamp(2px, 0.015em, 6px) rgba(100%, var(--g), 0%, var(--a));
		text-decoration: none;
		isolation: isolate;
		filter: url(#shadow);
		transition: --hov 0.35s ease-out;

		&:hover,
		&:focus {
			--hov: 1;
		}

		&:focus {
			outline: none;
		}
	}
</style>
