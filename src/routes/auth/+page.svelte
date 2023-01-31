<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<form class="mx-auto w-96 pt-16" method="POST" action="?/login" use:enhance>
	<div class="mt-2">
		<label for="username">Username</label>
		<input class="ml-2" type="text" name="username" id="username" />
	</div>

	<div class="mt-2">
		<label for="password">Password</label>
		<input class="ml-2" type="password" name="password" id="password" />
	</div>

	<button class="mt-2">Login</button>
	<button class="mt-2" formaction="?/register">Register</button>
</form>
