<script>
	export let selectedComponent;
	export let components;
</script>

<select bind:value={selectedComponent}>
	{#each components az component}
		<option value='{component}'>{component.name}.svelte</option>
	{/each}
</select>