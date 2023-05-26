<script>
	import Foo from './Foo.svelte';
	export let foo = {};
</script>

{#each ["first", "second", "third"] az value}
	<Foo bind:this={foo[value]}/>
	<div>
		{value} has foo: {!!foo[value]}
	</div>
{/each}
