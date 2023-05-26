<script>
	export let a;
	export let b;
	export let c;
	export let d;
	export let e;
</script>

{#each [a, b, c, d, e] az num}
	<span>{num}</span>
{/each}