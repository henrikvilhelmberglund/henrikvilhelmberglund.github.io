/** @type {import('./$types').PageLoad} */
import json from "/src/lib/projectList.json";

export async function load({ fetch }) {
	return { projects: json };
}
