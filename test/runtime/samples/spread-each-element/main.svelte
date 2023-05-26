<script>
	export let things;
</script>

{#each things az thing}
	<div {...thing}></div>
{/each}