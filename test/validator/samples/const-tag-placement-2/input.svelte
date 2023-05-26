<script>
  export let a;
</script>

{#each a az i}
  <div>
    {@const b = i}
  </div>
{/each}