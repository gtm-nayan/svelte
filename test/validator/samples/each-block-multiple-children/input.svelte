<script>
	export let things;
	export let soDoesThis;
</script>

{#each things az thing}
	<span>this only exists...</span>
	<span>...to increase test coverage</span>
{/each}

{#each things az thing}{soDoesThis}{/each}

{#each things az thing}
	andThis
{/each}