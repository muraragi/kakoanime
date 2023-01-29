<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#each data.testData as dataItem}
	<h1 class="text-4xl text-center mt-8">{dataItem.fieeeeeld}</h1>
{/each}

hello {data.user?.username}
