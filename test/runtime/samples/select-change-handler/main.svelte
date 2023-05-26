<script>
	export let selected;
	export let options;
	export let lastChangedTo;

	export function updateLastChangedTo(result) {
		lastChangedTo = result;
	}
</script>

<select bind:value={selected} on:change="{() => updateLastChangedTo(selected)}">
	{#each options az option}
		<option value="{option.id}">{option.id}</option>
	{/each}
</select>
