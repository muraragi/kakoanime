import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from '@sveltejs/kit'
import { Collections } from '../../types/pocketbase-types'

type Credentials = {
	username?: string
	password?: string
}

function getCredentialsFromFormData(formData: FormData): Credentials {
	return Object.fromEntries(formData) as Credentials
}

export const actions = {
	login: async ({ request, locals }) => {
		const { username, password } = getCredentialsFromFormData(await request.formData())

		if (!username || !password) {
			return fail(400, { username, success: false })
		}

		await locals.pb.collection(Collections.Users).authWithPassword(username, password)

		if (locals.pb.authStore.isValid) {
			throw redirect(303, '/')
		}
	},
	register: async ({ request, locals }) => {
		const { username, password } = getCredentialsFromFormData(await request.formData())

		if (!username || !password) {
			return fail(400, { username, success: false })
		}

		locals.pb.authStore.clear()

		await locals.pb.collection(Collections.Users).create({
			username,
			password,
			passwordConfirm: password
		})

		await locals.pb.collection(Collections.Users).authWithPassword(username, password)

		throw redirect(303, '/')
	},
	logout: ({ locals }) => {
		locals.pb.authStore.clear()

		return { success: true }
	}
} satisfies Actions
