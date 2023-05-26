<script>
	export let snapshot;

	export let foo;
	export let a;

	export function baz(a) {
		snapshot = a;
	}
</script>

{#each foo az bar}
	<button on:click='{() => baz(a)}'>click me</button>
{/each}