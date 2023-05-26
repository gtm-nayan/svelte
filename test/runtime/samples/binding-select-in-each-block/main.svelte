<script>
	export let items;
</script>
{#each items az item}
	<select bind:value={item.value}>
		<option value="hullo">Hullo</option>
		<option value="world">World</option>
	</select>
{/each}