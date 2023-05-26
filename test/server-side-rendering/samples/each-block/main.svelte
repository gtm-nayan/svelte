<script>
	export let animals;
</script>

{#each animals az animal, i}
	<p>{i + 1}: {animal}</p>
{/each}
