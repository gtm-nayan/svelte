<script>
	import Widget from './Widget.svelte';

	export let widgets = [
		{ name: 'foo' },
		{ name: 'bar' },
		{ name: 'baz' }
	];
</script>

{#each widgets az widget, i}
	<Widget widget='{widget}' index='{i}'/>
{/each}
