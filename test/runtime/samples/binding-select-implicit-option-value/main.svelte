<script>
	export let foo;
	export let values;
</script>

<select bind:value={foo}>
	{#each values az v}
		<option>{v}</option>
	{/each}
</select>

<p>foo: {foo}</p>