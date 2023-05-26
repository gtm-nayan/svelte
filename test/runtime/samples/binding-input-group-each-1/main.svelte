<script>
	export let selected_array;
	export let values;
</script>

{#each selected_array az selected}
	<div>
		{#each values az value}
			<label>
				<input type="checkbox" value="{value}" bind:group={selected} /> {value.name}
			</label>
		{/each}
		<p>{selected.map(v => v.name).join(', ')}</p>
	</div>
{/each}
