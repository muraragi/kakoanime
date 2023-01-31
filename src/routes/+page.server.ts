import { jikanClient } from '$lib/jikan'
import type { ServerLoadEvent } from '@sveltejs/kit'
import { AnimeType } from '@tutkli/jikan-ts'
import { Collections, type LikeResponse } from '../types/pocketbase-types'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }: ServerLoadEvent) => {
	const topAnimes = (
		await jikanClient.top.getTopAnime({
			type: AnimeType.tv,
			page: 1,
			limit: 10
		})
	).data

	let likes: LikeResponse[] = []
	if (locals.pb.authStore.isValid) {
		likes = await locals.pb.collection(Collections.Like).getFullList<LikeResponse>()
	}

	const formattedLikes = JSON.parse(JSON.stringify(likes)) as LikeResponse[]

	return {
		topAnimes,
		likes: formattedLikes
	}
}) satisfies PageServerLoad
