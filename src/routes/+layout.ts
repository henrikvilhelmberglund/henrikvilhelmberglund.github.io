import { browser } from "$app/environment"
import { loadLocale } from "wuchale/load-utils"
import { getLocale } from "../locales/main.url.js"
// register the loader
import "../locales/main.loader.svelte.js"

export const prerender = true
export const ssr = true

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const locale = getLocale(url)
	if (browser) {
		await loadLocale(locale)
	}
	return { locale }
}
