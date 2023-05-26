<script>
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

{#each things az thing}
	<div in:foo>{thing}</div>
{/each}