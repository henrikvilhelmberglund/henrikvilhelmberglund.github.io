<script>
	import fragmentShader from "$lib/shaders/seascape/fragment.glsl?raw";
	import vertexShader from "$lib/shaders/seascape/vertex.glsl?raw";

	import { T, useFrame } from "@threlte/core";
	import { Vector2 } from "three";
	import { HTML } from "@threlte/extras";

	var tuniform = {
		time: {
			type: "f",
			value: 0.1,
		},
		resolution: {
			type: "v2",
			value: new Vector2(),
		},
		mouse: {
			type: "v4",
			value: new Vector2(),
		},
	};

	const { start, stop, started } = useFrame(
		({}, delta) => {
			console.log("rendering…");
			// console.log(delta);

			tuniform.time.value += delta;
		},
		{
			autostart: true,
		}
	);

	let fov = 75;

	let aspect = window.innerWidth / window.innerHeight;

	tuniform.resolution.value.x = window.innerWidth;
	tuniform.resolution.value.y = window.innerHeight;

	// const { renderer } = useThrelte();
	// renderer.setClearColor(0xc4c4c4);
	// renderer.setSize(window.innerWidth, window.innerHeight);
</script>

<T.PerspectiveCamera
	makeDefault
	args={[fov, aspect, 0.1, 1000]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
	position={[0, 0, 0]} />
<T.Mesh>
	<T.PlaneGeometry args={[window.innerWidth, window.innerHeight, 40]} />
	<T.ShaderMaterial {fragmentShader} {vertexShader} uniforms={tuniform} />
</T.Mesh>

<style>
</style>
