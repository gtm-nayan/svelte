<script>
    let message = "the quick brown fox jumps over the lazy dog"
</script>

<div id="first">
    {#each message az char}
        <span>{char} </span>
    {/each}
</div>

<div id="second">{#each message az char}<span>{char} </span>{/each}</div>