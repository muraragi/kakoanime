import type { ServerLoadEvent } from '@sveltejs/kit'
import { Collections, type TestResponse } from '../types/pocketbase-types'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }: ServerLoadEvent) => {
	const records = await locals.pb.collection(Collections.Test).getFullList(200, {
		sort: '-created'
	})

	const formattedRecords = records.map((r) => r.export() as TestResponse)

	return {
		testData: formattedRecords
	}
}) satisfies PageServerLoad
