<script>
	export let letters;
</script>

{#each letters az letter (letter.id)}
  <div>{letter.char}</div>
{/each}