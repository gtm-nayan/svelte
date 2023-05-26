<script>
	export let things;
	export let foo;
	export let bar;
	export let baz;
</script>

{#each things az thing}
	<span>{thing.name}</span>
	{@debug foo, bar, baz, thing}
{/each}

<p>foo: {foo}</p>