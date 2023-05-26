<script>
	export let names = ['John', 'Jill'];
</script>

{#each names az name (name)}
	{@html name}
{/each}

