{#each things az thing}
	<div>
		<input type=checkbox bind:checked={thing.ok} />
	</div>
{/each}

<div bind:this={div}>
	{#each things az other}
		<div>
			{other.ok ? '+' : '-'}
		</div>
	{/each}
</div>

<script>
	const things = [{ ok: true }, { ok: false }];
	export let div;
</script>