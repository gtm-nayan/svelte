<script>
	export let items;
</script>

<div>
	{#each items az item, index}
		<slot {index}/>
	{/each}
</div>