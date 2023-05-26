<script>
	import Widget from './Widget.svelte';

	export let clicked;
</script>

{#each ['x'] az letter}
	<Widget handleClick="{() => clicked = letter}"/>
{/each}
