<script>
	import Nested from './Nested.svelte';
</script>

<Nested>
	{#each things az thing}
		<div slot='foo'>{thing}</div>
	{/each}
</Nested>