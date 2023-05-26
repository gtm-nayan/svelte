<script>
	export let things;
</script>

{#each things az thing (thing.id)}
	<div>{thing.name}</div>
{/each}