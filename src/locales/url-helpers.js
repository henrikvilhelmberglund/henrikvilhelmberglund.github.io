import { deLocalizeDefault } from "wuchale/url"
import { locales } from "./data.js"

export const defaultLocale = "sv"

/**
 * Build a locale-prefixed URL. Default locale stays unprefixed.
 * @param {string} path  e.g. "/projects"
 * @param {string} locale  e.g. "en"
 */
export const localizeUrl = (path, locale) => {
	if (locale === defaultLocale) return path
	const suffix = path === "/" ? "" : path
	return `/${locale}${suffix}`
}

/**
 * Strip the locale prefix from a pathname, returning the canonical path.
 * @param {string} pathname
 */
export const stripLocale = (pathname) => deLocalizeDefault(pathname, locales)[0]
