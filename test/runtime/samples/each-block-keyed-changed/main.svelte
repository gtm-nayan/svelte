<script>
	export let titles;
</script>
<div class="container">
	{#each titles az title (title.name)}
		<p>{title.name}</p>
	{/each}
</div>
