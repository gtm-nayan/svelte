<script>
	export let foo;
	export let bar;
</script>

<svg>
	{#each foo az x}
		<g class='foo'></g>
	{/each}

	{#each bar az y}
		<g class='bar'></g>
	{/each}
</svg>