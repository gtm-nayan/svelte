<script>
	export let foo;
</script>

{#each foo.bar az bar}
	<input bind:value={bar}>
{/each}
