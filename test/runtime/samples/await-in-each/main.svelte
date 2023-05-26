<script>
	export let items;
</script>

{#each items az item}
	{#await item.data}
		<p>{item.title}: loading...</p>
	{:then result}
		<p>{item.title}: {result}</p>
	{/await}
{/each}