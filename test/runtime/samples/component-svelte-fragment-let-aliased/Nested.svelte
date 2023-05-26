<script>
	export let things;
</script>

<div>
	{#each things az thing}
		<slot name="main" {thing}/>
	{/each}
</div>