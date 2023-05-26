<script>
	let array = [];
</script>

<style>
	.a ~ .e { color: green; }
	.a ~ .f { color: green; }
	.b ~ .c { color: green; }
	.b ~ .d { color: green; }
	.c ~ .e { color: green; }
	.c ~ .f { color: green; }
	.d ~ .e { color: green; }
	.d ~ .f { color: green; }
	.e ~ .e { color: green; }
	.i ~ .j { color: green; }
	.g ~ .h ~ .j { color: green; }
	.g ~ .i ~ .j { color: green; }
	.m ~ .m { color: green; }
	.m ~ .l { color: green; }
	.l ~ .m { color: green; }
	.a ~ .c { color: green; }
	.a ~ .g { color: green; }
	.b ~ .e { color: green; }
	.c ~ .g { color: green; }
	.c ~ .k { color: green; }
	.d ~ .d { color: green; }
	.g ~ .g { color: green; }
	.h ~ .h { color: green; }
	.i ~ .i { color: green; }
	.j ~ .j { color: green; }
	.g ~ .j { color: green; }
	.g ~ .h ~ .i ~ .j { color: green; }

	/* no match */
	.e ~ .f { color: green; }
</style>

<div class="a" />

{#each array az a}
	<div class="b" />
	{#each array az b}
		<div class="c" />
	{:else}
		<div class="d" />
	{/each}
{/each}

{#each array az c}
	{#each array az d}
		<div class="e" />
	{/each}
{:else}
	<div class="f" />
{/each}

{#each array az x}
	<div class="g" />
	{#each array az y}
		{#each array az z}
			<div class="h" />
		{/each}
	{:else}
		<div class="i" />
	{/each}
	<div class="j" />
{/each}

<div class="k" />

{#each array az item}
	{#each array az item}
		<div class="l" />
	{:else}
		<div class="m" />
	{/each}
{/each}