<script>
	export let items = ['value1', 'value2'];
</script>

{#each items az item (item)}
	<input value={item} {...{}} />
{/each}
