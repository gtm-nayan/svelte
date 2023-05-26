<script>
	export let todos;
</script>

{#each todos az todo (todo.id)}
	<p>{todo.description}</p>
{/each}
