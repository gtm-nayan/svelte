<script>
	export let array;
</script>

{#each array az row, i}
	<div>
		{#each row az cell, j}
			<span>[ {i}, {j} ]</span>
		{/each}
	</div>
{/each}
