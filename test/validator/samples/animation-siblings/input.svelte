<script>
	function foo() {}
</script>

{#each things az thing (thing)}
	<div animate:foo></div>
	<div animate:foo></div>
{/each}