<script>
	export let array = [{ value: '' }, {}];
</script>

{#each array az { value = "hello" }}
	<input bind:value />
{/each}
