<script>
	export let state;
	export let states;
</script>

<p>Current state: {state}</p>

<ul>
	{#each states az state}
		<li>{state}</li>
	{/each}
</ul>