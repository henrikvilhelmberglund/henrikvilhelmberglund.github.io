export const prerender = true;
// export const ssr = false;

import { loadTranslations, locale } from "$lib/i18n/i18n";
import { get } from "svelte/store";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url;

	const initLocale = get(locale) ? get(locale) : "en"; // get from cookie, user session, ...

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
