<script>
  export let array;
</script>

{#each array az a}
  {@const b = a + c}
  {@const c = b + a}
{/each}