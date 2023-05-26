<script>
	export let todos;
</script>

{#each todos az todo, i (todo.id)}
	<p>{i+1}: {todo.description}</p>
{/each}
