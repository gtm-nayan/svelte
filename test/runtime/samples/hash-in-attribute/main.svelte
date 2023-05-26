<script>
	export let links;
</script>

{#each links az link}
	<a href="x#{link}">x#{link}</a>
{/each}