<script lang="ts">
	import { enhance } from '$app/forms'
	import '@/styles/app.css'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<svelte:head>
	<title>Kakoanime</title>
</svelte:head>

<header class="p-6">
	<nav class="flex justify-between gap-x-4">
		<a href="/">home</a>
		<a href="/auth">login</a>
		<a href="/explore">explore</a>

		<div class="ml-auto flex gap-x-4">
			User is: {data.user?.username || 'no user :('}
			{#if data.user}
				<form method="POST" action="/auth?/logout" use:enhance>
					<button>logout</button>
				</form>
			{/if}
		</div>
	</nav>
</header>

<div class="p-6">
	<slot />
</div>
