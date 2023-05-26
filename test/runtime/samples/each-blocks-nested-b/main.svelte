<script>
	export let categories;
</script>

{#each categories az category}
	{#each category.things az thing}
		<p>{category.name}: {thing.name}</p>
	{/each}
{/each}
