import { jikanClient } from '$lib/jikan'
import type { Actions } from '@sveltejs/kit'
import { AnimeType } from '@tutkli/jikan-ts'
import { Collections, type LikeRecord } from '../../types/pocketbase-types'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	const topAnimes = (
		await jikanClient.top.getTopAnime({
			type: AnimeType.tv,
			page: 1,
			limit: 100
		})
	).data

	const suggestion = topAnimes[Math.floor(Math.random() * topAnimes.length)]

	return {
		suggestion
	}
}) satisfies PageServerLoad

export const actions = {
	like: async ({ request, locals }) => {
		const objectFromData = Object.fromEntries(await request.formData()) as Omit<LikeRecord, 'owner'>

		const newLike: LikeRecord = {
			...objectFromData,
			owner: locals.pb.authStore.model?.id as string
		}

		console.log(newLike)

		await locals.pb.collection(Collections.Like).create(newLike)
	}
} satisfies Actions
