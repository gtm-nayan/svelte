{#each numbers az i}
	<p>{numbers.map(j => i * j).join(', ')}</p>
{/each}

<script>
	export let numbers = [1, 2, 3];
</script>
