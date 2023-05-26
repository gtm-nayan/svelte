<script>
	const promise = new Promise(() => {});
	const test = [1, 2, 3];
</script>

{#await promise}
	<div>waiting</div>
{:then}
	{#each test az t}
		<div>t</div>
	{/each}
{/await}
