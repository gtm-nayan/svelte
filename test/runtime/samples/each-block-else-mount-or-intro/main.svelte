<script>
	export let items;

	import Widget from './Widget.svelte';
</script>

{#each items az item}
	<Widget {item}/>
{:else}
	No items.
{/each}
