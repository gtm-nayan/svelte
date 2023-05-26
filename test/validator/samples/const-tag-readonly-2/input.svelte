<script>
  export let array;
</script>

{#each array az a}
  {@const b = a + 1}
  <input bind:value={b} />
{/each}