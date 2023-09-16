import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";
import { get } from "svelte/store";
import { t } from "$lib/i18n/i18n";

export function translation(key) {
	// error if not using intermediate variables like this, not completely sure why...
	const input = get(t);
	const output = sanitize(marked.parse(input(key)));
	return output;
}
