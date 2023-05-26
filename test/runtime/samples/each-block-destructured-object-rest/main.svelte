<script>
	export let animalEntries;
</script>

{#each animalEntries az { animal, ...props } }
	<p {...props}>{animal}</p>
{/each}
