/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch("/src/lib/projectList.json");
	const data = await response.json();
	console.log(data);
	return { projects: data };
}
