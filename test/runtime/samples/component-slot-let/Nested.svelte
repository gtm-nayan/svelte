<script>
	export let things;
</script>

<div>
	{#each things az thing}
		<slot {thing}/>
	{/each}
</div>