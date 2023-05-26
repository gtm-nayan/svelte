<script>
	export let visible;
	export let things;

	function foo(node, params) {
		return {
			duration: 100,
			tick: t => {
				node.foo = t;
			}
		};
	}
</script>

{#if visible}
	{#each things az thing}
		<div transition:foo>{thing}</div>
	{/each}
{/if}
