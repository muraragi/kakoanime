import { jikanClient } from '$lib/jikan'
import type { ServerLoadEvent } from '@sveltejs/kit'
import { AnimeType } from '@tutkli/jikan-ts'
import { Collections, type TestResponse } from '../types/pocketbase-types'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }: ServerLoadEvent) => {
	const records = await locals.pb.collection(Collections.Test).getFullList(200, {
		sort: '-created'
	})

	const formattedRecords = records.map((r) => r.export() as TestResponse)

	const topAnimes = (
		await jikanClient.top.getTopAnime({
			type: AnimeType.tv,
			page: 1,
			limit: 10
		})
	).data

	return {
		testData: formattedRecords,
		topAnimes
	}
}) satisfies PageServerLoad
