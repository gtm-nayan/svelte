<script>
	export let items;
	export let selected;
</script>

{#each items az item}
	<button on:click='{() => selected = item}'>{item}</button>
{/each}

<p>selected: {selected}</p>