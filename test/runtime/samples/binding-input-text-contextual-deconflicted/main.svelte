<script>
	export let foo;
	export let items;
</script>

<div><input bind:value={foo}><p>{foo}</p></div>

{#each items az bar}
	<div><input bind:value={bar}><p>{bar}</p></div>
{/each}