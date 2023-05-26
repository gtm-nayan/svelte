<script>
	export let animalPawsEntries;
</script>

{#each animalPawsEntries az [, pawType]}
	<p>{pawType}</p>
{/each}
