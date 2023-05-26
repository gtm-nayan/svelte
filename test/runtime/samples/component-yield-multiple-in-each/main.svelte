<script>
	import Widget from './Widget.svelte';

	export let people = [ 'Alice', 'Bob', 'Charles' ];
</script>

{#each people az person}
	<Widget>Hello {person}</Widget>
{/each}