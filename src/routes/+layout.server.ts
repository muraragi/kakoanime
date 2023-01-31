import { redirect } from '@sveltejs/kit'
import type { UsersResponse } from '../types/pocketbase-types'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals, route }) => {
	const user = locals.pb.authStore.model?.export() as UsersResponse

	if (route.id !== '/auth' && !locals.pb.authStore.isValid) {
		throw redirect(302, '/auth')
	}

	return {
		user
	}
}) satisfies LayoutServerLoad
