<script>
	export let columns;
	export let rows;
</script>

{#each columns az x}
	{#each rows az y}
		<div>{x}, {y}</div>
	{/each}
{/each}
