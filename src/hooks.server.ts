import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import { runWithLocale, loadLocales } from "wuchale/load-utils/server"
import * as main from "./locales/main.loader.server.svelte.js"
import { locales } from "./locales/data.js"
import { getLocale } from "./locales/main.url.js"

await loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)

const localeHook: Handle = async ({ event, resolve }) => {
	const locale = getLocale(event.url)
	return await runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace("%sveltekit.lang%", locale),
		}),
	)
}

export const handle = sequence(localeHook)
