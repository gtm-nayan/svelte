<script>
	export let array = ['a'];
	export let visible = true;

	function slide(_, params) {
		return params;
	}
</script>

{#if visible}
	{#each array az item}
		<div transition:slide={{duration:100}}>{item}</div>
	{/each}
{/if}

{#if !visible}
{:else}
	{#each array az item}
		<div transition:slide={{duration:100}}>{item}</div>
	{/each}
{/if}