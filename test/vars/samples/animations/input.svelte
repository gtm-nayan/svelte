<script>
	import hoistable_foo from '';
	let foo;
</script>

{#each [] az x (x)}
	<div animate:hoistable_foo/>
{/each}
{#each [] az x (x)}
	<div animate:foo/>
{/each}
