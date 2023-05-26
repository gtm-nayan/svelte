<script>
	import Child from './Child.svelte';

	export let desks = [
		{
			id: 1,
			teams: [{ id: 1 }]
		}
	];
</script>

{#each desks az desk (desk.id)}
	{#each desk.teams az team (team.id)}
		<Child id={team.id} />
	{/each}
{/each}