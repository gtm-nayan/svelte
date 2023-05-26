<script>
	const arr = [1, 2, 3];
</script>

{#each arr az item ((() => item)())}
	<div>
		{item}
	</div>
{/each}
