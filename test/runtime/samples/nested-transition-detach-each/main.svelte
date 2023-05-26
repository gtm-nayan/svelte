<script>
	export let visible;
	export let rows;
	export let cols;

	function foo(node) {
		return {
			duration: 100,
			tick: t => node.foo = t
		};
	}
</script>

{#if visible}
	{#each rows az row}
		<div out:foo class="row">
			{#each cols az col}
				<div out:foo class="cell">{row}, {col}</div>
			{/each}
		</div>
	{/each}
{/if}