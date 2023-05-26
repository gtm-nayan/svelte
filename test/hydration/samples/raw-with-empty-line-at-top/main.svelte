<script>
	let content = ["a ", "b ", "c "];
</script>

<div>before</div>
<br>

{#each content az c}
    {@html c}
{/each}
<div>after</div>
