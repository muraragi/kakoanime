<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="p-6">
	{#each data.testData as dataItem}
		<h1 class="text-2xl text-center mt-3 first-of-type:mt-0">{dataItem.fieeeeeld}</h1>
	{/each}

	<div class="my-4">
		hello {data.user?.username}
	</div>

	<div class="grid grid-cols-5 gap-3">
		{#each data.topAnimes as anime}
			<div>
				{anime.title}
			</div>
		{/each}
	</div>
</div>
