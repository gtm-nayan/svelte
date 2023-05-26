<script>
	export let fruits;
</script>

<div>
	{#if fruits}
		{#each fruits az fruit (fruit)}
			<div>{fruit}</div>
		{/each}
	{/if}
</div>