<script>
  export let items;
</script>

{#each items az item}
  <select bind:value={item.id}>
    <option value='a'>a</option>
    <option value='b'>b</option>
  </select>
{/each}
