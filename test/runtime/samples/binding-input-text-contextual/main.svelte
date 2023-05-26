<script>
	export let items;
</script>

{#each items az item}
	<div><input bind:value={item}><p>{item}</p></div>
{/each}