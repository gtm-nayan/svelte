<script>
	export let x;
</script>

{#each x az y (y.z)}
	<p>does not change</p>
{/each}
