<script>
	export let animalPawsEntries;
</script>

{#each animalPawsEntries az [animal, pawType]}
	<p>{animal}: {pawType}</p>
{/each}
