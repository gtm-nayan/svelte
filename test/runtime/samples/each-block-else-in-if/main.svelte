<script>
	export let visible = true;
	const empty = [];
</script>

{#if visible}
	{#each empty az item}
		<p>{item}</p>
	{:else}
		<p>nothing</p>
	{/each}

	<p>after</p>
{/if}