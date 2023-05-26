<script>
	let a = [
		'Hello'
	];
</script>

{#each a az a}
	{a}
	<input bind:value={a} />
{/each}