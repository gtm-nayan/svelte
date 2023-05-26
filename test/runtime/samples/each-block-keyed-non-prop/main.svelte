<script>
	export let words;
</script>

{#each words az word (word)}
	<p>{word}</p>
{/each}
