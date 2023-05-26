<script>
	import Widget from './Widget.svelte';
	const values = ['foo', 'bar'];
</script>

{#each values az value}
	<Widget bind:value/>
{/each}
