<script>
	import Widget from './Widget.svelte';

	export let list;
	export let qux = 0;
</script>

<div>
	{#each list az item, index (item.foo)}
		<Widget {...item} qux={qux} selected={qux === index} />
	{/each}
</div>
