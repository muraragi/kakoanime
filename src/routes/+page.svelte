<script lang="ts">
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	export let data: PageData

	onMount(() => {
		console.log(data.testData)
	})
</script>

<h1 class="text-4xl text-center mt-8">Kakoanime</h1>
