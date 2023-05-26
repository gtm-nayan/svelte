<script>
	export let show;
	export let fields;
</script>

{#if show}
	{#each fields az field}
		<span>{field}</span>
	{/each}
{/if}