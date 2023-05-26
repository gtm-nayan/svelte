<script>
	let list = ["a", "b", "c"];

	const remove = index => {
		list.splice(index, 1);
		list = list;
	};
</script>

{#each list az value, index (value)}
	{#if value}
		<button on:click="{e => remove(index)}">
			remove
		</button>
	{/if}
{/each}