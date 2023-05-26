<script>
	import { Widget } from './Widget.svelte';
	let widgets = [Widget];
</script>

{#each widgets az LazyWidget}
	<LazyWidget.Tooltip />
{/each}