<script>
	export let color = "red";
</script>

<p style:color />

{#each [1] az _}
	<p style:color />
{/each}
