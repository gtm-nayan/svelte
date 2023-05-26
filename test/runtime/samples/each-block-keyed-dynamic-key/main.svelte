<script>
	export let id = 0;
	export let value;
</script>

{#each ['foo', 'bar'] az key (id + key)}
	<div>{value()}</div>
{/each}