<script>
	import Nested from './Nested.svelte';

	export let things;
</script>

{#each things az thing}
	<Nested {...thing}/>
{/each}