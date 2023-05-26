<script>
	export let things;
</script>

<ul>
	{#each things az thing}
		<li>{thing}</li>
	{/each}
</ul>