import json from "../../lib/projectList.json";

export async function load() {
	return { projects: json };
}
