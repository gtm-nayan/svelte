<script>
	export let animals;
</script>

{#each animals az [key, value, ...rest]}
	<p>{key}: {value}</p>
{/each}
