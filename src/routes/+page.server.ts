import type { ServerLoadEvent } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }: ServerLoadEvent) => {
	const records = await locals.pb.collection('test').getFullList(200 /* batch size */, {
		sort: '-created'
	})

	console.log(records)

	return {
		testData: records.map((r) => r.export())
	}
}) satisfies PageServerLoad
