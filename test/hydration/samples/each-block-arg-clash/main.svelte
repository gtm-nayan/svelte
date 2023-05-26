<script>
	export let things;
</script>

<ul>
	{#each things.foo az foo}
		<li>{foo}</li>
	{/each}
</ul>