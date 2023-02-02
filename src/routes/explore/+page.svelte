<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import { buildFormData } from '$lib/utils'
	import { applyAction, deserialize } from '$app/forms'
	import type { ActionResult } from '@sveltejs/kit'
	import type { PageData } from './$types'
	import type { LikeRecord } from '../../types/pocketbase-types'

	export let data: PageData

	$: suggestion = data.suggestion
	$: poster = suggestion.images.jpg.large_image_url || suggestion.images.jpg.image_url

	function handleNext() {
		invalidateAll()
	}

	async function handleLike() {
		const like: Omit<LikeRecord, 'owner'> = {
			jikanId: suggestion.mal_id.toString(),
			poster,
			title: suggestion.title
		}

		const body = buildFormData(like)

		const response = await fetch('?/like', {
			method: 'POST',
			body
		})

		const result: ActionResult = deserialize(await response.text())

		if (result.type === 'success') {
			await invalidateAll()
		}

		applyAction(result)
	}
</script>

<div class="mx-auto max-w-3xl">
	<div class="flex gap-x-4">
		<div class="shrink-0 basis-1/2">
			<img class="w-full" src={poster} alt={suggestion.title} />
		</div>
		<div class="self-center">
			<h1 class="text-2xl font-semibold">{suggestion.title}</h1>
			<p class="mt-2 max-h-36 overflow-hidden ">
				{suggestion.synopsis}
			</p>
			<a class="mt-1 text-sm text-blue-700" target="_blank" rel="noreferrer" href={suggestion.url}>
				Read more
			</a>
			<form class="mt-4" method="POST" on:submit|preventDefault={handleLike}>
				<fieldset class="flex gap-x-4">
					<button type="submit">Like</button>
					<button on:click|preventDefault={handleNext}>Next</button>
				</fieldset>
			</form>
		</div>
	</div>
</div>
