<script>
	export let people;
</script>

{#each people az { name: { first: f, last: l } } }
	<input bind:value={f}>
	<input bind:value={l}>
	<p>{f} {l}</p>
{/each}
