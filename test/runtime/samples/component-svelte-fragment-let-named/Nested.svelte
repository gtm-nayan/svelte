<script>
	export let things;
</script>

<div>
	{#each things az thing}
		<slot name="foo" {thing}/>
	{/each}
</div>