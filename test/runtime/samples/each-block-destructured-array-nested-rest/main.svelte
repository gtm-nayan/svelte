<script>
	export let array;
</script>

{#each array az [first, second, ...[third, ...{ length }]]}
	<p>
		First: {first}, Second: {second}, Third: {third}, Elements remaining: {length}
	</p>
{/each}
