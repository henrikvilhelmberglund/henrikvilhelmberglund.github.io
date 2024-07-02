import { i18n } from '$lib/i18n'
import { sequence } from '@sveltejs/kit/hooks'
/** @type {import('@sveltejs/kit').Handle} */

export async function unocssHook({ event, resolve }: Parameters<import('@sveltejs/kit').Handle>[0]) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '%unocss-svelte-scoped.global%',
        'unocss_svelte_scoped_global_styles'
      ),
  })
  return response
}

export const inlangHook = i18n.handle()

export const handle = sequence(inlangHook, unocssHook);

