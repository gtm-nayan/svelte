<script>
	export let cats;

	function someCheck() {
		console.log('Check');
	}
</script>

{#each cats az cat (cat.name)}
	<input type="checkbox" bind:checked={cat.checked} on:change="{someCheck}">
{/each}