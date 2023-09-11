import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: "en",
			key: "common",
			loader: async () => (await import("./en/common.json")).default,
		},
		{
			locale: "en",
			key: "nav",
			//routes: ["/"], // you can use regexes as well!
			loader: async () => (await import("./en/nav.json")).default,
		},
		{
			locale: "en",
			key: "projects",
			routes: ["/projects"],
			loader: async () => (await import("./en/projects.json")).default,
		},
		{
			locale: "sv",
			key: "common",
			loader: async () => (await import("./sv/common.json")).default,
		},
		{
			locale: "sv",
			key: "nav",
			loader: async () => (await import("./sv/nav.json")).default,
		},
		{
			locale: "sv",
			key: "projects",
			routes: ["/projects"],
			loader: async () => (await import("./sv/projects.json")).default,
		},
		{
			locale: "ja",
			key: "common",
			loader: async () => (await import("./ja/common.json")).default,
		},
		{
			locale: "ja",
			key: "nav",
			loader: async () => (await import("./ja/nav.json")).default,
		},
		{
			locale: "ja",
			key: "projects",
			routes: ["/projects"],
			loader: async () => (await import("./ja/projects.json")).default,
		},
	],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
