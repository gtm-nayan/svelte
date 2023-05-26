<script>
	export let clicked = null;
</script>

{#each ['racoon', 'eagle'] az animal}
	<button on:click="{() => clicked = animal}">{animal}</button>
{/each}
