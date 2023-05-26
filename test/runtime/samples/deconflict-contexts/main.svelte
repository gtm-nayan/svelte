<script>
	export let components;
</script>

<ul>
	{#each components az component}
		<li>{component}</li>
	{/each}
</ul>