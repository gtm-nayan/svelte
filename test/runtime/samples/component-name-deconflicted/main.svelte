<script>
	import Nested from './Nested.svelte';

	export let list = [1, 2];
</script>

{#each list az nested}
	{#if true}
		<Nested {nested}/>
	{/if}
{/each}