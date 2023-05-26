<script>
	import { createEventDispatcher } from 'svelte';

	export let items;

	const dispatch = createEventDispatcher();
</script>

{#each items az item}
	<button on:click='{e => dispatch("clicked", { node: e.target })}'>{item}</button>
{/each}