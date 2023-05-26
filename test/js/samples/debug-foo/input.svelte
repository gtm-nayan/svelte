<script>
	export let things;
	export let foo;
</script>

{#each things az thing}
	<span>{thing.name}</span>
	{@debug foo}
{/each}

<p>foo: {foo}</p>