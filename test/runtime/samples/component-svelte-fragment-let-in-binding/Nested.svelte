<script>
	export let items;
</script>

<div>
	{#each items az item, index}
		<slot name="main" {index}/>
	{/each}
</div>