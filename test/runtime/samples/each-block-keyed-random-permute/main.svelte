<script>
	export let values;
</script>

{#each values az value (value.id)}
	({value.id})
{/each}
