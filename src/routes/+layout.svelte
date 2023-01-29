<script lang="ts">
	import { enhance } from '$app/forms'
	import '@/styles/app.css'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<header class="p-6">
	<nav class="flex gap-x-4 justify-between">
		<a href="/">home</a>
		<a href="/auth">login</a>

		<div class="flex gap-x-4 ml-auto">
			User is: {data.user?.id || 'no user :('}
			{#if data.user}
				<form method="POST" action="/auth?/logout" use:enhance>
					<button>logout</button>
				</form>
			{/if}
		</div>
	</nav>
</header>
<slot />
