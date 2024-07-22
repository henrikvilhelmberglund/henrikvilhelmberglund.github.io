<script lang="ts">
	import { SvgFilterBuilder } from "../svgFilterBuilder";
 

	let boundElement;
	let boundSVG;
  let lines = $state([])

  

  const { data} = $props();
  const pugTemplate = $derived(data.pugHTML);

	// Example usage:
	let getExtrusionMatrix = (o: number) => {
		let n = o * o,
			p = o + 1;
		return Array.from({ length: n }, (_, i) => +!(i % p));
	};

	let o = 16;
	let d = 0.5 * o;
	let m = Array(getExtrusionMatrix(o).join(" "));

  let svgLines = $state([]);
  let sliderValue = $state(0);

  const myFilter = `
  <filter id="back" color-interpolation-filters="sRGB">
				<feTurbulence baseFrequency=".0371 .0713" result="one"></feTurbulence>
				<feTurbulence baseFrequency=".173 .317"></feTurbulence>
				<feDisplacementMap in="one" scale="25" xChannelSelector="R"></feDisplacementMap>
				<feDiffuseLighting lighting-color="#4a7997" result="textured">
					<feDistantLight azimuth="90" elevation="50"></feDistantLight>
				</feDiffuseLighting>
				<feColorMatrix in="SourceGraphic" values="0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 1 0 0 0 0" result="baseline"></feColorMatrix>
				<feComposite in="textured" operator="in"></feComposite>
				<feDropShadow dx="0" dy="2"></feDropShadow>
				<feBlend in2="textured" result="textline"></feBlend>
				<feGaussianBlur in="baseline" stdDeviation="1"></feGaussianBlur>
				<feOffset dy="1"></feOffset>
				<feComposite in="baseline" operator="out"></feComposite>
				<feBlend in2="textline" mode="screen" result="stripe"></feBlend>
				<feColorMatrix in="SourceGraphic" values="0 0 0 0 .5 0 0 0 0 .85 0 0 0 0 .95 0 1 0 0 0"></feColorMatrix>
				<feBlend in2="stripe" mode="overlay"></feBlend>
			</filter>

			<filter id="extruded" color-interpolation-filters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
				<feColorMatrix values="0 0 0 0 .01 0 0 0 0 .085 0 0 0 0 .14 0 1 0 0 0" result="basegrad"></feColorMatrix>
				<feTurbulence type="fractalNoise" baseFrequency=".5713"></feTurbulence>
				<feDisplacementMap in="basegrad" scale="64" xChannelSelector="R" result="mixtgrad"></feDisplacementMap>
				<feComponentTransfer result="narrgrad">
					<feFuncA type="table" tableValues="-.5 1.5"></feFuncA>
				</feComponentTransfer>
				<feComponentTransfer result="easegrad">
					<feFuncA type="gamma" exponent="1.35"></feFuncA>
				</feComponentTransfer>
				<feColorMatrix in="SourceGraphic" values="0 0 0 0 0 0 0 0 0 .375 0 0 0 0 .515 0 0 1 0 0" result="basetext"></feColorMatrix>
				<feComposite in="easegrad" operator="in"></feComposite>
				<feBlend in2="basetext" result="gradtext"></feBlend>
				<feComposite in2="gradtext" operator="in"></feComposite>
				<feBlend in2="gradtext" result="mixttext"></feBlend>
				<feOffset dx="2" dy="2"></feOffset>
				<feGaussianBlur stdDeviation="1"></feGaussianBlur>
				<feComponentTransfer>
					<feFuncA type="linear" slope=".8"></feFuncA>
				</feComponentTransfer>
				<feComposite in="mixttext" operator="out"></feComposite>
				<feBlend in2="mixttext" mode="screen"></feBlend>
				<feDropShadow result="middtext"></feDropShadow>
				<feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0" result="baseline"></feColorMatrix>
				<feConvolveMatrix id="feConvolveMatrix" order={o} divisor="1" kernelMatrix={m.join(" ")}></feConvolveMatrix>
				<feOffset id="feOffset" dx={d} dy={d}></feOffset>
				<feColorMatrix values="0 0 0 0 .85 0 0 0 0 .68 0 0 0 0 .26 0 0 0 1 0" result="extrbase"></feColorMatrix>
				<feComposite in="easegrad" operator="in"></feComposite>
				<feColorMatrix values="0 0 0 0 .48 0 0 0 0 .13 0 0 0 0 .13 0 0 0 1 0"></feColorMatrix>
				<feBlend in2="extrbase" result="extrgrad"></feBlend>
				<feDropShadow in="baseline" dx="0" dy="0" id="feDropShadow" stdDeviation={d} flood-color="#fffc"></feDropShadow>
				<feComposite in2="extrgrad" operator="in"></feComposite>
				<feBlend in2="extrgrad" mode="screen"></feBlend>
				<feBlend in="middtext"></feBlend>
				<feDropShadow id="feDropShadow2" dx={2 * o} dy={2 * o} stdDeviation={2 * o} flood-color="#000c"></feDropShadow>
			</filter>`

    // Function to extract lines from the SVG
    function getSvgLines() {
    const lines = [];
    function traverseNodes(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.elementName === "filter") {
          node.id = "test"
        }
        const line = node.outerHTML;
        lines.push(line);
        node.childNodes.forEach(traverseNodes);
      }
    };
    traverseNodes(myFilter);
    return lines;
  };

</script>

<!-- <main>
	<article class="" bind:this={boundElement}>
		<svg bind:this={boundSVG} width="0" height="0">
			
		</svg>
		<div contenteditable="true">dusty</div>
	</article>
</main> -->


<main class="flex flex-col gap-20 justify-center items-center">
  
  <article class="svg-preview w-full">
      {@html pugTemplate.split("\n").slice(0, sliderValue + 1).join("\n")}
    <div contenteditable="true">dusty</div>
  </article>
  <aside class="flex flex-col items-center">
    <input class="w-96 h-20" id="slider" type="range" min="0" max={pugTemplate.split("\n").length-1} bind:value={sliderValue} />
    <label for="slider">{pugTemplate.split("\n").slice(sliderValue, sliderValue + 1).join("\n")}</label>
  </aside>
</main>
  
<style>
	@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");

	
	article {
		display: grid;
	}

	/* main {
		min-height: calc(100vh);
		min-width: calc(100vw);
	} */

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
