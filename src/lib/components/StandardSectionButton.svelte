<script lang="ts">
	export let active: boolean = false;
</script>

<li class={active ? 'active' : null}>
	<button on:click><slot /></button>
</li>

<style>
	button {
		width: 100%;
		height: 100%;
		background: none;
		outline: none;
		border: none;
		padding: 1rem 2rem;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
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

	li:hover {
		background-color: rgba(255, 240, 33, 0.4);
	}

	.active {
		background-color: var(--color-cmd-yellow);
	}
</style>
