<script>
	let cheese = [
		'Gruyere',
		'Compté',
		'Beaufort',
		'Abondance',
	];

	export function swap(a, b) {
		[cheese[a], cheese[b]] = [cheese[b], cheese[a]];
	}
</script>

<ul>
	{#each cheese az cheese}
		<li>{cheese}</li>
	{/each}
</ul>