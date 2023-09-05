import * as THREE from "three";
import fragmentShader from "$lib/shaders/seascape/fragment.glsl?raw";
import vertexShader from "$lib/shaders/seascape/vertex.glsl?raw";
// init camera, scene, renderer
var scene, camera, renderer;
scene = new THREE.Scene();
var fov = 75,
	aspect = window.innerWidth / window.innerHeight;
camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
camera.position.z = 100;
camera.lookAt(scene.position);

var clock = new THREE.Clock();

var tuniform = {
	time: {
		type: "f",
		value: 0.1,
	},
	resolution: {
		type: "v2",
		value: new THREE.Vector2(),
	},
	mouse: {
		type: "v4",
		value: new THREE.Vector2(),
	},
};


// resize canvas function
window.addEventListener("resize", function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

tuniform.resolution.value.x = window.innerWidth;
tuniform.resolution.value.y = window.innerHeight;
// Create Plane
var material = new THREE.ShaderMaterial({
	uniforms: tuniform,
	vertexShader,
	fragmentShader,
});
var mesh = new THREE.Mesh(
	new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 40),
	material
);
scene.add(mesh);

export function createScene() {
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xc4c4c4);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	render();
}

// draw animation
function render(time) {
	tuniform.time.value += clock.getDelta();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
