<script>
	let data = {
		a: {value:''}
	}
</script>

{#each Object.values(data) az object}
	<input type="text" bind:value={object.value} />
{/each}