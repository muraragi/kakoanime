<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="p-6">
	<div class="my-4">
		hello {data.user?.username}
	</div>

	<div class="grid grid-cols-5 gap-3">
		{#each data.topAnimes as anime}
			<div class="break-words">
				{anime.title}
				{anime.mal_id}
				{anime.images.jpg.large_image_url}
			</div>
		{/each}
	</div>

	<h2 class="my-6 text-xl">User likes</h2>
	<div class="grid grid-cols-5 gap-3">
		{#if data.likes.length}
			{#each data.likes as like}
				<div class="break-words">
					{like.title}
					{like.jikanId}
					{like.poster}
				</div>
			{/each}
		{:else}
			No likes :(
		{/if}
	</div>
</div>
