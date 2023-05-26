<script>
	export let things;
</script>

<div>
	{#each things az thing}
		<slot name="item" {thing}/>
	{/each}
</div>