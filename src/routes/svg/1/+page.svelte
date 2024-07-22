<script lang="ts">
	import { SvgFilterBuilder } from "../svgFilterBuilder";




	let boundElement;

	// Example usage:
	let getExtrusionMatrix = (o: number) => {
		let n = o * o,
			p = o + 1;
		return Array.from({ length: n }, (_, i) => +!(i % p));
	};

	let o = 16;
	let d = 0.5 * o;
	let m = Array(getExtrusionMatrix(o).join(" "));

	$effect(() => {
		new SvgFilterBuilder("back")
			.feTurbulence({ baseFrequency: ".0371 .0713", result: "one" })
			.feTurbulence({ baseFrequency: ".173 .317" })
			.feDisplacementMap({ in: "one", scale: 25, xChannelSelector: "R" })
			.feDiffuseLightingWithLight({ "lighting-color": "#4a7997", result: "textured" }, "feDistantLight", { azimuth: 90, elevation: 50 })
			.feColorMatrix({ in: "SourceGraphic", values: "0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 1 0 0 0 0", result: "baseline" })
			.feComposite({ in: "textured", operator: "in" })
			.feDropShadow({ dx: "0", dy: "2" })
			.feBlend({ in2: "textured", result: "textline" })
			.feGaussianBlur({ in: "baseline", stdDeviation: "1" })
			.feOffset({ dy: "1" })
			.feComposite({ in: "baseline", operator: "out" })
			.feBlend({ in2: "textline", mode: "screen", result: "stripe" })
			.feColorMatrix({ in: "SourceGraphic", values: "0 0 0 0 .5 0 0 0 0 .85 0 0 0 0 .95 0 1 0 0 0" })
			.feBlend({ in2: "stripe", mode: "overlay" })
			.appendTo("svg");

		new SvgFilterBuilder("extruded", { "color-interpolation-filters": "sRGB", x: "-50%", y: "-50%", width: "200%", height: "200%" })
			.feColorMatrix({ values: "0 0 0 0 .01 0 0 0 0 .085 0 0 0 0 .14 0 1 0 0 0", result: "basegrad" })
			.feTurbulence({ type: "fractalNoise", baseFrequency: ".5713" })
			.feDisplacementMap({ in: "basegrad", scale: 64, xChannelSelector: "R", result: "mixtgrad" })
			.feComponentTransferFuncA({ result: "narrgrad" }, { type: "table", tableValues: "-.5 1.5" })
			.feComponentTransferFuncA({ result: "easegrad" }, { type: "gamma", exponent: "1.35" })
			.feColorMatrix({ in: "SourceGraphic", values: "0 0 0 0 0 0 0 0 0 .375 0 0 0 0 .515 0 0 1 0 0", result: "basetext" })
			.feComposite({ in: "easegrad", operator: "in" })
			.feBlend({ in2: "basetext", result: "gradtext" })
			.feComposite({ in2: "gradtext", operator: "in" })
			.feBlend({ in2: "gradtext", result: "mixttext" })
			.feOffset({ dx: "2", dy: "2" })
			.feGaussianBlur({ stdDeviation: "1" })
			.feComponentTransferFuncA({}, { type: "linear", slope: ".8" })
			.feComposite({ in: "mixttext", operator: "out" })
			.feBlend({ in2: "mixttext", mode: "screen" })
			.feDropShadow({ result: "middtext" })
			.feColorMatrix({ in: "SourceGraphic", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0", result: "baseline" })
			.feConvolveMatrix({ order: o, divisor: 1, kernelMatrix: m.join(" ") })
			.feOffset({ dx: d, dy: d })
			.feColorMatrix({ values: "0 0 0 0 .85 0 0 0 0 .68 0 0 0 0 .26 0 0 0 1 0", result: "extrbase" })
			.feComposite({ in: "easegrad", operator: "in" })
			.feColorMatrix({ values: "0 0 0 0 .48 0 0 0 0 .13 0 0 0 0 .13 0 0 0 1 0" })
			.feBlend({ in2: "extrbase", result: "extrgrad" })
			.feDropShadow({ in: "baseline", dx: 0, dy: 0, stdDeviation: d, "flood-color": "#fffc" })
			.feComposite({ in2: "extrgrad", operator: "in" })
			.feBlend({ in2: "extrgrad", mode: "screen" })
			.feBlend({ in: "middtext" })
			.feDropShadow({ dx: 2 * o, dy: 2 * o, stdDeviation: 2 * o, "flood-color": "#000c" })
			.appendTo("svg");
	});
</script>

<main>
	<article bind:this={boundElement}>
		<svg id="mySVG"></svg>
		<div contenteditable="true">hello</div>
	</article>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");

	main,
	article {
		display: grid;
	}

	main {
		min-height: calc(100vh);
		min-width: calc(100vw);
	}

	article {
		margin: 0;

		&::before {
			grid-area: 1/ 1;
			background:
				linear-gradient(#f00 4px, #0000 0) 0/ 1% 1em,
				radial-gradient(circle closest-side, #0f0, #000);
			background-blend-mode: lighten;
			filter: url(#back);
			content: "";
		}
	}

	:global(svg[height="0"]) {
		position: fixed;
	}

	div {
		grid-area: 1/ 1;
		place-self: center;
		position: relative;
		padding: 0 0.25em;
		color: #00f;
		-webkit-text-stroke: 0.05em #f00;
		paint-order: stroke fill;
		font:
			700 3em/ 1.625 courgette,
			cursive;
		font-size: clamp(3em, 30vmin, 25em);
		text-align: center;
		text-transform: capitalize;
		isolation: isolate;
		filter: url(#extruded);

		&::after {
			position: absolute;
			inset: 0;
			background: linear-gradient(#000, #0f0) 0 0/ 1% 1lh;
			mix-blend-mode: lighten;
			pointer-events: none;
			content: "";
		}
	}
</style>
