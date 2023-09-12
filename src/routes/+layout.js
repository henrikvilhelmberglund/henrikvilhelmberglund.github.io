export const prerender = true;
// export const ssr = false;

import { loadTranslations, locale } from "$lib/i18n/i18n";
import { userPreferredLocale } from "$lib/stores";
import { get } from "svelte/store";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url;

	// TODO this will always give English as a default when SSRed, not sure if fixable
	const initLocale = get(locale) ? get(locale) : get(userPreferredLocale); // get from cookie, user session, ...

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	return {};
};
