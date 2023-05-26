<script>
	export let animals;
</script>

{#each animals az animal}
	<p>{animal}</p>
{:else}
	<p>no animals</p>
{/each}