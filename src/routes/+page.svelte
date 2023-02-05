<script lang="ts">
	import { goto } from '$app/navigation'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="mb-4">
	hello {data.user?.username}
</div>

<h2 class="mb-4 text-xl">User likes:</h2>
<div class="grid grid-cols-5 gap-3">
	<div
		class="align-center flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-stone-300 text-6xl transition-colors hover:bg-zinc-800"
		on:click={() => goto('/explore')}
		on:keypress={(event) => {
			if (event.key === 'Enter') goto('/explore')
		}}
		role="button"
		tabindex="0"
	>
		+
	</div>
	{#if data.likes.length}
		{#each data.likes as like}
			<div class="group relative cursor-pointer">
				<img src={like.poster} alt={like.title} class="max-h-80 w-full rounded-2xl object-cover" />
				<div
					class="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-2xl opacity-0 backdrop-blur-lg transition-opacity group-hover:opacity-100"
				>
					<div class="anime-title px-4 text-center text-xl font-semibold">
						{like.title}
					</div>
				</div>
			</div>
		{/each}
	{:else}
		No likes :(
	{/if}
</div>

<p class="mt-6">This is from env: {data.fromEnv}</p>

<style>
	.anime-title {
		text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.3);
	}
</style>
