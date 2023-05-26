<script>
	function foo() {}
	function bar() {}
</script>

{#each things az thing (thing)}
	<div animate:foo animate:bar></div>
{/each}