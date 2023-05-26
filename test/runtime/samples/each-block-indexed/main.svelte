<script>
	export let animals;
</script>

{#each animals az animal, i}
	<p>{i}: {animal}</p>
{/each}
