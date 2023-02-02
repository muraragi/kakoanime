<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="mb-4">
	hello {data.user?.username}
</div>

<h2 class="mb-4 text-xl">User likes:</h2>
<div class="grid grid-cols-5 gap-3">
	{#if data.likes.length}
		{#each data.likes as like}
			<div class="break-words">
				{like.title}
				{like.jikanId}
				<img src={like.poster} alt={like.title} />
			</div>
		{/each}
	{:else}
		No likes :(
	{/if}
</div>

<p class="mt-6">This is from env: {data.fromEnv}</p>
