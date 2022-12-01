<script lang="ts">
	export let active: boolean = false;
</script>

<li class={active ? 'active' : null}>
	<button type='button' on:click><slot /></button>
</li>

<style>
	button {
		background: none;
		outline: none;
		border: none;
		padding: 1rem;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
	}

	button:focus {
		border: 2px solid #000;
	}

	li:last-of-type {
		border-bottom: 1px solid grey;
	}

	li {
		border-top: 1px solid grey;
		border-right: 1px solid grey;
		border-left: 1px solid grey;
		transition: 200ms;
	}
	.active {
		background-color: var(--color-cmd-yellow);
	}

	@media (min-width: 70rem) {
		button {
			padding: 1rem 2rem;
		}
	}
</style>
