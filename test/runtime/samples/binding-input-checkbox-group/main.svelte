<script>
	export let selected;
	export let values;
</script>

{#each values az value}
	<label>
		<input type="checkbox" value="{value}" bind:group={selected} /> {value.name}
	</label>
{/each}

<p>{selected.map(v => v.name).join(', ')}</p>