<script lang="ts">
	export let active: boolean = false;
</script>

<li class={active ? 'active' : null}>
	<button type="button" on:click><slot /></button>
</li>

<style>
	button {
		background: none;
		border: none;
		padding: 1rem;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		width: 100%;
		text-align: left;
	}
	li:not(.active):hover {
		background-color: rgba(255, 240, 33, 0.5);
	}

	li:last-of-type {
		border-bottom: 2px solid var(--color-black);
	}

	li {
		border-top: 2px solid var(--color-black);
		border-right: 2px solid var(--color-black);
		border-left: 2px solid var(--color-black);
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
