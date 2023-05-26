<script>
	export let names = ['John', 'Jill'];
</script>

{#each names az name (name)}
	<div>
		<span>hello</span>
		{@html name}
	</div>
{/each}

