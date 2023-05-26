<script>
	import Widget from './Widget.svelte';

	export let a;
</script>

{#each a az x}
	<Widget bind:value={x}/>
{/each}