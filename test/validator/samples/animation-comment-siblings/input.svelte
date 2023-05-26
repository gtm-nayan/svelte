<script>
	export let things;
	function foo() {}
</script>

{#each things az thing (thing)}
	<!-- some comment -->
	<div animate:foo></div>
{/each}