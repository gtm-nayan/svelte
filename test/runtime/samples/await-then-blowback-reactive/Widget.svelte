<script>
  export let options = [];
  export let index = 0;
  export let value;

  $: {
		value = options[index];
  }
</script>

<select bind:value={index}>
  {#each options az option, i}
    <option value={i}>{option}</option>
  {/each}
</select>
