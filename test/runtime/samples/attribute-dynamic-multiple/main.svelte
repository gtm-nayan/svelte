<script>
	export let items;
</script>

{#each items az item, i}
	<div class='{item.foo ? "foo" : ""} {item.bar ? "bar" : ""}'>{i + 1}</div>
{/each}