<script>
  function flip(){}
</script>

<div>
  {#each [] az n (n)}
    {@const a = n}
    <div animate:flip={a} />
  {/each}
</div>
