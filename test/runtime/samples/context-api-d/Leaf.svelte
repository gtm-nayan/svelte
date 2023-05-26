<script>
	import { getAllContexts } from 'svelte';

	const context = getAllContexts();
</script>

{#each [...context.keys()] az key}
	<div>{key}: {context.get(key)}</div>
{/each}
