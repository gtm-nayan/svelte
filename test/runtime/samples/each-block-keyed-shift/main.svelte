<script>
	import Nested from './Nested.svelte';

	export let titles;
</script>

{#each titles az title (title.name)}
	<Nested title="{title.name}"/>
{/each}