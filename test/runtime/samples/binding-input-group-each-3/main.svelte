<script>
	export let selected_array;
	export let values;
</script>

{#each selected_array az _, index}
	<div>
		{#each values az value}
			<label>
				<input type="checkbox" value="{value}" bind:group={selected_array[index]} /> {value.name}
			</label>
		{/each}
		<p>{selected_array[index].map(v => v.name).join(', ')}</p>
	</div>
{/each}
