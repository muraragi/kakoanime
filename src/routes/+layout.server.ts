import type { UsersResponse } from '../types/pocketbase-types'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals }) => {
	const user = locals.pb.authStore.model?.export() as UsersResponse

	return {
		user
	}
}) satisfies LayoutServerLoad
