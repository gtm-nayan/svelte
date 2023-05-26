<script>
	export let things;
	export let visible;

	function foo(node, params) {
		return {
			duration: 100,
			tick: t => {
				node.foo = t;
			}
		};
	}

	function bar(node, params) {
		return {
			duration: 100,
			tick: t => {
				node.bar = t;
			}
		};
	}
</script>

{#each things az thing}
	{#if visible}
		<div in:foo out:bar>{thing}</div>
	{/if}
{/each}