<script>
	export let animalEntries;
</script>

{#each animalEntries az { animal, features: { ...rest, eyes } } }
	<p {...rest}>{animal} {eyes}</p>
{/each}
